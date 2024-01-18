import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `${eg} ❱❱ 𝙀𝙉𝙏𝙀𝙉𝘿𝙄𝘿𝙊 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 ❰❰
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
 » 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙍𝙏𝘼 𝙏𝙈𝙋 𝙁𝙐𝙀𝙍𝙊𝙉 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊𝙎.
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
» 𝙎𝙀𝙍𝙑𝙄𝘿𝙊𝙍 𝙇𝙄𝙈𝙋𝙄𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 🌎`, m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} //NO USAR ESTE COMANDO EN HEROKU | DO NOT USE THIS COMMAND ON HEROKU
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|limpieza2|cleartemp|borrartmp|eliminartmp|borrartemp|borrartemp)$/i
handler.exp = 500
handler.rowner = true
export default handler
