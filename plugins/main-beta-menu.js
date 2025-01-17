const config = require("../config");
const { cmd, commands } = require("../command");

// Function to send menu message
async function sendMenuMessage(_client, from, caption, quoted) {
  await _client.sendMessage(
    from,
    {
      image: { url: "https://files.catbox.moe/x87n86.jpeg" },
      caption: caption,
      contextInfo: {
        mentionedJid: [quoted.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363304325601080@newsletter",
          newsletterName: "『 Mᴀᴛʀɪx-Xᴍᴅ 』",
          serverMessageId: 143,
        },
      },
    },
    { quoted }
  );
}

// General error handling function
async function handleError(err, reply) {
  console.log(err);
  reply(`Error: ${err}`);
}

// Beta Menu Command
cmd(
  {
    pattern: "betamenu",
    desc: "menu the bot",
    category: "menu",
    react: "📑",
    filename: __filename,
  },
  async (_client, _message, _data, params) => {
    try {
      const menuText = `
╔═❰ *${config.BOT_NAME}* ❱═══
┃➳┃ Owner : *${config.OWNER_NAME}*
┃➳┃ Baileys : *Multi Device*
┃➳┃ Type : *NodeJs*
┃➳┃ Platform : *Heroku*
┃➳┃ Mode : *[${config.MODE}]*
┃➳┃ Prefix : *[${config.PREFIX}]*
┃➳┃ Version : *1.0.3 Bᴇᴛᴀ*
╚═══════════════┈➳
╔══❰ *Menu List* ❱═══════
║➳║ ᴀɪᴍᴇɴᴜ
║➳║ ᴀɴɪᴍᴇᴍᴇɴᴜ
║➳║ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
║➳║ ꜰᴜɴᴍᴇɴᴜ
║➳║ ᴅʟᴍᴇɴᴜ
║➳║ ʟɪsᴛᴍᴇɴᴜ
║➳║ ᴍᴀɪɴᴍᴇɴᴜ
║➳║ ɢʀᴏᴜᴘᴍᴇɴᴜ
║➳║ ᴀʟʟᴍᴇɴᴜ
║➳║ ᴏᴡɴᴇʀᴍᴇɴᴜ
║➳║ ᴏᴛʜᴇʀᴍᴇɴᴜ
║➳║ Mᴀᴛʀɪx-Xᴍᴅ
╚━══════━════─━─➳`;

      await sendMenuMessage(_client, params.from, menuText, params.quoted);

      // Sending audio menu
      await _client.sendMessage(
        params.from,
        {
          audio: {
            url: "https://files.catbox.moe/rswza4.mp3",
          },
          mimetype: "audio/mp4",
          ptt: true,
        },
        { quoted: params.quoted }
      );
    } catch (err) {
      await handleError(err, params.reply);
    }
  }
);

// Download Menu Command
cmd(
  {
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗳️",
    filename: __filename,
  },
  async (_client, _message, _data, params) => {
    try {
      const dlMenuText = `
╔══❰ *Download Menu* ❱════
║➳║ facebook
║➳║ mediafire
║➳║ tiktok
║➳║ twitter
║➳║ Insta
║➳║ apk
║➳║ img
║➳║ spotify
║➳║ play
║➳║ ytmp3
║➳║ ytmp4
╚═══════════════┈➳
> ${config.DESCRIPTION}`;

      await sendMenuMessage(_client, params.from, dlMenuText, params.quoted);
    } catch (err) {
      await handleError(err, params.reply);
    }
  }
);

// Group Menu Command
cmd(
  {
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "👥",
    filename: __filename,
  },
  async (_client, _message, _data, params) => {
    try {
      const groupMenuText = `
╔══❰ *Group Menu* ❱════
║➳║ grouplink
║➳║ kick
║➳║ add
║➳║ promote
║➳║ demote
║➳║ revoke
║➳║ tagall
╚━══════════─━─➳

> ${config.DESCRIPTION}`;

      await sendMenuMessage(_client, params.from, groupMenuText, params.quoted);
    } catch (err) {
      await handleError(err, params.reply);
    }
  }
);

// Fun Menu Command
cmd(
  {
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "☺",
    filename: __filename,
  },
  async (_client, _message, _data, params) => {
    try {
      const funMenuText = `
╔══❰ *Fun Menu* ❱════
║➳║ insult
║➳║ pickup
║➳║ hack
║➳║ joke
║➳║ kiss
║➳║ hifi
║➳║ hug
╚━═════━════─━─➳

> ${config.DESCRIPTION}`;

      await sendMenuMessage(_client, params.from, funMenuText, params.quoted);
    } catch (err) {
      await handleError(err, params.reply);
    }
  }
);

// Other Menu Command
cmd(
  {
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename,
  },
  async (_client, _message, _data, params) => {
    try {
      const otherMenuText = `
╔══❰ *Other Menu* ❱════
║➳║ weather
║➳║ news
║➳║ fancy
║➳║ define
║➳║ githubstalk
║➳║ yts
║➳║ wikipedia
╚━═════━════─━─➳

> ${config.DESCRIPTION}`;

      await sendMenuMessage(_client, params.from, otherMenuText, params.quoted);
    } catch (err) {
      await handleError(err, params.reply);
    }
  }
);
