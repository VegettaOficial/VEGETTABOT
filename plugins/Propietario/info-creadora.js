var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = 'https://telegra.ph/file/d25a01a49229804078fc9.jpg'
const cat = `𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗗𝗘 𝗩𝗘𝗚𝗘𝗧𝗧𝗔 𝗕𝗢𝗧
👤 https://Wa.me/593992402778

𝘝𝘦𝘨𝘦𝘵𝘵𝘢 𝘉𝘰𝘵 𝘧𝘶𝘦 𝘤𝘳𝘦𝘢𝘥𝘰 𝘦𝘯 𝘦𝘭 𝘢𝘯̃𝘰 2024 𝘱𝘢𝘳𝘢 𝘢𝘺𝘶𝘥𝘢𝘳 𝘢 𝘭𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘤𝘰𝘯 𝘦𝘴𝘵𝘶𝘥𝘪𝘰𝘴, 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴(𝘷𝘪𝘥𝘦𝘰, 𝘢𝘶𝘥𝘪𝘰, 𝘢𝘱𝘭𝘪𝘤𝘢𝘤𝘪𝘰𝘯𝘦𝘴, 𝘦𝘵𝘤).

✨ 𝗥𝗘𝗗 𝗦𝗢𝗖𝗜𝗔𝗟 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 
𝗜𝗚: https://www.instagram.com/sebas.mvp_official0

🪀 𝗖𝗢𝗠𝗨𝗡𝗜𝗗𝗔𝗗
https://chat.whatsapp.com/Kvlcbwyg4VE3Au6OZsMWMU`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler

