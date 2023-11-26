import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
 if (!text) throw `⚠️ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙏𝙀 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙂𝙊𝙇𝙋𝙀𝘼𝙍. `
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
*@${m.sender.split("@")[0]}* 𝙏𝙀 𝘼𝘾𝘼𝘽𝙊 𝘿𝙀 𝘿𝘼𝙍 𝙐𝙉 𝙂𝙊𝙇𝙋𝙀 *${text}* 𝙋𝙊𝙍 𝙏𝙊𝙉𝙏𝙊 𝙔 𝙀𝙎𝙏𝙐𝙋𝙄𝘿𝙊, 𝙋𝙊𝙍𝙏𝘼𝙏𝙀 𝘽𝙄𝙀𝙉! .👊🏿
━━━━━━━━━━━━━━━
*${text}*
𝙏𝙀 𝘼𝘾𝘼𝘽𝘼𝙉 𝙂𝙊𝙇𝙋𝙀𝘼𝙍. 
👊🏾👊🏾👊🏾👊🏾

 `.trim()

const vi = ['https://telegra.ph/file/09bcade511263b3822cb9.mp4',
           'https://telegra.ph/file/78e653eb99ae6b869d6d9.mp4',
            'https://telegra.ph/file/a51cf354202b789bd08bc.mp4',
            'https://telegra.ph/file/7c26992a620e407dce9e6.mp4',
           'https://telegra.ph/file/c66407bc09d3edffff039.mp4']

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

handler.command = /^(golpear|golpiar)$/i
handler.register = false
handler.group = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
