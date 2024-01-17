var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = './src/4vs4clk.png'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `┃👤 @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙃𝙊𝙍𝘼𝙍𝙄𝙊.\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤:\n.4𝘷𝘴4𝘤𝘭𝘬 5𝘱𝘮 𝘌𝘤 / 4𝘱𝘮 𝘔𝘹`)
if (text.length < 0) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `📩 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: *${text}*`
let texto = `[❗] 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙋𝘼𝙍𝘼 𝘼𝘿𝙈𝙄𝙉𝙎 

${yo}

𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎 :
${listaAdmins}

`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(2x2clk)$/i
handler.group = true

export default handler
