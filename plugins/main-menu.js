

function hi() {
  console.log("Hello World!");
}
hi();
const config = require('../config');
const {
  cmd,
  commands
} = require('../command');
const {
  runtime
} = require('../lib/functions');
const more = String.fromCharCode(0x200e);
const readMore = more.repeat(0xfa1);
cmd({
  'pattern': 'menu',
  'desc': "matrix menu",
  'category': 'menu',
  'react': '📑',
  'filename': __filename
}, async (_0xb78071, _0x3fa35b, _0x205d0a, {
  from: _0x23cb47,
  quoted: _0x3c1939,
  body: _0x586257,
  isCmd: _0x3a2faf,
  command: _0x3cf7fe,
  args: _0x24e8a0,
  q: _0xbf79e9,
  isGroup: _0x3e1fec,
  sender: _0x139b99,
  senderNumber: _0x3ae162,
  botNumber2: _0x5c324c,
  botNumber: _0x48d0c0,
  pushname: _0x5e8a0f,
  isMe: _0x308ba8,
  isOwner: _0xb5a86f,
  groupMetadata: _0xbb8b43,
  groupName: _0x38c4c8,
  participants: _0xf67bda,
  groupAdmins: _0x5a8ec4,
  isBotAdmins: _0x793c12,
  isAdmins: _0x58819d,
  reply: _0x40073d
}) => {
  try {
    let _0x8c7ef4 = `
╔═\`\`\` ${config.BOT_NAME} \`\`\`━─➳
║➳║ᴄʀᴇᴀᴛᴏʀ* : *ʜᴀɴs ᴛᴢ (🇹🇿)*
║➳║ᴍᴏᴅᴇ* : *${config.MODE}*
║➳║ᴘʀᴇғɪx* : *${config.PREFIX}*
║➳║ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 0x400 / 0x400)}MB
║➳║ᴠᴇʀsɪᴏɴ* : *1.0.4* ⚡
║➳║ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
╚━━━━═══━════━════─━─➳

⟣──────────────────⟢
     > 𝐌𝐀𝐓𝐑𝐈𝐗 𝐗𝐌𝐃 𝐁𝐎𝐓 2𝐎25
     > 𝑩𝒀 𝑯𝑨𝑵𝑺 𝑻𝒁 𝒇𝒓𝒐𝒎 𝑻𝒂𝒏𝒛𝒂𝒏𝒊𝒂
⟣──────────────────⟢
${readMore}
╔━━═══════━════─━─➳
║*🎃 \`𝐌𝐀𝐓𝐑𝐈𝐗-𝐗𝐌𝐃-𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄𝐑\`
╔━━═══════━════─━─➳
║➳║ ғʙ*
║➳║ ɪɴꜱᴛᴀ*
║➳║ sᴘᴏᴛɪғʏ*
║➳║ ᴠɪᴅᴇᴏ*
║➳║ ɢᴅʀɪᴠᴇ*
║➳║ ᴛᴡɪᴛᴛᴇʀ*
║➳║ ᴛᴛ*
║➳║ ᴍᴇᴅɪᴀғɪʀᴇ*
║➳║ ꜱᴏɴɢ*
║➳║ ᴘʟᴀʏ*
║➳║ ᴘʟᴀʏ2*
║➳║ ᴘʟᴀʏ3*
║➳║ ᴠɪᴅᴇᴏ*
║➳║ ᴠɪᴅᴇᴏ2*
║➳║ ᴠɪᴅᴇᴏ3*
║➳║ ɢɪᴛᴄʟᴏɴᴇ*
║➳║ ɪᴍɢ*
║➳║ ᴀᴘᴋ*
║➳║ ʏᴛᴍᴘ3*
║➳║ ʏᴛᴍᴘ4*
║➳║ ᴘɪɴᴛᴇʀᴇsᴛ*
║➳║ ʙᴀɪsᴄᴏᴘᴇ*
║➳║ ɢɪɴɪsɪsɪʟᴀ*
╚━━════════━═══─━─➳

╔━━════━════─━─➳
║     \`𝐒𝐄𝐀𝐑𝐂𝐇-𝐂𝐌𝐃𝐒\`
╔━━════━════─━─➳
║➳║ ʏᴛꜱ*
║➳║ ʏᴛᴀ*
║➳║ ɢᴏᴏɢʟᴇ*
║➳║ ʟᴏʟɪ*
║➳║ ɢɪᴛsᴛᴀʟᴋ*
║➳║ ᴡɪᴋɪᴘᴇᴅɪᴀ*
║➳║ ᴍᴏᴠɪᴇɪɴғᴏ*
║➳║ ɢᴏᴏɢʟᴇ*
║➳║ ʙɪʙʟᴇ*
║➳║ ᴍᴏᴠɪᴇ*
║➳║ ᴡᴇᴀᴛʜᴇʀ*
║➳║ ssᴡᴇʙ*
║➳║ ɴᴘᴍ*
╚━━═════━═══─━─➳
${readMore}
╔━━════━════─━─➳
║        \`𝐀𝐈-𝐂𝐌𝐃𝐒\`
╔━━════━════─━─➳
║➳║ ɢᴘᴛ*
║➳║ ᴀɪ*
║➳║ ᴍᴀᴛʀɪx*
║➳║ ɢᴇᴍɪɴɪ*
║➳║ ʙɪɴɢ*
║➳║ ᴄᴏᴘɪʟᴏᴛ*
║➳║ ᴄʟᴀᴜᴅᴇᴀɪ*
║➳║ ᴀʀᴛ*
║➳║ ᴍɪsᴛʀᴀᴀɪ*
║➳║ ᴍᴇᴛᴀᴀɪ*
║➳║ ᴄʜᴀᴛɢᴘᴛ*
║➳║ ɢᴘᴛ3*
║➳║ ɢᴘᴛ4*
║➳║ ɢᴘᴛ4ᴏ*
║➳║ ʟʟᴀᴍᴀ2*
║➳║ ʟʟᴀᴍᴀ3*
║➳║ ғʟᴜx*
║➳║ ɪᴍᴀɢɪɴᴇ*
║➳║ ᴅᴀʟʟᴇ*
╚━━═════━═══─━─➳

╔━━════━════─━─➳
║    \`𝑶𝑾𝑵𝑬𝑹--𝑪𝑴𝑫𝐒\`
╔━━════━════─━─➳
║➳║ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
║➳║ sᴇᴛᴛɪɴɢs*
║➳║ ᴏᴡɴᴇʀ*
║➳║ ʀᴇᴘᴏ*
║➳║ ʙᴏᴛsᴇᴛᴛɪɴɢs*
║➳║ ꜱʏꜱᴛᴇᴍ*
║➳║ ᴜᴘᴅᴀᴛᴇ*
║➳║ ꜱᴛᴀᴛs*
╚━━═════━═══─━─➳

╔━━════━════─━─➳
║    \`𝐔𝐓𝐈𝐋𝐈𝐓𝐘-𝐂𝐌𝐃𝐒.\` 
╔━━════━════─━─➳
║➳║ ᴅɪʀ*
║➳║ ʙɪᴛᴇ*
║➳║ ʙᴏᴏᴋᴍᴀʀᴋ*
║➳║ ᴇᴍᴏᴊɪ*
║➳║ ɴᴇᴡs*
║➳║ ᴅᴇᴛᴇᴄᴛᴏʀ*
║➳║ ᴅᴇᴠɪᴄᴇɪᴅ*
║➳║ ᴇxᴇᴄᴜᴛᴇ*
║➳║ ɪɴᴠɪᴛᴇ*
╚━━════━════─━─➳
${readMore}
╔━━════━════─━─➳
║    \`𝐆𝐀𝐌𝐄𝐒-𝐂𝐌𝐃𝐒\`
╔━━════━════─━─➳
║➳║ ɴᴏʀᴛᴏɴ*
║➳║ ɪᴄᴇ*
║➳║ ᴍɪɴᴇ*
║➳║ ᴇᴘɪᴄ*
║➳║ ᴄᴏɴɴᴏʀ*
╚━━════━════─━─➳

╔━━════━════─━─➳
║     \`𝐆𝐑𝐎𝐔𝐏-𝐂𝐌𝐃𝐒\`
╔━━════━════─━─➳
║➳║ ᴍᴇᴍʙᴇʀ*
║➳║ ʙᴏᴛᴘɪɴɢ*
║➳║ ᴅᴇᴛᴇᴄᴛᴏʀ*
║➳║ ᴍᴇᴍʙᴇʀ**
║➳║ ᴠᴏᴛᴇ*
╚━━════━════─━─➳

⟣───────────────⟢`;
    await _0xb78071.sendMessage(_0x23cb47, {
      'image': {
        'url': "https://files.catbox.moe/perl56.jpeg"
      },
      'caption': _0x8c7ef4,
      'contextInfo': {
        'mentionedJid': [_0x205d0a.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363304325601080@newsletter',
          'newsletterName': "『 𝐌𝐀𝐓𝐑𝐈𝐗-𝐗𝐌𝐃 』 ",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x3fa35b
    });
    await _0xb78071.sendMessage(_0x23cb47, {
      'audio': {
        'url': 'https://files.catbox.moe/rswza4.mp3'
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0x3fa35b
    });
  } catch (_0x48e21c) {
    console.log(_0x48e21c);
    _0x40073d('' + _0x48e21c);
  }
});
// Just Deploy Bro
// Fuck you