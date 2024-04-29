import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';

  if (command == 'xvideos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BOTGATITO/botgatito/master/src/JSON/Packvideos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {video: {url: url}, caption: `𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙋𝘼𝙅𝙀𝙍𝙊. 😈`.trim()}, {quoted: m});
  }
  };
handler.help = ['puta'];
//handler.command = ['xvideos'];
handler.tags = ['nsfw'];
export default handler;
