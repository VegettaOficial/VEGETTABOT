import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BOTGATITO/BotGatito/master/src/JSON/Tiktokmusica.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `» 𝙈𝙐́𝙎𝙄𝘾𝘼𝙎 𝙏𝙄𝙆 𝙏𝙊𝙆 🎵`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(musicastiktok|musicatiktok|tiktokmusic|tiktokmusica)$/i
export default handler
