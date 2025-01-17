
function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "loli",
  'alias': ["lolii"],
  'desc': "Fetch a random anime girl image.",
  'category': "fun",
  'react': '🐱',
  'filename': __filename
}, async (_0x59d540, _0x3c1983, _0x5cc46d, {
  from: _0x15fe9c,
  quoted: _0x5006bd,
  body: _0x3b3b46,
  isCmd: _0x3832a5,
  command: _0x45db8c,
  args: _0x1bf564,
  q: _0x9f959a,
  isGroup: _0x2cc286,
  sender: _0x38458f,
  senderNumber: _0x3b69b8,
  botNumber2: _0xa81af2,
  botNumber: _0x107e87,
  pushname: _0x47e04a,
  isMe: _0x315d92,
  isOwner: _0x530f8a,
  groupMetadata: _0x45f57d,
  groupName: _0x1b5ffd,
  participants: _0x2b67e0,
  groupAdmins: _0x1338e7,
  isBotAdmins: _0x154cf5,
  isAdmins: _0x3b198b,
  reply: _0x3aee30
}) => {
  try {
    const _0x130737 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x3251d7 = _0x130737.data;
    await _0x59d540.sendMessage(_0x15fe9c, {
      'image': {
        'url': _0x3251d7.url
      },
      'caption': "👸 *Mᴀᴛʀɪx-Xᴍᴅ RANDOM ANIME GIRL IMAGES* 👸\n\n\n *🧬 © Mᴀᴛʀɪx-Xᴍᴅ BY 𝐇𝐀𝐍𝐒𝐓𝐙*"
    }, {
      'quoted': _0x3c1983
    });
  } catch (_0x36f8c1) {
    console.log(_0x36f8c1);
    _0x3aee30("*Error Fetching Anime Girl image*: " + _0x36f8c1.message);
  }
});