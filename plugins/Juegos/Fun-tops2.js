import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

  if (command == 'topm1014') {
let top = `*_TOP 10 MEJORES JUGADORES A M1014☠️_*
    
*_1.- ☠️ ${user(a)}_* ☠️
*_2.- ☠️ ${user(b)}_* ☠️
*_3.- ☠️ ${user(c)}_* ☠️
*_4.- ☠️ ${user(d)}_* ☠️
*_5.- ☠️ ${user(e)}_* ☠️
*_6.- ☠️ ${user(f)}_* ☠️
*_7.- ☠️ ${user(g)}_* ☠️
*_8.- ☠️ ${user(h)}_* ☠️
*_9.- ☠️ ${user(i)}_* ☠️
*_10.- ☠️ ${user(j)}_* ☠️`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topcompe') {
let top = `*_TOP 10 MEJORES JUGADORES DE COMPE🇧🇷_*
    
*_1.- 🇧🇷 ${user(a)}_* 🇧🇷
*_2.- 🇧🇷 ${user(b)}_* 🇧🇷
*_3.- 🇧🇷 ${user(c)}_* 🇧🇷
*_4.- 🇧🇷 ${user(d)}_* 🇧🇷
*_5.- 🇧🇷 ${user(e)}_* 🇧🇷
*_6.- 🇧🇷 ${user(f)}_* 🇧🇷
*_7.- 🇧🇷 ${user(g)}_* 🇧🇷
*_8.- 🇧🇷 ${user(h)}_* 🇧🇷
*_9.- 🇧🇷 ${user(i)}_* 🇧🇷
*_10.- 🇧🇷 ${user(j)}_* 🇧🇷`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'clasificatoria') {
let top = `¡𝑽𝑨𝑴𝑶𝑺 𝑨 𝑩𝑹 𝑪𝑳𝑨𝑺𝑰𝑭𝑰𝑪𝑨𝑻𝑶𝑹𝑰𝑨!⚔️

𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑒𝑛:
🥷🏻 ${user(a)}
🥷🏻 ${user(b)}
🥷🏻 ${user(c)}

¡𝑳𝑳𝑬𝑽𝑬𝑵 𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺 𝒀 𝑴𝑨𝑺𝑪𝑶𝑻𝑨, 𝑽𝑨𝑴𝑶𝑺 𝑨 𝑷𝑹𝑬𝑵𝑫𝑬𝑹 𝑭𝑶𝑭𝑶𝑮𝑶 𝑬𝑵 𝑩𝑹!`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'duelo') {
let top = `¡𝑽𝑨𝑴𝑶𝑺 𝑨 𝑫𝑬 𝑪𝑳𝑨𝑺𝑰𝑭𝑰𝑪𝑨𝑻𝑶𝑹𝑰𝑨 !🇧🇷

𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑒𝑛:
🥷🏻 ${user(a)}
🥷🏻 ${user(b)}
🥷🏻 ${user(c)}

¡𝑳𝑳𝑬𝑽𝑬𝑵 𝑯𝑨𝑩𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺 𝒀 𝑴𝑨𝑺𝑪𝑶𝑻𝑨, 𝑽𝑨𝑴𝑶𝑺 𝑨 𝑷𝑹𝑬𝑵𝑫𝑬𝑹 𝑭𝑶𝑭𝑶𝑮𝑶 𝑬𝑵 𝑫𝑬!`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'duo') {
let top = `¡𝑽𝑨𝑴𝑶𝑺 𝑼𝑵 𝑫𝑼𝑰𝑻𝑶!⚔️

𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑎:
❤️ ${user(a)}

¡𝑺𝑬𝑹𝑬 𝑻𝑼 𝑫𝑼́𝑶 𝑫𝑰𝑵𝑨́𝑴𝑰𝑪𝑶 𝑴𝑨𝑺 𝑶𝑻𝑨𝑲𝑼!`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'compe') {
let top = `¡𝑽𝑨𝑴𝑶𝑺 𝑨 𝑼𝑵 𝑪𝑶𝑴𝑷𝑬! 🇧🇷

𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑒𝑛:
🥷🏻 ${user(a)}
🥷🏻 ${user(b)}
🥷🏻 ${user(c)}
🥷🏻 ${user(d)}
🥷🏻 ${user(e)}
🥷🏻 ${user(f)}
🥷🏻 ${user(g)}
🥷🏻 ${user(h)}
🥷🏻 ${user(i)}
🥷🏻 ${user(j)}

𝑸𝑼𝑰𝑬𝑵 𝑵𝑶 𝑪𝑶𝑵𝑭𝑰𝑹𝑴𝑬 𝑫𝑬 𝑳𝑶𝑺 𝑴𝑬𝑵𝑪𝑰𝑶𝑵𝑨𝑫𝑶𝑺  𝑴𝑬𝑪𝑶 𝒀 𝑮𝑨𝒀.🏳️‍🌈`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topump') {
let top = `*_TOP 10 MEJORES JUGADORES  A UMP👹_*
    
*_1.- 👹 ${user(a)}_* 👹
*_2.- 👹 ${user(b)}_* 👹
*_3.- 👹 ${user(c)}_* 👹
*_4.- 👹 ${user(d)}_* 👹
*_5.- 👹 ${user(e)}_* 👹
*_6.- 👹 ${user(f)}_* 👹
*_7.- 👹 ${user(g)}_* 👹
*_8.- 👹 ${user(h)}_* 👹
*_9.- 👹 ${user(i)}_* 👹
*_10.- 👹 ${user(j)}_* 👹`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topfieles') {
let top = `*_TOP 10 FIELES DEL GRUPO👩🏻‍❤️‍👨🏻_*
    
*_1.- 👩🏻‍❤️‍👨🏻 ${user(a)}_* 👩🏻‍❤️‍👨🏻
*_2.- 👩🏻‍❤️‍👨🏻 ${user(b)}_* 👩🏻‍❤️‍👨🏻
*_3.- 👩🏻‍❤️‍👨🏻 ${user(c)}_* 👩🏻‍❤️‍👨🏻
*_4.- 👩🏻‍❤️‍👨🏻 ${user(d)}_* 👩🏻‍❤️‍👨🏻
*_5.- 👩🏻‍❤️‍👨🏻 ${user(e)}_* 👩🏻‍❤️‍👨🏻
*_6.- 👩🏻‍❤️‍👨🏻 ${user(f)}_* 👩🏻‍❤️‍👨🏻
*_7.- 👩🏻‍❤️‍👨🏻 ${user(g)}_* 👩🏻‍❤️‍👨🏻
*_8.- 👩🏻‍❤️‍👨🏻 ${user(h)}_* 👩🏻‍❤️‍👨🏻
*_9.- 👩🏻‍❤️‍👨🏻 ${user(i)}_* 👩🏻‍❤️‍👨🏻
*_10.- 👩🏻‍❤️‍👨🏻 ${user(j)}_* 👩🏻‍❤️‍👨🏻`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topmapa') {
let top = `*_TOP 10 MEJORES JUGADORES DE MAPA GRANDE💀_*
    
*_1.- 💀 ${user(a)}_* 💀
*_2.- 💀 ${user(b)}_* 💀
*_3.- 💀 ${user(c)}_* 💀
*_4.- 💀 ${user(d)}_* 💀
*_5.- 💀 ${user(e)}_* 💀
*_6.- 💀 ${user(f)}_* 💀
*_7.- 💀 ${user(g)}_* 💀
*_8.- 💀 ${user(h)}_* 💀
*_9.- 💀 ${user(i)}_* 💀
*_10.- 💀 ${user(j)}_* 💀`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topjugadores') {
let top = `*_TOP 10  MEJORES JUGADORES DEL CLAN/TEAM_*
    
*_1.- 🎮 ${user(a)}_* 🎮
*_2.- 🎮 ${user(b)}_* 🎮
*_3.- 🎮 ${user(c)}_* 🎮
*_4.- 🎮 ${user(d)}_* 🎮
*_5.- 🎮 ${user(e)}_* 🎮
*_6.- 🎮 ${user(f)}_* 🎮
*_7.- 🎮 ${user(g)}_* 🎮
*_8.- 🎮 ${user(h)}_* 🎮
*_9.- 🎮 ${user(i)}_* 🎮
*_10.- 🎮 ${user(j)}_* 🎮`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topinfieles') {
let top = `*_TOP 10 INFIELES DEL GRUPO_*
    
*_1.- 🫣 ${user(a)}_* 🫣
*_2.- 🫣 ${user(b)}_* 🫣
*_3.- 🫣 ${user(c)}_* 🫣
*_4.- 🫣 ${user(d)}_* 🫣
*_5.- 🫣 ${user(e)}_* 🫣
*_6.- 🫣 ${user(f)}_* 🫣
*_7.- 🫣 ${user(g)}_* 🫣
*_8.- 🫣 ${user(h)}_* 🫣
*_9.- 🫣 ${user(i)}_* 🫣
*_10.- 🫣 ${user(j)}_* 🫣`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topbinarios') {
let top = `*_TOP 10 BINARIOS DEL CLAN/TEAM🍌_*
    
*_1.- 🍌 ${user(a)}_* 🍌
*_2.- 🍌 ${user(b)}_* 🍌
*_3.- 🍌 ${user(c)}_* 🍌
*_4.- 🍌 ${user(d)}_* 🍌
*_5.- 🍌 ${user(e)}_* 🍌
*_6.- 🍌 ${user(f)}_* 🍌
*_7.- 🍌 ${user(g)}_* 🍌
*_8.- 🍌 ${user(h)}_* 🍌
*_9.- 🍌 ${user(i)}_* 🍌
*_10.- 🍌 ${user(j)}_* 🍌`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topalcoholicos') {
let top = `*_TOP 10 ALCOHÓLIC@S DEL GRUPO🍺_*
    
*_1.- 🍻 ${user(a)}_* 🍺
*_2.- 🍻 ${user(b)}_* 🍺
*_3.- 🍻 ${user(c)}_* 🍺
*_4.- 🍻 ${user(d)}_* 🍺
*_5.- 🍻 ${user(e)}_* 🍺
*_6.- 🍻 ${user(f)}_* 🍺
*_7.- 🍻 ${user(g)}_* 🍺
*_8.- 🍻 ${user(h)}_* 🍺
*_9.- 🍻 ${user(i)}_* 🍺
*_10.- 🍻 ${user(j)}_* 🍺`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topsidosos') {
let top = `*_TOP 10 SIDOS@S DEL GRUPO🦠_*
    
*_1.- 🦠 ${user(a)}_* 🦠
*_2.- 🦠 ${user(b)}_* 🦠
*_3.- 🦠 ${user(c)}_* 🦠
*_4.- 🦠 ${user(d)}_* 🦠
*_5.- 🦠 ${user(e)}_* 🦠
*_6.- 🦠 ${user(f)}_* 🦠
*_7.- 🦠 ${user(g)}_* 🦠
*_8.- 🦠 ${user(h)}_* 🦠
*_9.- 🦠 ${user(i)}_* 🦠
*_10.- 🦠 ${user(j)}_* 🦠`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topcachudos') {
let top = `*_TOP 10 CACHUD@S DEL GRUPO🐂_*
    
*_1.- 🐂 ${user(a)}_* 🐂
*_2.- 🐂 ${user(b)}_* 🐂
*_3.- 🐂 ${user(c)}_* 🐂
*_4.- 🐂 ${user(d)}_* 🐂
*_5.- 🐂 ${user(e)}_* 🐂
*_6.- 🐂 ${user(f)}_* 🐂
*_7.- 🐂 ${user(g)}_* 🐂
*_8.- 🐂 ${user(h)}_* 🐂
*_9.- 🐂 ${user(i)}_* 🐂
*_10.- 🐂 ${user(j)}_* 🐂

*_EL PRIMERO  EL MAS CACHUD@_*🤪`
m.reply(top, null, { mentions: conn.parseMention(top) })}

   if (command == 'topchichonas') {
let top = `*_😈TOP 10 CHICHONAS DEL GRUPO😈_*
    
*_1.- 👿 ${user(a)}_* 😈
*_2.- 👿 ${user(b)}_* 😈
*_3.- 👿 ${user(c)}_* 😈
*_4.- 👿 ${user(d)}_* 😈
*_5.- 👿 ${user(e)}_* 😈
*_6.- 👿 ${user(f)}_* 😈
*_7.- 👿 ${user(g)}_* 😈
*_8.- 👿 ${user(h)}_* 😈
*_9.- 👿 ${user(i)}_* 😈
*_10.- 😈 ${user(j)}_* 😈

*_LA 5 ESTA COGIBLE_*🤫`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topculonas') {
let top = `*_TOP 10 CULONAS DEL GRUPO🍑_*
    
*_1.- 🍑 ${user(a)}_* 🍑
*_2.- 🍑 ${user(b)}_* 🍑
*_3.- 🍑 ${user(c)}_* 🍑
*_4.- 🍑 ${user(d)}_* 🍑
*_5.- 🍑 ${user(e)}_* 🍑
*_6.- 🍑 ${user(f)}_* 🍑
*_7.- 🍑${user(g)}_* 🍑
*_8.- 🍑 ${user(h)}_* 🍑
*_9.- 🍑 ${user(i)}_* 🍑
*_10.- 🍑${user(j)}_* 🍑

*_LA PRIMERA ESTA COGIBLE_*🥵`
m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'topfeos') {
let top = `*_TOP FE@S DEL GRUPO🤢_*
    
*_1.- 🤢 ${user(a)}_* 🤮
*_2.- 🤢 ${user(b)}_* 🤮
*_3.- 🤢 ${user(c)}_* 🤮
*_4.- 🤢 ${user(d)}_* 🤮
*_5.- 🤢 ${user(e)}_* 🤮
*_6.- 🤢 ${user(f)}_* 🤮
*_7.- 🤢 ${user(g)}_* 🤮
*_8.- 🤢 ${user(h)}_* 🤮
*_9.- 🤢 ${user(i)}_* 🤮
*_10.- 🤢 ${user(j)}_* 🤮

*_EL 1 Y 10 LOS MAS FE@S_*🤢`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
}
handler.help = handler.command = ['topm1014','clasificatoria','duelo','duo','compe','topump','topcompe','topfieles','topmapa','topjugadores','topinfieles','topbinarios','topalcoholicos','topsidosos','topcachudos','topculonas','topchichonas','topfeos']
handler.tags = ['games']
handler.group = true
export default handler  
