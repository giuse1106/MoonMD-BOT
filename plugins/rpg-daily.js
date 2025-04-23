const gratuito = 500
const premium = 1000
const cooldowns = {}

const formatNumber = (n) => new Intl.NumberFormat('it-IT').format(n)

const formattaTempo = (secondi) => {
  const ore = Math.floor(secondi / 3600)
  const minuti = Math.floor((secondi % 3600) / 60)
  const secondiRimanenti = secondi % 60
  return `${ore}h ${minuti}m ${secondiRimanenti}s`
}

const handler = async (m, { conn, isPrems }) => {
  const user = global.db.data.users[m.sender]
  const cooldown = 24 * 60 * 60 * 1000 // 24h in ms
  const now = Date.now()

  const thumbUrl = 'https://i.ibb.co/4RSNsdx9/Sponge-Bob-friendship-wallet-meme-9.png'
  const thumb = await (await fetch(thumbUrl)).buffer().catch(() => null)

  const locationFake = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'daily-fake',
    },
    message: {
      locationMessage: {
        name: "🎁 Daily Bonus",
        jpegThumbnail: thumb,
      },
    },
    participant: '0@s.whatsapp.net',
  }

  if (cooldowns[m.sender] && now - cooldowns[m.sender] < cooldown) {
    const rimanente = formattaTempo(Math.ceil((cooldowns[m.sender] + cooldown - now) / 1000))
    return conn.sendMessage(m.chat, {
      text: `
╭─「 ⏳ BONUS GIÀ RISCATTATO 」─
│
│ Hai già ritirato il bonus giornaliero.
│ 💰 *Prossimo bonus:* +${isPrems ? premium : gratuito} MoonCredit
│ ⏱ *Tempo rimanente:* ${rimanente}
│
╰─────────────────────────
      `.trim()
    }, { quoted: locationFake })
  }

  const guadagno = isPrems ? premium : gratuito
  user.limit += guadagno
  cooldowns[m.sender] = now
  global.db.write()

  await conn.sendMessage(m.chat, {
    text: `
╭───「 🎉 BONUS GIORNALIERO 」───
│
│ 👤 Utente: ${await conn.getName(m.sender)}
│ 💸 Guadagno: +${formatNumber(guadagno)} MoonCredits
│ 💰 Totale: ${formatNumber(user.limit)} MoonCredits
│
╰───────────────────────────
    `.trim()
  }, { quoted: locationFake })

  await m.react('🎁')
}

handler.help = ['daily']
handler.tags = ['rpg']
handler.command = ['daily', 'unitycoins', 'claim']
handler.register = true

export default handler