import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BOTGATITO/BotGatito/master/src/JSON/Tiktokvalle.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `» 𝗩𝗔𝗟𝗟𝗘𝗡𝗔𝗧𝗢𝗦 𝗧𝗜𝗞𝗧𝗢𝗞 💔`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['internet']
handler.command = /^(vallenatos|valletiktok|tiktokvalle)$/i
export default handler
