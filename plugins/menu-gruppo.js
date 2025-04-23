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
                    name: "𝐌𝐞𝐧𝐮 𝐆𝐫𝐮𝐩𝐩𝐨",
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
╭━〔 *📜 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐏𝐎 📜* 〕━╮

> 🎵 *Musica & Media*  
➤ ${usedPrefix}play (canzone + artista)  
➤ ${usedPrefix}video (canzone + artista)  
➤ ${usedPrefix}shazam (audio)  

> 🌍 *Utilità*  
➤ ${usedPrefix}meteo (città)  
➤ ${usedPrefix}hd (foto)  
➤ ${usedPrefix}leggi (foto)  
➤ ${usedPrefix}rimuovisfondo (foto)  
➤ ${usedPrefix}msg / attività @utente  

> ⚙️ *Impostazioni & Strumenti*  
➤ ${usedPrefix}setig  
➤ ${usedPrefix}delig  
➤ ${usedPrefix}trivia  
➤ ${usedPrefix}calcola (1+1)  

> 🍔 *Cucina*  
➤ ${usedPrefix}carbonara  
➤ ${usedPrefix}hamburger  
➤ ${usedPrefix}pizzamargherita  
➤ ${usedPrefix}pizzadiavola  

> 📊 *Statistiche & Divertimento*  
➤ ${usedPrefix}info  
➤ ${usedPrefix}riscrivi  
➤ ${usedPrefix}contaparole  
➤ ${usedPrefix}tovideo  
➤ ${usedPrefix}togif  
➤ ${usedPrefix}gay  
➤ ${usedPrefix}top  
➤ ${usedPrefix}lesbica  

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
        console.error("Errore nel menu gruppo:", error);
        conn.reply(m.chat, "❌ Errore durante la generazione del menu gruppo!", m);
    }
};

// 📌 Configurazione del comando
handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(menugruppo|gruppo)$/i;

export default handler;