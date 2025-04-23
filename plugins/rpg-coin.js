const formatNumber = (num) => new Intl.NumberFormat('it-IT').format(num);

const handler = async (m, { conn, usedPrefix }) => {
  const who = m.quoted?.sender || m.mentionedJid?.[0] || (m.fromMe ? conn.user.jid : m.sender);
  const user = global.db.data.users[who];
  const name = await conn.getName(who);

  if (!user) throw '🚩 Utente non trovato nel database.';
  if (!user.limit) user.limit = 0;

  const thumbUrl = 'https://i.ibb.co/4RSNsdx9/Sponge-Bob-friendship-wallet-meme-9.png';
  const thumb = await (await fetch(thumbUrl)).buffer().catch(() => null);
  if (!thumb) throw '❌ Errore nel caricamento della miniatura.';

  const text = `
╭─────「 💰 」─────
│
│ 👤 *Utente:* ${name}
│ 🌕 *MoonCredit:* ${formatNumber(user.limit)}
│
╰────────────────

✨ Usa *${usedPrefix}buy* per acquistare oggetti.
  `.trim();

  const locationFake = {
    key: {
      participants: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'wallet-fake',
    },
    message: {
      locationMessage: {
        name: `💸 Portafoglio di ${name}`,
        jpegThumbnail: thumb,
      },
    },
    participant: '0@s.whatsapp.net',
  };

  await conn.sendMessage(m.chat, { text, mentions: [who] }, { quoted: locationFake });

  await m.react('🌕');
};

handler.help = ['wallet'];
handler.tags = ['economy'];
handler.command = ['soldi', 'wallet', 'portafoglio', 'uc', 'saldo', 'unitycoins'];
handler.register = true;

export default handler;