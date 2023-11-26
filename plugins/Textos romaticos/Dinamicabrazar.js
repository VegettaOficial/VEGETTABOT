import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
 if (!text) throw `⚠️ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝘿𝘼𝙍 𝙐𝙉 𝘼𝘽𝙍𝘼𝙕𝙊.`
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
*@${m.sender.split("@")[0]}* 𝙏𝙀 𝘿𝙄𝙊 𝙐𝙉 𝘼𝘽𝙍𝘼𝙕𝙊 𝘿𝙀 𝙊𝙎𝙊  *${text}* , 𝙀𝙍𝙀𝙎 𝙐𝙉𝘼 𝙂𝙍𝘼𝙉 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝙏𝙀 𝘼𝘿𝙈𝙄𝙍𝘼 𝙔 𝙀𝙎𝙏𝘼 𝙊𝙍𝙂𝙐𝙇𝙇𝙊𝙎@ 𝘿𝙀 𝙏𝙄.😍
━━━━━━━━━━━━━━━
*${text}*
 𝙏𝙀 𝘿𝙄𝙀𝙍𝙊𝙉 𝙐𝙉 𝘼𝘽𝙍𝘼𝙕𝙊. 🫂

 `.trim()

const vi = ['https://telegra.ph/file/899eb3e64097ff236113f.mp4',
           'https://telegra.ph/file/3f2223646db5e854dcd94.mp4',
            'https://telegra.ph/file/8da4ce3f1cc7297037aba.mp4',
            'https://telegra.ph/file/b7371a28e5afebdcb1666.mp4',
           'https://telegra.ph/file/edc48fbdde69d7fc5b889.mp4']

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

handler.command = /^(abrazar)$/i
handler.register = false
handler.group = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
