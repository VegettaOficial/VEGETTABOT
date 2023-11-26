import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'EBG ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `⛔ 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦.\n\n𝗠𝗼𝘁𝗶𝘃𝗼:\n𝖲𝗉𝖺𝗆, 𝗅𝗂𝗇𝗄𝗌 𝗒 𝗅𝗅𝖺𝗆𝖺𝖽𝖺𝗌 𝗁𝖺𝖼𝗂𝖺 𝖤𝗅𝗂𝗍𝖾𝖡𝗈𝗍𝖦𝗅𝗈𝖻𝖺𝗅.\n\n𝗧𝗼𝘁𝗮𝗹 :\n ${data.length}\n\n╭━━━ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 👤\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣\n\n𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗻𝗼 𝗺𝗲  𝗹𝗹𝗮𝗺𝗲, 𝗻𝗼 𝗺𝗲 𝗲𝘀𝗰𝗿𝗶𝗯𝗮 𝗽𝗮𝗿𝗮 𝗲𝘃𝗶𝘁𝗮𝗿 𝘀𝗲𝗿 𝗕𝗹𝗼𝗾𝘂𝗲𝗮𝗱𝗼, 𝗚𝗿𝗮𝗰𝗶𝗮𝘀."
return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) })
/*conn.sendButton(m.chat, txt, `*Por favor no llame para evitar ser Bloqueado, Gracias.*\n\n*Please do not call to avoid being Blocked, Thank you.*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })*/
}).catch(err => {
console.log(err);
return conn.reply(m.chat, `${rg}𝙉𝘼𝘿𝙄𝙀 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊`, gata, m) 
/*conn.sendButton(m.chat, `${rg}𝙉𝘼𝘿𝙄𝙀 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊\n\n𝙉𝙊 𝙊𝙉𝙀 𝙃𝘼𝙎 𝘽𝙀𝙀𝙉 𝘽𝙇𝙊𝘾𝙆𝙀𝘿`, wm, gata, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], os.getRandom())*/
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
