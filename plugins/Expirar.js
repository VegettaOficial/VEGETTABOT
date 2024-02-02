let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `⚠️ 𝘐𝘯𝘨𝘳𝘦𝘴𝘢 𝘭𝘰𝘴 𝘮𝘪𝘯𝘶𝘵𝘰𝘴 𝘲𝘶𝘦 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘲𝘶𝘦 𝘦𝘴𝘵𝘦́ 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘨𝘳𝘶𝘱𝘰.\n\n» 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:\n${usedPrefix + command} 15`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var nMinutes = 60000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += nMinutes
    else global.db.data.chats[who].expired = now + nMinutes
    let teks = `🕔 Se estableció el tiempo de expiración para \n*${await conn.getName(who)}* \n\n*Tiempo* ${args[0]} Minutos\n\n*Cuenta regresiva :* ${msToDate(global.db.data.chats[who].expired - now)}`
    conn.reply(m.chat, teks, m)
}

handler.help = ['expirar <minutos>']
handler.tags = ['owner']
handler.command = /^(expirar|tiempo)$/i
handler.rowner = true

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Días*\n ', h, ' *Horas*\n ', m, ' *Minutos*\n ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}

export default handler
