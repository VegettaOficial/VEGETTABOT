var handler = async (m, { conn, command, text }) => {

if (!text) throw `🍭 𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘿𝙊𝙎 𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙎 𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙇𝙊𝙎 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙎𝙄 𝙎𝙀 𝙋𝙐𝙀𝘿𝙀𝙉 𝘾𝙐𝙇𝙀𝘼𝙍.`
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) throw `🔥 𝙀𝙎𝘾𝙍𝙄𝘽𝙀 𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙀𝙂𝙐𝙉𝘿𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼.`
let love = `━━━━━━━━━━━━━━━
😈 *${text1}* 𝙏𝙐 𝙊𝙋𝙊𝙍𝙏𝙐𝙉𝙄𝘿𝘼𝘿 𝘿𝙀 𝘾𝙐𝙇𝙀𝘼𝙍𝙏𝙀 𝘼 *${text2}* 𝙀𝙎 𝘿𝙀 *${Math.floor(Math.random() * 100)}%* 🔥 
━━━━━━━━━━━━━━━
𝙑𝙀𝙂𝙀𝙏𝙏𝘼 𝘽𝙊𝙏
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(culear|culiar)$/i

export default handler
