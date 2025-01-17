function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': 'ai',
  'alias': ["chatgpt", "MATRIX-XMD"],
  'react': '🤖',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x52e423, _0x4c1453, _0x1ec353, {
  from: _0x299960,
  quoted: _0x386cd2,
  body: _0x421275,
  isCmd: _0x8e6e99,
  command: _0x25332f,
  args: _0x4feda2,
  q: _0x5856f8,
  isGroup: _0x49f4dc,
  sender: _0x3081ba,
  senderNumber: _0x1af908,
  botNumber2: _0x2854f8,
  botNumber: _0x57b2b6,
  pushname: _0x5ce04c,
  isMe: _0x3ee314,
  isOwner: _0xdfabec,
  groupMetadata: _0x4546bd,
  groupName: _0x2438a2,
  participants: _0x585871,
  groupAdmins: _0x51f056,
  isBotAdmins: _0x2e789b,
  isAdmins: _0x405914,
  reply: _0xb51d46
}) => {
  try {
    if (!_0x5856f8) {
      return _0xb51d46("Please ask a question or provide input for the AI.");
    }
    const _0x601a6d = await fetchJson('https://api.davidcyriltech.my.id/ai/gpt4omini?text=' + _0x5856f8);
    console.log(_0x601a6d);
    if (!_0x601a6d.message) {
      return _0xb51d46("No response from the AI.");
    }
    return _0xb51d46(" `🤖 MATRIX-XMD AI RESPONSE:` \n\n" + _0x601a6d.message);
  } catch (_0x1cb55f) {
    console.error(_0x1cb55f);
    _0xb51d46("An error occurred: " + _0x1cb55f.message);
  }
});
cmd({
  'pattern': "mistraai",
  'alias': ["mistra", "zimai"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x2055c7, _0x5163c1, _0x5a816b, {
  from: _0x394f8b,
  quoted: _0x46e36c,
  body: _0x473b97,
  isCmd: _0x260a81,
  command: _0x51eb57,
  args: _0xef9866,
  q: _0x256da7,
  isGroup: _0x6aed05,
  sender: _0x1dcc6c,
  senderNumber: _0x408602,
  botNumber2: _0x3861d0,
  botNumber: _0x557b4d,
  pushname: _0x481fcc,
  isMe: _0x584908,
  isOwner: _0x26a429,
  groupMetadata: _0x198f8a,
  groupName: _0x3dee59,
  participants: _0x6b855c,
  groupAdmins: _0x46b714,
  isBotAdmins: _0x3942cf,
  isAdmins: _0x5a97f8,
  reply: _0x357176
}) => {
  try {
    if (!_0x256da7) {
      return _0x357176("Please ask a question or provide input for the AI.");
    }
    const _0x4ba5a9 = await fetchJson('https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=' + _0x256da7);
    console.log(_0x4ba5a9);
    if (!_0x4ba5a9.message) {
      return _0x357176("No response from the AI.");
    }
    return _0x357176(" `🤖 MATRIX-XMD MISTRA AI:` \n\n" + _0x4ba5a9.message);
  } catch (_0x4a92af) {
    console.error(_0x4a92af);
    _0x357176("An error occurred: " + _0x4a92af.message);
  }
});
cmd({
  'pattern': "gpt3",
  'alias': ["gptturbo", "chatgpt3"],
  'react': '😇',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x1c491d, _0xa3419b, _0x582f27, {
  from: _0x226731,
  quoted: _0x724fdc,
  body: _0x2086c0,
  isCmd: _0x259bb8,
  command: _0x441bc0,
  args: _0x39e6e8,
  q: _0x59a656,
  isGroup: _0x5ac62b,
  sender: _0x576f9a,
  senderNumber: _0x8e99ba,
  botNumber2: _0x220cf6,
  botNumber: _0x20fa68,
  pushname: _0x21ff3a,
  isMe: _0x531b28,
  isOwner: _0x5e4c4b,
  groupMetadata: _0x14f206,
  groupName: _0x25bdca,
  participants: _0x245a4b,
  groupAdmins: _0x3794ef,
  isBotAdmins: _0x2f475b,
  isAdmins: _0x3bff22,
  reply: _0x4f8193
}) => {
  try {
    if (!_0x59a656) {
      return _0x4f8193("Please ask a question or provide input for the AI.");
    }
    const _0x568cf0 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt3?text=" + _0x59a656);
    console.log(_0x568cf0);
    if (!_0x568cf0.message) {
      return _0x4f8193("No response from the AI.");
    }
    return _0x4f8193(" `🤖 MATRIX-XMD CHATGPT 3:` \n\n" + _0x568cf0.message);
  } catch (_0x5ea3b7) {
    console.error(_0x5ea3b7);
    _0x4f8193("An error occurred: " + _0x5ea3b7.message);
  }
});
cmd({
  'pattern': 'gpt4',
  'alias': ['ai4', 'chatgpt4'],
  'react': '🪄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x3a46d8, _0x3875b3, _0x2a4a16, {
  from: _0x2ca488,
  quoted: _0x40bdcf,
  body: _0x411c96,
  isCmd: _0x23066c,
  command: _0x14f8fc,
  args: _0x2bf533,
  q: _0xae983d,
  isGroup: _0x1146e0,
  sender: _0x5b7426,
  senderNumber: _0x4c0ffb,
  botNumber2: _0x595471,
  botNumber: _0x576b01,
  pushname: _0x247f7b,
  isMe: _0x436fb0,
  isOwner: _0x58ea99,
  groupMetadata: _0x531b18,
  groupName: _0xae18ba,
  participants: _0x46d747,
  groupAdmins: _0x254946,
  isBotAdmins: _0xa4964f,
  isAdmins: _0x524b9a,
  reply: _0xcab4f0
}) => {
  try {
    if (!_0xae983d) {
      return _0xcab4f0("Please ask a question or provide input for the AI.");
    }
    const _0x2e3d5b = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0xae983d);
    console.log(_0x2e3d5b);
    if (!_0x2e3d5b.message) {
      return _0xcab4f0("No response from the AI.");
    }
    return _0xcab4f0(" `🤖 MATRIX-XMD CHATGPT 4:` \n\n" + _0x2e3d5b.message);
  } catch (_0x3dbe5a) {
    console.error(_0x3dbe5a);
    _0xcab4f0("An error occurred: " + _0x3dbe5a.message);
  }
});
cmd({
  'pattern': "llama3",
  'alias': ["llama", "model3"],
  'react': '✅',
  'desc': "AI chat.",
  'category': 'main',
  'filename': __filename
}, async (_0x1d69dd, _0xe4ea2a, _0x3c6515, {
  from: _0x484e15,
  quoted: _0x39d80e,
  body: _0x1e21fe,
  isCmd: _0x463313,
  command: _0xaac0a9,
  args: _0x1c55e8,
  q: _0x120802,
  isGroup: _0x1039e1,
  sender: _0x449777,
  senderNumber: _0x171d4a,
  botNumber2: _0x45abee,
  botNumber: _0x44cb07,
  pushname: _0x421f03,
  isMe: _0x578408,
  isOwner: _0x5199df,
  groupMetadata: _0x53b4cb,
  groupName: _0x88973b,
  participants: _0x5bf9e8,
  groupAdmins: _0x4db630,
  isBotAdmins: _0x222330,
  isAdmins: _0x3cc38b,
  reply: _0x508b3f
}) => {
  try {
    if (!_0x120802) {
      return _0x508b3f("Please ask a question or provide input for the AI.");
    }
    const _0xf262be = await fetchJson("https://api.davidcyriltech.my.id/ai/llama3?text=" + _0x120802);
    console.log(_0xf262be);
    if (!_0xf262be.message) {
      return _0x508b3f("No response from the AI.");
    }
    return _0x508b3f(" `🤖 MATRIX-XMD LLAM AI:` \n\n" + _0xf262be.message);
  } catch (_0x3a5c5b) {
    console.error(_0x3a5c5b);
    _0x508b3f("An error occurred: " + _0x3a5c5b.message);
  }
});
cmd({
  'pattern': "metai",
  'alias': ["meta", "llama2"],
  'react': '🔄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x4903fd, _0x3e3939, _0x5710cf, {
  from: _0x2a308c,
  quoted: _0xae54eb,
  body: _0xa4e1c2,
  isCmd: _0x1a0697,
  command: _0x2dd020,
  args: _0x2fb7e3,
  q: _0x9dd37e,
  isGroup: _0x1ac256,
  sender: _0x4ed8bf,
  senderNumber: _0x3aeaa6,
  botNumber2: _0x399560,
  botNumber: _0x28184b,
  pushname: _0x2fa2d9,
  isMe: _0x1f9d67,
  isOwner: _0x44c2fa,
  groupMetadata: _0x4b1ccd,
  groupName: _0x2343a6,
  participants: _0x38b7ce,
  groupAdmins: _0x3a4bba,
  isBotAdmins: _0x473528,
  isAdmins: _0x4683be,
  reply: _0xf11ce1
}) => {
  try {
    if (!_0x9dd37e) {
      return _0xf11ce1("Please ask a question or provide input for the AI.");
    }
    const _0x2f840f = await fetchJson('https://api.davidcyriltech.my.id/ai/metaai?text=' + _0x9dd37e);
    console.log(_0x2f840f);
    if (!_0x2f840f.message) {
      return _0xf11ce1("No response from the AI.");
    }
    return _0xf11ce1(" `🤖 MATRIX-XMD META AI:` \n\n" + _0x2f840f.message);
  } catch (_0x425b6e) {
    console.error(_0x425b6e);
    _0xf11ce1("An error occurred: " + _0x425b6e.message);
  }
});
cmd({
  'pattern': 'gpt4o',
  'alias': ['ai4', 'chatgpt4'],
  'react': '🟢',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x38b68a, _0x1e0cf6, _0x101250, {
  from: _0x44ac96,
  quoted: _0x22b3c8,
  body: _0xe52dc1,
  isCmd: _0x1c6e5e,
  command: _0x5a59c1,
  args: _0x884c5f,
  q: _0x42eef8,
  isGroup: _0x44d0c4,
  sender: _0x72e5b0,
  senderNumber: _0x556c41,
  botNumber2: _0x56d97e,
  botNumber: _0x466e17,
  pushname: _0xd5f894,
  isMe: _0x3e7b1e,
  isOwner: _0x15ba7f,
  groupMetadata: _0x235e88,
  groupName: _0x1cedff,
  participants: _0x1b998f,
  groupAdmins: _0x4ee091,
  isBotAdmins: _0x1ea0e4,
  isAdmins: _0x3efbc1,
  reply: _0x13db3e
}) => {
  try {
    if (!_0x42eef8) {
      return _0x13db3e("Please ask a question or provide input for the AI.");
    }
    const _0x8f7c24 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x42eef8);
    console.log(_0x8f7c24);
    if (!_0x8f7c24.message) {
      return _0x13db3e("No response from the AI.");
    }
    return _0x13db3e(" `🤖 MATRIX-XMD CHATGPT 4o:` \n\n" + _0x8f7c24.message);
  } catch (_0x2a7260) {
    console.error(_0x2a7260);
    _0x13db3e("An error occurred: " + _0x2a7260.message);
  }
});
cmd({
  'pattern': "gemini",
  'alias': ['bard', 'bing'],
  'react': '⏳',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0xb41935, _0x4df8fe, _0xc37a77, {
  from: _0x4d8dae,
  quoted: _0x353ffb,
  body: _0x4888ac,
  isCmd: _0x3e798f,
  command: _0x51bb4a,
  args: _0x28a1aa,
  q: _0x492360,
  isGroup: _0x27135f,
  sender: _0x45ad5c,
  senderNumber: _0x1c7bb1,
  botNumber2: _0x5e32f8,
  botNumber: _0x15d02e,
  pushname: _0x3acfd2,
  isMe: _0x58337e,
  isOwner: _0x21118b,
  groupMetadata: _0x533247,
  groupName: _0x327182,
  participants: _0x40701f,
  groupAdmins: _0x11e9c3,
  isBotAdmins: _0x2bc106,
  isAdmins: _0x48c896,
  reply: _0x46860c
}) => {
  try {
    if (!_0x492360) {
      return _0x46860c("Please ask a question or provide input for the AI.");
    }
    const _0x3f9f02 = await fetchJson('https://api.davidcyriltech.my.id/ai/gpt4omini?text=' + _0x492360);
    console.log(_0x3f9f02);
    if (!_0x3f9f02.message) {
      return _0x46860c("No response from the AI.");
    }
    return _0x46860c(" `🤖 MATRIX-XMD GOOGLE AI:` \n\n" + _0x3f9f02.message);
  } catch (_0x1019cf) {
    console.error(_0x1019cf);
    _0x46860c("An error occurred: " + _0x1019cf.message);
  }
});