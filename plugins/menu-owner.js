import fs from 'fs';

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
                    name: "𝐌𝐞𝐧𝐮 𝐎𝐰𝐧𝐞𝐫",
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

        // 📝 Messaggio formattato con categorie
        let menuText = `
╭━〔 *📜 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑 📜* 〕━╮

> ⚙️ *Gestione Gruppi*  
➤ ${usedPrefix}setgruppi  
➤ ${usedPrefix}aggiungiGruppi @  
➤ ${usedPrefix}resettaGruppi @  

> 🔧 *Gestione Utenti*  
➤ ${usedPrefix}banuser @  
➤ ${usedPrefix}unbanuser @  
➤ ${usedPrefix}blockuser @  
➤ ${usedPrefix}unblockuser @  

> 🧹 *Puliscia & Impostazioni*  
➤ ${usedPrefix}pulisci (+)  
➤ ${usedPrefix}resetprefisso  
➤ ${usedPrefix}prefisso (?)  

> 💡 *Altro*  
➤ ${usedPrefix}getfile  
➤ ${usedPrefix}salva (plugin)  
➤ ${usedPrefix}dp (plugin)  

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
                    newsletterJid: "120363378147644537@newsletter",
                    serverMessageId: '',
                    newsletterName: botName
                }
            }
        }, {
            quoted: locationEmbed
        });

    } catch (error) {
        console.error("Errore nel menu owner:", error);
        conn.reply(m.chat, "❌ Errore durante la generazione del menu Owner!", m);
    }
};

// 📌 Configurazione del comando
handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(owner|menuowner|pannello)$/i;

export default handler;