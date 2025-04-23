import _0x4b8137 from 'moment-timezone';
import _0x2c74f8 from 'node-fetch';

let handler = async (_0x221549, { conn: _0xf8de2c, args: _0x133a4d }) => {
  let _0x28ae89 = await _0x2c74f8('https://api.github.com/repos/giuse1106/MoonMD-BOT');
  let _0xa006a5 = await _0x28ae89.json();

  // Crea il testo formattato per l'informazione del repository
  let infoText = `
╭━〔 *📝 Dettagli del Repository* 〕━╮
> ✧ 𝐍𝐨𝐦𝐞: ${_0xa006a5.name}
> ✧ 𝐕𝐢𝐬𝐢𝐭𝐚𝐭𝐨𝐫𝐢: ${_0xa006a5.watchers_count}
> ✧ 𝐃𝐢𝐦𝐞𝐧𝐬𝐢𝐨𝐧𝐞: ${( _0xa006a5.size / 0x400 ).toFixed(2)} MB
> ✧ 𝐀𝐠𝐠𝐢𝐨𝐫𝐧𝐚𝐭𝐨: ${_0x4b8137(_0xa006a5.updated_at).format("DD/MM/YY - HH:mm:ss")}
> ✧ 𝐋𝐢𝐧𝐤: ${_0xa006a5.html_url}

══════════════════════
> ✨ *Statistiche:*
> ${_0xa006a5.forks_count} 𝐅𝐨𝐫𝐤𝐬 · ${_0xa006a5.stargazers_count} 𝐒𝐭𝐚𝐫𝐬 · ${_0xa006a5.open_issues_count} 𝐈𝐬𝐬𝐮𝐞𝐬
╰━━━━━━━━━━━━━━━━━━━━╯
  `.trim();

  // Creazione dell'embed con immagine e testo personalizzato
  const embedMessage = {
    image: { url: 'https://i.imgur.com/8thMm3N.png' }, // URL dell'immagine che vuoi aggiungere
    caption: '🌕 *Informazioni sul Repository*',
    text: infoText
  };

  // Invia il messaggio con l'embed
  await _0xf8de2c.sendMessage(_0x221549.chat, {
    text: infoText,
    caption: embedMessage.caption,
    image: embedMessage.image.url
  });

};

handler.help = ["scbot"];
handler.tags = ["info"];
handler.command = /^script$/i;

export default handler;