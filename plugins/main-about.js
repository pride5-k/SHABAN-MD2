const config = require("../config");
const { cmd } = require("../command");

cmd({
  pattern: "about",
  alias: ["mrfrank"],
  react: "🇹🇿",
  desc: "Get owner description",
  category: "main",
  filename: __filename,
}, async (bot, message, args, extras) => {
  const {
    from,
    quoted,
    pushname,
    reply,
  } = extras;

  try {
    const separator = "━━━━━━━━━━━━━━━━━━━━━━━━";
    const readMore = String.fromCharCode(0x200e).repeat(4000); // Generates a long "Read More" effect
    const caption = `${separator}\n\n*👋 HELLO ${pushname || "User"} 😄*\n\n` +
      "*INTRODUCING TO YOU MATRIX-XMD MD😇*\n\n" +
      "A Versatile WhatsApp Based Multi Device Bot Created By Hans Tz from Tanzania.\n" +
      "Its sole purpose is to remove the burden or cost of purchasing data bundles to download Songs, Apps, Videos & Movies by using WhatsApp bundles.\n\n" +
      "*For More Visit*: https://wa.me/255760774888\n\n" +
      `${separator}\n${readMore}\n` +
      "*SOURCE CODE* ⛓️\n> https://github.com/mrhanstz/MATRIX-XMD\n\n" +
      "*FOLLOW OWNER* 🦋\n> https://github.com/mrhanstz/\n\n" +
      "*OWNER'S WHATSAPP* 🚀\n> https://wa.me/255760774888/?text=MATRIX-XMD+Fan+Here\n\n" +
      "*2ND DEVELOPER* 🦄\n> https://wa.me/265993702468/?text=MATRIX-XMD+Fan+Here\n\n" +
      "*SUPPORT CHANNEL* 🪄\n> https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31\n\n" +
      "*FOLLOW OWNER* 🤍\n> https://youtube.com/HANSTZ-TECH/\n\n" +
      `\`\`\`[RELEASE DATE - 3 January 2025]\`\`\`\n\n` +
      "> *Hans Tz*\n\n" +
      `${separator}`;

    await bot.sendMessage(from, {
      image: { url: config.ALIVE_IMG },
      caption,
    }, { quoted });
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
