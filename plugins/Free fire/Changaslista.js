let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🌸 𝙼𝙾𝙳𝙰𝙻𝙸𝙳𝙰𝙳 ︙4 VS 4 ${pesan}`
let teks = `${oi}\n`
teks += `🗒️ 𝚁𝙴𝙶𝙻𝙰𝚂︙ 
⏰ 𝙷𝙾𝚁𝙰︙ 
 
_💫𝑇𝑖𝑡𝑢𝑙𝑎𝑟𝑒𝑠💫_

🪐
🪐
🪐
🪐

_💫𝑆𝑢𝑝𝑙𝑒𝑛𝑡𝑒𝑠💫_
🪐 
🪐 

_💫𝐷𝑜𝑛𝑎𝑑𝑜𝑟𝑎 𝑑𝑒 𝑠𝑎𝑙𝑎💫_ 
📍
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(listavs)$/i
handler.admin = false
handler.group = true
export default handler
