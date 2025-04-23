const cooldowns = {}

const formatNumber = (num) => new Intl.NumberFormat('it-IT').format(num)

const formattaTempo = (secondi) => {
  const min = Math.floor(secondi / 60)
  const sec = Math.floor(secondi % 60)
  return `${min} minuti e ${sec} secondi`
}

const handler = async (m, { conn, text, command, usedPrefix }) => {
  const users = global.db.data.users
  const senderId = m.sender
  const senderName = await conn.getName(senderId)

  const cooldownTime = 5 * 60 * 1000
  const lastCrime = cooldowns[senderId] || 0
  const now = Date.now()

  if (now - lastCrime < cooldownTime) {
    const tempoRimanente = formattaTempo(Math.ceil((cooldownTime - (now - lastCrime)) / 1000))
    return m.reply(`🚨 Hai già commesso un crimine! Riprova tra *⏱ ${tempoRimanente}* o rischi di essere catturato.`)
  }

  cooldowns[senderId] = now

  const others = Object.keys(users).filter(id => id !== senderId)
  const targetId = m.mentionedJid?.[0] || others[Math.floor(Math.random() * others.length)]
  const targetName = await conn.getName(targetId)

  const min = 50, max = 100
  const quantita = Math.floor(Math.random() * (max - min + 1)) + min
  const outcome = Math.floor(Math.random() * 3)

  const thumbUrl = 'https://i.ibb.co/4RSNsdx9/Sponge-Bob-friendship-wallet-meme-9.png'
  const thumb = await (await fetch(thumbUrl)).buffer().catch(() => null)

  const locationFake = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'crime-fake',
    },
    message: {
      locationMessage: {
        name: "🚨 Crimine Notturno",
        jpegThumbnail: thumb,
      },
    },
    participant: '0@s.whatsapp.net',
  }

  switch (outcome) {
    case 0: { // Successo completo
      users[senderId].limit += quantita
      users[targetId].limit -= quantita
      await conn.sendMessage(m.chat, {
        text: `
╭───「 🕵️‍♂️ COLPO RIUSCITO 」───
│
│ 🔫 Hai derubato @${targetId.split("@")[0]}
│ 💰 Guadagno: *+${formatNumber(quantita)} MoonCredit*
│
╰──────────────────────────
        `.trim(),
        mentions: [targetId]
      }, { quoted: locationFake })
      break
    }

    case 1: { // Catturato
      const multa = Math.min(Math.floor(Math.random() * (users[senderId].limit - min + 1)) + min, max)
      users[senderId].limit -= multa
      await conn.sendMessage(m.chat, {
        text: `
╭───「 🚓 SEI STATO PRESO 」───
│
│ 👮‍♂️ Gli sbirri ti hanno beccato!
│ 💸 Multa: *-${formatNumber(multa)} MoonCredit*
│
╰─────────────────────────
        `.trim()
      }, { quoted: locationFake })
      break
    }

    case 2: { // Successo parziale
      const parziale = Math.min(Math.floor(Math.random() * ((users[targetId].limit / 2) - min + 1)) + min, max)
      users[senderId].limit += parziale
      users[targetId].limit -= parziale
      await conn.sendMessage(m.chat, {
        text: `
╭───「 🕵️ COLPO A METÀ 」───
│
│ 💼 Hai rubato *${formatNumber(parziale)} MoonCredit* da @${targetId.split("@")[0]}
│ ✨ Non era molto... ma meglio di niente.
│
╰───────────────────────
        `.trim(),
        mentions: [targetId]
      }, { quoted: locationFake })
      break
    }
  }

  global.db.write()
  await m.react('🕵️‍♂️')
}

handler.help = ['crimine']
handler.tags = ['rpg']
handler.command = ['ruba', 'rapina']
handler.register = true
handler.group = true

export default handler