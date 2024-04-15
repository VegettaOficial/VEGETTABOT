let handler  = async (m, { conn, usedPrefix, command }) => {
let res = await tiktokhot[Math.floor(Math.random() * tiktokhot.length)]
conn.sendMessage(m.chat, { video: { url: res }, caption: `PAJEROO` }, { quoted: m })}
handler.help = ['tiktokhot']
handler.tags = ['random']
handler.command = /^(tiktokhot)$/i
export default handler

global.lolivid = [
"https://telegra.ph/file/7266c4a284d0a2df54589.mp4",
"https://telegra.ph/file/40c07f641420a80b0f8cf.mp4",
"https://telegra.ph/file/79816642cc73eb500d2fe.mp4"
]
