import fetch from "node-fetch";
import axios from 'axios';

const handler = async (m, {conn, args, usedPrefix, command}) => {
if (!args[0]) throw `⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙇𝙄𝙉𝙆 𝘿𝙀 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈.
𝙀𝙟𝙚𝙢𝙥𝙡𝙤: .ig https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`;
await m.reply(`⭐ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙏𝙀 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝙋𝙐𝙀𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙀𝙉𝙏𝙍𝙀 *2* 𝙈𝙄𝙉 𝘼 *10* 𝙈𝙄𝙉 𝘿𝙀𝙋𝙀𝙉𝘿𝙄𝙀𝙉𝘿𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍.`);
const res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const anu = await res.json();
const anuku = anu.result;
if (anuku == '') return m.reply('error.');
for (const i of anuku) {
const res = await axios.head(i);
const mime = res.headers['content-type'];
if (/image/.test(mime)) {
await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
return m.reply('error.');
});
}
if (/video/.test(mime)) {
await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
return m.reply('error.');
});
}
}
};
handler.help = ['ig <url>'];
handler.tags = ['downloader'];
handler.command = ['ig','instagram'];
export default handler;
