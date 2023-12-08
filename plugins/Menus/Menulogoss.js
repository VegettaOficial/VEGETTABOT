import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
¡Hola! 👋🏻 @${m.sender.split("@")[0]}
 \`\`\`${week}, ${date}\`\`\`

╭──𝗟𝗢𝗚𝗢𝗦 𝗘𝗟𝗜𝗧𝗘 𝗕𝗢𝗧 
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰 ...
│ [❗] 𝙚𝙟𝙚𝙢𝙥𝙡𝙤 :
│ .𝙡𝙤𝙜𝙤 𝙖𝙢𝙚𝙧𝙞𝙘𝙖𝙣 𝙀𝙡𝙞𝙩𝙚 𝙗𝙤𝙩
│ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 + 𝙚𝙛𝙚𝙘𝙩𝙤 + 𝙩𝙚𝙭𝙩𝙤
╰────────────────

» 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦
│° 🔰 .𝗹𝗼𝗴𝗼 horrorblood
│° 🔰 .𝗹𝗼𝗴𝗼 horrormanos
│° 🔰 .𝗹𝗼𝗴𝗼 3ddeep
│° 🔰 .𝗹𝗼𝗴𝗼 american
│° 🔰 .𝗹𝗼𝗴𝗼 3dcifi
│° 🔰 .𝗹𝗼𝗴𝗼 3dcalligraphy
│° 🔰 .𝗹𝗼𝗴𝗼 3dwater
│° 🔰 .𝗹𝗼𝗴𝗼 Halloween1
│° 🔰 .𝗹𝗼𝗴𝗼 HalloweenHorror
│° 🔰 .𝗹𝗼𝗴𝗼 cinehorror
│° 🔰 .𝗹𝗼𝗴𝗼 sketch
│° 🔰 .𝗹𝗼𝗴𝗼 bluestyle
│° 🔰 .𝗹𝗼𝗴𝗼 space
│° 🔰 .𝗹𝗼𝗴𝗼 metallic
│° 🔰 .𝗹𝗼𝗴𝗼 glossymetalic
│° 🔰 .𝗹𝗼𝗴𝗼 Captainamerica
│° 🔰 .𝗹𝗼𝗴𝗼 fiction
│° 🔰 .𝗹𝗼𝗴𝗼 Videogame
│° 🔰 .𝗹𝗼𝗴𝗼 horrorstyle
│° 🔰 .𝗹𝗼𝗴𝗼 transformer
│° 🔰 .𝗹𝗼𝗴𝗼 berry
│° 🔰 .𝗹𝗼𝗴𝗼 layered
│° 🔰 .𝗹𝗼𝗴𝗼 thunder
│° 🔰 .𝗹𝗼𝗴𝗼 magmahot
│° 🔰 .𝗹𝗼𝗴𝗼 3dcool
│° 🔰 .𝗹𝗼𝗴𝗼 3dneon
│° 🔰 .𝗹𝗼𝗴𝗼 impressive
│° 🔰 .𝗹𝗼𝗴𝗼 glitch
│° 🔰 .𝗹𝗼𝗴𝗼 surface
│° 🔰 .𝗹𝗼𝗴𝗼 Brokenglass
│° 🔰 .𝗹𝗼𝗴𝗼 papercut
│° 🔰 .𝗹𝗼𝗴𝗼 yourphotos
│° 🔰 .𝗹𝗼𝗴𝗼 3dgradient
│° 🔰 .𝗹𝗼𝗴𝗼 3dmetal
│° 🔰 .𝗹𝗼𝗴𝗼 3drealistic
│° 🔰 .𝗹𝗼𝗴𝗼 watercolor
│° 🔰 .𝗹𝗼𝗴𝗼 multicolor
│° 🔰 .𝗹𝗼𝗴𝗼 windows
│° 🔰 .𝗹𝗼𝗴𝗼 neondevil
│° 🔰 .𝗹𝗼𝗴𝗼 underwater
│° 🔰 .𝗹𝗼𝗴𝗼 mascotlogo
│° 🔰 .𝗹𝗼𝗴𝗼 arte
│° 🔰 .𝗹𝗼𝗴𝗼 roots
│° 🔰 .𝗹𝗼𝗴𝗼 technology
│° 🔰 .𝗹𝗼𝗴𝗼 holidays
│° 🔰 .𝗹𝗼𝗴𝗼 cloud
│° 🔰 .𝗹𝗼𝗴𝗼 3dluxury
│° 🔰 .𝗹𝗼𝗴𝗼 3dgradient
│° 🔰 .𝗹𝗼𝗴𝗼 Blackpink
│° 🔰 .𝗹𝗼𝗴𝗼 realisticlight
│° 🔰 .𝗹𝗼𝗴𝗼 realisticcloud
│° 🔰 .𝗹𝗼𝗴𝗼 cloudsky
│° 🔰 .𝗹𝗼𝗴𝗼 WriteSummer
│° 🔰 .𝗹𝗼𝗴𝗼 Sand
│° 🔰 .𝗹𝗼𝗴𝗼 Sand3d
│° 🔰 .𝗹𝗼𝗴𝗼 summerysand
│° 🔰 .𝗹𝗼𝗴𝗼 FoilBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 3dglue
│° 🔰 .𝗹𝗼𝗴𝗼 space3d
│° 🔰 .𝗹𝗼𝗴𝗼 MetalDark
│° 🔰 .𝗹𝗼𝗴𝗼 StyleTikTok
│° 🔰 .𝗹𝗼𝗴𝗼 Stone
│° 🔰 .𝗹𝗼𝗴𝗼 NeonGalaxy
│° 🔰 .𝗹𝗼𝗴𝗼 1917style
│° 🔰 .𝗹𝗼𝗴𝗼 80sretro
│° 🔰 .𝗹𝗼𝗴𝗼 minion3d
│° 🔰 .𝗹𝗼𝗴𝗼 DoubleBlack
│° 🔰 .𝗹𝗼𝗴𝗼 Holographic
│° 🔰 .𝗹𝗼𝗴𝗼 Avengers
│° 🔰 .𝗹𝗼𝗴𝗼 MetalDual
│° 🔰 .𝗹𝗼𝗴𝗼 Marvel
│° 🔰 .𝗹𝗼𝗴𝗼 Marvel2
│° 🔰 .𝗹𝗼𝗴𝗼 Deluxe
│° 🔰 .𝗹𝗼𝗴𝗼 Luxury
│° 🔰 .𝗹𝗼𝗴𝗼 BlueMetal
│° 🔰 .𝗹𝗼𝗴𝗼 DeluxeGold
│° 🔰 .𝗹𝗼𝗴𝗼 Carbon
│° 🔰 .𝗹𝗼𝗴𝗼 Fabric
│° 🔰 .𝗹𝗼𝗴𝗼 Neon
│° 🔰 .𝗹𝗼𝗴𝗼 ByName
│° 🔰 .𝗹𝗼𝗴𝗼 firework
│° 🔰 .𝗹𝗼𝗴𝗼 Fullcolor
│° 🔰 .𝗹𝗼𝗴𝗼 TextMetal
│° 🔰 .𝗹𝗼𝗴𝗼 avatar
│° 🔰 .𝗹𝗼𝗴𝗼 TextSilver
│° 🔰 .𝗹𝗼𝗴𝗼 RoseGold
│° 🔰 .𝗹𝗼𝗴𝗼 LogoMetal
│° 🔰 .𝗹𝗼𝗴𝗼 Galaxy
│° 🔰 .𝗹𝗼𝗴𝗼 Cards
│° 🔰 .𝗹𝗼𝗴𝗼 BloodGlass
│° 🔰 .𝗹𝗼𝗴𝗼 HalloweenFire
│° 🔰 .𝗹𝗼𝗴𝗼 Gold
│° 🔰 .𝗹𝗼𝗴𝗼 Wolf
│° 🔰 .𝗹𝗼𝗴𝗼 WolfLogo
│° 🔰 .𝗹𝗼𝗴𝗼 Ninja
│° 🔰 .𝗹𝗼𝗴𝗼 Joker
│° 🔰 .𝗹𝗼𝗴𝗼 Wicker
│° 🔰 .𝗹𝗼𝗴𝗼 Natural
│° 🔰 .𝗹𝗼𝗴𝗼 Firework
│° 🔰 .𝗹𝗼𝗴𝗼 Skeleton
│° 🔰 .𝗹𝗼𝗴𝗼 RedBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 PurpleBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 PinkBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 GreenBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 CyanBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 BlueBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 GoldBalloon
│° 🔰 .𝗹𝗼𝗴𝗼 Steel
│° 🔰 .𝗹𝗼𝗴𝗼 UltraGloss
│° 🔰 .𝗹𝗼𝗴𝗼 Denim
│° 🔰 .𝗹𝗼𝗴𝗼 Decorate
│° 🔰 .𝗹𝗼𝗴𝗼 DecoratePurple
│° 🔰 .𝗹𝗼𝗴𝗼 Peridot
│° 🔰 .𝗹𝗼𝗴𝗼 Rock
│° 🔰 .𝗹𝗼𝗴𝗼 Lava
│° 🔰 .𝗹𝗼𝗴𝗼 Yellow
│° 🔰 .𝗹𝗼𝗴𝗼 Purple-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Orange-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Green-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Cyan-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Blue-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Red-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Glass
│° 🔰 .𝗹𝗼𝗴𝗼 CapitanAmerica
│° 🔰 .𝗹𝗼𝗴𝗼 Robot
│° 🔰 .𝗹𝗼𝗴𝗼 Rainbow
│° 🔰 .𝗹𝗼𝗴𝗼 Toxic
│° 🔰 .𝗹𝗼𝗴𝗼 Pink
│° 🔰 .𝗹𝗼𝗴𝗼 BlueHare
│° 🔰 .𝗹𝗼𝗴𝗼 Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Jewe
│° 🔰 .𝗹𝗼𝗴𝗼 GoldJewelry
│° 🔰 .𝗹𝗼𝗴𝗼 RedJewelry
│° 🔰 .𝗹𝗼𝗴𝗼 CyanJewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Purple-Glass
│° 🔰 .𝗹𝗼𝗴𝗼 Decorative
│° 🔰 .𝗹𝗼𝗴𝗼 Chocolate
│° 🔰 .𝗹𝗼𝗴𝗼 Strawberry
│° 🔰 .𝗹𝗼𝗴𝗼 Koi
│° 🔰 .𝗹𝗼𝗴𝗼 Bread
│° 🔰 .𝗹𝗼𝗴𝗼 Matrix
│° 🔰 .𝗹𝗼𝗴𝗼 Neon-Light
│° 🔰 .𝗹𝗼𝗴𝗼 Thunder
│° 🔰 .𝗹𝗼𝗴𝗼 3D-Box
│° 🔰 .𝗹𝗼𝗴𝗼 Neon
│° 🔰 .𝗹𝗼𝗴𝗼 Road-Warning
│° 🔰 .𝗹𝗼𝗴𝗼 3D-Steel
│° 🔰 .𝗹𝗼𝗴𝗼 Bokeh
│° 🔰 .𝗹𝗼𝗴𝗼 Green-Neon
│° 🔰 .𝗹𝗼𝗴𝗼 FreeGlow
│° 🔰 .𝗹𝗼𝗴𝗼 Dropwater
│° 🔰 .𝗹𝗼𝗴𝗼 BreakWall
│° 🔰 .𝗹𝗼𝗴𝗼 Honey
│° 🔰 .𝗹𝗼𝗴𝗼 Plastic
│° 🔰 .𝗹𝗼𝗴𝗼 Horror-Gift
│° 🔰 .𝗹𝗼𝗴𝗼 Marble-
│° 🔰 .𝗹𝗼𝗴𝗼 Marble
│° 🔰 .𝗹𝗼𝗴𝗼 Ice-Cold
│° 🔰 .𝗹𝗼𝗴𝗼 Fruit-Juice
│° 🔰 .𝗹𝗼𝗴𝗼 Rusty-Metal
│° 🔰 .𝗹𝗼𝗴𝗼 Abstra-Gold
│° 🔰 .𝗹𝗼𝗴𝗼 Biscuit
│° 🔰 .𝗹𝗼𝗴𝗼 Bagel
│° 🔰 .𝗹𝗼𝗴𝗼 Wood
│° 🔰 .𝗹𝗼𝗴𝗼 Sciff
│° 🔰 .𝗹𝗼𝗴𝗼 Metal-Rainbow
│° 🔰 .𝗹𝗼𝗴𝗼 Purple-Gem
│° 🔰 .𝗹𝗼𝗴𝗼 ShinyMetal
│° 🔰 .𝗹𝗼𝗴𝗼 Yellow-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Silver-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Red-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Purple-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Orange-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Green-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Cyan-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Blue-Jewelry
│° 🔰 .𝗹𝗼𝗴𝗼 Hot-Metal
│° 🔰 .𝗹𝗼𝗴𝗼 Hexa-Golden
│° 🔰 .𝗹𝗼𝗴𝗼 Blue-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Purple-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Pink-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Green-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Silver-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Gold-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Bronze-Glitter
│° 🔰 .𝗹𝗼𝗴𝗼 Eroded-Metal
│° 🔰 .𝗹𝗼𝗴𝗼 Carbon
│° 🔰 .𝗹𝗼𝗴𝗼 PinkCandy
│° 🔰 .𝗹𝗼𝗴𝗼 Blue-Metal
│° 🔰 .𝗹𝗼𝗴𝗼 Blue-Gem
│° 🔰 .𝗹𝗼𝗴𝗼 Black-Metal
│° 🔰 .𝗹𝗼𝗴𝗼 3dMetal
│° 🔰 .𝗹𝗼𝗴𝗼 3dChrome
╰━━━━━━⋆★⋆━━━━━━⬣


 `.trim()
    
const vi = ['https://telegra.ph/file/d5570b8dfde7d7fa5df5b.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menulogos|menulogo)$/i
handler.register = false
handler.group = true
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
