
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    
    m.reply(`✅ 𝘌𝘯𝘵𝘦𝘯𝘥𝘪𝘥𝘰 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘴𝘦 𝘥𝘦𝘴𝘢𝘤𝘵𝘪𝘷𝘰 𝘦𝘭 𝘵𝘪𝘦𝘮𝘱𝘰 𝘥𝘦 𝘷𝘦𝘯𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘨𝘳𝘶𝘱𝘰.`) 
        
}
handler.help = ['sintiempo']
handler.tags = ['owner']
handler.command = /^(sintiempo)$/i
handler.rowner = true
handler.group = true

export default handler
