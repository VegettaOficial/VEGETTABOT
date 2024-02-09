let handler = async (m, { conn, command }) => {
  conn.reply(m.chat, `El comando '${command}' no existe. Puedes usar el comando .menu para ver la lista de comandos disponibles.`, m)
}

handler.all = /^(.*)$/i

export default handler
