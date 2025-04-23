import '@whiskeysockets/baileys';

// 🌐 Inizializza AFK globale
global.afkUsers = global.afkUsers || new Map();

let handler = async (m, { conn, text }) => {
    let userId = m.sender;
    let userName = conn.getName(userId);
    let reason = text.trim() || "𝐍𝐞𝐬𝐬𝐮𝐧𝐚 𝐦𝐨𝐭𝐢𝐯𝐚𝐳𝐢𝐨𝐧𝐞 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐭𝐚";
    let timestamp = Date.now();

    // ✅ Salva lo stato AFK
    global.afkUsers.set(userId, { reason, timestamp });

    let afkMessage = `
╭━━〔 *🌙 𝐌𝐨𝐝𝐚𝐥𝐢𝐭𝐚̀ 𝐀𝐅𝐊 𝐀𝐭𝐭𝐢𝐯𝐚* 〕━━╮
┃ 💤 *${userName}* 𝐞̀ 𝐨𝐫𝐚 𝐀𝐅𝐊!  
┃ 📝 *𝐌𝐨𝐭𝐢𝐯𝐨:* ${reason}  
┃ ⏳ *𝐃𝐚𝐭𝐨:* ${new Date().toLocaleString()}  
╰━━━━━━━━━━━━━━━━━━╯
    `.trim();

    let locationEmbed = {
        key: { fromMe: false, id: "AFK" },
        message: {
            locationMessage: {
                name: "🌙 𝐔𝐭𝐞𝐧𝐭𝐞 𝐀𝐅𝐊",
                vcard: `BEGIN:VCARD
VERSION:3.0
N:;${userName};;;
FN:${userName}
ORG:AFK Mode
END:VCARD`
            }
        }
    };

    await conn.sendMessage(m.chat, { text: afkMessage }, { quoted: locationEmbed });
};

// 📌 Comando per attivare AFK
handler.command = /^afk$/i;
export default handler;

// 📌 Middleware per rilevare AFK
export async function before(m, { conn }) {
    if (!m.isGroup) return;

    let userId = m.sender;

    // ✅ Rimuove AFK se l'utente scrive un messaggio
    if (global.afkUsers.has(userId)) {
        global.afkUsers.delete(userId);
        let comebackMessage = `
╭━━〔 *🌟 𝐁𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨 𝐢𝐧𝐝𝐢𝐞𝐭𝐫𝐨!* 〕━━╮
┃ ✅ *${conn.getName(userId)}* 𝐞̀ 𝐭𝐨𝐫𝐧𝐚𝐭𝐨!  
╰━━━━━━━━━━━━━━━━━━╯
        `.trim();
        await conn.sendMessage(m.chat, { text: comebackMessage, mentions: [userId] });
    }

    // 🔍 Controlla se un AFK è stato taggato
    if (m.mentionedJid) {
        for (let jid of m.mentionedJid) {
            if (global.afkUsers.has(jid)) {
                let { reason, timestamp } = global.afkUsers.get(jid);
                let duration = ((Date.now() - timestamp) / 60000).toFixed(1); // Tempo in minuti

                let afkReply = `
╭━━〔 *🔔 𝐔𝐭𝐞𝐧𝐭𝐞 𝐀𝐅𝐊* 〕━━╮
┃ 🚀 *${conn.getName(jid)}* 𝐞̀ 𝐀𝐅𝐊!  
┃ 📝 *𝐌𝐨𝐭𝐢𝐯𝐨:* ${reason}  
┃ ⏳ *𝐃𝐚:* ${duration} 𝐦𝐢𝐧  
╰━━━━━━━━━━━━━━━━━━╯
                `.trim();

                let afkEmbed = {
                    key: { fromMe: false, id: "AFK-Reply" },
                    message: {
                        locationMessage: {
                            name: "🌙 𝐀𝐅𝐊 𝐝𝐞𝐭𝐞𝐜𝐭𝐞𝐝",
                            vcard: `BEGIN:VCARD
VERSION:3.0
N:;${conn.getName(jid)};;;
FN:${conn.getName(jid)}
ORG:AFK Mode
END:VCARD`
                        }
                    }
                };

                await conn.sendMessage(m.chat, { text: afkReply }, { quoted: afkEmbed });
            }
        }
    }
}