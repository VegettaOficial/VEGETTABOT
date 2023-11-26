import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗INFO❗] INGRESE UN ENLACE VALIDO DE MEDIAFIRE, EJEMPLO: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res
let caption = `
🌀𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀 🌀

🎁 𝙉𝙊𝙈𝘽𝙍𝙀: ${filename}
🇦🇶 𝙏𝘼𝙈𝘼𝙉̃𝙊: ${filesizeH}
💻𝙏𝙄𝙋𝙊: ${ext}

𝙀𝙎𝙋𝙀𝙍𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙏𝙐 𝘼𝙍𝘾𝙃𝙄𝙑𝙊  .✅
`.trim()
m.reply(caption)
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {
await m.reply('*[❗INFO❗] ERROR, POR FAVOR VUELVA A INTENTARLO*\n\n*- CORROBORE QUE EL ENLACE SEA SIMILAR A:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')
/*conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'DESCARGAR DE MEDIAFIRE',
body: wm,         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: hp_otkstogthr}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗INFO❗] ERROR, POR FAVOR VUELVA A INTENTARLO*\n\n*- CORROBORE QUE EL ENLACE SEA SIMILAR A:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')
console.log(e)*/
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
