let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`*ESCRIBA EL MOTIVO POR EL CUÁL ESTARÁ INACTIVO (AFK)*\n\n*EJEMPLO:*\n*${usedPrefix + command}* Voy a realizar tarea`)
  
if (text.length < 10) return m.reply(`*MÍNIMO 10 CARACTERES DEBE DE SER EL MOTIVO*`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n✴️ *A F K* ✴️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*NO ETIQUETEN A* *@${m.sender.split("@")[0]}* *ESTARÁ INACTIVO(A) AFK*\n\n*MOTIVO DE LA INACTIVIDAD AFK:* ${text ? '\n👉 ' + text : ''}`, m, { mentions: [m.sender] })
}

handler.command = /^afk$/i
export default handler
