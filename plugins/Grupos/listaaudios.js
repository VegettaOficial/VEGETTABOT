//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
//let pp = gataVidMenu.getRandom()
//let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    
if (chat.audios && m.text.match(/(bienven)/gi)) {
let vn = './media/Bienvenido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": wm, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": `𝙀𝙇𝙄𝙏𝙀 𝘽𝙊𝙏 𝙂𝙇𝙊𝘽𝘼𝙇`, "showAdAttribution": true}}, ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m })}

if (chat.audios && m.text.match(/(chao|adios|rip|eliminar|eliminenle|basura|pablo)/gi)) {    
let vn = './media/basura.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(El Toxico|El tóxico|Toxico|tóxico|malo|mala|estupido|estupida)/gi)) {    
let vn = './media/El Toxico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(Bebe|fiu fiu|bebito fiu fiu|Bebito)/gi)) {    
let vn = './media/Bebito.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}      

    if (chat.audios && m.text.match(/(confirma|confirmen)/gi)) {    
let vn = './media/confirma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}      
    
 if (chat.audios && m.text.match(/(borracha|alcohólicos|alcohólicas|borracho)/gi)) {    
let vn = './media/guanchaca.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}      
    
if (chat.audios && m.text.match(/(Motivacion|Motivación|grupo muerto)/gi)) {    
let vn = './media/Motivacion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (chat.audios && m.text.match(/(mucho spam|spam)/gi)) {    
let vn = './media/Muchachos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (chat.audios && m.text.match(/(Goku pervertido|pervertido|pervertida|goku|sexo|Sexo|antojen|antogen|😈|👿|👉👌|👌👈)/gi)) {    
let vn = './media/Ya antojaron.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot|bot puto|Bot puto|Bot CTM|Bot ctm|bot CTM|bot ctm|bot pendejo|Bot pendejo|bot de mierda)/gi)) {    
let vn = './media/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    


if (chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga|vrg)/gi)) {    
let vn = './media/vete a la verga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(trabajo|trabajar|chamba|chambear)/gi)) {    
let vn = './media/miprimerachamba.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
   
return !0 }
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
