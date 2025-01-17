function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
const config = require("../config");
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/, /wa\.me\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi, /https?:\/\/youtu\.be\/\S+/gi, /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi, /https?:\/\/fb\.me\/\S+/gi, /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi, /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': 'body'
}, async (_0x1dda84, _0x5d1197, _0x1d88a7, {
  from: _0x4868da,
  body: _0xe1bb16,
  sender: _0xee7c4f,
  isGroup: _0x568c29,
  isAdmins: _0x81e398,
  isBotAdmins: _0x45f63f
}) => {
  try {
    if (!_0x568c29 || _0x81e398 || !_0x45f63f) {
      return;
    }
    const _0x44ef71 = linkPatterns.some(_0x1eddea => _0x1eddea.test(_0xe1bb16));
    if (_0x44ef71 && config.DELETE_LINKS === "true") {
      await _0x1dda84.sendMessage(_0x4868da, {
        'delete': _0x5d1197.key
      }, {
        'quoted': _0x5d1197
      });
    }
  } catch (_0x56876a) {
    console.error(_0x56876a);
  }
});