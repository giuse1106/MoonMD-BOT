const formatNumber = (n) => new Intl.NumberFormat('it-IT').format(n)

const handler = async (m, { args }) => {
  const user = global.db.data.users[m.sender]
  const input = args[0]

  if (!input) return m.reply('🚩 Inserisci la quantità di *🌕 MoonCredits* da depositare.\nEsempio: `deposit 250` o `deposit all`')

  const portafoglio = user.limit || 0
  const banca = user.bank || 0

  if (input === 'all') {
    if (portafoglio <= 0) return m.reply('🚩 Non hai *🌕 MoonCredits* da depositare.')
    user.bank = banca + portafoglio
    user.limit = 0
    return m.reply(`🏦 Hai depositato *${formatNumber(portafoglio)} 🌕 MoonCredits* nella banca.`)
  }

  const quantita = parseInt(input)
  if (isNaN(quantita) || quantita < 1) {
    return m.reply('🚩 Inserisci una quantità valida di *🌕 MoonCredits* da depositare.')
  }

  if (portafoglio < quantita) {
    return m.reply(`🚩 Hai solo *${formatNumber(portafoglio)} 🌕 MoonCredits* nel portafoglio.`)
  }

  user.limit = portafoglio - quantita
  user.bank = banca + quantita

  return m.reply(`🏦 Hai depositato *${formatNumber(quantita)} 🌕 MoonCredits* nella banca.`)
}

handler.help = ['deposit', 'deposita']
handler.tags = ['rpg']
handler.command = ['deposit', 'deposita', 'dep', 'd']
handler.register = true

export default handler