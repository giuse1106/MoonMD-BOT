/*⚠ VIETATO MODIFICARE  ⚠

Il codice di questo file è stato completamente creato da:
- Aiden_NotLogic >> https://github.com/ferhacks

Funzione adattata da:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
- AzamiJs >> https://github.com/AzamiJs

Altri crediti:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino
*/

const {
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion
} = await import("@whiskeysockets/baileys");
import _0x197926 from 'qrcode';
import _0x2f30f0 from 'node-cache';
import _0x1d4cd5 from 'fs';
import 'path';
import _0x26dc5f from 'pino';
import 'util';
import 'ws';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from '../lib/simple.js';
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
let handler = async (_0x456767, {
  conn: _0x4f6a59,
  args: _0x594973,
  usedPrefix: _0x2b5283,
  command: _0x1177ed,
  isOwner: _0x1f162e
}) => {
  if (!global.db.data.settings[_0x4f6a59.user.jid].jadibot) {
    return _0x4f6a59.reply(_0x456767.chat, "ⓘ 𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞̀ 𝐝𝐢𝐬𝐚𝐛𝐢𝐥𝐢𝐭𝐚𝐭𝐨 𝐝𝐚𝐥 𝐦𝐢𝐨 𝐜𝐫𝐞𝐚𝐭𝐨𝐫𝐞.", _0x456767, rcanal);
  }
  const _0x1be854 = _0x594973[0x0] && /(--code|code)/.test(_0x594973[0x0].trim()) ? true : !!(_0x594973[0x1] && /(--code|code)/.test(_0x594973[0x1].trim()));
  let _0x2e27bd;
  let _0x325523;
  let _0x2fd7f8;
  let _0x187f2f = _0x456767.mentionedJid && _0x456767.mentionedJid[0x0] ? _0x456767.mentionedJid[0x0] : _0x456767.fromMe ? _0x4f6a59.user.jid : _0x456767.sender;
  let _0x55467d = '' + _0x187f2f.split`@`[0x0];
  if (_0x1be854) {
    _0x594973[0x0] = _0x594973[0x0].replace(/^--code$|^code$/, '').trim();
    if (_0x594973[0x1]) {
      _0x594973[0x1] = _0x594973[0x1].replace(/^--code$|^code$/, '').trim();
    }
    if (_0x594973[0x0] == '') {
      _0x594973[0x0] = undefined;
    }
  }
  if (!_0x1d4cd5.existsSync("./jadibts/" + _0x55467d)) {
    _0x1d4cd5.mkdirSync("./jadibts/" + _0x55467d, {
      'recursive': true
    });
  }
  if (_0x594973[0x0] && _0x594973[0x0] != undefined) {
    _0x1d4cd5.writeFileSync("./jadibts/" + _0x55467d + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x594973[0x0], "base64").toString("utf-8")), null, "\t"));
  } else {
    '';
  }
  if (_0x1d4cd5.existsSync("./jadibts/" + _0x55467d + '/creds.json')) {
    let _0x2984f3 = JSON.parse(_0x1d4cd5.readFileSync("./jadibts/" + _0x55467d + "/creds.json"));
    if (_0x2984f3) {
      if (_0x2984f3.registered = false) {
        _0x1d4cd5.unlinkSync("./jadibts/" + _0x55467d + "/creds.json");
      }
    }
  }
  const _0x40169f = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", "base64");
  exec(_0x40169f.toString("utf-8"), async (_0x3c4312, _0x137d1f, _0x1ae38b) => {
    const _0x26588c = Buffer.from("", "base64");
    async function _0x484487() {
      let _0x3728b5 = _0x456767.mentionedJid && _0x456767.mentionedJid[0x0] ? _0x456767.mentionedJid[0x0] : _0x456767.fromMe ? _0x4f6a59.user.jid : _0x456767.sender;
      let _0x51fa87 = '' + _0x3728b5.split`@`[0x0];
      if (!_0x1d4cd5.existsSync("./jadibts/" + _0x51fa87)) {
        _0x1d4cd5.mkdirSync("./jadibts/" + _0x51fa87, {
          'recursive': true
        });
      }
      if (_0x594973[0x0]) {
        _0x1d4cd5.writeFileSync("./jadibts/" + _0x51fa87 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x594973[0x0], "base64").toString("utf-8")), null, "\t"));
      } else {
        '';
      }
      let {
        version: _0x3dc436,
        isLatest: _0x4f9de8
      } = await fetchLatestBaileysVersion();
      const _0x30c3be = _0x583432 => {};
      const _0x3e8034 = new _0x2f30f0();
      const {
        state: _0x66363d,
        saveState: _0x5364df,
        saveCreds: _0x4c3df5
      } = await useMultiFileAuthState("./jadibts/" + _0x51fa87);
      const _0x4cdbd5 = {
        'printQRInTerminal': false,
        'logger': _0x26dc5f({
          'level': 'silent'
        }),
        'auth': {
          'creds': _0x66363d.creds,
          'keys': makeCacheableSignalKeyStore(_0x66363d.keys, _0x26dc5f({
            'level': "silent"
          }))
        },
        'msgRetry': _0x30c3be,
        'msgRetryCache': _0x3e8034,
        'version': [0x2, 0xbb8, 0x3c8d6c7b],
        'syncFullHistory': true,
        'browser': _0x1be854 ? ["Ubuntu", 'Chrome', "110.0.5585.95"] : ["𝐌𝐨𝐨𝐧𝐌𝐃-𝐁𝐎𝐓  (Sub Bot)", 'Safari', '2.0.0'],
        'defaultQueryTimeoutMs': undefined,
        'getMessage': async _0x138ff0 => {
          if (store) {
            const _0x369702 = store.loadMessage(_0x138ff0.remoteJid, _0x138ff0.id);
            return _0x369702.message && undefined;
          }
          return {
            'conversation': "𝐌𝐨𝐨𝐧𝐌𝐃-𝐁𝐎𝐓"
          };
        }
      };
      let _0x1cba91 = makeWASocket(_0x4cdbd5);
      _0x1cba91.isInit = false;
      let _0x108125 = true;
      async function _0x393e64(_0x12e42a) {
        const {
          connection: _0x178b54,
          lastDisconnect: _0xcfa5b6,
          isNewLogin: _0x56ef5c,
          qr: _0x63532c
        } = _0x12e42a;
        if (_0x56ef5c) {
          _0x1cba91.isInit = false;
        }
        if (_0x63532c && !_0x1be854) {
          _0x2fd7f8 = await _0x4f6a59.sendMessage(_0x456767.chat, {
            'image': await _0x197926.toBuffer(_0x63532c, {
              'scale': 0x8
            }),
            'caption': "🚀 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚 - 𝐌𝐨𝐨𝐧-𝐁𝐨𝐭 \n\n──────────────\n\nⓘ 𝐂𝐨𝐧 𝐮𝐧 𝐚𝐥𝐭𝐫𝐨 𝐜𝐞𝐥𝐥𝐮𝐥𝐚𝐫𝐞 𝐨 𝐏𝐂, 𝐬𝐜𝐚𝐧𝐬𝐢𝐨𝐧𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐐𝐑 𝐩𝐞𝐫 𝐝𝐢𝐯𝐞𝐧𝐭𝐚𝐫𝐞 𝐮𝐧 𝐒𝐮𝐛𝐁𝐨𝐭\n\n𝟏 𝐅𝐚𝐫𝐞 𝐜𝐥𝐢𝐜 𝐬𝐮𝐢 𝐭𝐫𝐞 𝐩𝐮𝐧𝐭𝐢 𝐧𝐞𝐥𝐥'𝐚𝐧𝐠𝐨𝐥𝐨 𝐢𝐧 𝐚𝐥𝐭𝐨 𝐚 𝐝𝐞𝐬𝐭𝐫𝐚\n𝟐 𝐓𝐨𝐜𝐜𝐚 𝐢 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐢 𝐚𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐢\n𝟑 𝐒𝐜𝐚𝐧𝐬𝐢𝐨𝐧𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐝𝐢𝐜𝐞 𝐐𝐄 𝐩𝐞𝐫 𝐚𝐜𝐜𝐞𝐝𝐞𝐫𝐞\n\n──────────────\n\n> ⚠️ 𝐈𝐥 𝐐𝐑 𝐬𝐜𝐚𝐝𝐞 𝐭𝐫𝐚 𝟒𝟓 𝐬𝐞𝐜𝐨𝐧𝐝𝐢\n\n──────────────\n" + _0x26588c.toString("utf-8")
          }, {
            'quoted': _0x456767
          });
        }
        if (_0x63532c && _0x1be854) {
          _0x2e27bd = await _0x4f6a59.sendMessage(_0x456767.chat, {
            'text': "🚀 𝐂𝐨𝐥𝐥𝐞𝐠𝐚 - 𝐌𝐨𝐨𝐧-𝐁𝐨𝐭 ᵇᵉᵗᵃ \n\n──────────────\n\nⓘ 𝐔𝐬𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐝𝐢𝐜𝐞 𝐩𝐞𝐫 𝐝𝐢𝐯𝐞𝐧𝐭𝐚𝐫𝐬𝐞 𝐮𝐧 𝐒𝐮𝐛𝐁𝐨𝐭\n\n𝟏 𝐅𝐚𝐫𝐞 𝐜𝐥𝐢𝐜 𝐬𝐮𝐢 𝐭𝐫𝐞 𝐩𝐮𝐧𝐭𝐢 𝐧𝐞𝐥𝐥'𝐚𝐧𝐠𝐨𝐥𝐨 𝐢𝐧 𝐚𝐥𝐭𝐨 𝐚 𝐝𝐞𝐬𝐭𝐫𝐚\n𝟐 𝐓𝐨𝐜𝐜𝐚 𝐢 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐢 𝐚𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐢\n𝟑 𝐒𝐞𝐥𝐞𝐳𝐢𝐨𝐧𝐚 𝐜𝐨𝐥𝐥𝐞𝐠𝐚 𝐜𝐨𝐧 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐢 𝐭𝐞𝐥𝐞𝐟𝐨𝐧𝐨\n𝟒 𝐒𝐜𝐫𝐢𝐯𝐢 𝐢𝐥 𝐜𝐨𝐝𝐢𝐜𝐞\n\n──────────────\n\n> ⚠️ 𝐄𝐬𝐞𝐠𝐮𝐢 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐫𝐞𝐭𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐝𝐚𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭 𝐜𝐡𝐞 𝐝𝐞𝐬𝐢𝐝𝐞𝐫𝐢 𝐮𝐭𝐢𝐥𝐢𝐳𝐳𝐚𝐫𝐞 𝐜𝐨𝐦𝐞 𝐬𝐮𝐛-𝐛𝐨𝐭\n\n──────────────\n" + _0x26588c.toString("utf-8")
          }, {
            'quoted': _0x456767
          });
          await sleep(0xbb8);
          let _0x2bd4a5 = await _0x1cba91.requestPairingCode(_0x456767.sender.split`@`[0x0]);
          _0x325523 = await _0x456767.reply(_0x2bd4a5);
        }
        const _0xa6ba41 = _0xcfa5b6?.["error"]?.["output"]?.["statusCode"] || _0xcfa5b6?.["error"]?.['output']?.["payload"]?.['statusCode'];
        console.log(_0xa6ba41);
        const _0x40c144 = async _0x1014e0 => {
          if (!_0x1014e0) {
            try {
              _0x1cba91.ws.close();
            } catch {}
            _0x1cba91.ev.removeAllListeners();
            let _0x49e769 = global.conns.indexOf(_0x1cba91);
            if (_0x49e769 < 0x0) {
              return;
            }
            delete global.conns[_0x49e769];
            global.conns.splice(_0x49e769, 0x1);
          }
        };
        const _0x10792d = _0xcfa5b6?.["error"]?.["output"]?.["statusCode"] || _0xcfa5b6?.["error"]?.["output"]?.["payload"]?.["statusCode"];
        if (_0x178b54 === 'close') {
          console.log(_0x10792d);
          if (_0x10792d == 0x195) {
            await _0x1d4cd5.unlinkSync("./jadibts/" + _0x51fa87 + "/creds.json");
            return await _0x456767.reply("ⓘ 𝐈𝐧𝐯𝐢𝐚 𝐧𝐮𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐢𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.");
          }
          if (_0x10792d === DisconnectReason.restartRequired) {
            _0x484487();
            return console.log("\n⌛ 𝐂𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐬𝐜𝐚𝐝𝐮𝐭𝐚, 𝐫𝐢𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐢𝐧 𝐜𝐨𝐫𝐬𝐨...");
          } else {
            if (_0x10792d === DisconnectReason.loggedOut) {
              sleep(0xfa0);
              return _0x456767.reply("ⓘ 𝐋𝐚 𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐞̀ 𝐬𝐭𝐚𝐭𝐚 𝐜𝐡𝐢𝐮𝐬𝐚, 𝐝𝐞𝐯𝐫𝐚𝐢 𝐫𝐢𝐜𝐨𝐧𝐧𝐞𝐭𝐭𝐞𝐫𝐭𝐢 𝐮𝐭𝐢𝐥𝐢𝐳𝐳𝐚𝐧𝐝𝐨:*\n!deletesesion (𝐏𝐞𝐫 𝐜𝐚𝐧𝐜𝐞𝐥𝐥𝐚𝐫𝐞 𝐢 𝐝𝐚𝐭𝐢 𝐞 𝐩𝐨𝐭𝐞𝐫 𝐫𝐢𝐜𝐡𝐢𝐞𝐝𝐞𝐫𝐞 𝐧𝐮𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐢𝐥 𝐐𝐑 𝐨 𝐢𝐥 𝐜𝐨𝐝𝐢𝐜𝐞 𝐝𝐢 𝐚𝐛𝐛𝐢𝐧𝐚𝐦𝐞𝐧𝐭𝐨.");
            } else {
              if (_0x10792d == 0x1ac) {
                await _0x40c144(false);
                return _0x456767.reply("ⓘ 𝐋𝐚 𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐞̀ 𝐬𝐭𝐚𝐭𝐚 𝐜𝐡𝐢𝐮𝐬𝐚 𝐢𝐧𝐚𝐬𝐩𝐞𝐭𝐭𝐚𝐭𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐫𝐨𝐯𝐞𝐫𝐞𝐦𝐨 𝐚 𝐫𝐢𝐜𝐨𝐧𝐧𝐞𝐭𝐭𝐞𝐫𝐜𝐢...");
              } else {
                if (_0x10792d === DisconnectReason.connectionLost) {
                  await _0x484487();
                  return console.log("\n⚠️ 𝐂𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐩𝐞𝐫𝐬𝐚 𝐚𝐥 𝐬𝐞𝐫𝐯𝐞𝐫, 𝐫𝐢𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐢𝐧 𝐜𝐨𝐫𝐬𝐨...");
                } else {
                  if (_0x10792d === DisconnectReason.badSession) {
                    return await _0x456767.reply("ⓘ 𝐋𝐚 𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐞̀ 𝐬𝐭𝐚𝐭𝐚 𝐜𝐡𝐢𝐮𝐬𝐚, 𝐞̀ 𝐧𝐞𝐜𝐞𝐬𝐬𝐚𝐫𝐢𝐨 𝐜𝐨𝐧𝐧𝐞𝐭𝐭𝐞𝐫𝐬𝐢 𝐦𝐚𝐧𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞.");
                  } else {
                    if (_0x10792d === DisconnectReason.timedOut) {
                      await _0x40c144(false);
                      return console.log("\n⌛ 𝐂𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐬𝐜𝐚𝐝𝐮𝐭𝐚, 𝐫𝐢𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐢𝐧 𝐜𝐨𝐫𝐬𝐨...");
                    } else {
                      console.log("\n⚠️ 𝐌𝐨𝐭𝐢𝐯𝐨 𝐝𝐞𝐥𝐥𝐚 𝐝𝐢𝐬𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐬𝐜𝐨𝐧𝐨𝐬𝐜𝐢𝐮𝐭𝐨: " + (_0x10792d || '') + " >> " + (_0x178b54 || ''));
                    }
                  }
                }
              }
            }
          }
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x178b54 == "open") {
          _0x1cba91.isInit = true;
          global.conns.push(_0x1cba91);
          await joinChannels(_0x1cba91);
          await _0x4f6a59.sendMessage(_0x456767.chat, {
            'text': _0x594973[0x0] ? "ⓘ 𝐒𝐞𝐢 𝐜𝐨𝐧𝐧𝐞𝐬𝐬𝐨!! 𝐏𝐞𝐫 𝐟𝐚𝐯𝐨𝐫𝐞 𝐚𝐭𝐭𝐞𝐧𝐝𝐢, 𝐢 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐬𝐨𝐧𝐨 𝐢𝐧 𝐜𝐚𝐫𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐨..." : "✅️ 𝐂𝐨𝐧𝐧𝐞𝐬𝐬𝐨 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨!! 𝐏𝐮𝐨𝐢 𝐜𝐨𝐧𝐧𝐞𝐭𝐭𝐞𝐫𝐭𝐢𝐧 𝐮𝐬𝐚𝐧𝐝𝐨" + (" " + (_0x2b5283 + _0x1177ed))
          }, {
            'quoted': _0x456767
          });
          if (!_0x594973[0x0]) {
            _0x4f6a59.sendMessage(_0x456767.chat, {
              'text': _0x2b5283 + _0x1177ed + " " + Buffer.from(_0x1d4cd5.readFileSync("./jadibts/" + _0x51fa87 + "/creds.json"), "utf-8").toString("base64")
            }, {
              'quoted': _0x456767
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x1cba91.user) {
          try {
            _0x1cba91.ws.close();
          } catch (_0x2710b1) {
            console.log(await _0x53fcf7(true)['catch'](console.error));
          }
          _0x1cba91.ev.removeAllListeners();
          let _0x3230bc = global.conns.indexOf(_0x1cba91);
          if (_0x3230bc < 0x0) {
            return;
          }
          delete global.conns[_0x3230bc];
          global.conns.splice(_0x3230bc, 0x1);
        }
      }, 0xea60);
      let _0x5e4b83 = await import("../handler.js");
      let _0x53fcf7 = async function (_0x4a5ce4) {
        try {
          const _0xc84b76 = await import("../handler.js?update=" + Date.now())["catch"](console.error);
          if (Object.keys(_0xc84b76 || {}).length) {
            _0x5e4b83 = _0xc84b76;
          }
        } catch (_0x248855) {
          console.error(_0x248855);
        }
        if (_0x4a5ce4) {
          const _0x35d3c2 = _0x1cba91.chats;
          try {
            _0x1cba91.ws.close();
          } catch {}
          _0x1cba91.ev.removeAllListeners();
          _0x1cba91 = makeWASocket(_0x4cdbd5, {
            'chats': _0x35d3c2
          });
          _0x108125 = true;
        }
        if (!_0x108125) {
          _0x1cba91.ev.off("messages.upsert", _0x1cba91.handler);
          _0x1cba91.ev.off("connection.update", _0x1cba91.connectionUpdate);
          _0x1cba91.ev.off("creds.update", _0x1cba91.credsUpdate);
        }
        const _0x2ea7ed = new Date();
        const _0x2f67d1 = new Date(_0x1cba91.ev * 0x3e8);
        if (_0x2ea7ed.getTime() - _0x2f67d1.getTime() <= 0x493e0) {
          console.log("Lettura del messaggio in arrivo:", _0x1cba91.ev);
          Object.keys(_0x1cba91.chats).forEach(_0x235a31 => {
            _0x1cba91.chats[_0x235a31].isBanned = false;
          });
        } else {
          console.log(_0x1cba91.chats, "ⓘ Saltare i messaggi in attesa.", _0x1cba91.ev);
          Object.keys(_0x1cba91.chats).forEach(_0x10ca4d => {
            _0x1cba91.chats[_0x10ca4d].isBanned = true;
          });
        }
        _0x1cba91.handler = _0x5e4b83.handler.bind(_0x1cba91);
        _0x1cba91.connectionUpdate = _0x393e64.bind(_0x1cba91);
        _0x1cba91.credsUpdate = _0x4c3df5.bind(_0x1cba91, true);
        _0x1cba91.ev.on('messages.upsert', _0x1cba91.handler);
        _0x1cba91.ev.on("connection.update", _0x1cba91.connectionUpdate);
        _0x1cba91.ev.on("creds.update", _0x1cba91.credsUpdate);
        _0x108125 = false;
        return true;
      };
      _0x53fcf7(false);
    }
    _0x484487();
  });
};
handler.help = ['serbot', "serbot --code"];
handler.tags = ["serbot"];
handler.command = ["jadibot", "serbot"];
handler["private"] = true;
export default handler;
function sleep(_0x527965) {
  return new Promise(_0x15f6fe => setTimeout(_0x15f6fe, _0x527965));
}