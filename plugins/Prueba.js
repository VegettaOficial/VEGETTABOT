/* Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883 */
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text }) => {
 if (!text) throw `[❗] 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊́𝙉 𝘿𝙀 𝙎𝙋𝙊𝙏𝙄𝙁𝙔 `;
  try {
    const res = await fetch(global.API('ApiEmpire', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('ApiEmpire', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('ApiEmpire', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = `*⌈🎶 SPOTIFY PREMIUM 🎶⌋*\n\n`
         spotifyi += `📀 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀\n » ${spty.title}\n﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n`
         spotifyi += `📀 𝘼𝙍𝙏𝙄𝙎𝙏𝘼 | 𝘼𝙍𝙏𝙄𝙎𝙏\n » ${spty.artist}\n﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n`
         spotifyi += `📀 𝘼𝙇𝘽𝙐𝙈 | 𝘼𝙇𝘽𝙐𝙈\n » ${spty.album}\n﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n`                 
         spotifyi += `📀 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊\n » ${spty.year}\n﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n`   
         spotifyi += `*⇄ㅤ     ◁   ㅤ  ❚❚ㅤ     ▷ㅤ     ↻*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '*[❗] 𝙇𝘼 𝘾𝘼𝙉𝘾𝙄𝙊́𝙉 𝙌𝙐𝙀 𝘽𝙐𝙎𝘾𝘼𝙎𝙏𝙀 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀 𝙀𝙉 𝙎𝙋𝙊𝙏𝙄𝙁𝙔.';
  }
};
handler.command = /^(musi)$/i;
export default handler;
