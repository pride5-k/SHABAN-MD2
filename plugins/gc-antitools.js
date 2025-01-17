
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
const config = require("../config");
cmd({
  'on': "body"
}, async (_0x29e7b2, _0x428e2c, _0x40de91, {
  from: _0x1b42b1,
  body: _0x1b8105,
  isGroup: _0x301dc1,
  isAdmins: _0x245384,
  isBotAdmins: _0x2b918d,
  reply: _0x148341,
  sender: _0x3c7447
}) => {
  try {
    const _0x42c924 = ["wtf", "mia", "xxx", 'fuck', "sex", 'ass', "pussy", "ponnaya", "hutto"];
    if (!_0x301dc1 || _0x245384 || !_0x2b918d) {
      return;
    }
    const _0x87044 = _0x1b8105.toLowerCase();
    const _0x277ec4 = _0x42c924.some(_0xf52b9e => _0x87044.includes(_0xf52b9e));
    if (_0x277ec4 & config.ANTI_BAD_WORD === "true") {
      await _0x29e7b2.sendMessage(_0x1b42b1, {
        'delete': _0x428e2c.key
      }, {
        'quoted': _0x428e2c
      });
      await _0x29e7b2.sendMessage(_0x1b42b1, {
        'text': "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫"
      }, {
        'quoted': _0x428e2c
      });
    }
  } catch (_0x2ea503) {
    console.error(_0x2ea503);
    _0x148341("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/, /wa\.me\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi, /https?:\/\/youtu\.be\/\S+/gi, /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi, /https?:\/\/fb\.me\/\S+/gi, /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi, /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': 'body'
}, async (_0x3db47a, _0x572cfa, _0x5b8702, {
  from: _0x33e8f0,
  body: _0x2ed5e1,
  sender: _0x4c2bcf,
  isGroup: _0x4f06c4,
  isAdmins: _0x212aa8,
  isBotAdmins: _0x195837,
  reply: _0x218c22
}) => {
  try {
    if (!_0x4f06c4 || _0x212aa8 || !_0x195837) {
      return;
    }
    const _0x2adf2b = linkPatterns.some(_0x2fe573 => _0x2fe573.test(_0x2ed5e1));
    if (_0x2adf2b && config.ANTI_LINK === "true") {
      await _0x3db47a.sendMessage(_0x33e8f0, {
        'delete': _0x572cfa.key
      }, {
        'quoted': _0x572cfa
      });
      await _0x3db47a.sendMessage(_0x33e8f0, {
        'text': "⚠️ Links are not allowed in this group.\n@" + _0x4c2bcf.split('@')[0x0] + " has been removed. 🚫",
        'mentions': [_0x4c2bcf]
      }, {
        'quoted': _0x572cfa
      });
      await _0x3db47a.groupParticipantsUpdate(_0x33e8f0, [_0x4c2bcf], "remove");
    }
  } catch (_0x41254d) {
    console.error(_0x41254d);
    _0x218c22("An error occurred while processing the message.");
  }
});