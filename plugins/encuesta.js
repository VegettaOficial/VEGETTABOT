
let handler = async (m, {
    conn,
    text,
    args,
    command
}) => {
    let question = text.replace(/:.*/,'').trim()
    if (!question) {
        throw "𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳, 𝘩𝘢𝘻 𝘶𝘯𝘢 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢 𝘱𝘢𝘳𝘢 𝘭𝘢 𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢. ✌🏻"
    }

    const pollMessage = {
        name: question,
        values: ["si", "no"],
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
