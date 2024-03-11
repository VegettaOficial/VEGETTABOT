let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `${pesan}`
let teks = `${oi}\n`
teks += `╭──────⚔──────╮
   4𝗩𝗦4 INFINITO 
╰──────⚔──────╯

🕓 𝗛𝗢𝗥𝗔:
📑 𝗥𝗘𝗚𝗟𝗔𝗦: 

╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│🧚🏻‍♀️ ➤ 
│🧚🏻‍♀️ ➤  
│🧚🏻‍♀️ ➤ 
│🧚🏻‍♀️ ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 
│🧚🏻‍♀️ ➤  
│🧚🏻‍♀️ ➤ 
╰─────────────╯
  
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(listapg)$/i
export default handler
