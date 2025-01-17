
function hi() {
  console.log("Hello World!");
}
hi();
const fetch = require("node-fetch");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "tiktok2",
  'alias': ["tt2", "tiktokdl2", 'ttdown2', "tiktokvid2", "ttdl"],
  'desc': "Download videos or images from TikTok.",
  'react': '📥',
  'category': "tools",
  'filename': __filename
}, async (_0x572eda, _0x5725ab, _0x46523f, {
  from: _0x45c4f6,
  args: _0x550065,
  reply: _0x38160c
}) => {
  try {
    const _0x17f2c5 = _0x550065[0x0];
    if (!_0x17f2c5 || !_0x17f2c5.startsWith("http")) {
      return _0x38160c("Please provide a valid TikTok link.\n\n*Usage Example:*\n\n.tt2 <TikTok video URL>");
    }
    const _0x7dacc7 = await fetch('https://api.yanzbotz.live/api/downloader/tiktok?url=' + encodeURIComponent(_0x17f2c5) + "&apiKey=yanzdev");
    const _0x15a6cb = await _0x7dacc7.json();
    if (!_0x15a6cb || !_0x15a6cb.result) {
      return _0x38160c("Sorry, I couldn't fetch the TikTok content. Please check the link and try again.");
    }
    const _0x596701 = _0x15a6cb.result;
    const _0x4e57a1 = "╔════❰ *MATRIX-XMD* 〕━━━┈⊷\n┃▸╔═══════════\n┃➳┃๏ *TIKTOK DOWNLOADER*\n┃➳╚═══════════─➳\n╚━═══━━═══━════─━─➳\n╔═══❰ *Post Details* ❱════\n║๏ *Type:* " + (_0x596701.type || "N/A") + "\n║๏ *Name:* " + (_0x596701.name || "N/A") + "\n║๏ *Username:* " + (_0x596701.username || 'N/A') + "\n║๏ *Views:* " + (_0x596701.views || 0x0) + "\n║๏ *Likes:* " + (_0x596701.likes || 0x0) + "\n║๏ *Comments:* " + (_0x596701.comments || 0x0) + "\n║๏ *Favorites:* " + (_0x596701.favorite || 0x0) + "\n║๏ *Shares:* " + (_0x596701.shares || 0x0) + "    \n║๏ *Description:* " + (_0x596701.description || "N/A") + "    \n╚━══════━════─━─➳\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʙᴢᴇʀᴏ";
    if (_0x596701.type === "video") {
      await _0x572eda.sendMessage(_0x45c4f6, {
        'video': {
          'url': _0x596701.video["no-watermark"]
        },
        'caption': _0x4e57a1
      }, {
        'quoted': _0x46523f
      });
    } else {
      if (_0x596701.type === "image") {
        for (const [_0x1ac338, _0x5746de] of (_0x596701.image || []).entries()) {
          await _0x572eda.sendMessage(_0x45c4f6, {
            'image': {
              'url': _0x5746de
            },
            'caption': "*💜 Image:* " + (_0x1ac338 + 0x1) + "\n\n" + _0x4e57a1
          }, {
            'quoted': _0x46523f
          });
        }
      } else {
        return _0x38160c("Sorry, I couldn't process this type of TikTok content.");
      }
    }
  } catch (_0x1aefb6) {
    console.error("Error in TikTok command:", _0x1aefb6);
    _0x38160c("An error occurred while processing your request. Please try again later.");
  }
});