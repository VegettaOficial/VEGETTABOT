import db from '../../lib/database.js'

let handler = async (m, { conn, args, text, isOwner, usedPrefix, command }) => {
    conn.advnro = conn.advnro ? conn.advnro : {}
    if (conn.advnro[m.chat]) return m.reply('⚠️ 𝗧𝗢𝗗𝗔𝗩𝗜́𝗔 𝗛𝗔𝗬 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔𝗦 𝗦𝗜𝗡 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘𝗥.')
    conn.advnro[m.chat] = {
        number: (9).getRandom(),
        time: 30000,
        bonus: 350,
        opp: 4
    }
    let teks = `𝗔𝗗𝗜𝗩𝗜𝗡𝗔 𝗘𝗟 𝗡𝗨́𝗠𝗘𝗥𝗢    *[ 1 2 3 4 5 6 7 8 9 0 ]*

» 𝗧𝗜𝗘𝗠𝗣𝗢: ${(conn.advnro[m.chat].time / 1000).toFixed(2)} segundos
» 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔: Un takis 🍭
╰─◆────⋆𝗘𝗕𝗚⋆─────◆─╯`
    let idmsg = await m.reply(teks)
    setTimeout(() => {
      if (conn.advnro[m.chat]) conn.reply(m.chat, `¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!\n\𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔: ${conn.advnro[m.chat].number}`, m, { quoted: idmsg })
      delete conn.advnro[m.chat]
    }, conn.advnro[m.chat].time)
}

handler.help = ['advnro']
handler.tags = ['game']
handler.command = /^(advnro)$/i
handler.register = false

export default handler
