

function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const {
  cmd
} = require('../command');
const config = require('../config');
cmd({
  'pattern': 'movie',
  'desc': "Fetch detailed information about a movie.",
  'category': "utility",
  'react': '🎬',
  'filename': __filename
}, async (_0x30b3c6, _0x515a99, _0x5072ee, {
  from: _0x1cf542,
  quoted: _0x5f0f27,
  body: _0x4377b0,
  isCmd: _0x408541,
  command: _0x5502d7,
  args: _0x48babc,
  q: _0x184f9e,
  isGroup: _0x4ccb51,
  sender: _0x264efd,
  senderNumber: _0x125583,
  botNumber2: _0x1ff554,
  botNumber: _0x3af6a5,
  pushname: _0x1b2b6e,
  isMe: _0x2e37a3,
  isOwner: _0x371cba,
  groupMetadata: _0x3cc6f7,
  groupName: _0x21e802,
  participants: _0x45d3cf,
  groupAdmins: _0x1f986a,
  isBotAdmins: _0x5822f6,
  isAdmins: _0x413263,
  reply: _0x346617
}) => {
  try {
    const _0x46cfe0 = _0x48babc.join(" ");
    if (!_0x46cfe0) {
      return _0x346617("📽️ Please provide the name of the movie.");
    }
    const _0x529df9 = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x46cfe0) + '&apikey=' + config.OMDB_API_KEY;
    const _0x1d50e2 = await axios.get(_0x529df9);
    const _0x2d445c = _0x1d50e2.data;
    if (_0x2d445c.Response === "False") {
      return _0x346617("🚫 Movie not found.");
    }
    const _0x5339d4 = "\n🎬 *Movie Information* 🎬\n\n🎥 *Title:* " + _0x2d445c.Title + "\n📅 *Year:* " + _0x2d445c.Year + "\n🌟 *Rated:* " + _0x2d445c.Rated + "\n📆 *Released:* " + _0x2d445c.Released + "\n⏳ *Runtime:* " + _0x2d445c.Runtime + "\n🎭 *Genre:* " + _0x2d445c.Genre + "\n🎬 *Director:* " + _0x2d445c.Director + "\n✍️ *Writer:* " + _0x2d445c.Writer + "\n🎭 *Actors:* " + _0x2d445c.Actors + "\n📝 *Plot:* " + _0x2d445c.Plot + "\n🌍 *Language:* " + _0x2d445c.Language + "\n🇺🇸 *Country:* " + _0x2d445c.Country + "\n🏆 *Awards:* " + _0x2d445c.Awards + "\n⭐ *IMDB Rating:* " + _0x2d445c.imdbRating + "\n🗳️ *IMDB Votes:* " + _0x2d445c.imdbVotes + "\n";
    const _0x1600d5 = _0x2d445c.Poster && _0x2d445c.Poster !== "N/A" ? _0x2d445c.Poster : config.ALIVE_IMG;
    await _0x30b3c6.sendMessage(_0x1cf542, {
      'image': {
        'url': _0x1600d5
      },
      'caption': _0x5339d4 + "\n> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mᴀᴛʀɪx-Xᴍᴅ"
    }, {
      'quoted': _0x515a99
    });
  } catch (_0x64d199) {
    console.log(_0x64d199);
    _0x346617("❌ Error: " + _0x64d199.message);
  }
});