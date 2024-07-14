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
⭐¡Hola! @${m.sender.split("@")[0]}
 \`\`\`${week}, ${date}\`\`\`

𝙈𝙐𝘾𝙃𝙊 𝙂𝙐𝙎𝙏𝙊 𝙎𝙊𝙔 𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏, 𝙔 𝙀𝙎𝙏𝙊𝙔 𝘼𝙌𝙐𝙄 𝙋𝘼𝙍𝘼 𝙂𝙐𝙄𝘼𝙍𝙏𝙀.
𝘾𝙊𝙈𝙀𝙉𝙕𝙀𝙈𝙊𝙎 ...
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙞𝙣𝙖𝙘𝙩𝙞𝙫𝙤𝙨 
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘷𝘦𝘳𝘪𝘧𝘪𝘤𝘢𝘳𝘢́ 𝘢 𝘮𝘪𝘦𝘮𝘣𝘳𝘰𝘴 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴 𝘥𝘦 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙧𝙞𝙥 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘢́ 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙚𝙣𝙘𝙪𝙚𝙨𝙩𝙖 𝙢𝙚𝙣𝙨𝙖𝙟𝙚
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘳𝘦𝘢𝘭𝘪𝘻𝘢𝘳𝘢 𝘶𝘯𝘢 𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙥𝙧𝙤𝙜𝙧𝙖𝙢𝙖𝙧 7𝙥𝙢|8𝙖𝙢|7
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘢𝘣𝘳𝘪𝘳𝘢́, 𝘤𝘦𝘳𝘳𝘢𝘳𝘢́ , 𝘥𝘶𝘳𝘢𝘯𝘵𝘦 𝘥𝘪́𝘢𝘴 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 .
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙩𝙤𝙙𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘳𝘢 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙣𝙤𝙩𝙞 𝙢𝙚𝙣𝙨𝙖𝙟𝙚
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘩𝘢𝘳𝘢́ 𝘶𝘯𝘢 𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘤𝘪𝘰́𝘯 𝘧𝘰𝘳𝘻𝘰𝘴𝘢 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘮𝘪𝘦𝘮𝘣𝘳𝘰𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 .
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙠𝙞𝙘𝙠𝙣𝙪𝙢
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳𝘢́ 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘮𝘪𝘦𝘮𝘣𝘳𝘰𝘴 𝘲𝘶𝘦 𝘴𝘦𝘭𝘦𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘦𝘯 𝘤𝘰́𝘥𝘪𝘨𝘰 𝘥𝘦 𝘱𝘢𝘪́𝘴 , 𝘦𝘫𝘦𝘮𝘱𝘭𝘰 : 
.𝘬𝘪𝘤𝘬𝘯𝘶𝘮 +57
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙜𝙧𝙪𝙥𝙤 𝙖𝙗𝙧𝙞𝙧 
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘢𝘣𝘳𝘪𝘳𝘢́ 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙜𝙧𝙪𝙥𝙤 𝙘𝙚𝙧𝙧𝙖𝙧
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘤𝘦𝘳𝘳𝘢𝘳𝘢́ 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 .
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙙𝙖𝙧𝙖𝙙𝙢𝙞𝙣 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘥𝘢𝘳𝘢́ 𝘢𝘥𝘮𝘪𝘯 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙙𝙚𝙢𝙤𝙩𝙚 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘲𝘶𝘪𝘵𝘢𝘳𝘢́ 𝘦𝘭 𝘢𝘥𝘮𝘪𝘯 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙧 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳𝘢 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰 𝘺 𝘯𝘰 𝘱𝘰𝘥𝘳𝘢́ 𝘶𝘴𝘢𝘳 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵𝘵.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙙𝙚𝙨𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙧 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘥𝘦𝘴𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘳𝘢 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰 𝘺 𝘺𝘢 𝘱𝘰𝘥𝘳𝘢́ 𝘶𝘴𝘢𝘳 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙡𝙞𝙨𝙩𝙖𝙗𝙖𝙣𝙪𝙨𝙚𝙧
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘮𝘰𝘴𝘵𝘳𝘢𝘳𝘢́ 𝘶𝘯 𝘭𝘪𝘴𝘵𝘢𝘥𝘰 𝘥𝘦 𝘭𝘰𝘴 𝘣𝘭𝘰𝘲𝘶𝘦𝘢𝘥𝘰𝘴.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙞𝙣𝙛𝙤𝙜𝙧𝙪𝙥𝙤
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘴𝘦 𝘱𝘰𝘥𝘳𝘢́ 𝘷𝘦𝘳 𝘭𝘢 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰́𝘯 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙘𝙚𝙧𝙧𝙖𝙧𝙜𝙧𝙪𝙥𝙤𝙚𝙣 (𝙝𝙤𝙧𝙖)
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘤𝘦𝘳𝘳𝘢𝘳𝘢́ 𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘥𝘦𝘱𝘦𝘯𝘥𝘪𝘦𝘯𝘥𝘰 𝘭𝘢 𝘩𝘰𝘳𝘢 𝘲𝘶𝘦 𝘭𝘦 𝘢𝘴𝘪𝘨𝘯𝘦𝘴.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙖𝙗𝙧𝙞𝙧𝙜𝙧𝙪𝙥𝙤𝙚𝙣 (𝙝𝙤𝙧𝙖)
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘢𝘣𝘳𝘪𝘳𝘢́  𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘥𝘦𝘱𝘦𝘯𝘥𝘪𝘦𝘯𝘥𝘰 𝘭𝘢 𝘩𝘰𝘳𝘢 𝘲𝘶𝘦 𝘭𝘦 𝘢𝘴𝘪𝘨𝘯𝘦𝘴.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙖𝙙𝙫 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘥𝘢𝘳𝘢́ 𝘶𝘯𝘢 𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝘥𝘦 3 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰. 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙦𝙪𝙞𝙩𝙖𝙧𝙖𝙙𝙫 𝙩𝙖𝙜
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘲𝘶𝘪𝘵𝘢𝘳𝘢́ 𝘭𝘢𝘴 𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢𝘴 𝘢𝘭 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙡𝙞𝙨𝙩𝙖𝙖𝙙𝙫
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘵𝘦 𝘮𝘰𝘴𝘵𝘳𝘢𝘳𝘢́ 𝘶𝘯 𝘭𝘪𝘴𝘵𝘢𝘥𝘰 𝘥𝘦 𝘭𝘰𝘴 𝘢𝘥𝘷𝘦𝘳𝘵𝘪𝘥𝘰𝘴.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙣𝙪𝙚𝙫𝙤𝙡𝙞𝙣𝙠
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘵𝘦 𝘨𝘦𝘯𝘦𝘳𝘢 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘭𝘪𝘯𝘬 𝘦𝘯 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙡𝙞𝙣𝙠
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘵𝘦 𝘨𝘦𝘯𝘦𝘳𝘢 𝘦𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙣𝙚𝙬𝙣𝙤𝙢𝙗𝙧𝙚
🔗 𝘊𝘰𝘯 𝘦𝘴 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵  𝘳𝘦𝘯𝘰𝘮𝘣𝘳𝘢𝘳 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙣𝙚𝙬𝙙𝙚𝙨𝙘
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘱𝘰𝘯𝘦 𝘶𝘯𝘢 𝘯𝘶𝘦𝘷𝘢 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰́𝘯 𝘦𝘯 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰 .
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚙️ .𝙖𝙮𝙪𝙙𝙖 𝙩𝙚𝙭𝙩𝙤
🔗 𝘊𝘰𝘯 𝘦𝘴𝘵𝘢 𝘧𝘶𝘯𝘤𝘪𝘰́𝘯 𝘤𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘱𝘰𝘥𝘳𝘢́ 𝘶𝘴𝘢𝘳 𝘱𝘢𝘳𝘢 𝘪𝘯𝘷𝘰𝘤𝘢𝘳 𝘢 𝘭𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 .
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈


𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏 






 `.trim()
    
const vi = ['https://telegra.ph/file/d1f49ab23be65f6d0859c.mp4']

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

handler.command = /^(guia|guía)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
