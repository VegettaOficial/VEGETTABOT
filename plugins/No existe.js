let handler = async (m, { conn, command }) => {
  conn.sendMessage(m.chat, `El comando '${command}' no existe, @${m.sender.split("@")[0]}. Puedes usar el comando .help para ver la lista de comandos disponibles.`, 'text', { quoted: m })
}

handler.command = /^(.*)$/i

export default handler
