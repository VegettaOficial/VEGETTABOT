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
 
╭── 𝗠𝗨𝗡𝗗𝗢 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 ...
│ 𝘊𝘢𝘵𝘢́𝘭𝘰𝘨𝘰 𝘥𝘦 𝘳𝘦𝘨𝘭𝘢𝘴 𝘥𝘦
│ 𝘤𝘭𝘢𝘯𝘦𝘴 𝘺 𝘵𝘦𝘢𝘮𝘴 𝘌𝘭𝘪𝘵𝘦 𝘉𝘰𝘵.
╰────────────────

» 𝗪𝗛𝗜𝗧𝗘 𝗭𝗘𝗥𝗢
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘸𝘻
╰━━━━⋆★⋆━━━━⬣

» 𝗖𝗔𝗥𝗧𝗘𝗟 𝗗𝗘 𝗣𝗔𝗡𝗔𝗠𝗔
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘱
╰━━━━⋆★⋆━━━━⬣

» 𝗕𝗟𝗢𝗢𝗗 𝗛𝗢𝗥𝗗𝗘 𝗙𝗘𝗠
┃📑➺ .𝘣𝘩𝘤𝘭𝘬
┃📑➺ .𝘣𝘩𝘪𝘯𝘧𝘪
┃📑➺ .𝘣𝘩𝘤𝘰𝘮𝘱
┃📑➺ .𝘣𝘩𝘮𝘢𝘱
┃📑➺ .4𝘷𝘴4𝘣𝘩
┃📑➺ .6𝘷𝘴6𝘣𝘩
┃📑➺ .8𝘷𝘴8𝘣𝘩
╰━━━━⋆★⋆━━━━⬣

» 𝘾𝙃𝘼𝙉𝙂𝘼𝙎 𝘽𝙇𝙀𝙄
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘣𝘨
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘪𝘣𝘨
┃📑➺ .𝘭𝘪𝘴𝘵𝘢𝘷𝘴
╰━━━━⋆★⋆━━━━⬣

» 90 𝙀-𝙎𝙋𝙊𝙍𝙏
┃📑➺ .𝘤𝘭𝘬90
┃📑➺ .𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰90
╰━━━━⋆★⋆━━━━⬣

» 𝙐𝙉𝘿𝙀𝙍 𝙁𝙄𝙍𝙀 
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘰𝘸
╰━━━━⋆★⋆━━━━⬣

» 𝙍𝙀𝘼𝙇 𝘽𝙀𝙍𝙎𝙀𝙍𝙆
┃📑➺ .𝘳𝘣𝘤𝘭𝘬
┃📑➺ .𝘮𝘦𝘯𝘶𝘳𝘣
┃📑➺ .𝘳𝘣𝘷𝘦𝘳𝘴𝘶𝘴
╰━━━━⋆★⋆━━━━⬣

» 𝙏𝙀𝘼𝙈 𝙋𝙂
┃📑➺ .𝘭𝘪𝘴𝘵𝘢𝘱𝘨𝘯𝘶𝘦𝘴𝘵𝘳𝘢 
┃📑➺ .𝘭𝘪𝘴𝘵𝘢𝘱𝘨𝘤𝘰𝘯𝘵𝘳𝘢 
╰━━━━⋆★⋆━━━━⬣

» 𝙏𝙀𝘼𝙈 𝙋𝙊𝙇𝘼𝙍 𝙂𝙄𝙍𝙇𝙎
┃📑➺ .𝘪𝘯𝘧𝘪𝘵𝘱𝘨 
┃📑➺ .𝘤𝘭𝘬𝘵𝘱𝘨
┃📑➺ .𝘐𝘯𝘧𝘪𝘱𝘨
╰━━━━⋆★⋆━━━━⬣
 `.trim()
    
const vi = ['https://telegra.ph/file/523e4cd6e968fcab7c160.mp4']

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

handler.command = /^(reglasword)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
