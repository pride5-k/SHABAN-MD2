
function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const fetch = require("node-fetch");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "ship",
  'alias': ["cup", "love"],
  'desc': "Randomly pairs the command user with another group member.",
  'react': '❤️',
  'category': "fun",
  'filename': __filename
}, async (_0x24a493, _0x4690d3, _0x347077, {
  from: _0x5dbe39,
  isGroup: _0x1373f2,
  groupMetadata: _0x47ffe8,
  reply: _0x4efe86
}) => {
  try {
    if (!_0x1373f2) {
      return _0x4efe86("This command can only be used in groups.");
    }
    const _0x354ac7 = _0x47ffe8.participants.map(_0x2bdd8c => _0x2bdd8c.id);
    if (_0x354ac7.length < 0x2) {
      return _0x4efe86("Not enough members to pair.");
    }
    const _0x33ffdf = _0x347077.sender;
    let _0x11ce2a;
    do {
      _0x11ce2a = _0x354ac7[Math.floor(Math.random() * _0x354ac7.length)];
    } while (_0x11ce2a === _0x33ffdf);
    const _0xf025b1 = '@' + _0x33ffdf.split('@')[0x0] + " ❤️ " + ('@' + _0x11ce2a.split('@')[0x0]) + "\nCongratulations 💖🍻";
    await _0x24a493.sendMessage(_0x5dbe39, {
      'text': _0xf025b1,
      'contextInfo': {
        'mentionedJid': [_0x33ffdf, _0x11ce2a],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "Matrix-Xmd",
          'serverMessageId': 0x8f
        }
      }
    });
  } catch (_0x184458) {
    console.error("Error in ship command:", _0x184458);
    _0x4efe86("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': "insult",
  'desc': "Get a random insult",
  'category': "fun",
  'react': '🤥'
}, async (_0x357ddd, _0x209b2e) => {
  try {
    let _0x1b8745 = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
    let _0x1feaa5 = _0x1b8745.data;
    if (!_0x1feaa5 || !_0x1feaa5.insult) {
      return _0x209b2e.reply("Unable to retrieve an insult. Please try again later.");
    }
    let _0x58cac5 = _0x1feaa5.insult;
    return _0x209b2e.reply("*Insult:* " + _0x58cac5);
  } catch (_0x33ffe1) {
    _0x209b2e.reply("Error: " + (_0x33ffe1.message || _0x33ffe1));
  }
});
cmd({
  'pattern': 'joke',
  'desc': "😂 Get a random joke",
  'react': '🤣',
  'category': "fun",
  'filename': __filename
}, async (_0x317b52, _0x38f6ac, _0x28306f, {
  from: _0x32753d,
  q: _0x5e984a,
  reply: _0x5160e5
}) => {
  try {
    const _0x45dfb8 = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const _0x3db1e4 = _0x45dfb8.data;
    const _0x2a61f1 = "\n\n😂 *Here's a random joke for you!* 😂\n\n*" + _0x3db1e4.setup + "*\n\n" + _0x3db1e4.punchline + " 😄\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐇𝐀𝐍𝐒𝐓𝐙*";
    return _0x5160e5(_0x2a61f1);
  } catch (_0x26d2eb) {
    console.log(_0x26d2eb);
    return _0x5160e5("⚠️ En Error Appears.");
  }
});
cmd({
  'pattern': "fact",
  'desc': "🧠 Get a random fun fact",
  'react': '🧠',
  'category': 'fun',
  'filename': __filename
}, async (_0x134419, _0x4d112e, _0x57e1c2, {
  from: _0x30aa8d,
  q: _0x2b6fba,
  reply: _0x4f98d2
}) => {
  try {
    const _0x2816ea = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    const _0x43241b = _0x2816ea.data.text;
    const _0x21bf87 = "\n\n🧠 *Matrix Xmd Random Fun Fact* 🧠\n\n" + _0x43241b + "\n\nIsn't that interesting? 😄\n\n";
    return _0x4f98d2(_0x21bf87);
  } catch (_0x232707) {
    console.log(_0x232707);
    return _0x4f98d2("⚠️ An error occurred while fetching a fun fact. Please try again later.");
  }
});
cmd({
  'pattern': "fancy",
  'alias': ["font", "style"],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': 'tools',
  'filename': __filename
}, async (_0x3bc416, _0x156957, _0x323e96, {
  from: _0x15025f,
  quoted: _0x136e18,
  body: _0xc4e90a,
  args: _0x3635bd,
  q: _0x551408,
  reply: _0x5f5a38
}) => {
  try {
    if (!_0x551408) {
      return _0x5f5a38("Please provide text to convert into fonts. Eg .fancy Mr Frank");
    }
    let _0x4af885 = await axios.get("https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x551408));
    let _0x5cf408 = _0x4af885.data;
    if (!_0x5cf408.status) {
      return _0x5f5a38("Error fetching fonts. Please try again later.");
    }
    let _0xaed5d0 = _0x5cf408.result.map(_0x596b4a => '*' + _0x596b4a.name + ":*\n" + _0x596b4a.result).join("\n\n");
    let _0x2fc699 = "*Matrix Xmd FANCY FONTS*:\n\n" + _0xaed5d0 + "\n\n> *© Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*";
    await _0x3bc416.sendMessage(_0x15025f, {
      'text': _0x2fc699,
      'contextInfo': {
        'mentionedJid': [_0x323e96.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363304325601080@newsletter',
          'newsletterName': "ᴍʀ ғʀᴀɴᴋ ᴏғᴄ",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x156957
    });
  } catch (_0x35a8a2) {
    console.error(_0x35a8a2);
    _0x5f5a38("An error occurred while fetching fonts.");
  }
});
cmd({
  'pattern': "pickupline",
  'alias': ["pickup"],
  'desc': "Get a random pickup line from the API.",
  'react': '💬',
  'category': 'fun',
  'filename': __filename
}, async (_0x6f502e, _0x24fcc9, _0x15ff3b, {
  from: _0x3c53cb,
  reply: _0x1e4fcd
}) => {
  try {
    const _0x135d3d = await fetch('https://api.popcat.xyz/pickuplines');
    if (!_0x135d3d.ok) {
      throw new Error("API request failed with status " + _0x135d3d.status);
    }
    const _0x66ddb5 = await _0x135d3d.json();
    console.log("JSON response:", _0x66ddb5);
    const _0xc2ae7f = "*Here's a pickup line for you:*\n\n\"" + _0x66ddb5.pickupline + "\"\n\n> *© Dropped By HansTz*";
    await _0x6f502e.sendMessage(_0x3c53cb, {
      'text': _0xc2ae7f
    }, {
      'quoted': _0x15ff3b
    });
  } catch (_0x38c82f) {
    console.error("Error in pickupline command:", _0x38c82f);
    _0x1e4fcd("Sorry, something went wrong while fetching the pickup line. Please try again later.");
  }
});
cmd({
  'pattern': "character",
  'alias': ["char"],
  'desc': "Check the character of a mentioned user.",
  'react': '🔥',
  'category': "fun",
  'filename': __filename
}, async (_0x30d806, _0xefdbee, _0x522086, {
  from: _0x207a11,
  isGroup: _0x39b8a3,
  text: _0x26c657,
  reply: _0xb9d8b8
}) => {
  try {
    if (!_0x39b8a3) {
      return _0xb9d8b8("This command can only be used in groups.");
    }
    const _0x161736 = _0x522086.message.extendedTextMessage?.["contextInfo"]?.["mentionedJid"]?.[0x0];
    if (!_0x161736) {
      return _0xb9d8b8("Please mention a user whose character you want to check.");
    }
    const _0x173f7e = ["Sigma", "Generous", "Grumpy", "Overconfident", "Obedient", "Good", 'Simp', 'Kind', "Patient", 'Pervert', "Cool", "Helpful", "Brilliant", 'Sexy', "Hot", "Gorgeous", 'Cute'];
    const _0xb61e2d = _0x173f7e[Math.floor(Math.random() * _0x173f7e.length)];
    const _0x51ba9f = "Character of @" + _0x161736.split('@')[0x0] + " is *" + _0xb61e2d + "* 🔥⚡";
    await _0x30d806.sendMessage(_0x207a11, {
      'text': _0x51ba9f,
      'mentions': [_0x161736]
    }, {
      'quoted': _0x522086
    });
  } catch (_0x1da910) {
    console.error("Error in character command:", _0x1da910);
    _0xb9d8b8("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': "truth",
  'alias': ['t', "truthquestion"],
  'react': '❔',
  'desc': "Get a random truth question.",
  'category': "fun",
  'use': ".truth",
  'filename': __filename
}, async (_0x455177, _0x536aa8, _0x737db3, {
  from: _0x4295da,
  args: _0x41a582,
  reply: _0x316147
}) => {
  try {
    _0x316147("*🔍 Fetching a truth question...*");
    const _0x582d89 = await axios.get("https://api.davidcyriltech.my.id/truth");
    if (!_0x582d89.data || !_0x582d89.data.success) {
      return _0x316147("❌ Failed to fetch a truth question. Please try again later.");
    }
    const _0x31dfa3 = _0x582d89.data.question;
    if (_0x31dfa3) {
      _0x316147("*Truth Question:* " + _0x31dfa3);
    }
  } catch (_0x4f56dd) {
    console.error(_0x4f56dd);
    _0x316147("❌ An error occurred while fetching the truth question.");
  }
});
cmd({
  'pattern': "dare",
  'alias': ['d', "darequestion"],
  'react': '🔥',
  'desc': "Get a random dare question.",
  'category': 'fun',
  'use': ".dare",
  'filename': __filename
}, async (_0x208d71, _0xfd2c1e, _0xb724c4, {
  from: _0x3ded8b,
  args: _0x1b8ece,
  reply: _0x4cdc3e
}) => {
  try {
    _0x4cdc3e("*🔥 Fetching a dare question...*");
    const _0x3ca5e7 = await axios.get("https://api.davidcyriltech.my.id/dare");
    if (!_0x3ca5e7.data || !_0x3ca5e7.data.success) {
      return _0x4cdc3e("❌ Failed to fetch a dare question. Please try again later.");
    }
    const _0x3a8d5a = _0x3ca5e7.data.question;
    if (_0x3a8d5a) {
      _0x4cdc3e("*Dare:* " + _0x3a8d5a);
    }
  } catch (_0x2d8cb9) {
    console.error(_0x2d8cb9);
    _0x4cdc3e("❌ An error occurred while fetching the dare question.");
  }
});