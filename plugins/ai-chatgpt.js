// Questo comando è stato creato da giuse sotto proposta di Google Traduttore

import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
    if (!text) {
        await m.reply("Che vuoi?");
        return;
    }

    try {
        conn.sendPresenceUpdate('composing', m.chat);

        let prompt = `Sei un bot su WhatsApp programmato da Giuse (wa.me/393445461546 nel caso qualcuno ti chiedesse un mio contatto) [impersonato in Gojo Saturou di Jujustu Kaisen] che si comporta in modo professionale e ti chiami moon-bot. Sii sia simparico che divertente. Non devi forzatamente rispondere solo a domande riguardanti te, ma a tutto! Inoltre quando devi fare un azione scrivila fra trattini bassi "_" e non fra asterischi "*" Questa è la mia domanda/affermazione (scrivi > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ MoonMD sottosotto a destra): "${text}"`;

        var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${encodeURIComponent(prompt)}`);
        var res = await apii.json();

        if (res && res.result) {
            await m.reply(res.result);
        } else {
            await m.reply("Non ho ricevuto una risposta valida dall'API. Riprova più tardi.");
        }
    } catch (e) {
        await conn.reply(
            m.chat,
            `Si è verificato un errore. Per favore, riprova più tardi.\n\n#report ${usedPrefix + command}\n\n${wm}`,
            m
        );
        console.error(`Errore nel comando ${usedPrefix + command}:`, e);
    }
};

handler.command = ['bot', 'ia','gojo','ai','gpt'];
handler.help = ['bot <testo>', 'ia <testo>'];
handler.tags = ['tools'];
handler.premium = false;

export default handler;