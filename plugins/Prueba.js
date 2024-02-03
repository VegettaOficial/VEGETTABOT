const handler = async (m, {conn}) => {
const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);

const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid)
    
  await conn.fetchBlocklist().then(async (data) => {
    let txt = `*≡ Lista de bloqueados*\n\n*Total :* ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n◉ Grupos: ${await conn.getName(jid)}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw 'No hay números bloqueados';
  });
}}
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['blocklist', 'bloqueado2'];
handler.rowner = true;
export default handler;
