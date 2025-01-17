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
  'pattern': "lyrics",
  'alias': ["liri", "lyric"],
  'react': "🎙️",
  'desc': "Get song lyrics.",
  'category': "music",
  'filename': __filename
}, async (_0x177263, _0x4f8bba, _0x2b7c95, {
  from: _0x1d3955,
  quoted: _0x21ae20,
  body: _0xda4f0e,
  isCmd: _0x49f44f,
  command: _0x4060ca,
  args: _0x5031a4,
  q: _0x189192,
  isGroup: _0x175708,
  sender: _0x419ffe,
  senderNumber: _0x157ecb,
  botNumber2: _0x1f4ec6,
  botNumber: _0x334a4a,
  pushname: _0x3f228b,
  isMe: _0x3fee67,
  isOwner: _0x3d7c8c,
  groupMetadata: _0x4cbf24,
  groupName: _0x5edbbc,
  participants: _0x538ec0,
  groupAdmins: _0x3dc8e3,
  isBotAdmins: _0x2c3f7c,
  isAdmins: _0x1cc23d,
  reply: _0x35acaf
}) => {
  try {
    if (!_0x189192) {
      return _0x35acaf("Please provide a song title or artist name.");
    }
    let _0x12c307 = await fetchJson('https://api.giftedtech.web.id/api/search/lyrics?apikey=gifted&query=' + _0x189192);
    if (!_0x12c307.result) {
      return _0x35acaf("No lyrics found for that song.");
    }
    const _0x3f5f44 = _0x12c307.result;
    const _0x45a7cf = "    *LYRICS FOUND!*\n \n> © Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ 📂\n\n" + _0x3f5f44;
    return _0x35acaf(_0x45a7cf);
  } catch (_0x2f3466) {
    console.error(_0x2f3466);
    _0x35acaf("An error occurred while fetching lyrics.");
  }
});