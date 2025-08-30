const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVJamxxZGZaWFJJZE0yb3RXZlhjT0c4OXdFWDFzRXR0a1pVeDB5SVRrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNlV2xuS2F6VSsxRmhVSkFtQVlOOWpSWThwaFZlV2xHc2Zkekozb0kwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR2pZL2cyTjc2anlOd1RzRjFSZERJdS8yU0h0Zy9JWVlrckdHa1plUm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYmZmekhWYm1hZHdabE01dUZUbEd3RnZ0eUdHb0YxbFViR3laM2k4L0I0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDOEFwS1VSb1doUUZjMlY3dkVQcVFzTEo0L1NTZDZyN1dCeUFkTzZHbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVYL1F6ZDZyckk4d2pHQ204ZEtwSzM2QzcrczBxRVJkc08yaEJhSFRXV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1pS1VlTHR3dFhwUTFIUWQxcUZzUG50amtmMGw5SC94VExEMHZ4cFZWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzNNV2ZWa0Y0U3FEQ3JpREJxam9EeUZtTnpRYnNvdzRieWkxeHQ3bkJSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJaWlE3YzQwWXdPNmovQzkxbnRqb0VFbzNHWnF3L1pQNmRqNUdpZjZFSHRkcFo3bFRTaHBwRjNZelpPazJoS29kUFpJRG1uT1dtelBzOGh3WWU0RWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IjN3c0s2QkcwbjQ0cWtXcm1sV0VUTkUrbk9rcWNReGFxV1BYSldHS1dIOWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkNDTDFMTURSIiwibWUiOnsiaWQiOiIyNjM3ODQzMDM0NjI6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiemltZXRoaWNzIiwibGlkIjoiMTc4NTYzNjUxMjExNDY3OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1JNGE0R0VJL2R5OFVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOUtZT3VIaWFQbkQvMFdnbnBvZkFkb0wxc2w2d0sxOWttYkdtZGJpVlRFVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMmFIS0I4Tzl3ejZubHFVNW9ZRzQrSjlFbnJ5MGRMNGFWT1pQQ29HUFhoU1J3aUYyaDk4dVlqL3lDMzRNeTg2TzdmdHpGS0FCeHIvemgxdDZLNUxnRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InRYMC9tQU1xdWhJWE5vMXpRMFhWMCtpWVg3NmNuWVA2SGt5SUhRcHlQQXJGN1RUL0t0SFJDKzRUYTFqL3hGanQvZjkrSUx6RkhSc3ZqaG5zWjM1Z2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg0MzAzNDYyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZTbURyaDRtajV3LzlGb0o2YUh3SGFDOWJKZXNDdGZaSm14cG5XNGxVeEYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjU1Njk0NiwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKeGMifQ==",
 
PREFIX: process.env.PREFIX || ".",
// Enter Your Desired Prefix

BOT_NAME: process.env.BOT_NAME || "『 𝐒𝐇𝐀𝐁𝐀𝐍 𝐒𝐎𝐁𝐗 𝐌𝐃 』",
// Enter Your Bot Name

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// Set Owner Name

OWNER_NAME: process.env.OWNER_NAME || "ᴍʀ sʜᴀʙᴀɴ",
// Set Footer

DESCRIPTION: process.env.DESCRIPTION || "*© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ SʜᴀʙᴀɴSᴏʙxMD*",
// add bot owner name   
 
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/9N1sJ41/Manul-Ofc-X.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> [🎐] SʜᴀʙᴀɴSᴏʙxMD ɪs ᴏɴʟɪɴᴇ*⚡",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*[❄️] Hi there, SHABAN-SOBX-MD viewed your Status🎐*",

// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply
 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing  
 
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
