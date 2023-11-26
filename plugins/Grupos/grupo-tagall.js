
let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
   
throw false
}
let pesan = args.join` `
let oi = `📩 ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `*╭━* ${lenguajeGB['smstagaa']()} \n\n${oi}\n`
teks += `👤 𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎: *${participants.length}*\n\n`
for (let mem of participants) {
   
teks += `┃👤@${mem.id.split('@')[0]}\n`}
teks += `\n` 
teks += `*╰━* 𝙀𝙇𝙄𝙏𝙀 𝘽𝙊𝙏 𝙂𝙇𝙊𝘽𝘼𝙇
▌│█║▌║▌║║▌║▌║▌║█`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
