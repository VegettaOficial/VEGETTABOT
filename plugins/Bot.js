import fs from 'fs'

var handler = m => m
handler.all = async function (m) {

let bot = `𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗘𝗹𝗶𝘁𝗲 𝗕𝗼𝘁\n ¿𝗘𝗻 𝗾𝘂𝗲́ 𝘁𝗲 𝗽𝘂𝗲𝗱𝗼 𝗮𝘆𝘂𝗱𝗮𝗿?
`
let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom()
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0

}
export default handler
