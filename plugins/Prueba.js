import fetch from "node-fetch";
import axios from 'axios';

const handler = async (m, {conn, args, usedPrefix, command}) => {
if (!args[0]) throw `Ingrese un enlace de Instagram`;
await m.reply(`espere un momento.`);
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
handler.command = ['instaa'];
export default handler;
