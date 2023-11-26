import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
 if (!text) throw `⚠️ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙏𝙀 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙋𝙀𝙉𝙀𝙏𝙍𝘼𝙍.`
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
*@${m.sender.split("@")[0]}* 𝙇𝙀 𝙃𝘼 𝙈𝙀𝙏𝙄𝘿𝙊 𝙀𝙇 𝙋𝙀𝙉𝙀 𝘼 *${text}* 𝘾𝙊𝙉 𝙏𝙊𝘿𝙊 𝙔 𝘾𝙊𝙉𝘿𝙊́𝙉 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀𝘿𝘼𝙍 𝙎𝙀𝘾𝙊, 𝙔 𝙃𝘼𝙕 𝘿𝙄𝘾𝙃𝙊 "𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙢𝙖́𝙨 𝙙𝙪𝙧𝙤𝙤𝙤𝙤𝙤𝙤"!! , 𝙖𝙝𝙝𝙝𝙝𝙝𝙝𝙝 𝙖𝙝𝙝𝙝𝙝𝙝𝙝𝙝 , 𝙝𝙖𝙯𝙢𝙚 𝙪𝙣 𝙝𝙞𝙟𝙤 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙞𝙜𝙪𝙖𝙡 𝙙𝙚 𝙥𝙞𝙩𝙪𝙙𝙤 𝙦𝙪𝙚 𝙩𝙪́ !! 𝙈𝙄𝙀𝙉𝙏𝙍𝘼𝙎 𝙏𝙀 𝙋𝙀𝙉𝙀𝙏𝙍𝘼𝘽𝘼𝙉 𝙔 𝙇𝙐𝙀𝙂𝙊 𝙏𝙀 𝙃𝘼𝙉 𝘿𝙀𝙅𝘼𝘿𝙊 𝙀𝙉 𝙎𝙄𝙇𝙇𝘼𝙎 𝘿𝙀 𝙍𝙐𝙀𝘿𝘼𝙎 .
━━━━━━━━━━━━━━━
*${text}*
 𝙏𝙀 𝘼𝘾𝘼𝘽𝘼𝙉 𝘿𝙀 𝙈𝙀𝙏𝙀𝙍𝙏𝙀.
 🤤🤤🔥🔥🤤🤤

 `.trim()

const vi = ['https://telegra.ph/file/0fa519399cea3d74022c3.mp4',
           'https://telegra.ph/file/0aaec457747fad13bf4bf.mp4',
            'https://telegra.ph/file/fc5dfc0bd91fc2d860dc5.mp4',
           'https://telegra.ph/file/388c4aa86e88049a9afcd.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: await conn.parseMention(menu) })
} catch (error) {
return
}}}}

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '\n' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(penetrar)$/i
handler.register = false
handler.group = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
