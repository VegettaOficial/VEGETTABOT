
const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙊 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 ⚠️`, m);
  m.reply(`𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗗𝗘 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢𝗦【💻】\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢: ${sum}\n\n*[📛 𝗟𝗜𝗦𝗧𝗔𝗗𝗢 𝗗𝗘 𝗔𝗗𝗢𝗥𝗡𝗢𝗦 📛]*\n${sider.map((v) => '  👤 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙽𝙾𝚃𝙰: 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙽𝙾 𝚂𝙴𝚁 𝟷𝟶𝟶% 𝙰𝙲𝙴𝚁𝚃𝙰𝙳𝙾, 𝙴𝙻 𝙱𝙾𝚃 𝙸𝙽𝙸𝙲𝙸𝙰 𝙴𝙻 𝙲𝙾𝙽𝚃𝙴𝙾 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙰𝙿𝙰𝚁𝚃𝙸𝚁 𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙽𝚄𝙼𝙴𝚁𝙾*`, null, {mentions: sider});
};
handler.command = /^(inactivos|inactivo|adornos|adorno)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
