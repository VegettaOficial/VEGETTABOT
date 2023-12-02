import {instagram} from '@xct007/frieren-scraper'
let handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw m.reply(`*_📌️ Uso del comando_*\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`)
  if (!args[0].match(/instagram/gi)) throw m.reply(`❎ Asegurese que el enlace sea de Instagram`)
try {
  const datTa = await instagram.v1(args[0])
  for (const urRRl of datTa) {
  conn.sendFile(m.chat, urRRl.url, 'error.mp4', `✅Resultado`, m)
  await new Promise((resolve) => setTimeout(resolve, 10000))
    }
  } catch {
   m.reply('❎ Ocurrió un error en la descarga')
 }
}
handler.help = ["instagram *<link ig>*"]
handler.tags = ["downloader"]
handler.command = ["instagram", "igdl", "igvid", "igimg", "ig"]

export default handler
