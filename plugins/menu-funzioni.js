import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (m, { conn, usedPrefix }) => {
    try {
        // 📍 Embed con vCard
        let locationEmbed = {
            key: {
                participants: "0@s.whatsapp.net",
                fromMe: false,
                id: "Halo"
            },
            message: {
                locationMessage: {
                    name: "𝐌𝐞𝐧𝐮 𝐝𝐞𝐥𝐥𝐞 𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐚'",
                    vcard: `BEGIN:VCARD
VERSION:3.0
N:;Unlimited;;;
FN:Unlimited
ORG:Unlimited
TITLE:
item1.TEL;waid=19709001746:+1 (970) 900-1746
item1.X-ABLabel:Unlimited
X-WA-BIZ-DESCRIPTION:ofc
X-WA-BIZ-NAME:Unlimited
END:VCARD`
                }
            },
            participant: "0@s.whatsapp.net"
        };

        // 📝 Messaggio formattato con categorie e stato delle funzionalità
        let menuText = `
╭━〔 *👑 𝐌𝐄𝐍𝐔 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐀' 👑* 〕━╮

> 🛡 *Anti-funzioni*  
➤ [${global.db.data.chats[m.chat].antiToxic ? '🟢' : '🔴'}] ${usedPrefix}antitoxic  
➤ [${global.db.data.chats[m.chat].antiLink ? '🟢' : '🔴'}] ${usedPrefix}antilink  
➤ [${global.db.data.chats[m.chat].antiPrivate ? '🟢' : '🔴'}] ${usedPrefix}antiprivate  
➤ [${global.db.data.chats[m.chat].antiTraba ? '🟢' : '🔴'}] ${usedPrefix}antitraba   
➤ [${global.db.data.chats[m.chat].antiArab ? '🟢' : '🔴'}] ${usedPrefix}antiarab   

> ⚙️ *Gestione Gruppo*  
➤ [${global.db.data.chats[m.chat].welcome ? '🟢' : '🔴'}] ${usedPrefix}setwelcome   
➤ [${global.db.data.chats[m.chat].sBye ? '🟢' : '🔴'}] ${usedPrefix}setbye   
➤ [${global.db.data.chats[m.chat].modoadmin ? '🟢' : '🔴'}] ${usedPrefix}modoadmin   
➤ [${global.db.data.chats[m.chat].modohorny ? '🟢' : '🔴'}] ${usedPrefix}modohorny   

> 📢 *Strumenti Avanzati*  
➤ [${global.db.data.chats[m.chat].gpt ? '🟢' : '🔴'}] ${usedPrefix}gpt   
➤ [${global.db.data.chats[m.chat].jadibot ? '🟢' : '🔴'}] ${usedPrefix}jadibot   
➤ [${global.db.data.chats[m.chat].antiviewonce ? '🟢' : '🔴'}] ${usedPrefix}antiviewonce   
➤ [${global.db.data.chats[m.chat].autosticker ? '🟢' : '🔴'}] ${usedPrefix}autosticker   

> 🔍 *Filtri & Privacy*  
➤ [${global.db.data.chats[m.chat].sologruppo ? '🟢' : '🔴'}] ${usedPrefix}sologruppo   
➤ [${global.db.data.chats[m.chat].soloprivato ? '🟢' : '🔴'}] ${usedPrefix}soloprivato   
➤ [${global.db.data.chats[m.chat].antiSpam ? '🟢' : '🔴'}] ${usedPrefix}antispam   
➤ [${global.db.data.chats[m.chat].antitelegram ? '🟢' : '🔴'}] ${usedPrefix}antitelegram   

╰━━━━━━━━━━━━━━━╯
`.trim();

        let botName = global.db.data.nomedelbot || "🕸 ׅ꯱℘ꪱׁׁׁׅׅׅժׁׅ݊ꫀׁׅܻ݊ꭈׁׅ֮ϐׁᨵׁׅׅtׁׅ 🕷️";

        // ✉️ Invio del menu con categorie ben separate
        conn.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: conn.parseMention(menuText),
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363175463922716@newsletter",
                    serverMessageId: '',
                    newsletterName: botName
                }
            }
        }, {
            quoted: locationEmbed
        });

    } catch (error) {
        console.error("Errore nel menu funzionalità:", error);
        conn.reply(m.chat, "❌ Errore durante la generazione del menu funzionalità!", m);
    }
};

// 📌 Configurazione del comando
handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(funzioni)$/i;

export default handler;