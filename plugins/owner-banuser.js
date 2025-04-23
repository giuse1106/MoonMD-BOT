import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  if (!m.mentionedJid[0] && !m.quoted) return m.reply("❗️Tagga o rispondi ad un utente da bloccare.");

  let userToBan = m.isGroup
    ? m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted?.sender
    : m.chat;

  if (!global.db.data.users[userToBan]) global.db.data.users[userToBan] = {};
  global.db.data.users[userToBan].banned = true;

  // Messaggio intermedio di blocco in corso
  await conn.sendMessage(m.chat, {
    text: "🚫 𝐁𝐥𝐨𝐜𝐜𝐨 𝐢𝐧 𝐜𝐨𝐫𝐬𝐨...",
    contextInfo: {
      mentionedJid: [userToBan],
      externalAdReply: {
        title: '𝐁𝐚𝐧 𝐔𝐭𝐞𝐧𝐭𝐞',
        body: 'MoonMD Security System',
        thumbnail: await fetchImage("https://telegra.ph/file/710185c7e0247662d8ca6.png"),
        mediaType: 1,
        renderLargerThumbnail: false,
        sourceUrl: 'https://github.com/Giuse1106/MoonMD-BOT'
      }
    }
  }, { quoted: m });

  // Conferma blocco
  const fakeLocation = {
    key: { participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "block-notif" },
    message: {
      locationMessage: {
        name: "Utente bloccato",
        jpegThumbnail: await fetchImage("https://telegra.ph/file/710185c7e0247662d8ca6.png"),
      }
    },
    participant: "0@s.whatsapp.net"
  };

  await conn.sendMessage(m.chat, {
    text: `🚫 𝐋\'𝐮𝐭𝐞𝐧𝐭𝐞 𝐞̀𝐬𝐭𝐚𝐭𝐨 𝐛𝐚𝐧𝐧𝐚𝐭𝐨 𝐝𝐚𝐥 𝐛𝐨𝐭 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨!`,
  }, { quoted: fakeLocation });
};

async function fetchImage(url) {
  let res = await fetch(url);
  let buffer = await res.arrayBuffer();
  return Buffer.from(buffer);
}

handler.command = /^banuser$/i;
handler.rowner = true;

export default handler;