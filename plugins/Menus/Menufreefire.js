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
 
╭──𝗠𝗘𝗡𝗨 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘────
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 ...
│ 𝘚𝘶𝘮𝘦́𝘳𝘨𝘦𝘵𝘦 𝘦𝘯 𝘦𝘴𝘵𝘢
│ 𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢 𝘥𝘦𝘭 𝘤𝘢𝘵𝘢́𝘭𝘰𝘨𝘰 
│ 𝘥𝘦 𝘧𝘳𝘦𝘦 𝘧𝘪𝘳𝘦.
╰────────────────

» 𝗟𝗜𝗦𝗧𝗔𝗦 𝗦𝗨𝗥 𝗬 𝗡𝗢𝗥𝗧𝗘
┃🇧🇷➺ .4𝘷𝘴4 𝙝𝙤𝙧𝙖
┃🇧🇷➺ .6𝘷𝘴6 𝙝𝙤𝙧𝙖
┃🇧🇷➺ .8𝘷𝘴8 𝙝𝙤𝙧𝙖
┃🇻🇳➺ .12𝘷𝘴12 𝙝𝙤𝙧𝙖
┃🇻🇳➺ .16𝘷𝘴16 𝙝𝙤𝙧𝙖
┃🇻🇳➺ .20𝘷𝘴20 𝙝𝙤𝙧𝙖
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮𝘥𝘶𝘰
┃🇦🇶➺ .𝘮𝘢𝘱𝘢𝘤𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰
┃🇦🇶➺ .𝘭𝘪𝘴𝘵𝘢𝘤𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰
┃🇦🇶➺ .𝘮𝘢𝘱𝘢𝘩𝘦𝘹𝘢𝘨𝘰𝘯𝘢𝘭
┃🇦🇶➺ .𝘭𝘪𝘴𝘵𝘢𝘩𝘦𝘹𝘢𝘨𝘰𝘯𝘢𝘭 
┃🇦🇶➺ .𝘱𝘰𝘥𝘪𝘰𝘤𝘶𝘢𝘥𝘳𝘪
┃🇦🇶➺ .𝘷𝘦𝘴𝘵𝘪𝘮𝘦𝘯𝘤𝘶𝘢𝘥𝘳𝘪

» 𝗠𝗔𝗣𝗔𝗦 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘
┃🗼➺ .𝘣𝘦𝘳𝘮𝘶𝘥𝘢
┃🏝️➺ .𝘱𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃🏜️➺ .𝘬𝘢𝘭𝘢𝘩𝘢𝘳𝘪 
┃🏗️➺ .𝘯𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃🏞️➺ .𝘢𝘭𝘱𝘦𝘴

» 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 
┃⚙️➺ .𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢
┃⚙️➺ .𝘥𝘰𝘯𝘢𝘳𝘴𝘢𝘭𝘢

» 𝗥𝗘𝗚𝗟𝗔𝗦
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘶𝘢𝘥𝘳𝘪
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴

» 𝗔𝗚𝗘𝗡𝗗𝗔𝗦
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢𝘴𝘦𝘮𝘢𝘯𝘢𝘭

» 𝗖𝗢𝗠𝗕𝗢𝗦 𝗗𝗘 -𝗕𝗥
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘥𝘦
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘣𝘳

» 𝗔𝗥𝗠𝗔𝗥 𝗦𝗤𝗨𝗔𝗗
┃🎲➺ .𝘤𝘭𝘢𝘴𝘪𝘧𝘪𝘤𝘢𝘵𝘰𝘳𝘪𝘢
┃🎲➺ .𝘥𝘶𝘦𝘭𝘰
┃🎲➺ .𝘥𝘶𝘰
┃🎲➺ .𝘤𝘰𝘮𝘱𝘦

» 𝗥𝗘𝗧𝗔𝗥 𝗔 𝗣𝗩𝗣
┃💥➺ .𝘱𝘷𝘱𝘮1014 𝙩𝙖𝙜
┃💥➺ .𝘱𝘷𝘱𝘴𝘮𝘨 𝙩𝙖𝙜

» 𝗧𝗢𝗣 𝗝𝗨𝗚𝗔𝗗𝗢𝗥𝗘𝗦 
┃🥇➺ .𝘵𝘰𝘱𝘫𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴
┃🏅➺ .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴
┃🥉➺ .𝘵𝘰𝘱𝘣𝘪𝘯𝘢𝘳𝘪𝘰𝘴
┃👹➺ .𝘵𝘰𝘱𝘮1014
┃👹➺ .𝘵𝘰𝘱𝘶𝘮𝘱
┃👹➺ .𝘵𝘰𝘱𝘤𝘰𝘮𝘱𝘦
┃👹➺ .𝘵𝘰𝘱𝘮𝘢𝘱𝘢

» 𝗡𝗢𝗩𝗔𝗧𝗢𝗦 
┃🐥➺ .𝘮𝘢𝘯𝘤𝘢 𝙩𝙖𝙜
┃🐥➺ .𝘮𝘢𝘯𝘤𝘰 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣


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

handler.command = /^(menuff|menufreefire)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
