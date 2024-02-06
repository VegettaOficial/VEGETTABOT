import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let vn = './media/bot.mp3'
let bot = `${pickRandom([`𝘏𝘰𝘭𝘢 𝘲𝘶𝘦𝘳𝘪𝘥𝘰 𝘩𝘶𝘮𝘢𝘯𝘰 𝘦𝘯 𝘲𝘶𝘦́ 𝘱𝘶𝘦𝘥𝘰 𝘢𝘺𝘶𝘥𝘢𝘳 ?`, `𝘏𝘰𝘭𝘢 , 𝘴𝘰𝘺 𝘌𝘭𝘪𝘵𝘦 𝘉𝘰𝘵 𝘺 𝘦𝘴𝘵𝘰𝘺 𝘢𝘲𝘶𝘪 𝘱𝘢𝘳𝘢 𝘢𝘺𝘶𝘥𝘢𝘳𝘵𝘦.`, `𝘈𝘲𝘶𝘪 𝘦𝘴𝘵𝘰𝘺 𝘩𝘶𝘮𝘢𝘯𝘰 𝘲𝘶𝘦 𝘯𝘦𝘤𝘦𝘴𝘪𝘵𝘢𝘴?`,`𝘌𝘉𝘎 𝘈𝘤𝘵𝘪𝘷𝘰 24/7 ✅`, `𝘓𝘢𝘭𝘢𝘭𝘢 ... 𝘚𝘰𝘺 𝘢𝘴𝘪𝘴𝘵𝘦𝘯𝘵𝘦 𝘢𝘳𝘵𝘪𝘧𝘪𝘤𝘪𝘢𝘭 𝘦𝘯 𝘱𝘶𝘦𝘥𝘰 𝘢𝘺𝘶𝘥𝘢𝘳 ?`, `𝘌𝘴𝘵𝘰𝘺 𝘢𝘲𝘶𝘪 𝘩𝘶𝘮𝘢𝘯𝘰 👽`])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
