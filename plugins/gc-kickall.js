
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
const sleep = _0xecf6c2 => new Promise(_0x3c3251 => setTimeout(_0x3c3251, _0xecf6c2));
cmd({
  'pattern': "removemembers",
  'alias': ["kickall", 'endgc', "endgroup"],
  'desc': "Remove all non-admin members from the group.",
  'react': '🎉',
  'category': 'group',
  'filename': __filename
}, async (_0x314de4, _0x2ccb20, _0x194ba0, {
  from: _0x4ed2fb,
  groupMetadata: _0x4d975a,
  groupAdmins: _0x308d5b,
  isBotAdmins: _0x538199,
  senderNumber: _0x2f38d5,
  reply: _0x11bb58,
  isGroup: _0x4264ae
}) => {
  try {
    if (!_0x4264ae) {
      return _0x11bb58("This command can only be used in groups.");
    }
    const _0x175ca3 = _0x314de4.user.id.split(':')[0x0];
    if (_0x2f38d5 !== _0x175ca3) {
      return _0x11bb58("Only the bot owner can use this command.");
    }
    if (!_0x538199) {
      return _0x11bb58("I need to be an admin to execute this command.");
    }
    const _0x28cdc9 = _0x4d975a.participants;
    const _0x5e08a5 = _0x28cdc9.filter(_0x6914ee => !_0x308d5b.includes(_0x6914ee.id));
    if (_0x5e08a5.length === 0x0) {
      return _0x11bb58("There are no non-admin members to remove.");
    }
    _0x11bb58("Starting to remove " + _0x5e08a5.length + " non-admin members...");
    for (let _0x159d74 of _0x5e08a5) {
      try {
        await _0x314de4.groupParticipantsUpdate(_0x4ed2fb, [_0x159d74.id], "remove");
        await sleep(0x7d0);
      } catch (_0x10982b) {
        console.error("Failed to remove " + _0x159d74.id + ':', _0x10982b);
      }
    }
    _0x11bb58("Successfully removed all non-admin members from the group.");
  } catch (_0x1f1c91) {
    console.error("Error removing non-admin users:", _0x1f1c91);
    _0x11bb58("An error occurred while trying to remove non-admin members. Please try again.");
  }
});
cmd({
  'pattern': "removeadmins",
  'alias': ['kickadmins', "kickall3", 'deladmins'],
  'desc': "Remove all admin members from the group, excluding the bot and bot owner.",
  'react': '🎉',
  'category': "group",
  'filename': __filename
}, async (_0x2e3360, _0x5869eb, _0x466151, {
  from: _0x250c15,
  isGroup: _0xa13087,
  senderNumber: _0xe0b9df,
  groupMetadata: _0x5142d6,
  groupAdmins: _0x3065f8,
  isBotAdmins: _0x3a21e2,
  reply: _0x54c961
}) => {
  try {
    if (!_0xa13087) {
      return _0x54c961("This command can only be used in groups.");
    }
    const _0x7360c9 = _0x2e3360.user.id.split(':')[0x0];
    if (_0xe0b9df !== _0x7360c9) {
      return _0x54c961("Only the bot owner can use this command.");
    }
    if (!_0x3a21e2) {
      return _0x54c961("I need to be an admin to execute this command.");
    }
    const _0x3ab94c = _0x5142d6.participants;
    const _0x48f09c = _0x3ab94c.filter(_0x2a5176 => _0x3065f8.includes(_0x2a5176.id) && _0x2a5176.id !== _0x2e3360.user.id && _0x2a5176.id !== _0x7360c9 + "@s.whatsapp.net");
    if (_0x48f09c.length === 0x0) {
      return _0x54c961("There are no admin members to remove.");
    }
    _0x54c961("Starting to remove " + _0x48f09c.length + " admin members, excluding the bot and bot owner...");
    for (let _0x37d81a of _0x48f09c) {
      try {
        await _0x2e3360.groupParticipantsUpdate(_0x250c15, [_0x37d81a.id], "remove");
        await sleep(0x7d0);
      } catch (_0x3c0680) {
        console.error("Failed to remove " + _0x37d81a.id + ':', _0x3c0680);
      }
    }
    _0x54c961("Successfully removed all admin members from the group, excluding the bot and bot owner.");
  } catch (_0x1e4a11) {
    console.error("Error removing admins:", _0x1e4a11);
    _0x54c961("An error occurred while trying to remove admins. Please try again.");
  }
});
cmd({
  'pattern': "removeall2",
  'alias': ["kickall2", "endgc2", "endgroup2"],
  'desc': "Remove all members and admins from the group, excluding the bot and bot owner.",
  'react': '🎉',
  'category': "group",
  'filename': __filename
}, async (_0x283023, _0x52add4, _0x47ad54, {
  from: _0x585974,
  isGroup: _0x2b3000,
  senderNumber: _0x34b349,
  groupMetadata: _0x3c78e1,
  isBotAdmins: _0x1f374,
  reply: _0x237042
}) => {
  try {
    if (!_0x2b3000) {
      return _0x237042("This command can only be used in groups.");
    }
    const _0x26bfae = _0x283023.user.id.split(':')[0x0];
    if (_0x34b349 !== _0x26bfae) {
      return _0x237042("Only the bot owner can use this command.");
    }
    if (!_0x1f374) {
      return _0x237042("I need to be an admin to execute this command.");
    }
    const _0x3cf552 = _0x3c78e1.participants;
    if (_0x3cf552.length === 0x0) {
      return _0x237042("The group has no members to remove.");
    }
    const _0x972b0a = _0x3cf552.filter(_0x272c30 => _0x272c30.id !== _0x283023.user.id && _0x272c30.id !== _0x26bfae + "@s.whatsapp.net");
    if (_0x972b0a.length === 0x0) {
      return _0x237042("No members to remove after excluding the bot and bot owner.");
    }
    _0x237042("Starting to remove " + _0x972b0a.length + " members, excluding the bot and bot owner...");
    for (let _0x328ca6 of _0x972b0a) {
      try {
        await _0x283023.groupParticipantsUpdate(_0x585974, [_0x328ca6.id], "remove");
        await sleep(0x7d0);
      } catch (_0x1eeea9) {
        console.error("Failed to remove " + _0x328ca6.id + ':', _0x1eeea9);
      }
    }
    _0x237042("Successfully removed all members, excluding the bot and bot owner, from the group.");
  } catch (_0x4178b9) {
    console.error("Error removing members:", _0x4178b9);
    _0x237042("An error occurred while trying to remove members. Please try again.");
  }
});