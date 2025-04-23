import { downloadContentFromMessage } from '@whiskeysockets/baileys';

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '❌ *Devi rispondere a una foto o un video a visualizzazione unica!*';

    // Trova il messaggio a visualizzazione unica (V1 o V2)
    let viewOnceMsg = m.quoted.message?.viewOnceMessageV2 || m.quoted.message?.viewOnceMessage;
    
    if (!viewOnceMsg || !viewOnceMsg.message) {
        return conn.reply(m.chat, '⚠️ *Questo non è un messaggio a visualizzazione unica!*', m);
    }

    let msg = viewOnceMsg.message;
    let mediaType = msg.imageMessage ? 'imageMessage' : msg.videoMessage ? 'videoMessage' : null;

    if (!mediaType) {
        return conn.reply(m.chat, '⚠️ *Il messaggio non contiene né un\'immagine né un video!*', m);
    }

    let mediaMessage = msg[mediaType];

    try {
        // Scarica il contenuto multimediale
        let mediaStream = await downloadContentFromMessage(mediaMessage, mediaType === 'imageMessage' ? 'image' : 'video');
        let bufferArray = [];
        
        for await (const chunk of mediaStream) {
            bufferArray.push(chunk);
        }
        
        let buffer = Buffer.concat(bufferArray);
        let fileName = mediaType === 'imageMessage' ? 'view-once.jpg' : 'view-once.mp4';
        let caption = mediaMessage.caption || '🔓 *Messaggio a visualizzazione unica rivelato!*';

        // Invia il file con la didascalia
        await conn.sendMessage(m.chat, { 
            [mediaType === 'imageMessage' ? 'image' : 'video']: buffer, 
            caption: caption 
        }, { quoted: m });

    } catch (error) {
        console.error('Errore durante il download:', error);
        conn.reply(m.chat, '❌ *Errore durante il recupero del file!*', m);
    }
};

handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = ['readviewonce', 'nocap', 'rivela', 'readvo']; 

export default handler;