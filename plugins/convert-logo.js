function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "logo",
  'desc': "Create logos",
  'react': '💫',
  'category': 'other',
  'filename': __filename
}, async (_0x59727c, _0xe0acbe, _0x4b737f, {
  from: _0x1be204,
  quoted: _0x431024,
  body: _0x3723c9,
  isCmd: _0x47d868,
  command: _0x542867,
  args: _0x54ad11,
  q: _0x1a845,
  isGroup: _0x4df87f,
  sender: _0x84127,
  senderNumber: _0xa51f44,
  botNumber2: _0x2a0570,
  botNumber: _0x56ff20,
  pushname: _0x20815a,
  isMe: _0x3463d6,
  isOwner: _0x20717b,
  groupMetadata: _0x1b892f,
  groupName: _0x30641b,
  participants: _0x1e2bdf,
  groupAdmins: _0x2fe9c3,
  isBotAdmins: _0x5bed96,
  isAdmins: _0x39f419,
  reply: _0x31537e
}) => {
  try {
    if (!_0x54ad11[0x0]) {
      return _0x31537e("*_Please give me a text. Eg *.logo Mr Frank*_*");
    }
    let _0x54db66 = "*🌟 MATRIX-XMD LOGO MAKER 🌟*\n\n╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n*◈ᴛᴇxᴛ :* " + _0x1a845 + "\n╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼➻\n\n*🔢 Rᴇᴘʟʏ Tʜᴇ Nᴜᴍʙᴇʀ Yᴏᴜ Wᴀɴᴛ ➠*\n\n 1 ➠ Bʟᴀᴄᴋ Pɪɴᴋ\n 2 ➠ Bʟᴀᴄᴋ Pɪɴᴋ 2\n 3 ➠ Sɪʟᴠᴇʀ 3ᴅ\n 4 ➠ Nᴀʀᴜᴛᴏ\n 5 ➠ Dɪɢɪᴛᴀʟ Gʟɪᴛᴄʜ\n 6 ➠ Pɪxᴇʟ Gʟɪᴛᴄʜ\n 7 ➠ Cᴏᴍɪᴄ Sᴛʏʟᴇ\n 8 ➠ Nᴇᴏɴ Lɪɢʜᴛ\n 9 ➠ Fʀᴇᴇ Bᴇᴀʀ\n10 ➠ Dᴇᴠɪʟ Wɪɴɢꜱ\n11 ➠ Sᴀᴅ Gɪʀʟ\n12 ➠ Lᴇᴀᴠᴇꜱ\n13 ➠ Dʀᴀɢᴏɴ Bᴀʟʟ\n14 ➠ Hᴀɴᴅ Wʀɪᴛᴛᴇɴ\n15 ➠ Nᴇᴏɴ Lɪɢʜᴛ \n16 ➠ 3ᴅ Cᴀꜱᴛʟᴇ Pᴏᴘ\n17 ➠ Fʀᴏᴢᴇɴ ᴄʀɪꜱᴛᴍᴀꜱꜱ\n18 ➠ 3ᴅ Fᴏɪʟ Bᴀʟʟᴏɴꜱ\n19 ➠ 3ᴅ Cᴏʟᴏᴜʀꜰᴜʟ Pᴀɪɴᴛ\n20 ➠ Aᴍᴇʀɪᴄᴀɴ Fʟᴀɢ 3ᴅ\n\n> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡";
    const _0x294ace = {
      'newsletterJid': "120363304325601080@newsletter",
      'newsletterName': "🎃 MATRIX-M𝐃 🎃",
      'serverMessageId': 0x3e7
    };
    const _0x2c0fce = {
      'mentionedJid': [_0x4b737f.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': _0x294ace
    };
    const _0x4e723f = {
      'text': _0x54db66,
      'contextInfo': _0x2c0fce
    };
    let _0x2d6d27 = await _0x59727c.sendMessage(_0x1be204, _0x4e723f, {
      'quoted': _0xe0acbe
    });
    _0x59727c.ev.on("messages.upsert", async _0xf26b51 => {
      const _0x3ab765 = _0xf26b51.messages[0x0];
      if (!_0x3ab765.message || !_0x3ab765.message.extendedTextMessage) {
        return;
      }
      const _0x8754f0 = _0x3ab765.message.extendedTextMessage.text.trim();
      if (_0x3ab765.message.extendedTextMessage.contextInfo && _0x3ab765.message.extendedTextMessage.contextInfo.stanzaId === _0x2d6d27.key.id) {
        switch (_0x8754f0) {
          case '1':
            let _0x5e8f17 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x5e8f17.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '2':
            let _0x362960 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x362960.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '3':
            let _0x2bf66b = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=' + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x2bf66b.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '4':
            let _0x3e1a65 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=' + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x3e1a65.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '5':
            let _0x4fe078 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x4fe078.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '6':
            let _0x58fea6 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x58fea6.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '7':
            let _0x334ff1 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x334ff1.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '8':
            let _0x42d789 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x42d789.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '9':
            let _0x1ab098 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x1ab098.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '10':
            let _0x435db2 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x435db2.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '11':
            let _0x5e3334 = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=' + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x5e3334.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '12':
            let _0x42d786 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x42d786.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '13':
            let _0x19719e = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x19719e.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '14':
            let _0x135ada = await fetchJson('https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=' + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x135ada.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '15':
            let _0x181561 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x181561.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '16':
            let _0x58ef98 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x58ef98.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '17':
            let _0x52211b = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x52211b.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '18':
            let _0x21e2d7 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x21e2d7.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '19':
            let _0x4e4bbb = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x4e4bbb.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          case '20':
            let _0x30a120 = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=" + _0x1a845);
            await _0x59727c.sendMessage(_0x1be204, {
              'image': {
                'url': '' + _0x30a120.result.download_url
              },
              'caption': "> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Matrix-xmd ⚡"
            }, {
              'quoted': _0xe0acbe
            });
            break;
          default:
            _0x31537e("*_Invalid number.Please reply a valid number._*");
        }
      }
    });
  } catch (_0x16f7e1) {
    console.log(_0x16f7e1);
    _0x31537e('' + _0x16f7e1);
  }
});