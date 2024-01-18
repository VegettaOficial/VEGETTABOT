var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = './src/4vs4clk.png'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => ``).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙃𝙊𝙍𝘼𝙍𝙄𝙊.\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n.4𝘷𝘴4𝘤𝘭𝘬 5𝘱𝘮 𝘌𝘤 / 4𝘱𝘮 𝘔𝘹`)
if (text.length < 0) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `🕓 𝐇𝐎𝐑𝐀: *${text}*`
let texto = `╭──────⚔──────╮
   4𝐕𝐒4 𝐂𝐎𝐌𝐏𝐄𝐓𝐈𝐓𝐈𝐕𝐎 
╰──────⚔──────╯

${yo}
📑 𝐑𝐄𝐆𝐋𝐀𝐒: 𝐂𝐋𝐊

╭──────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭──────────────╮
│ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 
│🥷🏻 ➤  
│🥷🏻 ➤ 
╰─────────────╯
𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 𝗚𝗟𝗢𝗕𝗔𝗟 
❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(4x4clk)$/i
handler.group = true

export default handler
