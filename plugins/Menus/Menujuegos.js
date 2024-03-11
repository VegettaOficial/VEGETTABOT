import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
¡Hola! 👋🏻 @${m.sender.split("@")[0]}
 \`\`\`${week}, ${date}\`\`\`

╭──𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦───
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 ...
│ 𝘋𝘪𝘷𝘪𝘦́𝘳𝘵𝘦𝘵𝘦 𝘤𝘰𝘯 𝘵𝘶𝘴 𝘢𝘮𝘪𝘨𝘰𝘴 
│ 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘢𝘵𝘢́𝘭𝘰𝘨𝘰 𝘫𝘶𝘦𝘨𝘰𝘴.
╰────────────────

» 𝗝𝗨𝗘𝗚𝗢𝗦 𝗧𝗘𝗫𝗧𝗢 
┃🎲➺ .𝘱𝘷𝘱 𝙨𝙖𝙡𝙖 1
┃🎲➺ .𝘢𝘥𝘷𝘯𝘳𝘰 
┃🎲➺ .𝘢𝘥𝘷𝘱𝘦𝘭𝘪
┃🎲➺ .𝘰𝘳𝘥𝘦𝘯𝘢𝘳
┃🎲➺ .𝘤𝘢𝘴𝘰
┃🎲➺ .𝘤𝘢𝘱𝘪𝘵𝘢𝘭 
┃🎲➺ .𝘈𝘱𝘰𝘤𝘢𝘭𝘺𝘱𝘵𝘰
┃🎲➺ .𝘣𝘶𝘴𝘤𝘢𝘮𝘪𝘯𝘢𝘴
┃🎲➺ .𝘰𝘱𝘤𝘪𝘰𝘯
┃🎲➺ .𝘤𝘢𝘯𝘤𝘪𝘰𝘯
┃🎲➺ .𝘴𝘰𝘱𝘢
┃🎲➺ .𝘴𝘶𝘦𝘳𝘵𝘦
┃🎲➺ .𝘳𝘦𝘵𝘰
┃🎲➺ .𝘱𝘱𝘵
┃🎲➺ .𝘷𝘦𝘳𝘥𝘢𝘥
┃🎲➺ .𝘢𝘤𝘦𝘳𝘵𝘪𝘫𝘰
┃🎲➺ .𝘤𝘩𝘪𝘴𝘵𝘦
┃🎲➺ .𝘮𝘦𝘮𝘦𝘴 
┃🎲➺ .𝘮𝘦𝘮𝘦𝘴2
┃🎲➺ .𝘥𝘰𝘹𝘦𝘢𝘳 𝙩𝙖𝙜
┃🎲➺ .𝘥𝘰𝘹𝘹𝘦𝘢𝘮𝘦
┃🎲➺ .𝘥𝘢𝘥𝘰
┃🎲➺ .𝘮𝘢𝘵𝘦𝘴
┃🎲➺ .𝘱𝘦𝘭𝘦𝘢
╰━━━━━━⋆★⋆━━━━━━⬣

» 𝗝𝗨𝗘𝗚𝗢𝗦 𝗛𝗢𝗧 
┃🔥➺ .𝘥𝘶𝘳𝘢𝘳𝘤𝘢𝘮𝘢 𝙩𝙖𝙜
┃🔥➺ .𝘧𝘰𝘳𝘮𝘢𝘳𝘵𝘳𝘪𝘰 
┃🔥➺ .𝘤𝘶𝘭𝘦𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘮𝘢𝘴𝘵𝘶𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘰𝘭𝘰𝘳𝘤𝘢𝘳𝘵𝘰𝘯 𝙩𝙖𝙜
┃🔥➺ .𝘮𝘦𝘥𝘪𝘳𝘯𝘦𝘱𝘦 𝙩𝙖𝙜
┃🔥➺ .𝘧𝘰𝘭𝘭𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘱𝘦𝘯𝘦𝘵𝘳𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘰𝘨𝘦𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘶𝘭𝘰𝘯𝘢 𝙩𝙖𝙜
┃🔥➺ .𝘵𝘦𝘵𝘰𝘯𝘢 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘰𝘨𝘪𝘣𝘭𝘦 𝙩𝙖𝙜
┃🔥➺ .𝘱𝘢𝘫𝘦𝘳𝘰 𝙩𝙖𝙜
┃🔥➺ .𝘱𝘢𝘫𝘦𝘳𝘢 𝙩𝙖𝙜
┃🔥➺ .𝘱𝘶𝘵𝘰 𝙩𝙖𝙜
┃🔥➺ .𝘱𝘶𝘵𝘢 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

» 𝗝𝗨𝗘𝗚𝗢𝗦 𝗧𝗢𝗣
┃📍➺ .𝘵𝘰𝘱 *𝘱𝘢𝘭𝘢𝘣𝘳𝘢𝘴 𝘳𝘢𝘯𝘥𝘰𝘮*
┃📍➺ .𝘵𝘰𝘱𝘢𝘭𝘤𝘰𝘩𝘰𝘭𝘪𝘤𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘤𝘢𝘤𝘩𝘶𝘥𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘤𝘩𝘪𝘤𝘩𝘰𝘯𝘢𝘴
┃📍➺ .𝘵𝘰𝘱𝘪𝘯𝘧𝘪𝘦𝘭𝘦𝘴
┃📍➺ .𝘵𝘰𝘱𝘧𝘪𝘦𝘭𝘦𝘴
┃📍➺ .𝘵𝘰𝘱𝘤𝘶𝘭𝘰𝘯𝘢𝘴
┃📍➺ .𝘵𝘰𝘱𝘴𝘪𝘥𝘰𝘴𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘧𝘦𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘨𝘢𝘺𝘴
┃📍➺ .𝘵𝘰𝘱𝘰𝘵𝘢𝘬𝘶𝘴
┃📍➺ .𝘵𝘰𝘱𝘱𝘢𝘫𝘦𝘳@𝘴
┃📍➺ .𝘵𝘰𝘱𝘱𝘶𝘵@𝘴
┃📍➺ .𝘵𝘰𝘱𝘭𝘢𝘨𝘳𝘢𝘴𝘢
┃📍➺ .𝘵𝘰𝘱𝘱𝘢𝘯𝘢𝘧𝘳𝘦𝘴𝘤𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘴𝘩𝘪𝘱𝘰𝘴𝘵𝘦𝘳𝘴
┃📍➺ .𝘵𝘰𝘱𝘭𝘪𝘯𝘥𝘰𝘴
┃📍➺ .𝘵𝘰𝘱𝘧𝘢𝘮𝘰𝘴𝘰𝘴
┃📍➺ .𝘨𝘢𝘺 *@𝘵𝘢𝘨*
┃📍➺ .𝘨𝘢𝘺2 *@𝘵𝘢𝘨*
┃📍➺ .𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘢 *@𝘵𝘢𝘨*
┃📍➺ .𝘳𝘢𝘵𝘢 *@𝘵𝘢𝘨*
╰━━━━━━⋆★⋆━━━━━━⬣

 
 `.trim()
    
const vi = ['https://telegra.ph/file/77e7231ff8730faee8e6c.mp4',
'https://telegra.ph/file/77e7231ff8730faee8e6c.mp4',
'https://telegra.ph/file/77e7231ff8730faee8e6c.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menujuego|menujuegos|juegos)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
