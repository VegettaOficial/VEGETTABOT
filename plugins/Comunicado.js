import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.jid.endsWith('@g.us')).map(v => v[0]) // Filtrar solo los grupos
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `Transmisión realizada *Total:* ${chats.length} grupos`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast|moni/i.test(teks) ? teks : `*TRANSMISIÓN STAFF*\n\n ${teks} ` ), true).catch(_ => _)
  m.reply('Se transmitió a todos los grupos :)')
}
handler.help = ['comunicadogp']
handler.tags = ['owner']
handler.command = /^(comunicadogp|bcgp)$/i

handler.owner = true

export default handler
