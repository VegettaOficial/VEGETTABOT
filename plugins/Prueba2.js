import fetch from "node-fetch"
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0])
    throw `*_📌️ Uso del comando_*\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`;
  if (!args[0].match(/instagram/gi))
    throw `❎ Asegurese que el enlace sea de Instagram`
 try {
    const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=GataDios&url=${args[0]}`)
  const json = await human.json()
  const videoig = json.result
  await conn.sendFile(m.chat, videoig, 'error.mp4', `✅ ${mssg.lresult}`, m)
  } catch {
   m.reply('❎ Ocurrió un error en la descarga')
 }
}
handler.help = ["instagram *<link ig>*"]
handler.tags = ["downloader"]
handler.command = ["ig", "igdl", "instagram", "igimg", "igvid"]

export default handler
