
function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const yts = require('yt-search');
const {
  youtube
} = require("btch-downloader");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "spotify",
  'alias': ["ytmusic", "music"],
  'react': '🎶',
  'desc': "Fetch audio from Spotify or YouTube",
  'category': "media",
  'filename': __filename
}, async (_0x33522d, _0x4e7bf1, _0xe7be94, {
  from: _0x4f8bb1,
  quoted: _0x57d2f3,
  body: _0x1d3ba2,
  isCmd: _0x128ec4,
  command: _0x21ef67,
  args: _0x27202a,
  q: _0x3bbcc9,
  isGroup: _0x1c0166,
  sender: _0x53714e,
  senderNumber: _0x2f071c,
  botNumber: _0x491545,
  pushname: _0x3ab57c,
  reply: _0x3ce42b
}) => {
  if (!_0x3bbcc9) {
    return _0x3ce42b("Please provide a title or link (Spotify/YouTube)!");
  }
  _0x3ce42b("```Gᴇɴᴇʀᴀᴛɪɴɢ ʏᴏᴜʀ sᴏɴɢ 🤗```");
  try {
    const _0x123dbf = await axios.get('https://spotifyapi.caliphdev.com/api/search/tracks?q=' + encodeURIComponent(_0x3bbcc9));
    const _0x5c8d48 = _0x123dbf.data[0x0];
    if (_0x5c8d48) {
      const _0x6a333 = await axios({
        'url': "https://spotifyapi.caliphdev.com/api/download/track?url=" + encodeURIComponent(_0x5c8d48.url),
        'method': "GET",
        'responseType': "stream"
      });
      if (_0x6a333.headers["content-type"] === "audio/mpeg") {
        await _0x33522d.sendMessage(_0x4f8bb1, {
          'audio': _0x6a333.data,
          'mimetype': "audio/mpeg",
          'contextInfo': {
            'externalAdReply': {
              'title': _0x5c8d48.title,
              'body': "Artist: " + _0x5c8d48.artist,
              'mediaType': 0x1,
              'sourceUrl': _0x5c8d48.url,
              'renderLargerThumbnail': true
            }
          }
        });
        return;
      }
    }
  } catch (_0x3dc897) {
    console.error("Spotify Error:", _0x3dc897.message);
  }
  try {
    const _0x43a66a = await yts(_0x3bbcc9);
    const _0x89189c = _0x43a66a.videos[0x0];
    if (_0x89189c && _0x89189c.seconds < 0xe10) {
      const _0x5a06c1 = await youtube(_0x89189c.url);
      if (_0x5a06c1 && _0x5a06c1.mp3) {
        await _0x33522d.sendMessage(_0x4f8bb1, {
          'audio': {
            'url': _0x5a06c1.mp3
          },
          'mimetype': "audio/mpeg",
          'contextInfo': {
            'externalAdReply': {
              'title': _0x89189c.title,
              'body': "Fetched from YouTube",
              'mediaType': 0x1,
              'sourceUrl': _0x89189c.url,
              'renderLargerThumbnail': true
            }
          }
        });
      } else {
        _0x3ce42b("ERROR : Failed to fetch audio from Spotify.");
      }
    } else {
      _0x3ce42b("No suitable YouTube results found.");
    }
  } catch (_0x4ac2e2) {
    console.error("Spotify Error:", _0x4ac2e2.message);
  }
});