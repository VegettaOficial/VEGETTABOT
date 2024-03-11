//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
    const pp = './src/avatar_contact.png'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    const { self, autoread , restrict, antiPrivate, antiSpam, welcome} = global.db.data.settings[conn.user.jid] || {}
    let text = `
*PERFIL DEL BOT*

*Version:* ${_package.version}

*Configuración:*

 ${self ? '✅ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' : '❎  𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔'} | Self
 ${autoread ? '✅' : '❎'} Autoread
 ${restrict ? '✅' : '❎'} Restrict
 ${antiPrivate ? '✅' : '❎'} Antiprivado
 ${antiSpam ? '✅' : '❎'} AntiSpam
 ${welcome ? '✅ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' : '❎  𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔'} | welcome 

 *Informacion:*

 *Creador:* Jeffo
 *Numero del creador:* +593993370003

`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m)
}

handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['infobot'] 
handler.group = true

export default handler
