import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  // URL dell'immagine per l'embed
  const imageUrl = 'https://telegra.ph/file/b97148e2154508f63d909.jpg';
  
  // Recupero i dati dell'utente
  const user = global.db.data.users[m.sender];
  const name = conn.getName(m.sender); // Nome dell'utente
  
  // Calcolo della progressione e dei punti XP per il livello
  const { min, xp, max } = xpRange(user.level, global.multiplier);
  
  // Controllo se l'utente ha abbastanza XP per salire di livello
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const remainingXp = max - user.exp; // XP mancanti per salire di livello
    let levelInfo = `*L I V E L L O - U T E N T E*\n\n`;
    levelInfo += `┌ ✩ *Nome*: ${name}\n`;
    levelInfo += `│ ✩ *Livello*: ${user.level}\n`;
    levelInfo += `└ ✩ *XP*: ${user.exp - min}/${xp}\n\n`;
    levelInfo += `Ti mancano *${remainingXp}* 💫 XP per salire di livello.`;

    // Invia il messaggio con l'immagine come embed
    await conn.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: levelInfo,
      mentions: [m.sender],
    }, { quoted: m });

    return; // Esci se non si può salire di livello
  }

  // Se l'utente può salire di livello, gestiamo la promozione
  let previousLevel = user.level;
  // Aumento del livello finché è possibile
  while (canLevelUp(user.level, user.exp, global.multiplier)) {
    user.level++; // Aumenta il livello
  }

  // Se c'è stato un cambiamento nel livello, inviamo il messaggio di promozione
  if (previousLevel !== user.level) {
    let promotionMessage = `*P R O M O Z I O N E - L I V E L L O*\n\n`;
    promotionMessage += `┌ ✩ *Nome*: ${name}\n`;
    promotionMessage += `│ ✩ *Livello precedente*: ${previousLevel}\n`;
    promotionMessage += `└ ✩ *Nuovo livello*: ${user.level}\n\n`;
    promotionMessage += `🚩 Più interagisci con *Ai Hoshino*, più il tuo livello aumenterà!`;

    // Invia il messaggio con l'immagine come embed
    await conn.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: promotionMessage,
      mentions: [m.sender],
    }, { quoted: m });
  }
};

handler.help = ['livello'];
handler.tags = ['rpg'];
handler.command = ['livello', 'lvl', 'levelup', 'level'];
handler.register = true;

export default handler;