
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
  m.reply(`𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗗𝗘 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢𝗦【💻】\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢: ${sum}\n\n*[📛 𝗟𝗜𝗦𝗧𝗔𝗗𝗢 𝗗𝗘 𝗔𝗗𝗢𝗥𝗡𝗢𝗦 📛]*\n${sider.map((v) => '  👤 @' + v.replace(/@.+/, '')).join('\n')}\n\n𝗟𝗢𝗦 𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 𝗦𝗢𝗡 𝗔𝗗𝗢𝗥𝗡𝗢𝗦 𝗤𝗨𝗘 𝗡𝗢 𝗜𝗡𝗧𝗘𝗥𝗔𝗖𝗧𝗨𝗔𝗡 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗣𝗢𝗥 𝗟𝗢 𝗧𝗔𝗡𝗧𝗢 𝗦𝗢𝗡 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢𝗦.`, null, {mentions: sider});
};
handler.command = /^(inactivos|inactivo|fantasmas|fantasma|adornos|adorno)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
