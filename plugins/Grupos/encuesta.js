let handler = async (m, {
    conn,
    text,
    args,
    command,
    sender
}) => {

    let question = text.replace(/:.*/,'').trim()
    if (!question) {
        throw "𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳, 𝘳𝘦𝘢𝘭𝘪𝘻𝘢 𝘶𝘯𝘢 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢 𝘱𝘢𝘳𝘢 𝘵𝘶 𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢 "
    }
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let cap = `𝙀𝙡𝙞𝙩𝙚𝘽𝙤𝙩𝙂𝙡𝙤𝙗𝙖𝙡\n𝙈𝙚𝙣𝙨𝙖𝙟𝙚: _${text}_`
    const pollMessage = {
        name: cap,
        values: ["Confirmo", "Negado"],
        multiselect: false,
        selectableCount: 1
    }

    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })
}

handler.help = ['encuesta <pregunta>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
