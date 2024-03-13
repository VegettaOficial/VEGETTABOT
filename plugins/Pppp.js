import MessageType from '@whiskeysockets/baileys'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg

  let content = {
    [c.mtype]: c.toJSON()
  }

  if (c.msgType === MessageType.extendedText || c.msgType === MessageType.text) {
    content = {
      extendedTextMessage: {
        text: c.text
      }
    }
  }

  const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, content, {
    quoted: m,
    userJid: conn.user.id
  }), text || q.text, conn.user.jid, { mentions: users })

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['mencionar']
handler.tags = ['group']
handler.command = ['men', 'notify']
handler.group = true
handler.admin = true

export default handler
