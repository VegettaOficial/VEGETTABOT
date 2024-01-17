var handler = async (m, { conn, participants, groupMetadata, args, text }) => {
 pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/novios.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => ``).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`Ingrese la hora`)
if (text.length < 0) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `Hora: *${text}*`
let texto = `4vs4 COMPE 
Reglas : CLK
${yo}

𝐂𝐎𝐍𝐅𝐈𝐑𝐌𝐀𝐑 𝐀𝐒𝐈𝐒𝐓𝐄𝐍𝐂𝐈𝐀:
🥷🏻|
🥷🏻|  
🥷🏻|  
🥷🏻| 

𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
🥷🏻|
🥷🏻|

𝐃𝐎𝐍𝐀𝐃𝐎𝐑 𝐃𝐄 𝐒𝐀𝐋𝐀:
👨🏻‍💼|

*╰━* 𝙀𝙇𝙄𝙏𝙀 𝘽𝙊𝙏 𝙂𝙇𝙊𝘽𝘼𝙇
▌│█║▌║▌║║▌║▌║▌║█`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(2x2clk)$/i
handler.group = true

export default handler
