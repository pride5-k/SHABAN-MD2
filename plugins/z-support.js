

















































const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: "MARTIX-XMD menu",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╔━═══━════─━─⟢ 
 | ➳ |*ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ғʀᴀɴᴋ (🇿🇼)*
 | ➳ |*ᴍᴏᴅᴇ* : *${config.MODE}*
 | ➳ |*ᴘʀᴇғɪx* : *${config.PREFIX}*
 | ➳ |*ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
 | ➳ |*ᴠᴇʀsɪᴏɴ* : *1.0.4* ⚡
 | ➳ |*ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
╚════━════─━─⟢

       ⟣───────────⟢
        |   > Mᴀᴛʀɪx-Xᴍᴅ
       ⟣───────────⟢
${readMore}
⟣─────────⟢
|  \`CHANNEL🛠️\`
|─────────⟢
|──────────────────
https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D
⟣──────────────────⟢

⟣────────⟢
|   \`GROUP\` 👥
|─────────⟢
|─────────⟢─────────
https://chat.whatsapp.com/InsR5qk3cBsG2781A6uxcO
⟣────────⟢─────────⟢

⟣─────────────⟢
| \`Mr Frank OFC\` *Dev🧑‍💻*
|──────────────⟢
|──────────────⟢
|wa.me/263719647303?text=Support!
⟣───────────────⟢
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/perl56.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '『 Mᴀᴛʀɪx-Xᴍᴅ 』',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send https://files.catbox.moe/rswza4.mp3
        await conn.sendMessage(from, { //https://files.catbox.moe/rswza4.mp3
            audio: { url: 'https://files.catbox.moe/rswza4.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  MARTIX-XMD SC BY MR HANSTZ
