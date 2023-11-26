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

╭────𝗔𝗡𝗜𝗠𝗘𝗦────
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 ...
│ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘦𝘭 𝘤𝘢𝘵𝘢́𝘭𝘰𝘨𝘰 
│ 𝘥𝘦 𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭.
╰──────────────

» 𝗘𝗦𝗣𝗘𝗖𝗜𝗔𝗟𝗘𝗦 
┃🇯🇵 .𝘨𝘰𝘬𝘶
┃🇯🇵 .𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘻
┃🇯🇵 .𝘷𝘦𝘨𝘶𝘦𝘵𝘢 
┃🇯🇵 .𝘯𝘢𝘳𝘶𝘵𝘰
┃🇯🇵 .𝘣𝘰𝘳𝘶𝘵𝘰
┃🇯🇵 .𝘩𝘪𝘯𝘢𝘵𝘢
┃🇯🇵 .𝘪𝘵𝘢𝘤𝘩𝘪
┃🇯🇵 .𝘮𝘢𝘥𝘢𝘳𝘢
┃🇯🇵 .𝘴𝘢𝘴𝘶𝘬𝘦
╰━━━⋆★⋆━━━⬣

» 𝗔𝗡𝗜𝗠𝗘𝗦
┃🇯🇵 .𝘭𝘰𝘭𝘪𝘷𝘪𝘥
┃🇯🇵 .𝘭𝘰𝘭𝘪
┃🇯🇵 .𝘱𝘱𝘤𝘰𝘶𝘱𝘭𝘦
┃🇯🇵 .𝘯𝘦𝘬𝘰
┃🇯🇵 .𝘸𝘢𝘪𝘧𝘶
┃🇯🇵 .𝘢𝘬𝘪𝘳𝘢
┃🇯🇵 .𝘢𝘬𝘪𝘺𝘢𝘮𝘢
┃🇯🇵 .𝘢𝘯𝘯𝘢
┃🇯🇵 .𝘢𝘴𝘶𝘯𝘢
┃🇯🇵 .𝘢𝘺𝘶𝘻𝘢𝘸𝘢
┃🇯🇵 .𝘤𝘩𝘪𝘩𝘰
┃🇯🇵 .𝘤𝘩𝘪𝘵𝘰𝘨𝘦
┃🇯🇵 .𝘥𝘦𝘪𝘥𝘢𝘳𝘢
┃🇯🇵 .𝘦𝘳𝘻𝘢
┃🇯🇵 .𝘦𝘭𝘢𝘪𝘯𝘢
┃🇯🇵 .𝘦𝘣𝘢
┃🇯🇵 .𝘦𝘮𝘪𝘭𝘪𝘢
┃🇯🇵 .𝘩𝘦𝘴𝘵𝘪𝘢
┃🇯🇵 .𝘪𝘯𝘰𝘳𝘪
┃🇯🇵 .𝘪𝘴𝘶𝘻𝘶
┃🇯🇵 .𝘪𝘵𝘰𝘳𝘪
┃🇯🇵 .𝘬𝘢𝘨𝘢
┃🇯🇵 .𝘬𝘢𝘨𝘶𝘳𝘢
┃🇯🇵 .𝘬𝘢𝘰𝘳𝘪
┃🇯🇵 .𝘬𝘦𝘯𝘦𝘬𝘪
┃🇯🇵 .𝘬𝘰𝘵𝘰𝘳𝘪
┃🇯🇵 .𝘬𝘶𝘳𝘶𝘮𝘪
┃🇯🇵 .𝘮𝘪𝘬𝘢𝘴𝘢
┃🇯🇵 .𝘮𝘪𝘬𝘶
┃🇯🇵 .𝘮𝘪𝘯𝘢𝘵𝘰
┃🇯🇵 .𝘯𝘦𝘻𝘶𝘬𝘰
┃🇯🇵 .𝘴𝘢𝘨𝘪𝘳𝘪
┃🇯🇵 .𝘴𝘢𝘬𝘶𝘳𝘢
┃🇯🇵 .𝘤𝘰𝘴𝘱𝘭𝘢𝘺
┃🇯🇵 .𝘤𝘩𝘪𝘤𝘢
┃🇯🇵 .𝘤𝘩𝘪𝘤𝘰 
┃🇯🇵 .𝘤𝘳𝘪𝘴𝘵𝘪𝘢𝘯𝘰𝘳𝘰𝘯𝘢𝘭𝘥𝘰
┃🇯🇵 .𝘮𝘦𝘴𝘴𝘪
┃🇯🇵 .𝘪𝘵𝘻𝘺
┃🇯🇵 .𝘣𝘭𝘢𝘤𝘬𝘱𝘪𝘯𝘬
┃🇯🇵 .𝘬𝘱𝘰𝘱 
┃🇯🇵 .𝘯𝘢𝘷𝘪𝘥𝘢𝘥
┃🇯🇵 .cat
╰━━━⋆★⋆━━━⬣

 `.trim()
    
const vi = ['https://telegra.ph/file/c411d252f7eb27b2b7324.mp4']

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

handler.command = /^(menuanime|menuanimes)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
