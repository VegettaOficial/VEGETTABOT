let fetch = require('node-fetch')
let instagramGetUrl = require('fg-ig')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!(args[0])) throw `*INGRESE EL ENLACE DE INSTAGRAM EJEMPLO: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `🔗 *Url:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)}
handler.command =/^(instagram|ig(dl)?)$/i
handler.dfail = null
module.exports = handler
