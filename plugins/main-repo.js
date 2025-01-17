
function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "repo",
  'alias': ['sc', "script", "info"],
  'desc': "Info about the bot repository",
  'category': 'main',
  'react': "🗂️",
  'filename': __filename
}, async (_0x3971cd, _0xcb4fa5, _0x20f089, {
  from: _0x19995a,
  quoted: _0x742871,
  body: _0x57816e,
  isCmd: _0x205269,
  command: _0x1d2284,
  args: _0x12b9c2,
  q: _0x530a94,
  isGroup: _0x123847,
  sender: _0x1ed810,
  senderNumber: _0x146fff,
  botNumber2: _0x4cc94f,
  botNumber: _0x482c07,
  pushname: _0x35213c,
  isMe: _0x34969f,
  isOwner: _0x895177,
  groupMetadata: _0x14ccaf,
  groupName: _0x3468fc,
  participants: _0x55bede,
  groupAdmins: _0x20e822,
  isBotAdmins: _0x555436,
  isAdmins: _0x26bca2,
  reply: _0xcbbddf
}) => {
  try {
    await _0x3971cd.sendMessage(_0x19995a, {
      'image': {
        'url': 'https://files.catbox.moe/perl56.jpeg'
      },
      'caption': "*Hello There MATRIX W.A BOT User! 😄👋* \n\n> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, Matrix WhatsApp Bot. 🎗️\n\n*Thanks for using Matrix Xmd🌹🫶* \n\n> Don't forget to star & fork the repo🌟🍴\n\nhttps://github.com/Mrhanstz/MATRIX-MD",
      'contextInfo': {
        'mentionedJid': [_0x20f089.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "『 Mᴀᴛʀɪx-Xᴍᴅ 』",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0xcb4fa5
    });
    await _0x3971cd.sendMessage(_0x19995a, {
      'audio': {
        'url': "https://files.catbox.moe/rswza4.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0xcb4fa5
    });
  } catch (_0x3a9329) {
    console.log(_0x3a9329);
    _0xcbbddf('' + _0x3a9329);
  }
});