var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu2.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `4VS4 - - - -`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`Ingrese la hora`)
if (text.length < 0) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `Hora: *${text}*`
let texto = `[❗] 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙋𝘼𝙍𝘼 𝘼𝘿𝙈𝙄𝙉𝙎 

${yo}

𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 :
${listaAdmins}

*╰━* 𝙀𝙇𝙄𝙏𝙀 𝘽𝙊𝙏 𝙂𝙇𝙊𝘽𝘼𝙇
▌│█║▌║▌║║▌║▌║▌║█`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(2x2)$/i
handler.group = true

export default handler
