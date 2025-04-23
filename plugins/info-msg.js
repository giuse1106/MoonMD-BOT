import fetch from 'node-fetch';

// Definizione degli owner
const owners = ["393445461546@s.whatsapp.net", "27620870446@s.whatsapp.net", "393272790038@s.whatsapp.net"];
const bots =["390813657301@s.whatsapp.net", "19173829810@s.whatsapp.net"];

// Funzione per determinare il dispositivo
const detectDevice = async (conn, userId) => {
    try {
        let lastMessage = await conn.loadMessage(userId);
        let platform = lastMessage?.messageStubParameters?.[0] || "";

        if (/android/i.test(platform)) return "📱 Android";
        if (/iphone|ipad|ios/i.test(platform)) return "🍏 iOS";
        if (/windows/i.test(platform)) return "💻 Windows";
        if (/mac/i.test(platform)) return "🖥️ MacOS";
        if (/web/i.test(platform)) return `🌐 WhatsApp Web (${lastMessage.browserName || "Browser Sconosciuto"})`;

        return "🤖 Dispositivo sconosciuto";
    } catch {
        return "❓ Non rilevato";
    }
};

// Funzione per calcolare tempo rimanente per lo stato (24h)
const formatStatusTime = (timestamp) => {
    if (!timestamp) return "🫩 Nessuno stato attivo.";
    let now = Date.now();
    let remaining = (timestamp + 24 * 60 * 60 * 1000) - now;
    if (remaining <= 0) return "⚠️ Stato scaduto!";
    
    let hours = Math.floor(remaining / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    return `⏳ Tempo rimanente: ${hours}h ${minutes}m ${seconds}s`;
};

let handler = async (m, { conn }) => {
    try {
        let userId = m.mentionedJid[0] || m.sender;
        let userData = global.db.data.users[userId];

        if (!userData) throw '*L\'utente non ha ancora inviato messaggi.*';

        // Dispositivo
        let userDevice = await detectDevice(conn, userId);

        // Ruolo utente
        let isOwner = owners.includes(userId);
        let isBots = bots.includes(userId);
        let isAdmin = m.isGroup ? (await conn.groupMetadata(m.chat)).participants.find(u => u.id === userId)?.admin : false;
        let userRole = isOwner ? '👑 𝐎𝐰𝐧𝐞𝐫' : isBots ? '🤖 𝐁𝐨𝐭' : isAdmin ? '🔰 𝐀𝐝𝐦𝐢𝐧' : '👤 𝐌𝐞𝐦𝐛𝐫𝐨';

        // Bio e Stato
        let userBio = userData.bio || '𝐁𝐢𝐨 𝐧𝐨𝐧 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐚, usa .setbio';
        let userStatus = userData.status || "❌ Nessuno stato attivo";
        let statusRemaining = formatStatusTime(userData.statusTimestamp);

        // RPG - XP e UnityCoins
        let userXP = userData.exp || 0;
        let userSaldo = userData.Saldo || 0; // Assicurati che questa sia la proprietà corretta

        // Instagram e BeReal
        let userInstagram = userData.instagram ? `📸 instagram.com/${userData.instagram}` : '📸 Non impostato, usa .setig';
        let userBereal = userData.bereal ? `bere.al/${userData.bereal}` : '⏳ BeReal non impostato, usa .setbr';

        // Bestemmie e Warns
        let userBlasphemy = userData.blasphemy || 0;
        let userWarns = userData.warn || 0;

        // Numero e Data ingresso
        let userNumber = `wa.me/${userId.split('@')[0]}`;
        let userJoinDate = userData.joinDate ? `📅 ${new Date(userData.joinDate).toLocaleDateString()}` : "📅 Data non disponibile";

        // Foto profilo
        let profilePicUrl = await conn.profilePictureUrl(userId, 'image').catch(() => 'https://telegra.ph/file/8ca14ef9fa43e99d1d196.jpg');
        let profilePicBuffer = await fetch(profilePicUrl).then(res => res.buffer());

        // Messaggio profilo con decorazioni
        let profileMessage = `╔ ✦ ✧ ✦ ════════╗
『💠』 𝐈𝐍𝐅𝐎 𝐔𝐓𝐄𝐍𝐓𝐄 『💠』
╚═══════ ✦ ✧ ✦ ═╝

╭━❰ *INFORMAZIONI ESSENZIALI* ❱━╮
📛 *Nome:* ${userData.name || '𝐔𝐧𝐤𝐧𝐨𝐰𝐧'}
💌 *Messaggi:* ${userData.messaggi || 0}
⚠️ *Warns:* ${userWarns}/3
🤬 *Bestemmie:* ${userBlasphemy}
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━❰ *DETTAGLI EXTRA* ❱━━━╮
💼 *Ruolo:* ${userRole}
📞 *Numero:* ${userNumber}
💭 *Bio:* ${userBio}
📸 *Instagram:* ${userInstagram}
⌚ *BeReal:* ${userBereal}
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━━━━━❰ *RPG* ❱━━━━━━━━╮
💫 *XP:* ${userXP}
🌙 *MoonCredits:* *[FIXING]*
╰━━━━━━━━━━━━━━━━━━━━╯`;

        await conn.sendMessage(m.chat, {
            text: profileMessage,
            contextInfo: {
                mentionedJid: [userId],
                externalAdReply: {
                    title: `👤 ${userData.name || '𝐔𝐧𝐤𝐧𝐨𝐰𝐧'} | ${userRole} | 💌 ${userData.messaggi || 0}`,
                    body: `➤ ${userBio}`,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    thumbnail: profilePicBuffer,
                    sourceUrl: userNumber
                }
            }
        });

    } catch (error) {
        console.error("Errore nel comando info:", error);
        conn.reply(m.chat, "❌ Errore nell'esecuzione del comando!", m);
    }
};

handler.command = /^(info|profilo)$/i;
export default handler;