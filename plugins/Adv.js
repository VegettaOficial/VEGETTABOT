let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `solo se puede usar si está activada la función:\non antitoxicos`, fkontak, m)

let who 
let img = 'https://images.vexels.com/media/users/3/153978/isolated/preview/483ef8b10a46e28d02293a31570c8c56-icono-de-trazo-de-color-de-senal-de-advertencia.png'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, `Debes de usar el comando o responder al mensaje de alguien\n${usedPrefix + command} @${name}`, fkontak, m)
try {
user.warn += 1
await m.reply(`${user.warn == 1 ? `@${who.split`@`[0]}` : `@${who.split`@`[0]}`} Recibió una advertencia en este grupo\n\nADVERTENCIA\n⚠️ ${user.warn}/4\n${wm}`, null, { mentions: [who] });
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`Te lo advertí varias veces\n@${who.split`@`[0]} ahora serás eliminado(o)`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove'), { mention: [who] })
}	
return !1
} catch (e) {
await m.reply(m.chat, `Sucedió un error`, m)
console.log(`❗ ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['profile [@user]']
handler.tags = ['rg']
handler.command = /^adv|pp$/i
export default handler
