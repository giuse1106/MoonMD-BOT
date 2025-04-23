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
                    name: "𝐌𝐞𝐧𝐮 𝐀𝐝𝐦𝐢𝐧",
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
╭━〔 *👑 𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍 👑* 〕━╮

> 🛠 *Gestione Membri*  
➤ ${usedPrefix}promuovi / p  
➤ ${usedPrefix}retrocedi / r  
➤ ${usedPrefix}warn / unwarn  
➤ ${usedPrefix}muta / smuta  
➤ ${usedPrefix}rimozioneinattivi  

> 📢 *Tag e Messaggi*  
➤ ${usedPrefix}hidetag  
➤ ${usedPrefix}tagall  
➤ ${usedPrefix}pic @  

> ⚙️ *Impostazioni Gruppo*  
➤ ${usedPrefix}aperto / chiuso  
➤ ${usedPrefix}setwelcome  
➤ ${usedPrefix}setbye  
➤ ${usedPrefix}inattivi  

> 📊 *Statistiche & Top*  
➤ ${usedPrefix}top (10,50,100)  
➤ ${usedPrefix}topsexy  
➤ ${usedPrefix}toptroie  

> 🔍 *Strumenti*  
➤ ${usedPrefix}ispeziona (link)  
➤ ${usedPrefix}listanum + prefisso  
➤ ${usedPrefix}pulizia + prefisso  
➤ ${usedPrefix}freeze @  

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
                    newsletterJid: "120363341274693350@newsletter",
                    serverMessageId: '',
                    newsletterName: botName
                }
            }
        }, {
            quoted: locationEmbed
        });

    } catch (error) {
        console.error("Errore nel menu admin:", error);
        conn.reply(m.chat, "❌ Errore durante la generazione del menu admin!", m);
    }
};

// 📌 Configurazione del comando
handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(menuadm|admin)$/i;

export default handler;