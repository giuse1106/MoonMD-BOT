import util from 'util'
import path from 'path'

let user = (a) => '@' + a.split('@')[0]

function getRandomParticipants(participants, count = 10) {
    let selected = []
    let ps = [...participants]

    if (ps.length < count) count = ps.length 

    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * ps.length)
        selected.push(ps.splice(randomIndex, 1)[0])
    }
    return selected
}

function handler(m, { groupMetadata, command, conn }) {
    let participants = groupMetadata.participants.map(v => v.id)
    if (participants.length === 0) return m.reply('*Nessun partecipante trovato!*')

    let selected = getRandomParticipants(participants)

    let titles = {
        'gays': '𝑻𝑶𝑷 𝟏𝟎 𝑳𝑮𝑩𝑻 🌈',
        'nazi': '𝑻𝑶𝑷 𝟏𝟎 𝑵𝑨𝒁𝑰 ⚡',
        'troie': '𝑻𝑶𝑷 𝟏𝟎 𝑻𝑹𝑶𝑰𝑬 🔥'
    }

    if (!titles[command]) return

    let message = `*${titles[command]}*\n\n` + 
        selected.map((p, i) => `*𝐍°${i + 1} ➤ ${user(p)}*`).join('\n')

    m.reply(message, null, { mentions: selected })
    conn.sendMessage(m.chat, { quoted: m })
}

handler.help = handler.command = ['gays', 'nazi', 'troie']
handler.tags = ['games']
handler.group = true

export default handler