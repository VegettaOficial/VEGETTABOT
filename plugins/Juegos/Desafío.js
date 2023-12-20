var handler = async (m, { conn, text, usedPrefix, command }) => {

let poin = 500
let reseqv = `🥌ᴘɪᴇᴅʀᴀ 📄ᴘᴀᴘᴇʟ o ✂️ᴛɪᴊᴇʀᴀ

• ᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏ:
🥌 .ppt piedra
📄 .ppt papel
✂️ .ppt tijera

• ᴜsᴇ ᴇɴ ᴍɪɴᴜsᴄᴜʟᴀs
*Ejemplo:* .ppt papel`
if (!text) throw reseqv
var astro = Math.random()

if (astro < 0.34) {
astro = 'piedra'
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera'
} else {
astro = 'papel'
}

if (text == astro) {
global.db.data.users[m.sender].exp += 100
m.reply(`🔰 𝗘𝗠𝗣𝗔𝗧𝗘 🔰\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 300
m.reply(`🎊 𝗚𝗔𝗡𝗔𝗦𝗧𝗘 🎊\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`❌ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘 ❌\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 500
m.reply(` 🎊 𝗚𝗔𝗡𝗔𝗦𝗧𝗘 🎊\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
} else {
global.db.data.users[m.sender].exp -= 150
m.reply(`❌ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘 ❌\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 600
m.reply(`🎊 𝗚𝗔𝗡𝗔𝗦𝗧𝗘 🎊\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`❌ 𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘 ❌\n\n👤 𝗧𝗨 : ${text}\n🔰 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 : ${astro}`)
}
} else {
throw reseqv
}

}
handler.help = ['ppt']
handler.tags = ['juegos']
handler.command = ['ppt'] 
handler.register = false

export default handler
