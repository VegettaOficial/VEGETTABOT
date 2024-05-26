let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `${pesan}`
let teks = `${oi}\n`
teks += `🔱𝙼𝙾𝙳𝙰𝙻𝙸𝙳𝙰𝙳: *𝙷𝙴𝚇𝙰𝙶𝙾𝙽𝙰𝙻*
🐚𝙷𝙾𝚁𝙰: 
🐳𝙲𝙾𝙻𝙾𝚁:
💦𝙲𝙰𝚂𝙸𝙻𝙻𝙰𝚂:

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1

🔱•
🌊•
🧜🏼‍♂️•
🌊•

𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2

🔱•
🌊•
🐳•
🌊•

𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦/𝗥𝗢𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦

🦈•
🦈•


•𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙌𝙐𝙀 𝙏𝙀𝙉𝙂𝘼𝙉 𝘾𝙊𝙉𝙎𝙐𝙇𝙏𝘼𝙍 

•𝗖𝗨𝗠𝗣𝗟𝗜𝗥 𝗖𝗢𝗡 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 𝗤𝗨𝗘 𝗦𝗘 𝗟𝗘𝗦 𝗗𝗔 𝗬 𝗘𝗦𝗧𝗔𝗥 10 𝗠𝗜𝗡𝗨𝗧𝗢𝗦 𝗔𝗡𝗧𝗘𝗦 ~EN DC~`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(listahexagonal|listhexagonal)$/i
export default handler
