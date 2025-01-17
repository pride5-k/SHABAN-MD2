
function hi() {
  console.log("Hello World!");
}
hi();
const {
  fetchJson
} = require('../lib/functions');
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const {
  facebook
} = require('@mrnima/facebook-downloader');
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "tiktok",
  'alias': ['tt'],
  'react': '🎥',
  'desc': "download tt videos",
  'category': "download",
  'filename': __filename
}, async (_0x5ae9c0, _0x3c333b, _0x2b4570, {
  from: _0x9844ab,
  quoted: _0x7df7b4,
  body: _0xc7bd11,
  isCmd: _0x40282a,
  command: _0x3a1509,
  args: _0x225720,
  q: _0x41b239,
  isGroup: _0x5e07ff,
  sender: _0x4841c7,
  senderNumber: _0x91626b,
  botNumber2: _0xaaa8f4,
  botNumber: _0x5df9a4,
  pushname: _0x1f910c,
  isMe: _0x2861a7,
  isOwner: _0x5caa8a,
  groupMetadata: _0x191640,
  groupName: _0x20a3a6,
  participants: _0x55627d,
  groupAdmins: _0x634660,
  isBotAdmins: _0x253299,
  isAdmins: _0x17e8fe,
  reply: _0xd1d81c
}) => {
  try {
    if (!_0x41b239 && !_0x41b239.startsWith('https://')) {
      return _0xd1d81c("*`Need url`*");
    }
    _0x2b4570.react('⬇️');
    let _0x1a86fa = await downloadTiktok(_0x41b239);
    let _0x2608b1 = "╔════❰ *MATRIX-MD* 〕━━━┈⊷\n┃▸╭━══════─━─➳\n┃▸┃๏ *TIKTOK DOWNLOADER*\n┃▸└━══━════─━─➳\n└════════════════─➳\n╭━━━❐━⪼\n┇๏ *Title* - " + _0x1a86fa.result.title + " \n╰━━━❐━⪼\n╭━❮ *Download Video* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *1*     ┃  *SD Quality*\n┃▸┃๏ *2*     ┃  *HD Quality*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n╭━❮ *Download Audio* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *3*     ┃  *Audio*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*";
    const _0x13dcc5 = await _0x5ae9c0.sendMessage(_0x9844ab, {
      'image': {
        'url': _0x1a86fa.result.image
      },
      'caption': _0x2608b1
    });
    const _0x474438 = _0x13dcc5.key.id;
    _0x5ae9c0.ev.on("messages.upsert", async _0x2ef136 => {
      const _0x5df53b = _0x2ef136.messages[0x0];
      if (!_0x5df53b.message) {
        return;
      }
      const _0x3c75c2 = _0x5df53b.message.conversation || _0x5df53b.message.extendedTextMessage?.['text'];
      const _0x2e299b = _0x5df53b.key.remoteJid;
      const _0x28cf6b = _0x5df53b.message.extendedTextMessage && _0x5df53b.message.extendedTextMessage.contextInfo.stanzaId === _0x474438;
      if (_0x28cf6b) {
        await _0x5ae9c0.sendMessage(_0x2e299b, {
          'react': {
            'text': '⬇️',
            'key': _0x5df53b.key
          }
        });
        let _0x4b65bf = _0x1a86fa.result;
        await _0x5ae9c0.sendMessage(_0x2e299b, {
          'react': {
            'text': '⬆️',
            'key': _0x5df53b.key
          }
        });
        if (_0x3c75c2 === '1') {
          await _0x5ae9c0.sendMessage(_0x2e299b, {
            'video': {
              'url': _0x4b65bf.dl_link.download_mp4_1
            },
            'caption': "*© Powered Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
          }, {
            'quoted': _0x5df53b
          });
        } else {
          if (_0x3c75c2 === '2') {
            await _0x5ae9c0.sendMessage(_0x2e299b, {
              'video': {
                'url': _0x4b65bf.dl_link.download_mp4_2
              },
              'caption': "*© Powered Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
            }, {
              'quoted': _0x5df53b
            });
          } else if (_0x3c75c2 === '3') {
            await _0x5ae9c0.sendMessage(_0x2e299b, {
              'audio': {
                'url': _0x4b65bf.dl_link.download_mp3
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x5df53b
            });
          }
        }
      }
    });
  } catch (_0x52452c) {
    console.log(_0x52452c);
    _0xd1d81c('' + _0x52452c);
  }
});
cmd({
  'pattern': 'fb',
  'alias': ['facebook'],
  'desc': "Download Facebook videos",
  'category': "download",
  'filename': __filename
}, async (_0x54cfdd, _0x409152, _0x34d193, {
  from: _0x4bb953,
  quoted: _0x10d7b1,
  body: _0x42454e,
  isCmd: _0x3bb54b,
  command: _0x1df1f5,
  args: _0x4490ee,
  q: _0x35674b,
  isGroup: _0x48e836,
  sender: _0x3b7a73,
  senderNumber: _0xb6cf8b,
  botNumber2: _0x4e0368,
  botNumber: _0x34d40b,
  pushname: _0xd9e744,
  isMe: _0x5ea741,
  isOwner: _0x238375,
  groupMetadata: _0x4d4573,
  groupName: _0x306c5d,
  participants: _0x4ffb79,
  groupAdmins: _0x57c1f2,
  isBotAdmins: _0x472bc9,
  isAdmins: _0x541c31,
  reply: _0x1c785f
}) => {
  try {
    if (!_0x35674b || !_0x35674b.startsWith("https://")) {
      return _0x54cfdd.sendMessage(_0x4bb953, {
        'text': "*`Need URL`*"
      }, {
        'quoted': _0x409152
      });
    }
    await _0x54cfdd.sendMessage(_0x4bb953, {
      'react': {
        'text': '⏳',
        'key': _0x409152.key
      }
    });
    const _0x1bf030 = await facebook(_0x35674b);
    const _0x199e5e = "╔════❰ *MATRIX-MD* 〕━━━┈⊷\n┃▸╭━══════─━─➳\n┃▸┃๏ *FB DOWNLOADER*\n┃▸└━══━════─━─➳\n└════════════════─➳\n╭━━━❐━⪼\n┇๏ *Duration* - " + _0x1bf030.result.duration + " \n╰━━━❐━⪼\n╭━❮ *Download Video* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *1.1*     ┃  *SD Quality*\n┃▸┃๏ *1.2*     ┃  *HD Quality*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n╭━❮ *Download Audio* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *2.1*     ┃  *Audio*\n┃▸┃๏ *2.2*     ┃  *Document*\n┃▸┃๏ *2.3*     ┃  *Voice*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ ♡*";
    const _0x570d56 = await _0x54cfdd.sendMessage(_0x4bb953, {
      'image': {
        'url': _0x1bf030.result.thumbnail
      },
      'caption': _0x199e5e
    }, {
      'quoted': _0x409152
    });
    const _0x35d60e = _0x570d56.key.id;
    _0x54cfdd.ev.on("messages.upsert", async _0x12577b => {
      const _0x1faf9f = _0x12577b.messages[0x0];
      if (!_0x1faf9f.message) {
        return;
      }
      const _0x42416c = _0x1faf9f.message.conversation || _0x1faf9f.message.extendedTextMessage?.["text"];
      const _0x2007e6 = _0x1faf9f.key.remoteJid;
      const _0x3d220b = _0x1faf9f.message.extendedTextMessage && _0x1faf9f.message.extendedTextMessage.contextInfo.stanzaId === _0x35d60e;
      if (_0x3d220b) {
        await _0x54cfdd.sendMessage(_0x2007e6, {
          'react': {
            'text': '⬇️',
            'key': _0x1faf9f.key
          }
        });
        let _0x3f6883 = _0x1bf030.result;
        await _0x54cfdd.sendMessage(_0x2007e6, {
          'react': {
            'text': '⬆️',
            'key': _0x1faf9f.key
          }
        });
        if (_0x42416c === "1.1") {
          await _0x54cfdd.sendMessage(_0x2007e6, {
            'video': {
              'url': _0x3f6883.links.SD
            },
            'caption': "*© Powered Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
          }, {
            'quoted': _0x1faf9f
          });
        } else {
          if (_0x42416c === "1.2") {
            await _0x54cfdd.sendMessage(_0x2007e6, {
              'video': {
                'url': _0x3f6883.links.HD
              },
              'caption': "*© Powered Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
            }, {
              'quoted': _0x1faf9f
            });
          } else {
            if (_0x42416c === "2.1") {
              await _0x54cfdd.sendMessage(_0x2007e6, {
                'audio': {
                  'url': _0x3f6883.links.SD
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x1faf9f
              });
            } else {
              if (_0x42416c === "2.2") {
                await _0x54cfdd.sendMessage(_0x2007e6, {
                  'document': {
                    'url': _0x3f6883.links.SD
                  },
                  'mimetype': 'audio/mpeg',
                  'fileName': "MATRIX/FBDL.mp3",
                  'caption': "*© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
                }, {
                  'quoted': _0x1faf9f
                });
              } else if (_0x42416c === '2.3') {
                await _0x54cfdd.sendMessage(_0x2007e6, {
                  'audio': {
                    'url': _0x3f6883.links.SD
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x1faf9f
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x5d3f3d) {
    console.log(_0x5d3f3d);
    _0x1c785f('' + _0x5d3f3d);
  }
});
cmd({
  'pattern': "twitter",
  'alias': ['tweet', "twdl"],
  'desc': "Download Twitter videos",
  'category': 'download',
  'filename': __filename
}, async (_0x400977, _0x50436f, _0x1f878d, {
  from: _0x4d4663,
  quoted: _0x1c31de,
  body: _0x277ab1,
  isCmd: _0xcb2860,
  command: _0x4b9da5,
  args: _0x2a07dc,
  q: _0x206333,
  isGroup: _0x59f93b,
  sender: _0x48c787,
  senderNumber: _0x52adec,
  botNumber2: _0x3bd644,
  botNumber: _0xc9a982,
  pushname: _0x1cfb08,
  isMe: _0x351ba6,
  isOwner: _0x2dffe9,
  groupMetadata: _0x365ad0,
  groupName: _0x25e258,
  participants: _0x23abe8,
  groupAdmins: _0x3797c4,
  isBotAdmins: _0x274c42,
  isAdmins: _0x51965b,
  reply: _0x31021d
}) => {
  try {
    if (!_0x206333 || !_0x206333.startsWith("https://")) {
      return _0x400977.sendMessage(_0x4d4663, {
        'text': "❌ Please provide a valid Twitter URL."
      }, {
        'quoted': _0x50436f
      });
    }
    await _0x400977.sendMessage(_0x4d4663, {
      'react': {
        'text': '⏳',
        'key': _0x50436f.key
      }
    });
    const _0x2cbeef = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x206333);
    const _0x2d5547 = _0x2cbeef.data;
    if (!_0x2d5547 || !_0x2d5547.status || !_0x2d5547.result) {
      return _0x1f878d.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x574846,
      thumb: _0x42fc8a,
      video_sd: _0x50729,
      video_hd: _0x3deca6
    } = _0x2d5547.result;
    const _0x4df14e = await _0x400977.sendMessage(_0x4d4663, {
      'image': {
        'url': _0x42fc8a
      },
      'caption': "╔════❰ *MATRIX-MD* 〕━━━┈⊷\n┃▸╭━══════─━─➳\n┃▸┃๏ *TWITTER DOWNLOADER*\n┃▸└━══━════─━─➳\n└════════════════─➳\n╭━❮ *Download Video* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *1.1*     ┃  *SD Quality*\n┃▸┃๏ *1.2*     ┃  *HD Quality*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n╭━❮ *Download Audio* ❯━┈⊷\n┃▸╭━══════─━─➳──·๏\n┃▸┃๏ *2.1*     ┃  *Audio*\n┃▸┃๏ *2.2*     ┃  *Document*\n┃▸┃๏ *2.3*     ┃  *Voice*\n┃▸└────────────┈⊷\n╰━━━━━━━━━━━━━━━⪼\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ-Aɪ ♡*"
    }, {
      'quoted': _0x50436f
    });
    const _0x5cc4cf = _0x4df14e.key.id;
    _0x400977.ev.on('messages.upsert', async _0x1390e0 => {
      const _0x47e1b4 = _0x1390e0.messages[0x0];
      if (!_0x47e1b4.message) {
        return;
      }
      const _0x493423 = _0x47e1b4.message.conversation || _0x47e1b4.message.extendedTextMessage?.["text"];
      const _0x1aa453 = _0x47e1b4.key.remoteJid;
      const _0x57f985 = _0x47e1b4.message.extendedTextMessage && _0x47e1b4.message.extendedTextMessage.contextInfo.stanzaId === _0x5cc4cf;
      if (_0x57f985) {
        await _0x400977.sendMessage(_0x1aa453, {
          'react': {
            'text': '⬇️',
            'key': _0x47e1b4.key
          }
        });
        if (_0x493423 === "1.1") {
          await _0x400977.sendMessage(_0x1aa453, {
            'video': {
              'url': _0x50729
            },
            'caption': "*© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
          }, {
            'quoted': _0x47e1b4
          });
        } else {
          if (_0x493423 === "1.2") {
            await _0x400977.sendMessage(_0x1aa453, {
              'video': {
                'url': _0x3deca6
              },
              'caption': "*© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
            }, {
              'quoted': _0x47e1b4
            });
          } else {
            if (_0x493423 === '2.1') {
              await _0x400977.sendMessage(_0x1aa453, {
                'audio': {
                  'url': _0x50729
                },
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x47e1b4
              });
            } else {
              if (_0x493423 === "2.2") {
                await _0x400977.sendMessage(_0x1aa453, {
                  'document': {
                    'url': _0x50729
                  },
                  'mimetype': "audio/mpeg",
                  'fileName': "MATRIX/TWDL.mp3",
                  'caption': "*© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
                }, {
                  'quoted': _0x47e1b4
                });
              } else if (_0x493423 === "2.3") {
                await _0x400977.sendMessage(_0x1aa453, {
                  'audio': {
                    'url': _0x50729
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                }, {
                  'quoted': _0x47e1b4
                });
              }
            }
          }
        }
      }
    });
  } catch (_0x5cdcc3) {
    console.log(_0x5cdcc3);
    _0x31021d("An error occurred: " + _0x5cdcc3);
  }
});
cmd({
  'pattern': "mediafire",
  'alias': ["mfire"],
  'desc': "To download MediaFire files.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x43359b, _0x37fd12, _0x22fdaa, {
  from: _0x5e4e1b,
  quoted: _0x4945cd,
  body: _0x3ff829,
  isCmd: _0x47c498,
  command: _0x294e44,
  args: _0xfde5a4,
  q: _0x481ac5,
  isGroup: _0x471195,
  sender: _0x703b2d,
  senderNumber: _0xaabab6,
  botNumber2: _0x2f85a5,
  botNumber: _0x8d3ff8,
  pushname: _0x202559,
  isMe: _0x5bb81c,
  isOwner: _0x5ed012,
  groupMetadata: _0x8d0f6e,
  groupName: _0x33a222,
  participants: _0xe6c465,
  groupAdmins: _0x570c39,
  isBotAdmins: _0xe9aa47,
  isAdmins: _0x2908ad,
  reply: _0x29c9aa
}) => {
  try {
    if (!_0x481ac5) {
      return _0x22fdaa.reply("Please provide a valid MediaFire link.");
    }
    _0x22fdaa.react('⬇️');
    const _0x1a6778 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x481ac5);
    const _0x2b2be7 = _0x1a6778.data;
    if (!_0x2b2be7 || !_0x2b2be7.status || !_0x2b2be7.result || !_0x2b2be7.result.dl_link) {
      return _0x22fdaa.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x1aacc6 = _0x2b2be7.result.dl_link;
    const _0x5cfade = _0x2b2be7.result.fileName || "mediafire_download";
    const _0x58eb24 = _0x2b2be7.result.fileType || "application/octet-stream";
    _0x22fdaa.react('⬆️');
    let _0x43057f = "╔════❰ *MATRIX-MD* 〕━━━┈⊷\n┃▸╭━══════─━─➳\n┃▸┃๏ *MFIRE DOWNLOADER*\n┃▸└━══━════─━─➳\n└════════════════─➳\n╭━━━❐━⪼\n┇๏ *File Name* - " + _0x5cfade + " \n┇๏ *File Type* - " + _0x58eb24 + " \n╰━━━❐━⪼\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*";
    await _0x43359b.sendMessage(_0x5e4e1b, {
      'document': {
        'url': _0x1aacc6
      },
      'mimetype': _0x58eb24,
      'fileName': _0x5cfade,
      'caption': _0x43057f
    }, {
      'quoted': _0x37fd12
    });
  } catch (_0x3852d9) {
    console.error(_0x3852d9);
    _0x29c9aa("An error occurred: " + _0x3852d9.message);
  }
});
cmd({
  'pattern': 'ig',
  'alias': ['insta', "Instagram"],
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x1f1cd2, _0x32e92e, _0x9dcf1a, {
  from: _0x45c7da,
  quoted: _0x36d19b,
  body: _0x3801bf,
  isCmd: _0x3e59f2,
  command: _0x18c45d,
  args: _0x589738,
  q: _0x26bbee,
  isGroup: _0x32fd23,
  sender: _0x31517e,
  senderNumber: _0x3a401c,
  botNumber2: _0x1d0315,
  botNumber: _0x5485e6,
  pushname: _0x161ba9,
  isMe: _0x428f45,
  isOwner: _0x998bd3,
  groupMetadata: _0x1e0423,
  groupName: _0xfd2117,
  participants: _0x5ca132,
  groupAdmins: _0x34a1eb,
  isBotAdmins: _0x4520dc,
  isAdmins: _0x3edbbf,
  reply: _0x597309
}) => {
  try {
    if (!_0x26bbee) {
      return _0x9dcf1a.reply("Please Give Me a vaild Link...");
    }
    _0x9dcf1a.react('⬇️');
    let _0x5e1325 = await igdl(_0x26bbee);
    let _0x15bec5 = await _0x5e1325.data;
    for (let _0x33bd45 = 0x0; _0x33bd45 < 0x14; _0x33bd45++) {
      let _0x28d450 = _0x15bec5[_0x33bd45];
      let _0x3c8ae4 = _0x28d450.url;
      _0x9dcf1a.react('⬆️');
      await _0x1f1cd2.sendMessage(_0x45c7da, {
        'video': {
          'url': _0x3c8ae4
        },
        'mimetype': "video/mp4",
        'caption': "> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
      }, {
        'quoted': _0x32e92e
      });
      _0x9dcf1a.react('✅');
    }
  } catch (_0x3ab295) {
    console.log(_0x3ab295);
  }
});
async function xdl(_0x871c2b) {
  return new Promise((_0x2e53ee, _0x20023b) => {
    fetch('' + _0x871c2b, {
      'method': "get"
    }).then(_0x1a834f => _0x1a834f.text()).then(_0x1a9bbb => {
      const _0x1b7eab = cheerio.load(_0x1a9bbb, {
        'xmlMode': false
      });
      const _0x3fea69 = _0x1b7eab("meta[property=\"og:title\"]").attr("content");
      const _0x3369f1 = _0x1b7eab("meta[property=\"og:duration\"]").attr("content");
      const _0x4ae4e6 = _0x1b7eab("meta[property=\"og:image\"]").attr("content");
      const _0x2adcaa = _0x1b7eab("meta[property=\"og:video:type\"]").attr("content");
      const _0x57a2b3 = _0x1b7eab("meta[property=\"og:video:width\"]").attr("content");
      const _0x2bded2 = _0x1b7eab("meta[property=\"og:video:height\"]").attr("content");
      const _0x42a42a = _0x1b7eab("span.metadata").text();
      const _0x17c607 = _0x1b7eab("#video-player-bg > script:nth-child(6)").html();
      const _0x2796b6 = {
        'low': (_0x17c607.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x17c607.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x17c607.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x17c607.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x17c607.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x17c607.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x17c607.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x2e53ee({
        'status': true,
        'result': {
          'title': _0x3fea69,
          'URL': _0x871c2b,
          'duration': _0x3369f1,
          'image': _0x4ae4e6,
          'videoType': _0x2adcaa,
          'videoWidth': _0x57a2b3,
          'videoHeight': _0x2bded2,
          'info': _0x42a42a,
          'files': _0x2796b6
        }
      });
    })["catch"](_0x356be5 => _0x20023b({
      'status': false,
      'result': _0x356be5
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'alias': ["dlxnxx", "xnxxdl"],
  'react': '🫣',
  'desc': "Download xnxx videos",
  'category': "nsfw",
  'use': ".xnxx <xnxx link>",
  'filename': __filename
}, async (_0x435b41, _0x4d5638, _0x77d4de, {
  from: _0x46ff07,
  l: _0x520351,
  quoted: _0x5eb447,
  body: _0x3029ae,
  isCmd: _0x1d9dbb,
  command: _0x4d1e6b,
  args: _0x4edd10,
  q: _0x2aab8b,
  isGroup: _0x8f1df9,
  sender: _0x2655cb,
  senderNumber: _0x504deb,
  botNumber2: _0x5c1827,
  botNumber: _0x4c6515,
  pushname: _0x43ba73,
  isMe: _0x204bbd,
  isOwner: _0x3e076a,
  groupMetadata: _0x3b31ce,
  groupName: _0x570c51,
  participants: _0x2145f8,
  groupAdmins: _0x3de22c,
  isBotAdmins: _0x89bd77,
  isAdmins: _0x4b986e,
  reply: _0x301fd4
}) => {
  try {
    if (!_0x2aab8b) {
      return _0x301fd4("*Please give me url !!*");
    }
    let _0x330ccf = await xdl(_0x2aab8b);
    let _0x2534b7 = _0x330ccf.result.title;
    await _0x435b41.sendMessage(_0x46ff07, {
      'video': {
        'url': _0x330ccf.result.files.high
      },
      'caption': _0x2534b7
    }, {
      'quoted': _0x4d5638
    });
  } catch (_0x309a73) {
    _0x301fd4("*Error !!*");
    console.log(_0x309a73);
  }
});
cmd({
  'pattern': 'xvdown',
  'alias': ["dlxv", "xvdl"],
  'react': '🫣',
  'desc': "Download xvideos videos",
  'category': 'nsfw',
  'use': ".xv <xvideos link>",
  'filename': __filename
}, async (_0x2ae57e, _0x30fbe9, _0x1312ab, {
  from: _0x28e19a,
  l: _0x51bc3d,
  quoted: _0x2b72df,
  body: _0x91316,
  isCmd: _0x503ab1,
  command: _0x4cef13,
  args: _0x5eee26,
  q: _0x5705d7,
  isGroup: _0x4acbbd,
  sender: _0x3d4b5b,
  senderNumber: _0x400647,
  botNumber2: _0x7537c3,
  botNumber: _0x280913,
  pushname: _0x5449dc,
  isMe: _0x404a43,
  isOwner: _0x11bf39,
  groupMetadata: _0xe27fb7,
  groupName: _0x591067,
  participants: _0x3b528b,
  groupAdmins: _0x54387d,
  isBotAdmins: _0x1bef42,
  isAdmins: _0x14f7d7,
  reply: _0x3bc6af
}) => {
  try {
    if (!_0x5705d7) {
      return _0x3bc6af("*Please give me url !!*");
    }
    let _0x558196 = await fetchJson("https://www.dark-yasiya-api.site/download/xvideo?url=" + _0x5705d7);
    const _0x952046 = "\n   🔞 *XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x558196.result.title + "\n\n• *Views* - " + _0x558196.result.views + "\n\n• *Like* - " + _0x558196.result.like + "\n\n• *Deslike* - " + _0x558196.result.deslike + "\n\n• *Size* - " + _0x558196.result.size;
    await _0x2ae57e.sendMessage(_0x28e19a, {
      'video': {
        'url': _0x558196.result.dl_link
      },
      'caption': _0x952046
    }, {
      'quoted': _0x30fbe9
    });
  } catch (_0x218082) {
    _0x3bc6af("*Error !!*");
    console.log(_0x218082);
  }
});
const fs = require('fs');
const path = require('path');
cmd({
  'pattern': 'baiscope',
  'alias': ["movie2"],
  'react': '📑',
  'category': "download",
  'desc': "baiscope.lk",
  'filename': __filename
}, async (_0x119094, _0x2fdf55, _0x5a8e90, {
  from: _0x518a61,
  q: _0x58de3c,
  isDev: _0x278fb1,
  reply: _0x1b72fd
}) => {
  try {
    if (!_0x58de3c) {
      return await _0x1b72fd("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x2a841e = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x58de3c);
    const _0x30e6e3 = await axios.get(_0x2a841e);
    const _0x425c50 = cheerio.load(_0x30e6e3.data);
    let _0x27fe64 = [];
    _0x425c50('article.elementor-post').each((_0x12f2f9, _0x45303b) => {
      const _0x286ba8 = _0x425c50(_0x45303b).find("h5.elementor-post__title > a").text().trim();
      const _0x292c7e = _0x425c50(_0x45303b).find("h5.elementor-post__title > a").attr("href");
      const _0x25e27c = _0x425c50(_0x45303b).find(".elementor-post__thumbnail img").attr("src");
      if (_0x286ba8 && _0x292c7e && _0x25e27c) {
        _0x27fe64.push({
          'title': _0x286ba8,
          'episodeLink': _0x292c7e,
          'imgUrl': _0x25e27c
        });
      }
    });
    if (_0x27fe64.length === 0x0) {
      return await _0x1b72fd("No results found for: " + _0x58de3c);
    }
    let _0x13fcf2 = "📺 Search Results for *" + _0x58de3c + ":*\n\n";
    _0x27fe64.forEach((_0x1e4d2b, _0x27a529) => {
      _0x13fcf2 += '*' + (_0x27a529 + 0x1) + ".* " + _0x1e4d2b.title + "\n🔗 Link: " + _0x1e4d2b.episodeLink + "\n\n";
    });
    const _0x1e43cd = await _0x119094.sendMessage(_0x518a61, {
      'text': _0x13fcf2
    }, {
      'quoted': _0x5a8e90
    });
    const _0x1ba2cb = _0x1e43cd.key.id;
    _0x119094.ev.on('messages.upsert', async _0xb4c040 => {
      const _0x4a5697 = _0xb4c040.messages[0x0];
      if (!_0x4a5697.message) {
        return;
      }
      const _0x42f493 = _0x4a5697.message.conversation || _0x4a5697.message.extendedTextMessage?.["text"];
      const _0x135d64 = _0x4a5697.key.remoteJid;
      const _0xba153d = _0x4a5697.message.extendedTextMessage && _0x4a5697.message.extendedTextMessage.contextInfo.stanzaId === _0x1ba2cb;
      if (_0xba153d) {
        const _0x2338cf = parseInt(_0x42f493.trim());
        if (!isNaN(_0x2338cf) && _0x2338cf > 0x0 && _0x2338cf <= _0x27fe64.length) {
          const _0x4caca7 = _0x27fe64[_0x2338cf - 0x1];
          const _0x4c6ae7 = await axios.get(_0x4caca7.episodeLink);
          const _0x90849d = cheerio.load(_0x4c6ae7.data);
          const _0x1a4ea8 = _0x90849d('a.dlm-buttons-button').attr('href');
          if (_0x1a4ea8) {
            await _0x119094.sendMessage(_0x135d64, {
              'image': {
                'url': _0x4caca7.imgUrl
              },
              'caption': "🎬 *" + _0x4caca7.title + "*\n🔗 Link: " + _0x4caca7.episodeLink + "\n⬇️ Download will follow."
            }, {
              'quoted': _0x4a5697
            });
            const _0x28536a = path.join(__dirname, "downloaded_episode.zip");
            const _0x1a08bc = fs.createWriteStream(_0x28536a);
            const _0x36d547 = await axios({
              'url': _0x1a4ea8,
              'method': 'GET',
              'responseType': "stream"
            });
            _0x36d547.data.pipe(_0x1a08bc);
            _0x1a08bc.on("finish", async () => {
              await _0x119094.sendMessage(_0x135d64, {
                'document': {
                  'url': _0x28536a
                },
                'mimetype': "application/zip",
                'fileName': _0x4caca7.title + ".zip",
                'caption': '*' + _0x4caca7.title + "*\n\n> Lααɾα-ᴍᴅ ✻"
              }, {
                'quoted': _0x4a5697
              });
              fs.unlinkSync(_0x28536a);
            });
            _0x1a08bc.on('error', _0x4cfcbf => {
              console.error("Error downloading ZIP file:", _0x4cfcbf);
              _0x1b72fd("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x1b72fd("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x1b72fd("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x3c1cad) {
    console.error(_0x3c1cad);
    await _0x1b72fd("*An error occurred while scraping the data.*");
  }
});
cmd({
  'pattern': "ginisisila",
  'react': '📑',
  'category': 'download',
  'desc': 'ginisisilacartoon.net',
  'filename': __filename
}, async (_0x18e799, _0x5b0e42, _0x199241, {
  from: _0x3a07e7,
  q: _0xb03acc,
  isDev: _0x451fe5,
  reply: _0x2eaf08
}) => {
  try {
    if (!_0xb03acc) {
      return await _0x2eaf08("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x1af8bb = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0xb03acc);
    const _0x2dbe37 = await axios.get(_0x1af8bb);
    const _0x3baeea = cheerio.load(_0x2dbe37.data);
    let _0x42527a = [];
    _0x3baeea("div.inner-video-cell").each((_0x5aa3d5, _0x45f029) => {
      const _0x4d8661 = _0x3baeea(_0x45f029).find("div.video-title > a").attr("title");
      const _0x30ffda = _0x3baeea(_0x45f029).find("div.posted-time").text().trim();
      const _0x5b5308 = _0x3baeea(_0x45f029).find("div.video-title > a").attr("href");
      const _0x5ef472 = _0x3baeea(_0x45f029).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0x4d8661 && _0x5b5308) {
        _0x42527a.push({
          'title': _0x4d8661,
          'postedTime': _0x30ffda,
          'episodeLink': 'https://ginisisilacartoon.net/' + _0x5b5308,
          'imageUrl': _0x5ef472
        });
      }
    });
    if (_0x42527a.length === 0x0) {
      return await _0x2eaf08("No results found for: " + _0xb03acc);
    }
    let _0x460b8b = "📺 Search Results for *" + _0xb03acc + ":*\n\n";
    _0x42527a.forEach((_0x10431c, _0x2425d9) => {
      _0x460b8b += '*' + (_0x2425d9 + 0x1) + ".* " + _0x10431c.title + "\n🗓️ Posted: " + _0x10431c.postedTime + "\n🔗 Link: " + _0x10431c.episodeLink + "\n\n";
    });
    const _0x56ec96 = await _0x18e799.sendMessage(_0x3a07e7, {
      'text': _0x460b8b
    }, {
      'quoted': _0x199241
    });
    const _0x1fc6bd = _0x56ec96.key.id;
    _0x18e799.ev.on("messages.upsert", async _0x5dd909 => {
      const _0x4fd426 = _0x5dd909.messages[0x0];
      if (!_0x4fd426.message) {
        return;
      }
      const _0x1c4419 = _0x4fd426.message.conversation || _0x4fd426.message.extendedTextMessage?.["text"];
      const _0x568126 = _0x4fd426.key.remoteJid;
      const _0x24db8a = _0x4fd426.message.extendedTextMessage && _0x4fd426.message.extendedTextMessage.contextInfo.stanzaId === _0x1fc6bd;
      if (_0x24db8a) {
        const _0x36f9f9 = parseInt(_0x1c4419.trim());
        if (!isNaN(_0x36f9f9) && _0x36f9f9 > 0x0 && _0x36f9f9 <= _0x42527a.length) {
          const _0x4e5378 = _0x42527a[_0x36f9f9 - 0x1];
          const _0xded761 = "*🪄 ɴᴀᴍᴇ:-* " + _0x4e5378.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x4e5378.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x4e5378.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0x187ea8 = {
            'image': {
              'url': _0x4e5378.imageUrl
            },
            'caption': _0xded761
          };
          await _0x18e799.sendMessage(_0x568126, _0x187ea8, {
            'quoted': _0x4fd426
          });
          const _0x462cc7 = await axios.get(_0x4e5378.episodeLink);
          const _0x48f6ca = cheerio.load(_0x462cc7.data);
          const _0x310964 = _0x48f6ca("div#player-holder iframe").attr("src");
          if (_0x310964) {
            const _0xc4a381 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x310964 + '&apikey=mnp3grlZ';
            try {
              const _0x18c43c = await axios.get(_0xc4a381);
              const _0x532c9f = _0x18c43c.data.result.downloadUrl;
              if (_0x532c9f) {
                await _0x18e799.sendMessage(_0x568126, {
                  'document': {
                    'url': _0x532c9f
                  },
                  'mimetype': 'video/mp4',
                  'fileName': "MR FRANK | " + _0x4e5378.title + '.mp4',
                  'caption': _0x4e5378.title + " | *© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ*"
                }, {
                  'quoted': _0x4fd426
                });
              } else {
                await _0x2eaf08("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x5596c7) {
              console.error("Error fetching the download link:", _0x5596c7);
              await _0x2eaf08("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x2eaf08("No downloadable link found for this episode.");
          }
        } else {
          await _0x2eaf08("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x3f053b) {
    _0x2eaf08("*Error occurred while scraping!*");
    console.error(_0x3f053b);
  }
});
cmd({
  'pattern': 'apk',
  'desc': "Download apk.",
  'category': "download",
  'filename': __filename
}, async (_0x431328, _0x2aebd9, _0x29da74, {
  from: _0x17ed1b,
  quoted: _0x3b3c93,
  body: _0x599b2c,
  isCmd: _0x56c6bc,
  command: _0x674fa2,
  args: _0x4b82e0,
  q: _0xeddfaa,
  isGroup: _0x26e635,
  sender: _0x5da46f,
  senderNumber: _0x5a30a2,
  botNumber2: _0x5bb9b3,
  botNumber: _0x5e7e12,
  pushname: _0x361a76,
  isMe: _0x280328,
  isOwner: _0x4e654c,
  groupMetadata: _0x18bce1,
  groupName: _0x161184,
  participants: _0x266f3f,
  groupAdmins: _0x4ed238,
  isBotAdmins: _0x57bfe5,
  isAdmins: _0x17195b,
  reply: _0x46869b
}) => {
  try {
    await _0x29da74.react('⬇');
    const _0x20944e = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0xeddfaa + '/limit=1';
    const _0x58fd62 = await axios.get(_0x20944e);
    const _0x562333 = _0x58fd62.data;
    let _0x3527e5 = _0x562333.datalist.list[0x0].size % 0xf4240;
    let _0x37fe2e = '.' + _0x3527e5;
    let _0x2ad20a = _0x562333.datalist.list[0x0].size / 0xf4240;
    let _0x110876 = _0x2ad20a - _0x37fe2e;
    let _0x376294 = "╔═❰ *MATRIX-APPSTORE* 〕━┈⊷\n┃▸╭━══════─━─➳\n┃▸┃๏ *APK DOWNLOADER*\n┃▸└━══━════─━─➳\n└════════════════─➳\n╭━━━❐━⪼\n┇๏ *Name* - " + _0x562333.datalist.list[0x0].name + " \n┇๏ *Size* - " + _0x110876 + "MB \n┇๏ *Package* - " + _0x562333.datalist.list[0x0]["package"] + " \n┇๏ *Updated On* - " + _0x562333.datalist.list[0x0].updated + " \n┇๏ *Developer* - " + _0x562333.datalist.list[0x0].developer.name + " \n╰━━━❐━⪼\n> *© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Mᴀᴛʀɪx-Xᴍᴅ*";
    await _0x29da74.react('⬆');
    await _0x431328.sendMessage(_0x17ed1b, {
      'document': {
        'url': _0x562333.datalist.list[0x0].file.path_alt
      },
      'fileName': _0x562333.datalist.list[0x0].name,
      'mimetype': "application/vnd.android.package-archive",
      'caption': _0x376294
    }, {
      'quoted': _0x2aebd9
    });
    await _0x29da74.react('✅');
  } catch (_0x2018c6) {
    console.log(_0x2018c6);
    _0x46869b('' + _0x2018c6);
  }
});
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "sinhalasub",
  'alias': ['movie'],
  'react': '📑',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x2bc69a, _0x38095e, _0x39354f, {
  from: _0x2958ae,
  q: _0x3ff8b3,
  reply: _0x26d7d6
}) => {
  try {
    if (!_0x3ff8b3) {
      return await _0x26d7d6("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x12e4b7 = await sinhalaSub();
    const _0x4698e5 = await _0x12e4b7.search(_0x3ff8b3);
    const _0x8d5c1 = _0x4698e5.result.slice(0x0, 0xa);
    if (!_0x8d5c1 || _0x8d5c1.length === 0x0) {
      return await _0x26d7d6("No results found for: " + _0x3ff8b3);
    }
    let _0x3c237b = "📽️ *Search Results for* \"" + _0x3ff8b3 + "\":\n\n";
    _0x8d5c1.forEach((_0x3911aa, _0x3da105) => {
      _0x3c237b += '*' + (_0x3da105 + 0x1) + ".* " + _0x3911aa.title + "\n🔗 Link: " + _0x3911aa.link + "\n\n";
    });
    const _0x2e742f = await _0x2bc69a.sendMessage(_0x2958ae, {
      'text': _0x3c237b
    }, {
      'quoted': _0x39354f
    });
    const _0x7e6837 = _0x2e742f.key.id;
    _0x2bc69a.ev.on("messages.upsert", async _0x275eb7 => {
      const _0x377e4f = _0x275eb7.messages[0x0];
      if (!_0x377e4f.message) {
        return;
      }
      const _0x55a6bf = _0x377e4f.message.conversation || _0x377e4f.message.extendedTextMessage?.['text'];
      const _0x36d641 = _0x377e4f.message.extendedTextMessage && _0x377e4f.message.extendedTextMessage.contextInfo.stanzaId === _0x7e6837;
      if (_0x36d641) {
        const _0x5cdff7 = parseInt(_0x55a6bf.trim());
        if (!isNaN(_0x5cdff7) && _0x5cdff7 > 0x0 && _0x5cdff7 <= _0x8d5c1.length) {
          const _0x52d441 = _0x8d5c1[_0x5cdff7 - 0x1];
          const _0x128dad = 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' + encodeURIComponent(_0x52d441.link);
          try {
            const _0x34711e = await axios.get(_0x128dad);
            const _0x2a3f0b = _0x34711e.data.result;
            const _0x445770 = _0x2a3f0b.dl_links || [];
            if (_0x445770.length === 0x0) {
              return await _0x26d7d6("No PixelDrain links found.");
            }
            let _0x12b4eb = "🎥 *" + _0x2a3f0b.title + "*\n\n";
            _0x12b4eb += "*Available PixelDrain Download Links:*\n";
            _0x445770.forEach((_0x225381, _0x3ab260) => {
              _0x12b4eb += '*' + (_0x3ab260 + 0x1) + ".* " + _0x225381.quality + " - " + _0x225381.size + "\n🔗 Link: " + _0x225381.link + "\n\n";
            });
            const _0x3fa690 = await _0x2bc69a.sendMessage(_0x2958ae, {
              'text': _0x12b4eb
            }, {
              'quoted': _0x377e4f
            });
            const _0x1bed6e = _0x3fa690.key.id;
            _0x2bc69a.ev.on("messages.upsert", async _0x361530 => {
              const _0x328f48 = _0x361530.messages[0x0];
              if (!_0x328f48.message) {
                return;
              }
              const _0x425161 = _0x328f48.message.conversation || _0x328f48.message.extendedTextMessage?.["text"];
              const _0x157370 = _0x328f48.message.extendedTextMessage && _0x328f48.message.extendedTextMessage.contextInfo.stanzaId === _0x1bed6e;
              if (_0x157370) {
                const _0x591037 = parseInt(_0x425161.trim());
                if (!isNaN(_0x591037) && _0x591037 > 0x0 && _0x591037 <= _0x445770.length) {
                  const _0x386b23 = _0x445770[_0x591037 - 0x1];
                  const _0x54184a = _0x386b23.link.split('/').pop();
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x39354f.key
                    }
                  });
                  const _0x2807b1 = "https://pixeldrain.com/api/file/" + _0x54184a;
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '⬆',
                      'key': _0x39354f.key
                    }
                  });
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'document': {
                      'url': _0x2807b1
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2a3f0b.title + " - " + _0x386b23.quality + ".mp4",
                    'caption': _0x2a3f0b.title + "\nQuality: " + _0x386b23.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x2a3f0b.title,
                        'body': "Download powered by MATRIX-ai",
                        'mediaType': 0x1,
                        'sourceUrl': _0x52d441.link,
                        'thumbnailUrl': _0x2a3f0b.image
                      }
                    }
                  }, {
                    'quoted': _0x328f48
                  });
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '✅',
                      'key': _0x39354f.key
                    }
                  });
                } else {
                  await _0x26d7d6("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x292fe9) {
            console.error("Error fetching movie details:", _0x292fe9);
            await _0x26d7d6("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x26d7d6("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x574d62) {
    console.error("Error during search:", _0x574d62);
    _0x26d7d6("*An error occurred while searching!*");
  }
});
cmd({
  'pattern': "gdrive",
  'desc': "To download Gdrive files.",
  'react': '🌐',
  'category': "download",
  'filename': __filename
}, async (_0xf5ca65, _0x53ce51, _0x370aa1, {
  from: _0x501ba1,
  quoted: _0x2ca093,
  body: _0x3b6eeb,
  isCmd: _0x44dd81,
  command: _0x20522f,
  args: _0x57f194,
  q: _0x69e7d4,
  isGroup: _0x3e4f07,
  sender: _0x5b1cac,
  senderNumber: _0x2c1228,
  botNumber2: _0x480195,
  botNumber: _0x28f79b,
  pushname: _0x18c8fd,
  isMe: _0x29be84,
  isOwner: _0x3b1ee8,
  groupMetadata: _0x42a2bf,
  groupName: _0x267f9c,
  participants: _0x3ebac4,
  groupAdmins: _0x1568d9,
  isBotAdmins: _0x33b3a4,
  isAdmins: _0x214893,
  reply: _0x4beeec
}) => {
  try {
    await _0xf5ca65.sendMessage(_0x501ba1, {
      'react': {
        'text': '⬇️',
        'key': _0x53ce51.key
      }
    });
    if (!_0x69e7d4) {
      return _0x370aa1.reply("Please Give Me a vaild Link...");
    }
    const _0x207ec9 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x69e7d4 + "&apikey=mnp3grlZ";
    const _0x2c3cdc = await axios.get(_0x207ec9);
    const _0x24cd9f = _0x2c3cdc.data.result.downloadUrl;
    if (_0x24cd9f) {
      await _0xf5ca65.sendMessage(_0x501ba1, {
        'react': {
          'text': '⬆️',
          'key': _0x53ce51.key
        }
      });
      await _0xf5ca65.sendMessage(_0x501ba1, {
        'document': {
          'url': _0x24cd9f
        },
        'mimetype': _0x2c3cdc.data.result.mimetype,
        'fileName': _0x2c3cdc.data.result.fileName,
        'caption': "*© Pᴏᴡᴇʀᴇᴅ Bʏ Mᴀᴛʀɪx-Xᴍᴅ"
      }, {
        'quoted': _0x53ce51
      });
    }
    await _0xf5ca65.sendMessage(_0x501ba1, {
      'react': {
        'text': '✅',
        'key': _0x53ce51.key
      }
    });
  } catch (_0xa7c467) {
    console.log(_0xa7c467);
  }
});