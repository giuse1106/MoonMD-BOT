let handler = _0x31f800 => _0x31f800;
handler.all = async function (_0x566b62) {
  let _0xdeff7a = global.db.data.chats[_0x566b62.chat];
  if (!_0x566b62.isGroup) {
    return null;
  }
  if (_0xdeff7a.bestemmiometro && /(?:porco dio|porcodio|dio bastardo|dio cane|porcamadonna|madonnaporca|porca madonna|madonna porca|dio cristo|diocristo|dio maiale|diomaiale|jesucristo|jesu cristo|cristo madonna|madonna impanata|dio cristo|cristo dio|dio frocio|dio gay|dio madonna|dio infuocato|dio crocifissato|madonna puttana|madonna vacca|madonna inculata|maremma maiala|padre pio|jesu impanato|jesu porco|Dio porco|Porco dio|Porca madonna| Madonna porca|porca madonna|diocane|madonna porca|dio capra|capra dio|porcoddio|dio negro|padre pio ti spio)/i.test(_0x566b62.text)) {
    const _0x3bc93a = global.db.data.users[_0x566b62.sender];
    _0x3bc93a.blasphemy = (_0x3bc93a.blasphemy || 0x0) + 0x1;
    if (_0x3bc93a.blasphemy == 0x1) {
      const _0x432e50 = '@' + _0x566b62.sender.split`@`[0x0] + " 𝐡𝐚 𝐭𝐢𝐫𝐚𝐭𝐨 𝐥𝐚 𝐬𝐮𝐚 𝐩𝐫𝐢𝐦𝐚 𝐛𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐚";
      let _0x165236 = {
        'key': {
          'participants': "0@s.whatsapp.net",
          'fromMe': false,
          'id': "Halo"
        },
        'message': {
          'locationMessage': {
            'name': "𝐁𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐨𝐦𝐞𝐭𝐫𝐨",
            'jpegThumbnail': await (await fetch("https://telegra.ph/file/ba01cc1e5bd64ca9d65ef.jpg")).buffer(),
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
          }
        },
        'participant': '0@s.whatsapp.net'
      };
      conn.sendMessage(_0x566b62.chat, {
        'text': _0x432e50,
        'mentions': [..._0x432e50.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x60791d => _0x60791d[0x1] + '@s.whatsapp.net')
      }, {
        'quoted': _0x165236
      });
    }
    if (_0x3bc93a.blasphemy > 0x1) {
      const _0x45e313 = '@' + _0x566b62.sender.split`@`[0x0] + " 𝐡𝐚 𝐭𝐢𝐫𝐚𝐭𝐨 " + _0x3bc93a.blasphemy + " 𝐛𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐞";
      let _0x1e9c03 = {
        'key': {
          'participants': "0@s.whatsapp.net",
          'fromMe': false,
          'id': 'Halo'
        },
        'message': {
          'locationMessage': {
            'name': "𝐁𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐨𝐦𝐞𝐭𝐫𝐨",
            'jpegThumbnail': await (await fetch("https://telegra.ph/file/ba01cc1e5bd64ca9d65ef.jpg")).buffer(),
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
          }
        },
        'participant': "0@s.whatsapp.net"
      };
      conn.sendMessage(_0x566b62.chat, {
        'text': _0x45e313,
        'mentions': [..._0x45e313.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2d99a6 => _0x2d99a6[0x1] + "@s.whatsapp.net")
      }, {
        'quoted': _0x1e9c03
      });
    }
  }
};
export default handler;
function pickRandom(_0x4ea783) {
  return _0x4ea783[Math.floor(Math.random() * _0x4ea783.length)];
}