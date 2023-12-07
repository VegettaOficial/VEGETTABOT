import db from '../../lib/database.js'
import { canLevelUp, xpRange } from '../../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
 // let biot = bio.Status(who).catch(_ => 'Sin Bio')
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let { name, exp, cookie, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let str = `𝙀𝙎𝙏𝙀 𝙀𝙎 𝙈𝙄 𝙉𝙊𝙑𝙄𝙊, *¿* 𝙀𝙎 𝙃𝙀𝙍𝙈𝙊𝙎𝙊 𝙑𝙀𝙍𝘿𝘼𝘿 *?* 😍

@${who.replace(/@.+/, '')} 𝙀𝙍𝙀𝙎 𝙀𝙇 𝙈𝙀𝙅𝙊𝙍 𝙉𝙊𝙑𝙄𝙊 𝘿𝙀𝙇 𝙈𝙐𝙉𝘿𝙊.🫶🏻♥️`
  let mentionedJid = [who]
  conn.sendFile(m.chat, pp, 'Error.jpg', str, m, false, { contextInfo: { mentionedJid }})
}

handler.help = ['perfil', 'perfil *@user*']
handler.tags = ['group']
handler.command = /^(minovio)$/i
handler.register = false

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}
