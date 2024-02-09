let handler = async (m, { conn, command }) => {
  conn.reply(m.chat, `El comando '${command}' no existe. Puedes usar el comando .help para ver la lista de comandos disponibles.`, m)
}

handler.command = /^(.*)$/i

export default handler
