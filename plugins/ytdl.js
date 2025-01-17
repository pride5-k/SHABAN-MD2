// Mᴀᴛʀɪx-Xᴍᴅ PROPERTY FUCK YOU CLONER

function hi() {
  console.log("Hello World!");
}
hi();
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
const yts = require("yt-search");
const {
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
async function ytmp4(_0x464909, _0x1e657a) {
  try {
    if (!_0x464909 || !_0x1e657a) {
      throw new Error("url and format parameters are required.");
    }
    const _0x29bf2c = parseInt(_0x1e657a.replace('p', ''), 0xa);
    const _0x4bdf7a = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x29bf2c,
      'url': _0x464909
    };
    const _0x5bb36e = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0xad91bb = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x4bdf7a,
      'headers': _0x5bb36e
    });
    const _0x55f88c = _0xad91bb.data.id;
    const _0xc2c82e = async () => {
      const _0xf2a7a7 = {
        'id': _0x55f88c
      };
      try {
        const _0xcb5dd3 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0xf2a7a7,
          'headers': _0x5bb36e
        });
        const {
          progress: _0x17d36e,
          download_url: _0x46738c,
          text: _0x16e74a
        } = _0xcb5dd3.data;
        return _0x16e74a === 'Finished' ? _0x46738c : (await new Promise(_0x372f9e => setTimeout(_0x372f9e, 0x3e8)), _0xc2c82e());
      } catch (_0x1327bc) {
        throw new Error("Error in progress check: " + _0x1327bc.message);
      }
    };
    return await _0xc2c82e();
  } catch (_0x2c873f) {
    console.error('Error:', _0x2c873f);
    return {
      'error': _0x2c873f.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x29838b) {
  const _0x472e50 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x1acc68 = _0x29838b.match(_0x472e50);
  return _0x1acc68 ? _0x1acc68[0x1] : null;
}
function convertYouTubeLink(_0x22623f) {
  const _0x323973 = extractYouTubeId(_0x22623f);
  if (_0x323973) {
    return "https://www.youtube.com/watch?v=" + _0x323973;
  }
  return _0x22623f;
}
cmd({
  'pattern': 'song',
  'alias': ['play', "ytmp3"],
  'desc': "To download songs.",
  'react': '🔎',
  'category': 'download',
  'filename': __filename
}, async (_0x367cec, _0xb72ac5, _0x3cd9f0, {
  from: _0x6ae07,
  quoted: _0x396e94,
  body: _0x20c4c5,
  isCmd: _0x4303a8,
  command: _0x51a86a,
  args: _0x37ced7,
  q: _0x54a93c,
  isGroup: _0x140750,
  sender: _0x2d3e3,
  senderNumber: _0xa78445,
  botNumber2: _0xe0fd35,
  botNumber: _0x2e2100,
  pushname: _0x92bf30,
  isMe: _0x4bec10,
  isOwner: _0x3b8351,
  groupMetadata: _0x146f74,
  groupName: _0xfc3b15,
  participants: _0x1359ce,
  groupAdmins: _0x309893,
  isBotAdmins: _0x1ac48a,
  isAdmins: _0x38f068,
  reply: _0x17d1d5
}) => {
  try {
    if (!_0x54a93c) {
      return _0x17d1d5("Please give me a URL or title. Eg .play Lily By Alan Walker");
    }
    _0x54a93c = convertYouTubeLink(_0x54a93c);
    const _0x486603 = await yts(_0x54a93c);
    const _0x1e663c = _0x486603.videos[0x0];
    const _0xa49b2b = _0x1e663c.url;
    const _0x1498a9 = await _0x367cec.sendMessage(_0x6ae07, {
      'image': {
        'url': _0x1e663c.thumbnail
      },
      'caption': "\n *🎗️ `Mᴀᴛʀɪx-Xᴍᴅ` 🎗️*\n\n⟣━━━━━━━━━━━━━━━━━⟢\n*sᴜʙᴢᴇʀᴏ sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n⟣━━━━━━━━━━━━━━━━━⟢\n\n➣ *🎐sᴜʙᴢᴇʀᴏ ʙᴏᴛ ᴄʜᴀɴɴᴇʟ🎐*\n*https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D*\n\n⟣━━━━━━━━━━━━━━━━━━⟢\n> ℹ️ ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ғᴏʀᴍᴀᴛ\n\n*1   ┃ ᴀᴜᴅɪᴏ sᴏɴɢ 🎵*\n*2   ┃ ᴅᴏᴄᴜᴍᴇɴᴛ sᴏɴɢ 🗂️*\n\n> © 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓\n"
    }, {
      'quoted': _0xb72ac5
    });
    const _0xecb16c = _0x1498a9.key.id;
    _0x367cec.ev.on("messages.upsert", async _0x2dbd73 => {
      const _0x576da0 = _0x2dbd73.messages[0x0];
      if (!_0x576da0.message) {
        return;
      }
      const _0x33579f = _0x576da0.message.conversation || _0x576da0.message.extendedTextMessage?.['text'];
      const _0x5e9d07 = _0x576da0.key.remoteJid;
      const _0x1fcab8 = _0x576da0.message.extendedTextMessage && _0x576da0.message.extendedTextMessage.contextInfo.stanzaId === _0xecb16c;
      if (_0x1fcab8) {
        await _0x367cec.sendMessage(_0x5e9d07, {
          'react': {
            'text': '⬇️',
            'key': _0x576da0.key
          }
        });
        const _0x1f015e = await fetchJson('https://api.davidcyriltech.my.id/download/ytmp3?url=' + _0xa49b2b);
        const _0x19ea99 = _0x1f015e.result.download_url;
        await _0x367cec.sendMessage(_0x5e9d07, {
          'delete': _0x1498a9.key
        });
        await _0x367cec.sendMessage(_0x5e9d07, {
          'react': {
            'text': '⬆️',
            'key': _0x576da0.key
          }
        });
        if (_0x33579f === '1') {
          await _0x367cec.sendMessage(_0x5e9d07, {
            'audio': {
              'url': _0x19ea99
            },
            'mimetype': 'audio/mpeg',
            'contextInfo': {
              'externalAdReply': {
                'title': _0x1e663c.title,
                'body': _0x1e663c.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x1e663c.url,
                'thumbnailUrl': _0x1e663c.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x576da0
          });
          await _0x367cec.sendMessage(_0x5e9d07, {
            'react': {
              'text': '✅',
              'key': _0x576da0.key
            }
          });
        } else if (_0x33579f === '2') {
          await _0x367cec.sendMessage(_0x5e9d07, {
            'document': {
              'url': _0x19ea99
            },
            'mimetype': "audio/mp3",
            'fileName': _0x1e663c.title + '.mp3',
            'caption': "\n> © Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Sᴜʙᴢᴇʀᴏ ❤️\n"
          }, {
            'quoted': _0x576da0
          });
          await _0x367cec.sendMessage(_0x5e9d07, {
            'react': {
              'text': '✅',
              'key': _0x576da0.key
            }
          });
        }
      }
    });
  } catch (_0x3e968c) {
    console.log(_0x3e968c);
    _0x17d1d5('' + _0x3e968c);
  }
});
cmd({
  'pattern': 'video',
  'alias': 'ytmp4',
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x501223, _0x401e54, _0x3fa8c2, {
  from: _0x4b4c59,
  quoted: _0x300d7,
  body: _0x44b95d,
  isCmd: _0x560846,
  command: _0x2e2f96,
  args: _0x1e5145,
  q: _0x1ec4cf,
  isGroup: _0x3734cc,
  sender: _0x367f1f,
  senderNumber: _0x54dd67,
  botNumber2: _0x356a33,
  botNumber: _0x5a2f23,
  pushname: _0x1e6960,
  isMe: _0x3dc452,
  isOwner: _0xe6badb,
  groupMetadata: _0x33758f,
  groupName: _0x35d5ea,
  participants: _0x36c3c8,
  groupAdmins: _0x3fbf03,
  isBotAdmins: _0x50ec83,
  isAdmins: _0x102f8b,
  reply: _0x4d8f6c
}) => {
  try {
    if (!_0x1ec4cf) {
      return _0x4d8f6c("Please give me a URL or title.");
    }
    _0x1ec4cf = convertYouTubeLink(_0x1ec4cf);
    const _0x25ae70 = await yts(_0x1ec4cf);
    const _0x32aefb = _0x25ae70.videos[0x0];
    const _0x2f07c2 = _0x32aefb.url;
    const _0x1bc911 = await _0x501223.sendMessage(_0x4b4c59, {
      'image': {
        'url': _0x32aefb.thumbnail
      },
      'caption': "\n*🎗️Mᴀᴛʀɪx-Xᴍᴅ🎗️* \n\n┏━━━━━━━━━━━━━\n┃Mᴀᴛʀɪx-Xᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ✻\n┗━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━\n\n🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> Mᴀᴛʀɪx-Xᴍᴅ✻\n"
    }, {
      'quoted': _0x401e54
    });
    ;
    const _0x239eff = _0x1bc911.key.id;
    _0x501223.ev.on("messages.upsert", async _0x23645d => {
      const _0x3d8e82 = _0x23645d.messages[0x0];
      if (!_0x3d8e82.message) {
        return;
      }
      const _0xb9ea27 = _0x3d8e82.message.conversation || _0x3d8e82.message.extendedTextMessage?.["text"];
      const _0xc628aa = _0x3d8e82.key.remoteJid;
      const _0x3e0409 = _0x3d8e82.message.extendedTextMessage && _0x3d8e82.message.extendedTextMessage.contextInfo.stanzaId === _0x239eff;
      if (_0x3e0409) {
        await _0x501223.sendMessage(_0xc628aa, {
          'react': {
            'text': '⬇️',
            'key': _0x3d8e82.key
          }
        });
        if (_0xb9ea27 === "1.1") {
          const _0x25c893 = await ytmp4('' + _0x2f07c2, '360p');
          await _0x501223.sendMessage(_0xc628aa, {
            'delete': _0x1bc911.key
          });
          await _0x501223.sendMessage(_0xc628aa, {
            'react': {
              'text': '⬆️',
              'key': _0x3d8e82.key
            }
          });
          await _0x501223.sendMessage(_0xc628aa, {
            'video': {
              'url': _0x25c893
            },
            'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
          }, {
            'quoted': _0x3d8e82
          });
          await _0x501223.sendMessage(_0xc628aa, {
            'react': {
              'text': '✅',
              'key': _0x3d8e82.key
            }
          });
        } else {
          if (_0xb9ea27 === '1.2') {
            const _0x34844d = await ytmp4('' + _0x2f07c2, "480");
            await _0x501223.sendMessage(_0xc628aa, {
              'delete': _0x1bc911.key
            });
            await _0x501223.sendMessage(_0xc628aa, {
              'react': {
                'text': '🔃',
                'key': _0x3d8e82.key
              }
            });
            await _0x501223.sendMessage(_0xc628aa, {
              'video': {
                'url': _0x34844d
              },
              'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
            }, {
              'quoted': _0x3d8e82
            });
            await _0x501223.sendMessage(_0xc628aa, {
              'react': {
                'text': '✅',
                'key': _0x3d8e82.key
              }
            });
          } else {
            if (_0xb9ea27 === "1.3") {
              const _0x5e1da6 = await ytmp4('' + _0x2f07c2, "720");
              await _0x501223.sendMessage(_0xc628aa, {
                'delete': _0x1bc911.key
              });
              await _0x501223.sendMessage(_0xc628aa, {
                'react': {
                  'text': '⬆️',
                  'key': _0x3d8e82.key
                }
              });
              await _0x501223.sendMessage(_0xc628aa, {
                'video': {
                  'url': _0x5e1da6
                },
                'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
              }, {
                'quoted': _0x3d8e82
              });
              await _0x501223.sendMessage(_0xc628aa, {
                'react': {
                  'text': '✅',
                  'key': _0x3d8e82.key
                }
              });
            } else {
              if (_0xb9ea27 === '1.4') {
                const _0x1589f1 = await ytmp4('' + _0x2f07c2, "1080");
                await _0x501223.sendMessage(_0xc628aa, {
                  'delete': _0x1bc911.key
                });
                await _0x501223.sendMessage(_0xc628aa, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x3d8e82.key
                  }
                });
                await _0x501223.sendMessage(_0xc628aa, {
                  'video': {
                    'url': _0x1589f1
                  },
                  'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
                }, {
                  'quoted': _0x3d8e82
                });
                await _0x501223.sendMessage(_0xc628aa, {
                  'react': {
                    'text': '✅',
                    'key': _0x3d8e82.key
                  }
                });
              } else {
                if (_0xb9ea27 === "2.1") {
                  const _0x5cd5ec = await ytmp4('' + _0x2f07c2, "360");
                  await _0x501223.sendMessage(_0xc628aa, {
                    'delete': _0x1bc911.key
                  });
                  await _0x501223.sendMessage(_0xc628aa, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x3d8e82.key
                    }
                  });
                  await _0x501223.sendMessage(_0xc628aa, {
                    'document': {
                      'url': _0x5cd5ec
                    },
                    'mimetype': 'video/mp4',
                    'fileName': _0x32aefb.title + '.mp4',
                    'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
                  }, {
                    'quoted': _0x3d8e82
                  });
                  await _0x501223.sendMessage(_0xc628aa, {
                    'react': {
                      'text': '✅',
                      'key': _0x3d8e82.key
                    }
                  });
                } else {
                  if (_0xb9ea27 === "2.2") {
                    const _0x516d28 = await ytmp4('' + _0x2f07c2, '480');
                    await _0x501223.sendMessage(_0xc628aa, {
                      'delete': _0x1bc911.key
                    });
                    await _0x501223.sendMessage(_0xc628aa, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x3d8e82.key
                      }
                    });
                    await _0x501223.sendMessage(_0xc628aa, {
                      'document': {
                        'url': _0x516d28
                      },
                      'mimetype': 'video/mp4',
                      'fileName': _0x32aefb.title + ".mp4",
                      'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
                    }, {
                      'quoted': _0x3d8e82
                    });
                    await _0x501223.sendMessage(_0xc628aa, {
                      'react': {
                        'text': '✅',
                        'key': _0x3d8e82.key
                      }
                    });
                  } else {
                    if (_0xb9ea27 === '2.3') {
                      const _0x5dffc6 = await ytmp4('' + _0x2f07c2, "720");
                      await _0x501223.sendMessage(_0xc628aa, {
                        'delete': _0x1bc911.key
                      });
                      await _0x501223.sendMessage(_0xc628aa, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x3d8e82.key
                        }
                      });
                      await _0x501223.sendMessage(_0xc628aa, {
                        'document': {
                          'url': _0x5dffc6
                        },
                        'mimetype': "video/mp4",
                        'fileName': _0x32aefb.title + ".mp4",
                        'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
                      }, {
                        'quoted': _0x3d8e82
                      });
                      await _0x501223.sendMessage(_0xc628aa, {
                        'react': {
                          'text': '✅',
                          'key': _0x3d8e82.key
                        }
                      });
                    } else {
                      if (_0xb9ea27 === "2.4") {
                        const _0x9e6c59 = await ytmp4('' + _0x2f07c2, "1080");
                        await _0x501223.sendMessage(_0xc628aa, {
                          'delete': _0x1bc911.key
                        });
                        await _0x501223.sendMessage(_0xc628aa, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x3d8e82.key
                          }
                        });
                        await _0x501223.sendMessage(_0xc628aa, {
                          'document': {
                            'url': _0x9e6c59
                          },
                          'mimetype': 'video/mp4',
                          'fileName': _0x32aefb.title + ".mp4",
                          'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ Mᴀᴛʀɪx-Xᴍᴅ🌟*\n"
                        }, {
                          'quoted': _0x3d8e82
                        });
                        await _0x501223.sendMessage(_0xc628aa, {
                          'react': {
                            'text': '✅',
                            'key': _0x3d8e82.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x46026d) {
    console.log(_0x46026d);
    _0x4d8f6c('' + _0x46026d);
  }
});
cmd({
  'pattern': "dee",
  'alias': 'dilolo',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x528ce1, _0x11edfc, _0x46fe4a, {
  from: _0x563367,
  q: _0x30bec9,
  reply: _0x231249
}) => {
  try {
    if (!_0x30bec9) {
      return await _0x231249("*Need a YouTube URL!*");
    }
    const _0x3d0b00 = await dlyta(_0x30bec9);
    await _0x528ce1.sendMessage(_0x563367, {
      'audio': {
        'url': _0x3d0b00.dl_link
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x11edfc
    });
  } catch (_0x12b72c) {
    console.log("First attempt failed:", _0x12b72c);
    try {
      const _0x487390 = await dlyta(_0x30bec9);
      await _0x528ce1.sendMessage(_0x563367, {
        'audio': {
          'url': _0x487390.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x11edfc
      });
    } catch (_0x2b0154) {
      console.log("Second attempt failed:", _0x2b0154);
      await _0x231249("*Failed to process the request. Please try again later!*");
    }
  }
});