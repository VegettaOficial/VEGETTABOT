let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokfrases[Math.floor(Math.random() * tiktokfrases.length)]
await m.react('😁')
conn.sendMessage(m.chat, { video: { url: res }, caption: `» 𝙍𝘼𝙉𝘿𝙊𝙈𝙎 𝙏𝙄𝙆 𝙏𝙊𝙆 😬` }, { quoted: m })}
handler.help = ['tiktokfrases']
handler.tags = ['random']
handler.command = /^(tiktokrandom)$/i
export default handler
global.tiktokfrases = [
"https://telegra.ph/file/84cf4ac7e73ea9d878180.mp4",
"https://telegra.ph/file/e31c8417bd6d58a0d5991.mp4",
  "https://telegra.ph/file/c8615d243f5c2bace002a.mp4",
"https://telegra.ph/file/5c62ae6dcc0262cb7638e.mp4"
]
