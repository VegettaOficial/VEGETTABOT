import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd,DD [de] MMMM [del] YYYY│[Hora:]HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `
¡Hola! ⭐ @${m.sender.split("@")[0]}

\`\`\`${horarioFecha}\`\`\`

╭━━━━━━━⋆★⋆━━━━━━━─
┃𝗗𝗘𝗦𝗔𝗥𝗥𝗢𝗟𝗟𝗔𝗗𝗢𝗥:
┃👤 Wa.me/593958918542
╰━━━━━━━⋆★⋆━━━━━━━─

╭━━━[ 𝗚𝗨𝗜𝗔 𝗘𝗕𝗚 💻 ]━⬣
┃ 𝐴𝑞𝑢𝑖́ 𝑡𝑖𝑒𝑛𝑒𝑠 𝑢𝑛 𝑎𝑚𝑝𝑙𝑖𝑜 𝑢𝑠𝑜  
┃ 𝑑𝑒 𝐸𝑙𝑖𝑡𝑒 𝐵𝑜𝑡 𝐺𝑙𝑜𝑏𝑎𝑙.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🖥️➺ .𝘨𝘶𝘪𝘢
┃🖥️➺ .𝘨𝘶𝘪𝘢2
┃🖥️➺ .𝘢𝘺𝘶𝘥𝘢 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗠𝗘𝗡𝗨 𝗘𝗕𝗚 🌎]━⬣
┃ ¡𝑆𝑢𝑚𝑒́𝑟𝑔𝑒𝑡𝑒 𝑒𝑛 𝑒𝑠𝑡𝑎 𝑎𝑣𝑒𝑛𝑡𝑢𝑟𝑎 
┃ 𝑑𝑒𝑙 𝑚𝑒𝑛𝑢 𝑑𝑒 𝐸𝑙𝑖𝑡𝑒 𝐵𝑜𝑡 𝐺𝑙𝑜𝑏𝑎𝑙.!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💫➺ .𝘮𝘦𝘯𝘶𝘢𝘯𝘪𝘮𝘦𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘫𝘶𝘦𝘨𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘢𝘶𝘥𝘪𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘭𝘰𝘨𝘰𝘴
┃💫➺ .𝘮𝘦𝘯𝘶𝘪𝘮𝘨
┃💫➺ .𝘮𝘦𝘯𝘶𝘩𝘰𝘵
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗧𝗜𝗞 𝗧𝗢𝗞 ⛱️ ]━⬣
┃ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘦𝘭 𝘤𝘢𝘵𝘢́𝘭𝘰𝘨𝘰
┃ 𝘥𝘦 𝘵𝘪𝘬 𝘵𝘰𝘬.📷 📹
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘳𝘢𝘯𝘥𝘰𝘮
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘧𝘳𝘢𝘴𝘦𝘴
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘮𝘶𝘴𝘪𝘤
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘷𝘢𝘭𝘭𝘦
┃⛱️➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘩𝘰𝘵
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗚𝗜𝗙 𝗗𝗜𝗡𝗔𝗠𝗜𝗖 😈 ]━⬣
┃ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘤𝘰𝘯 𝘨𝘪𝘧𝘴.
┃ 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘯𝘥𝘰 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔥➺ .𝘱𝘦𝘯𝘦𝘵𝘳𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘨𝘰𝘭𝘱𝘦𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘢𝘣𝘳𝘢𝘻𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘤𝘰𝘨𝘦𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘣𝘦𝘴𝘢𝘳 𝙩𝙖𝙜
┃🔥➺ .𝘧𝘰𝘭𝘭𝘢𝘳 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗣𝗔𝗥𝗘𝗝𝗔𝗦 👩🏻‍❤️‍👨🏻]━⬣
┃ ¡𝐷𝑒𝑐𝑙𝑎́𝑟𝑎𝑡𝑒 𝑐𝑜𝑛 𝑎𝑙𝑔𝑢𝑖𝑒𝑛
┃ 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑠𝑒𝑎𝑛 𝑝𝑎𝑟𝑒𝑗𝑎𝑠!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💌➺ .𝘭𝘪𝘴𝘵𝘢𝘱𝘢𝘳𝘦𝘫𝘢𝘴
┃💌➺ .𝘮𝘪𝘱𝘢𝘳𝘦𝘫𝘢
┃💌➺ .𝘱𝘢𝘳𝘦𝘫𝘢 𝙩𝙖𝙜
┃💌➺ .𝘢𝘤𝘦𝘱𝘵𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘳𝘦𝘤𝘩𝘢𝘻𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘵𝘦𝘳𝘮𝘪𝘯𝘢𝘳 𝙩𝙖𝙜
┃💌➺ .𝘢𝘮𝘰𝘳 𝙩𝙖𝙜
┃💌➺ .𝘵𝘰𝘱𝘱𝘢𝘳𝘦𝘫𝘢𝘴
┃💌➺ .𝘢𝘮𝘪𝘴𝘵𝘢𝘥
┃💌➺ .𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢
┃💌➺ .𝘱𝘢𝘳
┃💌➺ .𝘭𝘰𝘷𝘦 𝙩𝙖𝙜
┃💌➺ .𝘦𝘯𝘢𝘮𝘰𝘳𝘢𝘳 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗙𝗥𝗘𝗘 𝗙𝗜𝗥𝗘 🎮]━⬣
┃ ¡𝐽𝑢𝑒𝑔𝑎 𝑓𝑟𝑒𝑒 𝑓𝑖𝑟𝑒 𝑐𝑜𝑛 𝑡𝑢𝑠 𝑎𝑚𝑖𝑔𝑜𝑠!
┃───────────────
┃🇧🇷➺ .4𝘷𝘴4
┃🇧🇷➺ .4𝘷𝘴4𝘪𝘯𝘵𝘦𝘳𝘯𝘰
┃🇧🇷➺ .6𝘷𝘴6
┃🇧🇷➺ .6𝘷𝘴6𝘪𝘯𝘵𝘦𝘳𝘯𝘰
┃🇧🇷➺ .8𝘷𝘴8
┃🇻🇳➺ .12𝘷𝘴12
┃🇻🇳➺ .16𝘷𝘴16
┃🇻🇳➺ .20𝘷𝘴20
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮
┃🇦🇶➺ .𝘴𝘤𝘳𝘪𝘮𝘥𝘶𝘰
┃🇦🇶➺ .𝘤𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰
┃🗼➺ .𝘣𝘦𝘳𝘮𝘶𝘥𝘢
┃🏝️➺ .𝘱𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃🏜️➺ .𝘬𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┃🏗️➺ .𝘯𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃🏞️➺ .𝘢𝘭𝘱𝘦𝘴
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘥𝘦
┃🎯➺ .𝘤𝘰𝘮𝘣𝘰𝘣𝘳
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢
┃📆➺ .𝘢𝘨𝘦𝘯𝘥𝘢𝘴𝘦𝘮𝘢𝘯𝘢𝘭
┃🏆➺ .𝘱𝘰𝘥𝘪𝘰𝘤𝘶𝘢𝘥𝘳𝘪
┃🏆➺ .𝘷𝘦𝘴𝘵𝘪𝘮𝘦𝘯𝘤𝘶𝘢𝘥𝘳𝘪
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘶𝘢𝘥𝘳𝘪
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
┃📑➺ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
┃🎲➺ .𝘤𝘭𝘢𝘴𝘪𝘧𝘪𝘤𝘢𝘵𝘰𝘳𝘪𝘢
┃🎲➺ .𝘥𝘶𝘦𝘭𝘰
┃🎲➺ .𝘥𝘶𝘰
┃🎲➺ .𝘤𝘰𝘮𝘱𝘦
┃💥➺ .𝘱𝘷𝘱𝘮1014 𝙩𝙖𝙜
┃💥➺ .𝘱𝘷𝘱𝘴𝘮𝘨 𝙩𝙖𝙜
┃🥇➺ .𝘵𝘰𝘱𝘫𝘶𝘨𝘢𝘥𝘰𝘳𝘦𝘴
┃🏅➺ .𝘵𝘰𝘱𝘪𝘯𝘵𝘦𝘨𝘳𝘢𝘯𝘵𝘦𝘴
┃🥉➺ .𝘵𝘰𝘱𝘣𝘪𝘯𝘢𝘳𝘪𝘰𝘴
┃👹➺ .𝘵𝘰𝘱𝘮1014
┃👹➺ .𝘵𝘰𝘱𝘶𝘮𝘱
┃👹➺ .𝘵𝘰𝘱𝘤𝘰𝘮𝘱𝘦
┃👹➺ .𝘵𝘰𝘱𝘮𝘢𝘱𝘢
┃🐥➺ .𝘮𝘢𝘯𝘤𝘢 𝙩𝙖𝙜
┃🐥➺ .𝘮𝘢𝘯𝘤𝘰 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗖𝗔𝗥𝗧𝗔𝗦 💍 ]━⬣
┃ ¡𝐷𝑒𝑑𝑖𝑐𝑎𝑙𝑒 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒
┃  𝑎 𝑒𝑠𝑎 𝑝𝑒𝑟𝑠𝑜𝑛𝑎 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💍➺ .𝘢𝘯𝘪𝘮𝘰 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢2 𝙩𝙖𝙜
┃💍➺ .𝘤𝘢𝘳𝘵𝘢3 𝙩𝙖𝙜
┃💍➺ .𝘤𝘰𝘯𝘧𝘦𝘴𝘪𝘰𝘯 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘰𝘴𝘥𝘪𝘢𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘴𝘵𝘢𝘳𝘥𝘦𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘴𝘯𝘰𝘤𝘩𝘦𝘴 𝙩𝙖𝙜
┃💍➺ .𝘣𝘶𝘦𝘯𝘢𝘮𝘢𝘥𝘳𝘶𝘨𝘢𝘥𝘢 𝙩𝙖𝙜
┃💍➺ .𝘱𝘦𝘳𝘷𝘦𝘳𝘵𝘪𝘥𝘰 𝙩𝙖𝙜
┃💍➺ .𝘱𝘦𝘳𝘷𝘦𝘳𝘵𝘪𝘥𝘢 𝙩𝙖𝙜
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗜𝗠𝗚. 𝗘́𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 🌻 ]━⬣
┃ 𝐶𝑒𝑛𝑡𝑟𝑜 𝑑𝑒 𝑚𝑒𝑛𝑢 𝑑𝑒
┃ 𝐼𝑚𝑎́𝑔𝑒𝑛𝑒𝑠 𝐸𝑙𝑖𝑡𝑒𝐵𝑜𝑡𝐺𝑙𝑜𝑏𝑎𝑙🔰
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌻➺ .𝘪𝘮𝘨𝘤𝘰𝘳𝘢𝘻𝘰𝘯 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘯𝘢𝘷𝘪𝘥𝘢𝘥 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘤𝘢𝘳𝘵𝘢 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰2 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘱𝘢𝘳𝘦𝘫𝘢 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘥𝘣𝘻 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘷𝘪𝘥𝘳𝘪𝘰 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘤𝘢𝘭𝘭𝘦 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘳𝘢𝘧𝘪𝘵𝘪2 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪3 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪4 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪5 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪6 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪7 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪8 𝙩𝙚𝙭𝙩𝙤
┃🌻➺ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗦𝗢𝗥𝗧𝗘𝗢𝗦 🎉 ]━⬣
┃ 𝐻𝑎𝑧 𝑢𝑛 𝑠𝑜𝑟𝑡𝑒𝑜 𝑦 𝑒𝑙𝑖𝑚𝑖𝑛𝑎
┃ 𝑖𝑛𝑎𝑐𝑡𝑖𝑣𝑜𝑠 𝑑𝑒 𝑡𝑢 𝑔𝑟𝑢𝑝𝑜.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰2 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰3 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰4 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰5 𝙩𝙚𝙭𝙩𝙤
┃🍁➺ .𝘴𝘰𝘳𝘵𝘦𝘰6 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗙𝗥𝗔𝗦𝗘𝗦 𝗬 𝗧𝗘𝗫𝗧𝗢𝗦 🥀 ]━⬣
┃ 𝘘𝘶𝘪𝘦𝘯 𝘯𝘰 𝘢𝘳𝘳𝘪𝘦𝘴𝘨𝘢 𝘱𝘪𝘦𝘳𝘥𝘦.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀➺ .𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢𝘳𝘰𝘮𝘢𝘯𝘵𝘪𝘤𝘢
┃🥀➺ .𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥 𝙩𝙖𝙜
┃🥀➺ .𝘤𝘰𝘯𝘴𝘦𝘫𝘰
┃🥀➺ .𝘧𝘳𝘢𝘴𝘦
┃🥀➺ .𝘱𝘪𝘳𝘰𝘱𝘰
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦  🚀]━⬣
┃ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 
┃ 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 𝘥𝘦 𝘌𝘉𝘎.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🚀➺ .𝘤𝘰𝘷𝘦𝘳 | 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣 
┃🚀➺ .𝘢𝘱𝘬 | 𝙣𝙤𝙢𝙗𝙧𝙚 𝙖𝙥𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺𝘭𝘪𝘴𝘵 | 𝙘𝙖𝙣𝙘𝙞𝙤́𝙣 
┃🚀➺ .𝘪𝘮𝘢𝘨𝘦𝘯 | 𝙩𝙚𝙭𝙩𝙤 
┃🚀➺ .𝘪𝘮𝘢𝘨𝘦𝘯2 | 𝙩𝙚𝙭𝙩𝙤 
┃🚀➺ .𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵 | 𝙩𝙚𝙭𝙩𝙤
┃🚀➺ .𝘸𝘢𝘭𝘭𝘱𝘢𝘱𝘦𝘳 | 𝙩𝙚𝙭𝙩𝙤
┃🚀➺ .𝘱𝘭𝘢𝘺 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺2 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺.1 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺.2 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺3𝘥𝘰𝘤 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘱𝘭𝘢𝘺4𝘥𝘰𝘤 | 𝙩𝙚𝙭𝙩𝙤 𝙤 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘺𝘵𝘮𝘱3 | 𝙡𝙞𝙣𝙠 𝙔𝙤𝙪𝙏𝙪𝙗𝙚
┃🚀➺ .𝘺𝘵𝘮𝘱4 | 𝙡𝙞𝙣𝙠 𝙔𝙤𝙪𝙏𝙪𝙗𝙚
┃🚀➺ .𝘵𝘸𝘪𝘵𝘵𝘦𝘳 | 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘴𝘱𝘰𝘵𝘪𝘧𝘺 | 𝙩𝙚𝙭𝙩𝙤
┃🚀➺ .𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬 | 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 | 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘪𝘨𝘴𝘵𝘢𝘭𝘬 | 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 (𝙖)
┃🚀➺ .𝘪𝘨𝘩𝘪𝘴𝘵𝘰𝘳𝘪𝘢𝘴 | 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 (𝙖)
┃🚀➺ .𝘵𝘪𝘬𝘵𝘰𝘬 | 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘵𝘪𝘬𝘵𝘰𝘬𝘧𝘰𝘵𝘰 | 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 (𝙖)
┃🚀➺ .𝘷𝘦𝘳𝘵𝘪𝘬𝘵𝘰𝘬 | 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 (𝙖)
┃🚀➺ .𝘳𝘪𝘯𝘨𝘵𝘰𝘯𝘦 | 𝙩𝙚𝙭𝙩𝙤
┃🚀➺ .𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 | 𝙡𝙞𝙣𝙠
┃🚀➺ .𝘨𝘥𝘳𝘪𝘷𝘦  |  𝙡𝙞𝙣𝙠
*╰━━━━━━⋆★⋆━━━━━━⬣*

╭━[ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗥𝗞𝗘𝗥 🎐 ]━⬣
┃ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘰 𝘤𝘳𝘦𝘢
┃ 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘤𝘰𝘯 𝘧𝘪𝘭𝘵𝘳𝘰𝘴.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐➺ .𝘴𝘵𝘪𝘤𝘬𝘦𝘳 𝙞𝙢𝙖𝙜𝙚𝙣 𝙤 𝙫𝙞𝙙
┃🎐➺ .𝘦𝘮𝘰𝘫𝘪𝘮𝘪𝘹 😺+😆
┃🎐➺ .𝘢𝘵𝘵𝘱 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘢𝘵𝘵𝘱2 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘢𝘵𝘵𝘱3 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘴𝘤𝘪𝘳𝘤𝘭𝘦 𝙞𝙢𝙖𝙜𝙚𝙣
┃🎐➺ .𝘵𝘵𝘱 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘵𝘵𝘱2 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘵𝘵𝘱3 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘵𝘵𝘱4 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘵𝘵𝘱5 𝙩𝙚𝙭𝙩𝙤
┃🎐➺ .𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘮𝘢𝘳𝘬𝘦𝘳
┃🎐➺ .𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘧𝘪𝘭𝘵𝘦𝘳
┃🎐➺ .𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘱𝘢𝘤𝘬
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗜𝗡𝗧𝗘𝗟𝗜𝗚𝗘𝗡𝗖𝗜𝗔 𝗜𝗔 🪄 ]━⬣
┃ 𝘊𝘰𝘯𝘷𝘦𝘳𝘴𝘢𝘳 𝘤𝘰𝘯 𝘌𝘭𝘪𝘛𝘦 𝘉𝘰𝘵
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ .𝘤𝘩𝘢𝘵𝘨𝘱𝘵 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖 
┃🪄➺ .𝘤𝘩𝘢𝘵𝘨𝘱𝘵𝘷𝘰𝘻 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖 
┃🪄➺ .𝘴𝘪𝘮𝘪 𝙩𝙚𝙭𝙩𝙤
┃🪄➺ .𝘣𝘰𝘵 𝙩𝙚𝙭𝙩𝙤
┃🪄➺ .𝘢𝘭𝘦𝘹𝘢 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖 
┃🪄➺ .𝘪𝘢𝘷𝘰𝘻 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖
┃🪄➺ .𝘪𝘢 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖
┃🪄➺ .𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢 𝙩𝙚𝙭𝙩𝙤
┃🪄➺ .𝘴𝘪𝘮𝘴𝘪𝘮𝘪 𝙩𝙚𝙭𝙩𝙤
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 💡 ]━⬣
┃ 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘢 𝘭𝘢 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰́𝘯.
┃  .𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰́𝘯 𝘥𝘦𝘭 𝘚𝘵𝘪𝘤𝘬𝘦𝘳.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💡➺ .𝘸𝘮 𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚 
┃💡➺ .𝘸𝘮 𝙩𝙚𝙭𝙩𝙤 
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥𝗘𝗦 🛰️ ]━⬣
┃ 𝘊𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦 𝘴𝘵𝘪𝘤𝘬𝘦𝘳 𝘦𝘯 𝘪𝘮𝘢𝘨𝘦𝘯.
┃ 𝘊𝘳𝘦𝘢 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦 𝘢𝘳𝘤𝘩𝘪𝘷𝘰𝘴.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️➺ .𝘪𝘮𝘨𝘱𝘥𝘧 𝙞𝙢𝙜
┃🛰️➺ .𝘵𝘰𝘢𝘯𝘪𝘮𝘦 𝙞𝙢𝙜
┃🛰️➺ .𝘵𝘰𝘪𝘮𝘨 𝙨𝙩𝙞𝙘𝙠𝙚𝙧
┃🛰️➺ .𝘵𝘰𝘮𝘱3 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤𝙩𝙖𝙫𝙤𝙯
┃🛰️➺ .𝘵𝘰𝘷𝘪𝘥𝘦𝘰 𝙫𝙞𝙙𝙚𝙤 
┃🛰️➺ .𝘤𝘦𝘬𝘳𝘦𝘴𝘰𝘭𝘶𝘵𝘪𝘰𝘯 𝙞𝙢𝙜 
┃🛰️➺ .𝘵𝘰𝘶𝘳𝘭 𝙞𝙢𝙜 𝙤 𝙫𝙞𝙙𝙚𝙤 
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 ⛺ ]━⬣
┃⛺➺ .𝘩𝘰𝘳𝘯𝘺𝘤𝘢𝘳𝘥 𝙩𝙖𝙜
┃⛺➺ .𝘭𝘰𝘭𝘪𝘤𝘦 𝙩𝙖𝙜
┃⛺➺ .𝘴𝘪𝘮𝘤𝘢𝘳𝘥 𝙩𝙖𝙜
┃⛺➺ .𝘰𝘱𝘪𝘯𝘪𝘰𝘯 𝙩𝙚𝙭𝙩𝙤 
┃⛺➺ .𝘪𝘵𝘴𝘴𝘰𝘴𝘵𝘶𝘱𝘪𝘥
┃⛺➺ .𝘱𝘪𝘹𝘦𝘭𝘢𝘳
┃⛺➺ .𝘥𝘪𝘧𝘶𝘮𝘪𝘯𝘢𝘳2
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗔𝗥 𝗔𝗨𝗗𝗜𝗢𝗦 🧰 ]━⬣
┃ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘔𝘰𝘥𝘪𝘧𝘪𝘤𝘢𝘤𝘪𝘰𝘯𝘦𝘴
┃ 𝘢𝘭 𝘈𝘶𝘥𝘪𝘰 𝘰 𝘕𝘰𝘵𝘢 𝘥𝘦 𝘝𝘰𝘻
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰➺ .𝘵𝘵𝘴 𝙩𝙚𝙭𝙩𝙤 
┃🧰➺ .𝘣𝘢𝘴𝘴 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘣𝘭𝘰𝘸𝘯 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘥𝘦𝘦𝘱 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘦𝘢𝘳𝘳𝘢𝘱𝘦 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘧𝘢𝘴𝘵 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘧𝘢𝘵 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘯𝘪𝘨𝘩𝘵𝘤𝘰𝘳𝘦 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘳𝘦𝘷𝘦𝘳𝘴𝘦 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘳𝘰𝘣𝘰𝘵 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘴𝘭𝘰𝘸 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘴𝘮𝘰𝘰𝘵𝘩 𝙖𝙪𝙙𝙞𝙤 
┃🧰➺ .𝘵𝘶𝘱𝘢𝘪 𝙖𝙪𝙙𝙞𝙤 
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗙𝗢𝗫𝗚𝗜𝗥𝗟 🇯🇵 ]━━⬣
┃ 𝘧𝘰𝘹𝘨𝘪𝘳𝘭 𝘩𝘰𝘵
┃ 𝘋𝘪𝘴𝘧𝘳𝘶𝘵𝘢 𝘥𝘦 𝘶𝘯𝘢 𝘎𝘳𝘢𝘯 𝘝𝘢𝘳𝘪𝘦𝘥𝘢𝘥
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🇯🇵 .𝘧𝘰𝘹𝘨𝘪𝘳𝘭
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━[ 𝗕𝗨́𝗦𝗤𝗨𝗘𝗗𝗔 🔍 ]━⬣
┃ 𝘉𝘶𝘴𝘤𝘢 𝘭𝘰 𝘲𝘶𝘦 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘤𝘰𝘯
┃ 𝘌𝘓𝘐𝘛𝘌 𝘉𝘖𝘛!!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍➺ .𝘤𝘶𝘦𝘷𝘢𝘯𝘢 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙚𝙡𝙞́𝙘𝙪𝙡𝙖 
┃🔍➺ .𝘮𝘢𝘯𝘨𝘢𝘪𝘯𝘧𝘰 𝙩𝙚𝙭𝙩𝙤 
┃🔍➺ .𝘨𝘰𝘰𝘨𝘭𝘦 𝙩𝙚𝙭𝙩𝙤 
┃🔍➺ .𝘭𝘦𝘵𝘳𝘢 𝙩𝙚𝙭𝙩𝙤 
┃🔍➺ .𝘲𝘶𝘦𝘮𝘶𝘴𝘪𝘤𝘢𝘦𝘴 𝙫𝙞𝙙 𝙤 𝙖𝙪𝙙𝙞𝙤
┃🔍➺ .𝘣𝘶𝘴𝘤𝘢𝘳𝘺𝘵 𝙩𝙚𝙭𝙩𝙤 
┃🔍➺ .𝘸𝘪𝘬𝘪 𝙩𝙚𝙭𝙩𝙤 
┃🔍➺ .𝘤𝘭𝘪𝘮𝘢 𝙘𝙞𝙪𝙙𝙖𝙙 𝙮 𝙥𝙖𝙞́𝙨 
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━[ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦  🛠️ ]━⬣
┃🛠️➺ .𝘤𝘢𝘭𝘤 𝙩𝙚𝙭𝙩𝙤
┃🛠️➺ .𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙢𝙨𝙟
┃🛠️➺ .𝘵𝘳𝘢𝘥𝘶𝘤𝘪𝘳 𝙩𝙚𝙭𝙩𝙤 
┃🛠️➺ .𝘩𝘥 𝙞𝙢𝙖𝙜𝙚𝙣 
┃🛠️➺ .𝘩𝘰𝘳𝘢𝘳𝘪𝘰
╰━━━━━━⋆★⋆━━━━━━⬣

╭━━━[ 𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢 ⚙️ ]━⬣
┃ 𝘊𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢 𝘴𝘪 𝘦𝘳𝘦𝘴 𝘢𝘥𝘮𝘪𝘯.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙬𝙚𝙡𝙘𝙤𝙢𝙚
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙪𝙙𝙞𝙤𝙨
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘𝙤𝙨 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙛𝙖𝙠𝙚 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙢𝙤𝙙𝙤𝙞𝙖 
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠2
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙩𝙞𝙠𝙩𝙤𝙠
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙮𝙤𝙪𝙩𝙪𝙗𝙚
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢
┃⚙️ .𝘰𝘯 : 𝘰𝘧𝘧 𝙖𝙣𝙩𝙞𝙩𝙬𝙞𝙩𝙩𝙚𝙧
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢 🌐 ]━⬣
┃ 𝘔𝘦𝘫𝘰𝘳𝘢 𝘵𝘶́ 𝘎𝘳𝘶𝘱𝘰 𝘤𝘰𝘯 𝘌𝘓𝘐𝘛𝘌 𝘉𝘖𝘛
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _.𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴 
┃🌐➺ _.𝘳𝘪𝘱 𝙩𝙖𝙜
┃🌐➺ _.𝘬𝘪𝘤𝘬𝘯𝘶𝘮 𝙘𝙤́𝙙𝙞𝙜𝙤 𝙥𝙖𝙞𝙨
┃🌐➺ _.𝘣𝘢𝘯 𝙩𝙖𝙜
┃🌐➺ _.𝘨𝘳𝘶𝘱𝘰 𝙖𝙗𝙧𝙞𝙧 
┃🌐➺ _.𝘨𝘳𝘶𝘱𝘰 𝙘𝙚𝙧𝙧𝙖𝙧
┃🌐➺ _.𝘥𝘢𝘳𝘢𝘥𝘮𝘪𝘯 𝙩𝙖𝙜
┃🌐➺ _.𝘥𝘦𝘮𝘰𝘵𝘦 𝙩𝙖𝙜
┃🌐➺ _.𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 𝙩𝙖𝙜
┃🌐➺ _.𝘥𝘦𝘴𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳 𝙩𝙖𝙜
┃🌐➺ _.𝘭𝘪𝘴𝘵𝘣𝘢𝘯𝘶𝘴𝘦𝘳
┃🌐➺ _.𝘵𝘰𝘥𝘰𝘴 𝙩𝙚𝙭𝙩𝙤 
┃🌐➺ _.𝘯𝘰𝘵𝘪𝘧𝘺 𝙩𝙚𝙭𝙩𝙤 
┃🌐➺ _.𝘪𝘯𝘧𝘰𝘨𝘳𝘶𝘱𝘰 
┃🌐➺ _.𝘨𝘳𝘶𝘱𝘰𝘵𝘪𝘦𝘮𝘱𝘰 𝘢𝘣𝘳𝘪𝘳 𝙝𝙤𝙧𝙖
┃🌐➺ _.𝘨𝘳𝘶𝘱𝘰𝘵𝘪𝘦𝘮𝘱𝘰 𝘤𝘦𝘳𝘳𝘢𝘳 𝙝𝙤𝙧𝙖
┃🌐➺ _.𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝙩𝙖𝙜
┃🌐➺ _.𝘥𝘦𝘭𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝙩𝙖𝙜
┃🌐➺ _.𝘯𝘶𝘦𝘷𝘰𝘭𝘪𝘯𝘬 
┃🌐➺ _.𝘭𝘪𝘯𝘬
┃🌐➺ _.𝘯𝘦𝘸𝘯𝘰𝘮𝘣𝘳𝘦 𝙩𝙚𝙭𝙩𝙤 
┃🌐➺ _.𝘯𝘦𝘸𝘥𝘦𝘴𝘤 𝙩𝙚𝙭𝙩𝙤 
┃🌐➺ _.𝘴𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝙩𝙚𝙭𝙩𝙤 
┃🌐➺ _.𝘴𝘦𝘵𝘣𝘺𝘦 𝙩𝙚𝙭𝙩𝙤 
╰━━━━━━⋆★⋆━━━━━━⬣

╭━[ 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 🩻 ]━⬣
┃ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 
┃ 𝘗𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🩻➺ .𝘤𝘳𝘦𝘢𝘥𝘰𝘳
┃🩻➺ .𝘤𝘰𝘱𝘪𝘢
┃🩻➺ .𝘴𝘢𝘭𝘪𝘳
┃🩻➺ .𝘴𝘦𝘵𝘣𝘰𝘵𝘯𝘢𝘮𝘦
┃🩻➺ .𝘴𝘦𝘵𝘣𝘪𝘰𝘣𝘰𝘵
┃🩻➺ .𝘣𝘰𝘳𝘳𝘢𝘳𝘥𝘢𝘵𝘰𝘴 𝙩𝙖𝙜
┃🩻➺ .𝘨𝘦𝘵𝘱𝘭𝘶𝘨𝘪𝘯
┃🩻➺ .𝘢𝘥𝘮𝘪
┃🩻➺ .𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘥𝘰𝘴
┃🩻➺ .𝘦𝘴𝘵𝘢𝘥𝘰
┃🩻➺ .𝘥𝘢𝘴𝘩𝘣𝘰𝘢𝘳𝘥
┃🩻➺ .𝘴𝘶𝘣𝘪𝘳𝘦𝘴𝘵𝘢𝘥𝘰
┃🩻➺ .𝘶𝘱𝘥𝘢𝘵𝘦
┃🩻➺ .𝘤𝘭𝘦𝘢𝘳𝘵𝘦𝘮𝘱
┃🩻➺ .𝘢𝘤𝘦𝘭𝘦𝘳𝘢𝘵𝘦
┃🩻➺ .𝘴𝘱𝘦𝘦𝘥𝘵𝘦𝘴𝘵
┃🩻➺ .𝘴𝘱𝘦𝘦𝘥
┃🩻➺ .𝘭𝘪𝘴𝘵𝘢𝘨𝘳𝘶𝘱𝘰𝘴
┃🩻➺ .𝘣𝘢𝘯𝘤𝘩𝘢𝘵
┃🩻➺ .𝘶𝘯𝘣𝘢𝘯𝘤𝘩𝘢𝘵
╰━━━━━━⋆★⋆━━━━━━⬣
 `.trim()
    
const vi = ['https://telegra.ph/file/e87e6297f01c3141fafa9.mp4']

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

handler.command = /^(Menudo)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
