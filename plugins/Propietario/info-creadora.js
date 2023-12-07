var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `⚡ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄 𝐄́𝐋𝐈𝐓𝐄 𝐁𝐎𝐓 ⚡
*Wa.me/593993370003*

𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌:
https://instagram.com/jeffomx15?igshid=NTc4MTIwNjQ2YQ==

*---------------------*

𝐒𝐎𝐏𝐎𝐑𝐓𝐄 𝐄́𝐋𝐈𝐓𝐄 𝐁𝐎𝐓 
*${asistencia}*`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler

