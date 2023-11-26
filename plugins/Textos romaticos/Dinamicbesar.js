import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
 if (!text) throw `⚠️ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙏𝙀 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝘽𝙀𝙎𝘼𝙍.`
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
*@${m.sender.split("@")[0]}* 𝙀𝙎𝙏𝘼 𝘽𝙀𝙎𝘼𝙉𝘿𝙊 𝘼 *${text}* ♥️
━━━━━━━━━━━━━━━
*${text}*
 𝙏𝙀 𝘼𝘾𝘼𝘽𝘼𝙉 𝘿𝙀 𝘽𝙀𝙎𝘼𝙍. 🥺

 `.trim()

const vi = ['https://telegra.ph/file/382d64b9295270f65bdc8.mp4',
           'https://telegra.ph/file/3a59074f828ac6784965e.mp4',
            'https://telegra.ph/file/f8b307542b1325f4f63e9.mp4',
            'https://telegra.ph/file/0f3ba18c0748fa9e54f1c.mp4',
           'https://telegra.ph/file/6c30ffe0b714c9990e32e.mp4']

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

handler.command = /^(beso|kiss|besar)$/i
handler.register = false
handler.group = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
