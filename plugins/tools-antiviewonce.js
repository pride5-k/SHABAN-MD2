
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'vv',
  'alias': ["retrive", "viewonce"],
  'desc': "Fetch and resend a ViewOnce message content (image/video/voice).",
  'category': 'misc',
  'use': "<query>",
  'filename': __filename
}, async (_0x426f88, _0x48d44b, _0x3577b3, {
  from: _0x410f9f,
  reply: _0x6fa562
}) => {
  try {
    const _0x48f594 = _0x3577b3.msg.contextInfo.quotedMessage;
    if (_0x48f594 && _0x48f594.viewOnceMessageV2) {
      const _0x16978c = _0x48f594.viewOnceMessageV2;
      if (_0x16978c.message.imageMessage) {
        let _0x31a63f = _0x16978c.message.imageMessage.caption;
        let _0x5896cd = await _0x426f88.downloadAndSaveMediaMessage(_0x16978c.message.imageMessage);
        return _0x426f88.sendMessage(_0x410f9f, {
          'image': {
            'url': _0x5896cd
          },
          'caption': _0x31a63f
        }, {
          'quoted': _0x48d44b
        });
      }
      if (_0x16978c.message.videoMessage) {
        let _0x2990ea = _0x16978c.message.videoMessage.caption;
        let _0x456e9a = await _0x426f88.downloadAndSaveMediaMessage(_0x16978c.message.videoMessage);
        return _0x426f88.sendMessage(_0x410f9f, {
          'video': {
            'url': _0x456e9a
          },
          'caption': _0x2990ea
        }, {
          'quoted': _0x48d44b
        });
      }
      if (_0x16978c.message.audioMessage) {
        let _0xbb1b8b = await _0x426f88.downloadAndSaveMediaMessage(_0x16978c.message.audioMessage);
        return _0x426f88.sendMessage(_0x410f9f, {
          'audio': {
            'url': _0xbb1b8b
          }
        }, {
          'quoted': _0x48d44b
        });
      }
    }
    if (!_0x3577b3.quoted) {
      return _0x6fa562("Please reply to a ViewOnce message.");
    }
    if (_0x3577b3.quoted.mtype === "viewOnceMessage") {
      if (_0x3577b3.quoted.message.imageMessage) {
        let _0x3542ee = _0x3577b3.quoted.message.imageMessage.caption;
        let _0x40dc89 = await _0x426f88.downloadAndSaveMediaMessage(_0x3577b3.quoted.message.imageMessage);
        return _0x426f88.sendMessage(_0x410f9f, {
          'image': {
            'url': _0x40dc89
          },
          'caption': _0x3542ee
        }, {
          'quoted': _0x48d44b
        });
      } else {
        if (_0x3577b3.quoted.message.videoMessage) {
          let _0xb9697a = _0x3577b3.quoted.message.videoMessage.caption;
          let _0x47bb0f = await _0x426f88.downloadAndSaveMediaMessage(_0x3577b3.quoted.message.videoMessage);
          return _0x426f88.sendMessage(_0x410f9f, {
            'video': {
              'url': _0x47bb0f
            },
            'caption': _0xb9697a
          }, {
            'quoted': _0x48d44b
          });
        }
      }
    } else {
      if (_0x3577b3.quoted.message.audioMessage) {
        let _0x15f73e = await _0x426f88.downloadAndSaveMediaMessage(_0x3577b3.quoted.message.audioMessage);
        return _0x426f88.sendMessage(_0x410f9f, {
          'audio': {
            'url': _0x15f73e
          }
        }, {
          'quoted': _0x48d44b
        });
      } else {
        return _0x6fa562("> *This is not a ViewOnce message.*");
      }
    }
  } catch (_0x12a716) {
    console.log('Error:', _0x12a716);
    _0x6fa562("An error occurred while fetching the ViewOnce message.");
  }
});