const handler = async (m, { conn, args, participants }) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => ({
    ...value,
    jid: key
  }))

  const sortBy = (prop) => users
    .map(u => ({ ...u, [prop]: u[prop] || 0 }))
    .sort((a, b) => b[prop] - a[prop])
    .map(u => u.jid)

  const topMC = sortBy('limit')
  const topXP = sortBy('exp')
  const len = args[0] && !isNaN(args[0]) ? Math.min(10, Math.max(5, parseInt(args[0]))) : 5

  const getList = async (list, prop, symbol) => {
    return await Promise.all(
      list.slice(0, len).map(async (jid, i) => {
        let name = participants.some(p => p.jid === jid)
          ? await conn.getName(jid)
          : `@${jid.split('@')[0]}`
        let val = global.db.data.users[jid]?.[prop] || 0
        return `*${i + 1}.* ${name} → *${val} ${symbol}*`
      })
    )
  }

  const listMC = await getList(topMC, 'limit', '🌕')
  const listXP = await getList(topXP, 'exp', '💫')

  const text = `
╭───────〔 🏆 CLASSIFICA 〕───────
│
│ 🌕 *Top ${len} MoonCredits*
│   Posizione tua: *${topMC.indexOf(m.sender) + 1}* su *${topMC.length}*
${listMC.map(l => '│   ' + l).join('\n')}
│
│ 💫 *Top ${len} XP*
│   Posizione tua: *${topXP.indexOf(m.sender) + 1}* su *${topXP.length}*
${listXP.map(l => '│   ' + l).join('\n')}
│
╰────────────────────────────
`.trim()

  // Thumbnail embed
  const thumbUrl = 'https://i.ibb.co/4RSNsdx9/Sponge-Bob-friendship-wallet-meme-9.png'
  const thumb = await (await fetch(thumbUrl)).buffer().catch(() => null)

  const locationFake = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'leaderboard-fake'
    },
    message: {
      locationMessage: {
        name: '📊 MoonBoard',
        jpegThumbnail: thumb
      }
    },
    participant: '0@s.whatsapp.net'
  }

  await conn.sendMessage(m.chat, {
    text,
    mentions: [...topMC.slice(0, len), ...topXP.slice(0, len)]
  }, { quoted: locationFake })
}

handler.help = ['classifica']
handler.tags = ['rpg']
handler.command = ['classifica', 'lb', 'leaderboard']
handler.register = true

export default handler