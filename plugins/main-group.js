
function hi() {
  console.log("Hello World!");
}
hi();
const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const _0x235552 = {
  'pattern': "joinrequests",
  'desc': "Get list of participants who requested to join the group",
  'react': '📋',
  'category': "group",
  'filename': __filename
};
cmd(_0x235552, async (_0x2ffb9f, _0x438ba1, _0x16ed81, {
  from: _0x43f645,
  q: _0x5c91ff,
  reply: _0x546ed9,
  isGroup: _0x1e625f
}) => {
  if (!_0x1e625f) {
    return _0x546ed9("This command can only be used in a group chat.");
  }
  try {
    console.log("Attempting to fetch pending requests for group: " + _0x43f645);
    const _0x90c504 = await _0x2ffb9f.groupRequestParticipantsList(_0x43f645);
    console.log(_0x90c504);
    if (_0x90c504.length > 0x0) {
      let _0x764f9c = "Pending Requests to Join the Group:\n";
      let _0x2dfcdb = [];
      _0x90c504.forEach(_0x46be50 => {
        const _0x5ac20b = _0x46be50.jid;
        _0x764f9c += "😻 @" + _0x5ac20b.split('@')[0x0] + "\n";
        _0x2dfcdb.push(_0x5ac20b);
      });
      const _0x11536f = {
        'text': _0x764f9c,
        'mentions': _0x2dfcdb
      };
      await _0x2ffb9f.sendMessage(_0x43f645, _0x11536f);
    } else {
      _0x546ed9("No pending requests to join the group.");
    }
  } catch (_0x98ae0) {
    console.error("Error fetching participant requests: " + _0x98ae0.message);
    _0x546ed9("⚠️ An error occurred while fetching the pending requests. Please try again later.");
  }
});
const _0x485005 = {
  'pattern': "allreq",
  'desc': "Approve or reject all join requests",
  'react': '✅',
  'category': "group",
  'filename': __filename
};
cmd(_0x485005, async (_0x1f5779, _0x3578f3, _0x134f92, {
  from: _0x391eb6,
  reply: _0x57ed51,
  isGroup: _0x589948
}) => {
  if (!_0x589948) {
    return _0x57ed51("This command can only be used in a group chat.");
  }
  const _0x1a4186 = _0x134f92.body.includes('approve') ? 'approve' : "reject";
  try {
    const _0x2f59ae = await _0x1f5779.groupRequestParticipantsList(_0x391eb6);
    if (_0x2f59ae.length === 0x0) {
      return _0x57ed51("There are no pending requests to manage.");
    }
    let _0x19feb4 = "Pending Requests to Join the Group:\n";
    let _0x249424 = [];
    let _0x3642f2 = [];
    _0x2f59ae.forEach(_0x57342a => {
      const _0x5adb4c = _0x57342a.jid;
      _0x19feb4 += "😻 @" + _0x5adb4c.split('@')[0x0] + "\n";
      _0x249424.push(_0x5adb4c);
      _0x3642f2.push(_0x5adb4c);
    });
    const _0x335025 = {
      'text': _0x19feb4,
      'mentions': _0x249424
    };
    await _0x1f5779.sendMessage(_0x391eb6, _0x335025);
    const _0x5a00ea = await _0x1f5779.groupRequestParticipantsUpdate(_0x391eb6, _0x3642f2, _0x1a4186);
    console.log(_0x5a00ea);
    _0x57ed51("Successfully " + _0x1a4186 + "ed all join requests.");
  } catch (_0x148714) {
    console.error("Error updating participant requests: " + _0x148714.message);
    _0x57ed51("⚠️ An error occurred while processing the request. Please try again later.");
  }
});
const _0x3bcce0 = {
  'pattern': "disappear",
  'react': '🌪️',
  'alias': ['dm'],
  'desc': "Turn on/off disappearing messages.",
  'category': "main",
  'filename': __filename
};
cmd(_0x3bcce0, async (_0x13d32c, _0xf2a7e7, _0xfa9725, {
  from: _0x2dec3d,
  isGroup: _0x12c2ce,
  isAdmins: _0x1ad1ee,
  args: _0x5300c9
}) => {
  if (!_0x12c2ce) {
    const _0x21e358 = {
      'text': "This command can only be used in groups."
    };
    await _0x13d32c.sendMessage(_0x2dec3d, _0x21e358);
    return;
  }
  if (!_0x1ad1ee) {
    const _0x43010d = {
      'text': "Only admins can turn on/off disappearing messages."
    };
    await _0x13d32c.sendMessage(_0x2dec3d, _0x43010d);
    return;
  }
  const _0x36fa3d = _0x5300c9[0x0];
  if (_0x36fa3d === 'on') {
    const _0x9ad93f = _0x5300c9[0x1];
    let _0x1f4baa;
    switch (_0x9ad93f) {
      case "24h":
        _0x1f4baa = 0x15180;
        break;
      case '7d':
        _0x1f4baa = 0x93a80;
        break;
      case "90d":
        _0x1f4baa = 0x76a700;
        break;
      default:
        const _0x443fd1 = {
          'text': "Invalid duration! Use `24h`, `7d`, or `90d`."
        };
        await _0x13d32c.sendMessage(_0x2dec3d, _0x443fd1);
        return;
    }
    const _0x2797d8 = {
      'disappearingMessagesInChat': _0x1f4baa
    };
    await _0x13d32c.sendMessage(_0x2dec3d, _0x2797d8);
    const _0x5c0723 = {
      'text': "Disappearing messages are now ON for " + _0x9ad93f + '.'
    };
    await _0x13d32c.sendMessage(_0x2dec3d, _0x5c0723);
  } else {
    if (_0x36fa3d === 'off') {
      const _0x4f6ea6 = {
        'disappearingMessagesInChat': false
      };
      await _0x13d32c.sendMessage(_0x2dec3d, _0x4f6ea6);
      const _0x4e3ecb = {
        'text': "Disappearing messages are now OFF."
      };
      await _0x13d32c.sendMessage(_0x2dec3d, _0x4e3ecb);
    } else {
      const _0x4d7e53 = {
        'text': "Please use `!disappear on <duration>` or `!disappear off`."
      };
      await _0x13d32c.sendMessage(_0x2dec3d, _0x4d7e53);
    }
  }
});
const _0x592aaf = {
  'pattern': "senddm",
  'react': "🌪️",
  'alias': ["senddisappear"],
  'desc': "Send a disappearing message.",
  'category': "main",
  'filename': __filename
};
cmd(_0x592aaf, async (_0x3613d6, _0x2a02bf, _0x49f797, {
  from: _0x2be862,
  isGroup: _0x4b7a27,
  isAdmins: _0x37f01b,
  args: _0x330c1a
}) => {
  if (!_0x4b7a27) {
    const _0x257f73 = {
      'text': "This command can only be used in groups."
    };
    await _0x3613d6.sendMessage(_0x2be862, _0x257f73);
    return;
  }
  if (!_0x330c1a.length) {
    const _0x583899 = {
      'text': "Please provide a message to send."
    };
    await _0x3613d6.sendMessage(_0x2be862, _0x583899);
    return;
  }
  const _0x38ac81 = _0x330c1a.join(" ");
  const _0x417d5a = {
    'text': _0x38ac81
  };
  const _0x216298 = {
    'ephemeralExpiration': 0x93a80
  };
  await _0x3613d6.sendMessage(_0x2be862, _0x417d5a, _0x216298);
});
const _0x4f6b5b = {
  'pattern': "mute",
  'react': '🔇',
  'alias': ["close", "f_mute"],
  'desc': "Change to group settings to only admins can send messages & Mr Frank.",
  'category': 'group',
  'use': ".mute",
  'filename': __filename
};
cmd(_0x4f6b5b, async (_0x3b3a20, _0x4bed3e, _0x111bd8, {
  from: _0x45abd4,
  l: _0x31685f,
  quoted: _0x499aa7,
  body: _0x2f4b33,
  isCmd: _0x1b125c,
  command: _0x372556,
  args: _0x4ad073,
  q: _0x38ed93,
  isGroup: _0x534a06,
  sender: _0x108c6f,
  senderNumber: _0x58c2e7,
  botNumber2: _0x34d5d7,
  botNumber: _0x2b7c88,
  pushname: _0x565fa4,
  isMe: _0x36d6f2,
  isOwner: _0x314c90,
  groupMetadata: _0x323c4f,
  groupName: _0xb9d00a,
  participants: _0x2540e5,
  groupAdmins: _0x48b5c2,
  isBotAdmins: _0x28335e,
  isCreator: _0xa06666,
  isDev: _0x5a4a9c,
  isAdmins: _0x53a83f,
  reply: _0xd70645
}) => {
  try {
    const _0x5ab171 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x534a06) {
      return _0xd70645(_0x5ab171.only_gp);
    }
    if (!_0x53a83f) {
      const _0x5c4a9d = {
        'quoted': _0x4bed3e
      };
      if (!_0x5a4a9c) {
        _0xd70645(_0x5ab171.you_adm);
        return _0x5c4a9d;
      }
    }
    if (!_0x28335e) {
      return _0xd70645(_0x5ab171.give_adm);
    }
    await _0x3b3a20.groupSettingUpdate(_0x45abd4, "announcement");
    const _0x13c306 = {
      'text': "*Yooh Guys Iam Tired 😓, Its Time to rest, Group Chat closed by Admin " + _0x565fa4 + "* 🔇"
    };
    const _0xd9ffbb = {
      'quoted': _0x4bed3e
    };
    await _0x3b3a20.sendMessage(_0x45abd4, _0x13c306, _0xd9ffbb);
  } catch (_0x399fee) {
    const _0x5698a2 = {
      'text': '❌',
      'key': _0x4bed3e.key
    };
    const _0x579225 = {
      'react': _0x5698a2
    };
    await _0x3b3a20.sendMessage(_0x45abd4, _0x579225);
    console.log(_0x399fee);
    _0xd70645("❌ *Error Accurated !!*\n\n" + _0x399fee);
  }
});
const _0x87e572 = {
  'pattern': 'unmute',
  'react': '🔇',
  'alias': ["open", 'f_unmute'],
  'desc': "I have rested Enough, Changed  group settings to all members can send messages.",
  'category': 'group',
  'use': ".unmute",
  'filename': __filename
};
cmd(_0x87e572, async (_0xd69e8c, _0x147af3, _0x13ae77, {
  from: _0x4692d4,
  l: _0x1d73aa,
  quoted: _0x235127,
  body: _0x5951ee,
  isCmd: _0x578788,
  command: _0x4f8c6e,
  args: _0x266fec,
  q: _0x2dd379,
  isGroup: _0x1bb284,
  sender: _0x724d7d,
  senderNumber: _0x497703,
  botNumber2: _0x17ffaf,
  botNumber: _0x4fe944,
  pushname: _0x1f27d2,
  isMe: _0x30698a,
  isOwner: _0x581da7,
  groupMetadata: _0x295bd2,
  groupName: _0x245abb,
  participants: _0x232147,
  groupAdmins: _0x28ad64,
  isBotAdmins: _0xfcea3f,
  isCreator: _0x21d40f,
  isDev: _0x35127a,
  isAdmins: _0x46076e,
  reply: _0x54c87a
}) => {
  try {
    const _0x2ae8e4 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x1bb284) {
      return _0x54c87a(_0x2ae8e4.only_gp);
    }
    if (!_0x46076e) {
      const _0x417851 = {
        'quoted': _0x147af3
      };
      if (!_0x35127a) {
        _0x54c87a(_0x2ae8e4.you_adm);
        return _0x417851;
      }
    }
    if (!_0xfcea3f) {
      return _0x54c87a(_0x2ae8e4.give_adm);
    }
    await _0xd69e8c.groupSettingUpdate(_0x4692d4, 'not_announcement');
    const _0x545eef = {
      'text': "*At Last, Group Chat Opened by Admin " + _0x1f27d2 + "* 🔇"
    };
    const _0xedab56 = {
      'quoted': _0x147af3
    };
    await _0xd69e8c.sendMessage(_0x4692d4, _0x545eef, _0xedab56);
  } catch (_0x341a2f) {
    const _0x5cacc8 = {
      'text': '❌',
      'key': _0x147af3.key
    };
    const _0x50640a = {
      'react': _0x5cacc8
    };
    await _0xd69e8c.sendMessage(_0x4692d4, _0x50640a);
    console.log(_0x341a2f);
    _0x54c87a("❌ *Error Accurated !!*\n\n" + _0x341a2f);
  }
});
const _0x2bff43 = {
  'pattern': "lockgs",
  'react': '🔇',
  'alias': ["lockgsettings"],
  'desc': "Change to group settings to only admins can edit group info",
  'category': "group",
  'use': ".lockgs",
  'filename': __filename
};
cmd(_0x2bff43, async (_0x2c0ab6, _0xdc8556, _0x4cd79a, {
  from: _0x3ff809,
  l: _0x593c2f,
  quoted: _0x9f5ec4,
  body: _0x4e6549,
  isCmd: _0x1e94be,
  command: _0x1e4296,
  args: _0xd52ce2,
  q: _0x12f283,
  isGroup: _0x51cdbe,
  sender: _0x8c043a,
  senderNumber: _0x7fd566,
  botNumber2: _0x4c551c,
  botNumber: _0x493cc3,
  pushname: _0x23da3a,
  isMe: _0x221316,
  isOwner: _0xe53113,
  groupMetadata: _0x36ba1d,
  groupName: _0x2b01b,
  participants: _0xfa60ad,
  groupAdmins: _0x2bd159,
  isBotAdmins: _0x4748bf,
  isCreator: _0x5d53f1,
  isDev: _0x215804,
  isAdmins: _0x471e0e,
  reply: _0x50f459
}) => {
  try {
    const _0x1ddffe = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x51cdbe) {
      return _0x50f459(_0x1ddffe.only_gp);
    }
    if (!_0x471e0e) {
      const _0x3a926d = {
        'quoted': _0xdc8556
      };
      if (!_0x215804) {
        _0x50f459(_0x1ddffe.you_adm);
        return _0x3a926d;
      }
    }
    if (!_0x4748bf) {
      return _0x50f459(_0x1ddffe.give_adm);
    }
    await _0x2c0ab6.groupSettingUpdate(_0x3ff809, "locked");
    const _0x46cb3d = {
      'text': "*Group settings Locked* 🔒"
    };
    const _0x29a78c = {
      'quoted': _0xdc8556
    };
    await _0x2c0ab6.sendMessage(_0x3ff809, _0x46cb3d, _0x29a78c);
  } catch (_0x562965) {
    const _0x5803b8 = {
      'text': '❌',
      'key': _0xdc8556.key
    };
    const _0xa6c98f = {
      'react': _0x5803b8
    };
    await _0x2c0ab6.sendMessage(_0x3ff809, _0xa6c98f);
    console.log(_0x562965);
    _0x50f459("❌ *Error Accurated !!*\n\n" + _0x562965);
  }
});
const _0x285abb = {
  'pattern': "unlockgs",
  'react': '🔓',
  'alias': ["unlockgsettings"],
  'desc': "Change to group settings to all members can edit group info",
  'category': "group",
  'use': '.unlockgs',
  'filename': __filename
};
cmd(_0x285abb, async (_0x3455b4, _0x74c17a, _0x11860d, {
  from: _0x2b040b,
  l: _0x197418,
  quoted: _0xe43730,
  body: _0x71d92b,
  isCmd: _0x32ed0b,
  command: _0x5e4ee8,
  args: _0x52c7ca,
  q: _0x352ed8,
  isGroup: _0x1b10a5,
  sender: _0x3e8b33,
  senderNumber: _0x3c3e44,
  botNumber2: _0x2c0fdb,
  botNumber: _0x10b4f0,
  pushname: _0x1a3d33,
  isMe: _0x39e012,
  isOwner: _0x577f24,
  groupMetadata: _0x3f0367,
  groupName: _0x99339,
  participants: _0x5814b9,
  groupAdmins: _0x5c03f5,
  isBotAdmins: _0x42bb61,
  isCreator: _0x4c7925,
  isDev: _0x23e68c,
  isAdmins: _0x37ef67,
  reply: _0x22eb4a
}) => {
  try {
    const _0x2c66f0 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x1b10a5) {
      return _0x22eb4a(_0x2c66f0.only_gp);
    }
    if (!_0x37ef67) {
      const _0x205a46 = {
        'quoted': _0x74c17a
      };
      if (!_0x23e68c) {
        _0x22eb4a(_0x2c66f0.you_adm);
        return _0x205a46;
      }
    }
    if (!_0x42bb61) {
      return _0x22eb4a(_0x2c66f0.give_adm);
    }
    await _0x3455b4.groupSettingUpdate(_0x2b040b, "unlocked");
    const _0x63e0f9 = {
      'text': "*Group settings Unlocked* 🔓"
    };
    const _0x3e0a2c = {
      'quoted': _0x74c17a
    };
    await _0x3455b4.sendMessage(_0x2b040b, _0x63e0f9, _0x3e0a2c);
  } catch (_0x4a8c07) {
    const _0x86b3ec = {
      'text': '❌',
      'key': _0x74c17a.key
    };
    const _0x5ab26a = {
      'react': _0x86b3ec
    };
    await _0x3455b4.sendMessage(_0x2b040b, _0x5ab26a);
    console.log(_0x4a8c07);
    _0x22eb4a("❌ *Error Accurated !!*\n\n" + _0x4a8c07);
  }
});
const _0x2ad4fd = {
  'pattern': "leave",
  'react': '🔓',
  'alias': ["left", "kickme", "f_leave", "f_left", "f-left"],
  'desc': "To leave from the group",
  'category': "group",
  'use': ".leave",
  'filename': __filename
};
cmd(_0x2ad4fd, async (_0x487151, _0x47d082, _0x29f5ea, {
  from: _0x3a1f47,
  l: _0x1be498,
  quoted: _0x557cd4,
  body: _0x370583,
  isCmd: _0x37354f,
  command: _0x2fd313,
  args: _0x312c5f,
  q: _0x18e824,
  isGroup: _0x1095b7,
  sender: _0x2e3ed5,
  senderNumber: _0x115753,
  botNumber2: _0x227d25,
  botNumber: _0x4182c2,
  pushname: _0x280c65,
  isMe: _0x474a3a,
  isOwner: _0x20c68a,
  groupMetadata: _0x55ceed,
  groupName: _0x1f91d6,
  participants: _0x9dce24,
  groupAdmins: _0x13b5de,
  isBotAdmins: _0x471e94,
  isCreator: _0x10761c,
  isDev: _0x15971b,
  isAdmins: _0x3b193c,
  reply: _0x5d4c20
}) => {
  try {
    const _0x345e97 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x1095b7) {
      return _0x5d4c20(_0x345e97.only_gp);
    }
    if (!_0x3b193c) {
      if (!_0x15971b) {
        return _0x5d4c20(_0x345e97.you_adm);
      }
    }
    const _0x27ea65 = {
      'text': "*Good Bye All* 👋🏻"
    };
    const _0x31d4ca = {
      'quoted': _0x47d082
    };
    await _0x487151.sendMessage(_0x3a1f47, _0x27ea65, _0x31d4ca);
    await _0x487151.groupLeave(_0x3a1f47);
  } catch (_0x131083) {
    const _0x4882cc = {
      'text': '❌',
      'key': _0x47d082.key
    };
    const _0x922cf4 = {
      'react': _0x4882cc
    };
    await _0x487151.sendMessage(_0x3a1f47, _0x922cf4);
    console.log(_0x131083);
    _0x5d4c20("❌ *Error Accurated !!*\n\n" + _0x131083);
  }
});
const _0x293215 = {
  'pattern': 'updategname',
  'react': '🔓',
  'alias': ["upgname", "gname"],
  'desc': "To Change the group name",
  'category': "group",
  'use': ".updategname",
  'filename': __filename
};
cmd(_0x293215, async (_0x11a7d8, _0x236b80, _0x37dbb2, {
  from: _0x485674,
  l: _0xfbdc5e,
  quoted: _0x2d3af2,
  body: _0x3a412d,
  isCmd: _0x3412a,
  command: _0x3a7e4e,
  args: _0x28b9d1,
  q: _0x7e8251,
  isGroup: _0x23ea90,
  sender: _0x4166be,
  senderNumber: _0x4126a5,
  botNumber2: _0x1b0052,
  botNumber: _0x39d893,
  pushname: _0xe51687,
  isMe: _0x3c8bde,
  isOwner: _0x156dca,
  groupMetadata: _0x4c8822,
  groupName: _0x57d01f,
  participants: _0x4fb3d8,
  groupAdmins: _0x1bfb4a,
  isBotAdmins: _0x3d1b4c,
  isCreator: _0x385068,
  isDev: _0x44988c,
  isAdmins: _0x91462f,
  reply: _0x4f803f
}) => {
  try {
    const _0x143dc5 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x23ea90) {
      return _0x4f803f(_0x143dc5.only_gp);
    }
    if (!_0x91462f) {
      const _0x1dcd19 = {
        'quoted': _0x236b80
      };
      if (!_0x44988c) {
        _0x4f803f(_0x143dc5.you_adm);
        return _0x1dcd19;
      }
    }
    if (!_0x3d1b4c) {
      return _0x4f803f(_0x143dc5.give_adm);
    }
    if (!_0x7e8251) {
      return _0x4f803f("*Please write the new Group Subject* 🖊️");
    }
    await _0x11a7d8.groupUpdateSubject(_0x485674, _0x7e8251);
    const _0x3714a2 = {
      'text': "✔️ *Group name Updated*"
    };
    const _0xec4da1 = {
      'quoted': _0x236b80
    };
    await _0x11a7d8.sendMessage(_0x485674, _0x3714a2, _0xec4da1);
  } catch (_0x4486ad) {
    const _0x59e0d7 = {
      'text': '❌',
      'key': _0x236b80.key
    };
    const _0x3aeac5 = {
      'react': _0x59e0d7
    };
    await _0x11a7d8.sendMessage(_0x485674, _0x3aeac5);
    console.log(_0x4486ad);
    _0x4f803f("❌ *Error Accurated !!*\n\n" + _0x4486ad);
  }
});
const _0x19cdd8 = {
  'pattern': "updategdesc",
  'react': '🔓',
  'alias': ["upgdesc", "gdesc"],
  'desc': "To Change the group description",
  'category': "group",
  'use': ".updategdesc",
  'filename': __filename
};
cmd(_0x19cdd8, async (_0x35f991, _0x579cb3, _0x193e18, {
  from: _0x17c640,
  l: _0x239d8c,
  quoted: _0x5a9619,
  body: _0x5528e8,
  isCmd: _0x186b08,
  command: _0x5d2f76,
  args: _0x11f058,
  q: _0x4a7e43,
  isGroup: _0x1081a3,
  sender: _0x4b17eb,
  senderNumber: _0x56f94b,
  botNumber2: _0x594d2f,
  botNumber: _0x326990,
  pushname: _0x3453b1,
  isMe: _0x38ff98,
  isOwner: _0x39c9f3,
  groupMetadata: _0x24c169,
  groupName: _0x17d16d,
  participants: _0x107100,
  groupAdmins: _0x2bbd7,
  isBotAdmins: _0x5297bf,
  isCreator: _0x4cc7e8,
  isDev: _0x40a309,
  isAdmins: _0x4a462e,
  reply: _0x272750
}) => {
  try {
    const _0x19ef23 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x1081a3) {
      return _0x272750(_0x19ef23.only_gp);
    }
    if (!_0x4a462e) {
      const _0xd9fc9e = {
        'quoted': _0x579cb3
      };
      if (!_0x40a309) {
        _0x272750(_0x19ef23.you_adm);
        return _0xd9fc9e;
      }
    }
    if (!_0x5297bf) {
      return _0x272750(_0x19ef23.give_adm);
    }
    if (!_0x4a7e43) {
      return _0x272750("*Please write the new Group Description* 🖊️");
    }
    await _0x35f991.groupUpdateDescription(_0x17c640, _0x4a7e43);
    const _0x2a2d71 = {
      'text': "✔️ *Group Description Updated*"
    };
    const _0x520f9d = {
      'quoted': _0x579cb3
    };
    await _0x35f991.sendMessage(_0x17c640, _0x2a2d71, _0x520f9d);
  } catch (_0x35f16a) {
    const _0x4d4dc6 = {
      'text': '❌',
      'key': _0x579cb3.key
    };
    const _0x2ef1e8 = {
      'react': _0x4d4dc6
    };
    await _0x35f991.sendMessage(_0x17c640, _0x2ef1e8);
    console.log(_0x35f16a);
    _0x272750("❌ *Error Accurated !!*\n\n" + _0x35f16a);
  }
});
const _0x53f490 = {
  'pattern': "join",
  'react': '📬',
  'alias': ["joinme", "f_join"],
  'desc': "To Join a Group from Invite link",
  'category': "group",
  'use': ".join < Group Link >",
  'filename': __filename
};
cmd(_0x53f490, async (_0x427334, _0xe84103, _0x2e029d, {
  from: _0x3c676f,
  l: _0xcef56b,
  quoted: _0xf63d1a,
  body: _0x3d89e4,
  isCmd: _0x3fac01,
  command: _0x156ae7,
  args: _0x13a44f,
  q: _0x454353,
  isGroup: _0x1ccdab,
  sender: _0x21bf4a,
  senderNumber: _0x5a52b6,
  botNumber2: _0x51bd73,
  botNumber: _0x36967d,
  pushname: _0x5793ed,
  isMe: _0x590522,
  isOwner: _0x20e786,
  groupMetadata: _0xf2f414,
  groupName: _0x18cde9,
  participants: _0x47f8e0,
  groupAdmins: _0x5d38f9,
  isBotAdmins: _0x1ac14e,
  isCreator: _0x3e1721,
  isDev: _0x521974,
  isAdmins: _0x144b1f,
  reply: _0x2a3e11
}) => {
  try {
    const _0x410294 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x3e1721 && !_0x521974 && !_0x20e786 && !_0x590522) {
      return _0x2a3e11(_0x410294.own_cmd);
    }
    if (!_0x454353) {
      return _0x2a3e11("*Please write the Group Link*️ 🖇️");
    }
    let _0x35cc39 = _0x13a44f[0x0].split("https://chat.whatsapp.com/")[0x1];
    await _0x427334.groupAcceptInvite(_0x35cc39);
    const _0x574014 = {
      'text': "✔️ *Successfully Joined*"
    };
    const _0x199f95 = {
      'quoted': _0xe84103
    };
    await _0x427334.sendMessage(_0x3c676f, _0x574014, _0x199f95);
  } catch (_0x217a46) {
    const _0x5b7809 = {
      'text': '❌',
      'key': _0xe84103.key
    };
    const _0x14e53f = {
      'react': _0x5b7809
    };
    await _0x427334.sendMessage(_0x3c676f, _0x14e53f);
    console.log(_0x217a46);
    _0x2a3e11("❌ *Error Accurated !!*\n\n" + _0x217a46);
  }
});
const _0x4df201 = {
  'pattern': "invite",
  'react': "🖇️",
  'alias': ["grouplink", "glink"],
  'desc': "To Get the Group Invite link",
  'category': "group",
  'use': ".invite",
  'filename': __filename
};
cmd(_0x4df201, async (_0x328612, _0xbb33af, _0x397e14, {
  from: _0x2d0302,
  l: _0x1f71ff,
  quoted: _0x3896bd,
  body: _0x467e3c,
  isCmd: _0x1fab12,
  command: _0x291ff8,
  args: _0x5a04cc,
  q: _0x240c4e,
  isGroup: _0x1c6582,
  sender: _0x1cceb4,
  senderNumber: _0x570196,
  botNumber2: _0x4ef89d,
  botNumber: _0x39f4ea,
  pushname: _0x2cba2a,
  isMe: _0x42e8f9,
  isOwner: _0x1270fb,
  groupMetadata: _0xfd20b9,
  groupName: _0x5e9b3b,
  participants: _0x2ffa8b,
  groupAdmins: _0x50b479,
  isBotAdmins: _0x46955c,
  isCreator: _0x4bebc3,
  isDev: _0x4d74ea,
  isAdmins: _0x40ce21,
  reply: _0x30b983
}) => {
  try {
    const _0xf96b8e = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x1c6582) {
      return _0x30b983(_0xf96b8e.only_gp);
    }
    if (!_0x40ce21) {
      const _0x15451b = {
        'quoted': _0xbb33af
      };
      if (!_0x4d74ea) {
        _0x30b983(_0xf96b8e.you_adm);
        return _0x15451b;
      }
    }
    if (!_0x46955c) {
      return _0x30b983(_0xf96b8e.give_adm);
    }
    const _0x47315e = await _0x328612.groupInviteCode(_0x2d0302);
    const _0x56af4f = {
      'text': "🖇️ *Group Link*\n\nhttps://chat.whatsapp.com/" + _0x47315e
    };
    const _0x18d24f = {
      'quoted': _0xbb33af
    };
    await _0x328612.sendMessage(_0x2d0302, _0x56af4f, _0x18d24f);
  } catch (_0x118eb8) {
    const _0x4f56f2 = {
      'text': '❌',
      'key': _0xbb33af.key
    };
    const _0x181e96 = {
      'react': _0x4f56f2
    };
    await _0x328612.sendMessage(_0x2d0302, _0x181e96);
    console.log(_0x118eb8);
    _0x30b983("❌ *Error Accurated !!*\n\n" + _0x118eb8);
  }
});
const _0x34bd2a = {
  'pattern': "revoke",
  'react': "🖇️",
  'alias': ['revokegrouplink', 'resetglink', "revokelink", "f_revoke"],
  'desc': "To Reset the group link",
  'category': "group",
  'use': ".revoke",
  'filename': __filename
};
cmd(_0x34bd2a, async (_0x220558, _0x3c4e78, _0x4d597c, {
  from: _0x480f07,
  l: _0x263060,
  quoted: _0x4bd5ac,
  body: _0x30d752,
  isCmd: _0x533cc4,
  command: _0x281b83,
  args: _0x34c1b3,
  q: _0x37c875,
  isGroup: _0x49e357,
  sender: _0x41516c,
  senderNumber: _0x3d05f3,
  botNumber2: _0x4fe0dc,
  botNumber: _0x1527c9,
  pushname: _0x1105ec,
  isMe: _0x2c9630,
  isOwner: _0x39bb24,
  groupMetadata: _0x38942d,
  groupName: _0x467366,
  participants: _0x4bd2e8,
  groupAdmins: _0x2c3858,
  isBotAdmins: _0x2489c0,
  isCreator: _0x14fc8f,
  isDev: _0x4fc853,
  isAdmins: _0x5a6072,
  reply: _0x38599d
}) => {
  try {
    const _0x1ca24d = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x49e357) {
      return _0x38599d(_0x1ca24d.only_gp);
    }
    if (!_0x5a6072) {
      const _0x465774 = {
        'quoted': _0x3c4e78
      };
      if (!_0x4fc853) {
        _0x38599d(_0x1ca24d.you_adm);
        return _0x465774;
      }
    }
    if (!_0x2489c0) {
      return _0x38599d(_0x1ca24d.give_adm);
    }
    await _0x220558.groupRevokeInvite(_0x480f07);
    const _0x3208f9 = {
      'text': "*Group link Reseted* ⛔"
    };
    const _0x5afe0a = {
      'quoted': _0x3c4e78
    };
    await _0x220558.sendMessage(_0x480f07, _0x3208f9, _0x5afe0a);
  } catch (_0x4f832a) {
    const _0x59dc32 = {
      'text': '❌',
      'key': _0x3c4e78.key
    };
    const _0x5d88c7 = {
      'react': _0x59dc32
    };
    await _0x220558.sendMessage(_0x480f07, _0x5d88c7);
    console.log(_0x4f832a);
    _0x38599d("❌ *Error Accurated !!*\n\n" + _0x4f832a);
  }
});
const _0x57538f = {
  'pattern': "kick",
  'react': '🥏',
  'alias': ["remove"],
  'desc': "To Remove a participant from Group",
  'category': "group",
  'use': ".kick",
  'filename': __filename
};
cmd(_0x57538f, async (_0x270881, _0x4dbf17, _0x1c171b, {
  from: _0x3d6075,
  l: _0x198833,
  quoted: _0x42b898,
  body: _0x4c29d8,
  isCmd: _0x539ade,
  command: _0x2fae7d,
  mentionByTag: _0x206019,
  args: _0x44d923,
  q: _0x210c72,
  isGroup: _0x516c23,
  sender: _0x3b48a9,
  senderNumber: _0x423c17,
  botNumber2: _0x49d400,
  botNumber: _0x4a2d97,
  pushname: _0x4c1491,
  isMe: _0x12dbb5,
  isOwner: _0x2a3fb3,
  groupMetadata: _0x55a8f6,
  groupName: _0x48ced7,
  participants: _0x3d8dd6,
  groupAdmins: _0x19f894,
  isBotAdmins: _0x1ab85b,
  isCreator: _0x2dc164,
  isDev: _0x47c43e,
  isAdmins: _0x955c69,
  reply: _0xb3b0a6
}) => {
  try {
    const _0x11b97a = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x516c23) {
      return _0xb3b0a6(_0x11b97a.only_gp);
    }
    if (!_0x955c69) {
      const _0x501966 = {
        'quoted': _0x4dbf17
      };
      if (!_0x47c43e) {
        _0xb3b0a6(_0x11b97a.you_adm);
        return _0x501966;
      }
    }
    if (!_0x1ab85b) {
      return _0xb3b0a6(_0x11b97a.give_adm);
    }
    let _0x3ad017 = _0x4dbf17.mentionedJid ? _0x4dbf17.mentionedJid[0x0] : _0x4dbf17.msg.contextInfo.participant || false;
    if (!_0x3ad017) {
      return _0xb3b0a6("*Couldn't find any user in context* ❌");
    }
    await _0x270881.groupParticipantsUpdate(_0x3d6075, [_0x3ad017], "remove");
    const _0x175ada = {
      'text': "*Successfully removed*  ✔️"
    };
    const _0xb35e0b = {
      'quoted': _0x4dbf17
    };
    await _0x270881.sendMessage(_0x3d6075, _0x175ada, _0xb35e0b);
  } catch (_0xa522dc) {
    const _0x474926 = {
      'text': '❌',
      'key': _0x4dbf17.key
    };
    const _0x5cbfdc = {
      'react': _0x474926
    };
    await _0x270881.sendMessage(_0x3d6075, _0x5cbfdc);
    console.log(_0xa522dc);
    _0xb3b0a6("❌ *Error Accurated !!*\n\n" + _0xa522dc);
  }
});
const _0xd699f4 = {
  'pattern': "promote",
  'react': '🥏',
  'alias': ["addadmin"],
  'desc': "To Add a participatant as a Admin",
  'category': "group",
  'use': ".promote",
  'filename': __filename
};
cmd(_0xd699f4, async (_0x2ee8e1, _0x208263, _0xd535ae, {
  from: _0x326b42,
  l: _0xc052c3,
  quoted: _0x1e75a2,
  body: _0xacd6fd,
  isCmd: _0x407f57,
  command: _0x41e991,
  mentionByTag: _0x389b40,
  args: _0x56013b,
  q: _0x1a8ba6,
  isGroup: _0x99a411,
  sender: _0x327ff9,
  senderNumber: _0x410af4,
  botNumber2: _0xe0c643,
  botNumber: _0x6f2d41,
  pushname: _0x4e24e6,
  isMe: _0x49a97c,
  isOwner: _0x1ed83f,
  groupMetadata: _0x59678b,
  groupName: _0x53669e,
  participants: _0x385024,
  groupAdmins: _0x4cce9c,
  isBotAdmins: _0x5912bb,
  isCreator: _0x2e4f0d,
  isDev: _0x48e045,
  isAdmins: _0x524aaa,
  reply: _0x283414
}) => {
  try {
    const _0xc0be08 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x99a411) {
      return _0x283414(_0xc0be08.only_gp);
    }
    if (!_0x524aaa) {
      const _0x2bc157 = {
        'quoted': _0x208263
      };
      if (!_0x48e045) {
        _0x283414(_0xc0be08.you_adm);
        return _0x2bc157;
      }
    }
    if (!_0x5912bb) {
      return _0x283414(_0xc0be08.give_adm);
    }
    let _0x5aa925 = _0x208263.mentionedJid ? _0x208263.mentionedJid[0x0] : _0x208263.msg.contextInfo.participant || false;
    if (!_0x5aa925) {
      return _0x283414("*Couldn't find any user in context* ❌");
    }
    const _0x4113d2 = await getGroupAdmins(_0x385024);
    if (_0x4113d2.includes(_0x5aa925)) {
      return _0x283414("❗ *User Already an Admin*  ✔️");
    }
    await _0x2ee8e1.groupParticipantsUpdate(_0x326b42, [_0x5aa925], "promote");
    const _0x11aee = {
      'text': "*User promoted as an Admin*  ✔️"
    };
    const _0x48c3ee = {
      'quoted': _0x208263
    };
    await _0x2ee8e1.sendMessage(_0x326b42, _0x11aee, _0x48c3ee);
  } catch (_0xff17d8) {
    const _0x1f8671 = {
      'text': '❌',
      'key': _0x208263.key
    };
    const _0x5f0784 = {
      'react': _0x1f8671
    };
    await _0x2ee8e1.sendMessage(_0x326b42, _0x5f0784);
    console.log(_0xff17d8);
    _0x283414("❌ *Error Accurated !!*\n\n" + _0xff17d8);
  }
});
const _0x10f253 = {
  'pattern': "demote",
  'react': '🥏',
  'alias': ["removeadmin"],
  'desc': "To Demote Admin to Member",
  'category': "group",
  'use': ".demote",
  'filename': __filename
};
cmd(_0x10f253, async (_0x3ac351, _0x5dc2ea, _0x512aa7, {
  from: _0x1711ce,
  l: _0x2bc0e8,
  quoted: _0x846887,
  body: _0x357636,
  isCmd: _0x2f56b6,
  command: _0x46f811,
  mentionByTag: _0x2d786e,
  args: _0x221497,
  q: _0x1bf0ac,
  isGroup: _0x6984ca,
  sender: _0x574c6d,
  senderNumber: _0x25eec5,
  botNumber2: _0x4cd53f,
  botNumber: _0x19c03a,
  pushname: _0xcfe85e,
  isMe: _0x3a578c,
  isOwner: _0x586966,
  groupMetadata: _0x5b8cb6,
  groupName: _0x1adbed,
  participants: _0x3a19c7,
  groupAdmins: _0x453bb7,
  isBotAdmins: _0x483ce9,
  isCreator: _0x24880e,
  isDev: _0x44e18c,
  isAdmins: _0x53001f,
  reply: _0x807ff4
}) => {
  try {
    const _0x185af3 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x6984ca) {
      return _0x807ff4(_0x185af3.only_gp);
    }
    if (!_0x53001f) {
      const _0x12223c = {
        'quoted': _0x5dc2ea
      };
      if (!_0x44e18c) {
        _0x807ff4(_0x185af3.you_adm);
        return _0x12223c;
      }
    }
    if (!_0x483ce9) {
      return _0x807ff4(_0x185af3.give_adm);
    }
    let _0x4e91f3 = _0x5dc2ea.mentionedJid ? _0x5dc2ea.mentionedJid[0x0] : _0x5dc2ea.msg.contextInfo.participant || false;
    if (!_0x4e91f3) {
      return _0x807ff4("*Couldn't find any user in context* ❌");
    }
    const _0x207ab3 = await getGroupAdmins(_0x3a19c7);
    if (!_0x207ab3.includes(_0x4e91f3)) {
      return _0x807ff4("❗ *User Already not an Admin*");
    }
    await _0x3ac351.groupParticipantsUpdate(_0x1711ce, [_0x4e91f3], "demote");
    const _0x1e33eb = {
      'text': "*User No longer an Admin*  ✔️"
    };
    const _0x30a36c = {
      'quoted': _0x5dc2ea
    };
    await _0x3ac351.sendMessage(_0x1711ce, _0x1e33eb, _0x30a36c);
  } catch (_0x310923) {
    const _0x30ad59 = {
      'text': '❌',
      'key': _0x5dc2ea.key
    };
    const _0x2975c3 = {
      'react': _0x30ad59
    };
    await _0x3ac351.sendMessage(_0x1711ce, _0x2975c3);
    console.log(_0x310923);
    _0x807ff4("❌ *Error Accurated !!*\n\n" + _0x310923);
  }
});
const _0x53a4af = {
  'pattern': "tagall",
  'react': '🔊',
  'alias': ['f_tagall'],
  'desc': "To Tag all Members",
  'category': "group",
  'use': ".tagall",
  'filename': __filename
};
cmd(_0x53a4af, async (_0x40f65f, _0x4b0820, _0x55e1ef, {
  from: _0x462425,
  l: _0x1790fa,
  quoted: _0x3283ea,
  body: _0x209ea4,
  isCmd: _0x2b7e14,
  command: _0x3d9500,
  mentionByTag: _0x2c3a59,
  args: _0x264770,
  q: _0x2f37d0,
  isGroup: _0xcc06d8,
  sender: _0x556d44,
  senderNumber: _0x3901ef,
  botNumber2: _0x315776,
  botNumber: _0x4b4563,
  pushname: _0x39f8de,
  isMe: _0x1f3c01,
  isOwner: _0x392d84,
  groupMetadata: _0x3221d0,
  groupName: _0x23ea4e,
  participants: _0x220fb7,
  groupAdmins: _0x5b4496,
  isBotAdmins: _0x291e1f,
  isCreator: _0x534b67,
  isDev: _0xb9749f,
  isAdmins: _0x27fa5e,
  reply: _0x58600c
}) => {
  try {
    const _0x4b6814 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xcc06d8) {
      return _0x58600c(_0x4b6814.only_gp);
    }
    if (!_0x27fa5e) {
      const _0x5cf453 = {
        'quoted': _0x4b0820
      };
      if (!_0xb9749f) {
        _0x58600c(_0x4b6814.you_adm);
        return _0x5cf453;
      }
    }
    if (!_0x291e1f) {
      return _0x58600c(_0x4b6814.give_adm);
    }
    let _0x3e50a6 = "💱 *HI ALL ! GIVE YOUR ATTENTION PLEASE* \n \n";
    for (let _0xaf7f6a of _0x220fb7) {
      _0x3e50a6 += "> ᴅᴇᴀʀ ☣️ @" + _0xaf7f6a.id.split('@')[0x0] + "\n";
    }
    const _0x414212 = {
      'quoted': _0x4b0820
    };
    _0x40f65f.sendMessage(_0x462425, {
      'text': _0x3e50a6,
      'mentions': _0x220fb7.map(_0x38c332 => _0x38c332.id)
    }, _0x414212);
  } catch (_0x40bd15) {
    const _0x35d7ef = {
      'text': '❌',
      'key': _0x4b0820.key
    };
    const _0x236678 = {
      'react': _0x35d7ef
    };
    await _0x40f65f.sendMessage(_0x462425, _0x236678);
    console.log(_0x40bd15);
    _0x58600c("❌ *Error Accurated !!*\n\n" + _0x40bd15);
  }
});
const _0x3220aa = {
  'pattern': "hidetag",
  'react': '🔊',
  'alias': ["tag", 'f_tag'],
  'desc': "To Tag all Members for Message",
  'category': "group",
  'use': ".tag Hi",
  'filename': __filename
};
cmd(_0x3220aa, async (_0x1a1e4a, _0x436c5b, _0x2e8b1e, {
  from: _0xd18da6,
  l: _0x2b9664,
  quoted: _0xc87805,
  body: _0x38cb39,
  isCmd: _0x5d93e2,
  command: _0x353f4d,
  mentionByTag: _0x1ea106,
  args: _0x1648d1,
  q: _0x20c55f,
  isGroup: _0x5957a1,
  sender: _0x5c0c4f,
  senderNumber: _0x53c2f8,
  botNumber2: _0x556ffe,
  botNumber: _0x11cacc,
  pushname: _0x27811b,
  isMe: _0x2f4853,
  isOwner: _0x559990,
  groupMetadata: _0x55bc88,
  groupName: _0x57488b,
  participants: _0x3c04ad,
  groupAdmins: _0x428dfd,
  isBotAdmins: _0x2738ac,
  isCreator: _0x485f42,
  isDev: _0x3435bb,
  isAdmins: _0x381e60,
  reply: _0x19fae9
}) => {
  try {
    const _0x7c7076 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x5957a1) {
      return _0x19fae9(_0x7c7076.only_gp);
    }
    if (!_0x381e60) {
      const _0x33cca6 = {
        'quoted': _0x436c5b
      };
      if (!_0x3435bb) {
        _0x19fae9(_0x7c7076.you_adm);
        return _0x33cca6;
      }
    }
    if (!_0x2738ac) {
      return _0x19fae9(_0x7c7076.give_adm);
    }
    if (!_0x20c55f) {
      return _0x19fae9("*Please add a Message* ℹ️");
    }
    let _0xa97460 = '' + _0x20c55f;
    const _0x29c890 = {
      'quoted': _0x436c5b
    };
    _0x1a1e4a.sendMessage(_0xd18da6, {
      'text': _0xa97460,
      'mentions': _0x3c04ad.map(_0x22d4c8 => _0x22d4c8.id)
    }, _0x29c890);
  } catch (_0x5533e9) {
    const _0x186d87 = {
      'text': '❌',
      'key': _0x436c5b.key
    };
    const _0x4e9385 = {
      'react': _0x186d87
    };
    await _0x1a1e4a.sendMessage(_0xd18da6, _0x4e9385);
    console.log(_0x5533e9);
    _0x19fae9("❌ *Error Accurated !!*\n\n" + _0x5533e9);
  }
});
const _0x446ca7 = {
  'pattern': "taggp",
  'react': '🔊',
  'alias': ['tggp', "f_taggp"],
  'desc': "To Tag all Members for Message",
  'category': "group",
  'use': ".tag Hi",
  'filename': __filename
};
cmd(_0x446ca7, async (_0x38ee4a, _0x242086, _0x390f01, {
  from: _0x46edc0,
  l: _0x1c4af4,
  quoted: _0x57e007,
  body: _0x1e351f,
  isCmd: _0x18995b,
  command: _0x5e8c7a,
  mentionByTag: _0x1f46dd,
  args: _0x22b118,
  q: _0x5888ac,
  isGroup: _0x777d02,
  sender: _0x463a7e,
  senderNumber: _0x1c56b1,
  botNumber2: _0x15b4d1,
  botNumber: _0x14865c,
  pushname: _0x3c5929,
  isMe: _0x47dfba,
  isOwner: _0x5fd946,
  groupMetadata: _0x72e314,
  groupName: _0x523c24,
  participants: _0x167c81,
  groupAdmins: _0x3ed30a,
  isBotAdmins: _0x233150,
  isCreator: _0x4782f5,
  isDev: _0x301290,
  isAdmins: _0x169c22,
  reply: _0x461de8
}) => {
  try {
    if (!_0x390f01.quoted) {
      return _0x461de8("*Please mention a message* ℹ️");
    }
    if (!_0x5888ac) {
      return _0x461de8("*Please add a Group Jid* ℹ️");
    }
    let _0x2e603e = '' + _0x390f01.quoted.msg;
    const _0x20f251 = {
      'quoted': _0x242086
    };
    _0x38ee4a.sendMessage(_0x5888ac, {
      'text': _0x2e603e,
      'mentions': _0x167c81.map(_0x1bf050 => _0x1bf050.id)
    }, _0x20f251);
  } catch (_0x5f239f) {
    const _0x5c0b0a = {
      'text': '❌',
      'key': _0x242086.key
    };
    const _0x5e177f = {
      'react': _0x5c0b0a
    };
    await _0x38ee4a.sendMessage(_0x46edc0, _0x5e177f);
    console.log(_0x5f239f);
    _0x461de8("❌ *Error Accurated !!*\n\n" + _0x5f239f);
  }
});
const _0x4c04aa = {
  'pattern': "ginfo",
  'react': '🥏',
  'alias': ["groupinfo"],
  'desc': "Get group informations.",
  'category': "group",
  'use': ".ginfo",
  'filename': __filename
};
cmd(_0x4c04aa, async (_0x2626dd, _0x5b52e4, _0x127807, {
  from: _0x1c6b4d,
  l: _0x254aba,
  quoted: _0x3293ab,
  body: _0x55e1db,
  isCmd: _0x108a94,
  command: _0x2b7220,
  args: _0x49d999,
  q: _0x1f0393,
  isGroup: _0x1873b5,
  sender: _0x202ca2,
  senderNumber: _0x2f53e1,
  botNumber2: _0x1a0ac6,
  botNumber: _0x2bb80a,
  pushname: _0x4d7045,
  isMe: _0x5a32da,
  isOwner: _0x59e3b2,
  groupMetadata: _0x427d11,
  groupName: _0x2b4510,
  participants: _0x32c1dc,
  groupAdmins: _0x548409,
  isBotAdmins: _0x55cdec,
  isCreator: _0xd88bfc,
  isDev: _0x1e8cc4,
  isAdmins: _0x282a1f,
  reply: _0x10ab83
}) => {
  try {
    const _0x5c7a90 = (await fetchJson('https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json')).replyMsg;
    if (!_0x1873b5) {
      return _0x10ab83(_0x5c7a90.only_gp);
    }
    if (!_0x282a1f) {
      const _0x53f37c = {
        'quoted': _0x5b52e4
      };
      if (!_0x1e8cc4) {
        _0x10ab83(_0x5c7a90.you_adm);
        return _0x53f37c;
      }
    }
    if (!_0x55cdec) {
      return _0x10ab83(_0x5c7a90.give_adm);
    }
    const _0x5c9fee = await _0x2626dd.groupMetadata(_0x1c6b4d);
    let _0x24f2db = await _0x2626dd.profilePictureUrl(_0x1c6b4d, "image");
    const _0xc600dc = "\n*" + _0x5c9fee.subject + "*\n\n🐉 *Group Jid* - " + _0x5c9fee.id + "\n\n📬 *Participant Count* - " + _0x5c9fee.size + "\n\n👤 *Group Creator* - " + _0x5c9fee.owner + "\n\n📃 *Group Description* - " + _0x5c9fee.desc + "\n\n";
    const _0x43b21f = {
      'url': _0x24f2db
    };
    const _0x236103 = {
      'quoted': _0x5b52e4
    };
    await _0x2626dd.sendMessage(_0x1c6b4d, {
      'image': _0x43b21f,
      'caption': _0xc600dc + config.FOOTER
    }, _0x236103);
  } catch (_0x8f5819) {
    const _0x4d3eff = {
      'text': '❌',
      'key': _0x5b52e4.key
    };
    const _0x4439eb = {
      'react': _0x4d3eff
    };
    await _0x2626dd.sendMessage(_0x1c6b4d, _0x4439eb);
    console.log(_0x8f5819);
    _0x10ab83("❌ *Error Accurated !!*\n\n" + _0x8f5819);
  }
});