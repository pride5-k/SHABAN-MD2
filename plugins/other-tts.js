

function hi() {
  console.log("Hello World!");
}
hi();
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");
const googleTTS = require('google-tts-api');
cmd({
  'pattern': "trt",
  'alias': ["translate"],
  'desc': "🌍 Translate text between languages",
  'react': '⚡',
  'category': 'other',
  'filename': __filename
}, async (_0x4a8d01, _0xf6ffa1, _0x3e17fe, {
  from: _0x3d8eef,
  q: _0x574a18,
  reply: _0x595457
}) => {
  try {
    const _0x3a5df8 = _0x574a18.split(" ");
    if (_0x3a5df8.length < 0x2) {
      return _0x595457("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x321123 = _0x3a5df8[0x0];
    const _0x311872 = _0x3a5df8.slice(0x1).join(" ");
    const _0xb39cad = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x311872) + '&langpair=en|' + _0x321123;
    const _0x2bf583 = await axios.get(_0xb39cad);
    const _0x335607 = _0x2bf583.data.responseData.translatedText;
    const _0x4561ba = "> *MATRIX-XMD TRANSLATION*\n\n> 🔤 *Original*: " + _0x311872 + "\n\n> 🔠 *Translated*: " + _0x335607 + "\n\n> 🌐 *Language*: " + _0x321123.toUpperCase();
    return _0x595457(_0x4561ba);
  } catch (_0x1ddf7b) {
    console.log(_0x1ddf7b);
    return _0x595457("⚠️ An error occurred data while translating the your text. Please try again later🤕");
  }
});
cmd({
  'pattern': "tts",
  'desc': "download songs",
  'category': 'download',
  'react': '👧',
  'filename': __filename
}, async (_0x259cc4, _0x1de0c0, _0x46e735, {
  from: _0x235bbc,
  quoted: _0x16b999,
  body: _0x5a13b6,
  isCmd: _0x2aebb2,
  command: _0x219243,
  args: _0x59b84f,
  q: _0x94e34f,
  isGroup: _0x3d85e9,
  sender: _0x137c5c,
  senderNumber: _0x240c1d,
  botNumber2: _0x4ef754,
  botNumber: _0x539868,
  pushname: _0x3814f0,
  isMe: _0x3d9a72,
  isOwner: _0x3afcc1,
  groupMetadata: _0x2eb301,
  groupName: _0x598d8a,
  participants: _0x9acc18,
  groupAdmins: _0x18ade9,
  isBotAdmins: _0x4d3f16,
  isAdmins: _0x12607b,
  reply: _0x115d2c
}) => {
  try {
    if (!_0x94e34f) {
      return _0x115d2c("Need some text. *Eg*.tts MATRIX-XMD");
    }
    const _0x43ff10 = googleTTS.getAudioUrl(_0x94e34f, {
      'lang': 'hi-IN',
      'slow': false,
      'host': "https://translate.google.com"
    });
    await _0x259cc4.sendMessage(_0x235bbc, {
      'audio': {
        'url': _0x43ff10
      },
      'mimetype': "audio/mpeg",
      'ptt': true
    }, {
      'quoted': _0x1de0c0
    });
  } catch (_0x28d4fc) {
    _0x115d2c('' + _0x28d4fc);
  }
});