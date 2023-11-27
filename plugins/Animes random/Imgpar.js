import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=GataDios')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  
  conn.sendFile(m.chat, json.result.female, 'Chica.png', `🌸 𝙋𝘼𝙍 𝙈𝙐𝙅𝙀𝙍`, m, false)
  conn.sendFile(m.chat, json.result.male, 'menu.jpg', `☘️ 𝙋𝘼𝙍 𝙃𝙊𝙈𝘽𝙍𝙀`, m, false)
}
handler.help = ['mitad']
handler.tags = ['img']
handler.command = /^(par|mitad|gemelo)$/i
handler.register = false
export default handler
