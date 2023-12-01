import {instagramdl} from "@bochilteam/scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    throw `*_📌️ Uso del comando_*\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`;
  if (!args[0].match(/instagram/gi))
    throw `❎ Asegurese que el enlace sea de Instagram`;
 
    let res = await instagramdl(args[0])
    conn.sendFile(m.chat, res.medias.url, "igdl.mp4", `Resultado`, m)
  }
}
handler.help = ["instagram *<link ig>*"]
handler.tags = ["downloader"]
handler.command = ["ig", "igdl", "instagram", "igimg", "igvid"]

export default handler
