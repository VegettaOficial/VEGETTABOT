let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🌍 𝗦𝗖𝗥𝗜𝗠 🌍 ${pesan}`
let teks = `${oi}\n`
teks += `⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨⤨

» 𝐃𝐢𝐚: 
» 𝐇𝐨𝐫𝐚: 

» 𝗠𝗔𝗣𝗔𝗦:

🏝️┝𝗕
🏞️┝𝗣
🏜️┝𝗞

» 𝗖𝗮𝘀𝗶𝗹𝗹𝗮: 
» 𝗩𝗲𝘀𝘁𝗶𝗺𝗲𝗻𝘁𝗮: 

» *𝐏𝐋𝐀𝐘𝐄𝐑𝐒*

🥷🏻➛
🥷🏻➛
🥷🏻➛
🥷🏻➛

» 𝙈𝙄𝘾𝙍𝙊 𝙊𝘽𝙇𝙄𝙂𝘼𝙏𝙊𝙍𝙄𝙊/𝙉𝙊 𝙈𝙐𝘿𝘼𝙎 𝙔 𝙌𝙐𝙀 𝙏𝙍𝘼𝘽𝘼𝙅𝙀𝙉 𝙀𝙉 𝙀𝙌𝙐𝙄𝙋𝙊, 𝘼𝙌𝙐𝙄 𝙉𝘼𝘿𝙄𝙀 𝙀𝙎 𝘿𝙄𝙊𝙎.`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(scrims|scrim)$/i
export default handler
