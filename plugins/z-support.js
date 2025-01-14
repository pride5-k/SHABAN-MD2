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
    desc: "shaban menu",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ shaban (🇵🇰)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *V.5* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

⟣──────────────────⟢

> Տᕼᗩᗷᗩᑎ-ՏOᗷ᙭-ᗰᗪ ᗷOT

⟣──────────────────⟢
${readMore}
\`CHANNEL🛠️\`
https://whatsapp.com/channel/0029VazjYjoDDmFZTZ9Ech3O

\`GROUP\` 👥
https://whatsapp.com/channel/0029VazjYjoDDmFZTZ9Ech3O

\`𝐌𝐑 𝐒𝐇𝐀𝐁𝐀𝐍\` *Dev🧑‍💻*
wa.me/923059395959?text=Support!

⟣──────────────────⟢

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://qu.ax/XmYZg.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: '『 𝐒𝐇𝐀𝐁𝐀𝐍 𝐒𝐎𝐁𝐗 𝐌𝐃 』',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3
        await conn.sendMessage(from, { //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/blob/main/audios/subzero-menu.mp3
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-theone.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
