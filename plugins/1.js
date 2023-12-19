if (command == 'ppt' || command == 'suit') { 
if (!text) return m.reply(`${lenguaje.juegos.text28}`) 
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 EMPATE! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIOS +500 XP`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 2000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HA GANADO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 EL BOT: ${astro}\n❌ PREMIO -300 XP`)
}}}}
