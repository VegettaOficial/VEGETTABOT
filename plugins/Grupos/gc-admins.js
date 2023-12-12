var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu2.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `┃👤 @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝙊𝙍 𝘾𝙐𝘼𝙇 𝙌𝙐𝙄𝙀𝙍𝙀 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙍 𝙇𝘼 𝙋𝙍𝙀𝙎𝙀𝙉𝘾𝙄𝘼 𝘿𝙀 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎.`)
if (text.length < 0) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `📩 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: *${text}*`
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
handler.command = /^(ayuda)$/i
handler.group = true

export default handler
