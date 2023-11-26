let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝗦𝗖𝗥𝗜𝗠 𝗗𝗘 𝗗𝗨𝗢𝗦 📍 ${pesan}`
let teks = `${oi}\n`
teks += `⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨

» 𝐃𝐢𝐚: 
» 𝐇𝐨𝐫𝐚: 

» *𝐏𝐋𝐀𝐘𝐄𝐑𝐒*

♥️ 𝗗𝗨𝗢 *1*
🦄➛
🦄➛

♥️ 𝗗𝗨𝗢 *2*
🌈➛
🌈➛
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(scrimduos|scrimduo)$/i
handler.admin = false
handler.group = true
export default handler
