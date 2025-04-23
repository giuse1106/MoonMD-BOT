import { performance } from 'perf_hooks';

const handler = async (message, { conn, usedPrefix }) => {
const userCount = Object.keys(global.db.data.users).length;
const botName = global.db.data.nomedelbot || '𝐌𝐚𝐥𝐢𝐤²²²';

const menuText = generateMenuText(usedPrefix, botName, userCount);  

const messageOptions = {  
    contextInfo: {  
        forwardingScore: 1,  
        isForwarded: true,  
        forwardedNewsletterMessageInfo: {  
            newsletterJid: '120363378147644537@newsletter',  
            serverMessageId: '',  
            newsletterName: `${botName}`  
        },  
        externalAdReply: {  
            title: 'ᴍᴇɴᴜ ᴘʀɪɴᴄɪᴘᴀʟᴇ',  
            body: `𝐕𝐞𝐫𝐬𝐢𝐨𝐧: ${vs}`,  
            mediaType: 1,  
            renderLargerThumbnail: false,  
            previewType: 'thumbnail',  
            thumbnail: await fetchThumbnail('https://i.ibb.co/SDJFnJjV/IMG-20250401-195807.jpg'),  
        }  
    }  
};  

await conn.sendMessage(message.chat, { text: menuText, ...messageOptions }, { quoted: message });
await conn.sendPresenceUpdate('composing', message.chat);
};

// Funzione per ottenere l'anteprima dell'immagine
async function fetchThumbnail(url) {
try {
const response = await fetch(url);
const arrayBuffer = await response.arrayBuffer();
return new Uint8Array(arrayBuffer);
} catch (error) {
return 'default-thumbnail'; // Thumbnail di fallback in caso di errore
}
}

// Genera il testo del menu con decorazioni
function generateMenuText(prefix, botName, userCount) {
return `╔ ✦ ✧ ✦ ════════╗
『💬』 ✨ ${botName} ✨ 『💬』
╚═══════ ✦ ✧ ✦ ═╝

👑 ${prefix}𝐏𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨
🛡 ${prefix}𝐀𝐝𝐦𝐢𝐧
⚙ ${prefix}𝐅𝐮𝐧𝐳𝐢𝐨𝐧𝐢
👥 ${prefix}𝐆𝐫𝐮𝐩𝐩𝐨
📥 ${prefix}𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚
🚀 ${prefix}𝐏𝐢𝐧𝐠

—————————————————

👥 𝐔𝐭𝐞𝐧𝐭𝐢: ${userCount}
👤 𝐍𝐨𝐦𝐞: ${botName}
🔥 𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞: *${vs}*

—————————————————`;
}



// Comandi per attivare il menu
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

