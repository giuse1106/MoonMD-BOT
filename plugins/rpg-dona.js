import MessageType from '@whiskeysockets/baileys'

let tassa = 0.02 // 2% di tassa sulle transazioni

let handler = async (m, { conn, text }) => {
  let who
  // Determina l'utente da menzionare in base se il messaggio è in gruppo o privato
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat

  if (!who) throw '🚩 Devi menzionare un utente con *@user*'

  // Rimuove il nome utente dalla quantità di MoonCredits da trasferire
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '🚩 Inserisci la quantità di *🌕 MoonCredits* da trasferire'
  if (isNaN(txt)) throw '🚩 Solo numeri sono accettati'

  let moonCredits = parseInt(txt)
  let tassaImporto = Math.ceil(moonCredits * tassa)
  let costo = moonCredits + tassaImporto

  if (costo < 1) throw '🚩 Il minimo trasferibile è *1 🌕 MoonCredit*'

  let users = global.db.data.users
  if (costo > users[m.sender].limit) throw '🚩 Non hai abbastanza *🌕 MoonCredits* per questo trasferimento'

  // Esegui la transazione
  users[m.sender].limit -= costo
  users[who].limit += moonCredits

  await m.reply(`*-${moonCredits}* 🌕 MoonCredits 
Tassa 2% : *-${tassaImporto}* 🌕 MoonCredits
Totale addebitato: *-${costo}* 🌕 MoonCredits`)

  // Notifica il destinatario
  conn.fakeReply(m.chat, `*+${moonCredits}* 🌕 MoonCredits ricevuti!`, who, m.text)
}

handler.help = ['daiMoonCredits *@user <quantità>*']
handler.tags = ['rpg']
handler.command = ['daiMoonCredits', 'bonifico', 'trasferisci', 'dona']
handler.register = true

export default handler