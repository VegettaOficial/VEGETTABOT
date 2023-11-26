/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) throw `𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚 𝙪𝙨𝙤:\n.sorteo5 𝙩𝙚𝙭𝙩𝙤`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['ㅤ'])}`
let l = Math.floor(Math.random() * x.length);
let vn = ``
let top = `*${x}🎊━━━𝙎𝙊𝙍𝙏𝙀𝙊━━━🎊*

📩 𝙈𝙀𝙉𝙎𝘼𝙅𝙀: 
*${text} ${x}*
*_________________*
» 𝙄𝙉𝙏𝙀𝙂𝙍𝘼𝙉𝙏𝙀𝙎 𝘼𝙇 𝘼𝙕𝘼𝙍 𝙎𝙊𝙉: 
🥷🏻 *${user(a)}*
🥷🏻 *${user(b)}*
🥷🏻 *${user(c)}*
🥷🏻 *${user(d)}*
🥷🏻 *${user(e)}*
*_________________*
⇝𝙏𝙄𝙀𝙉𝙀𝙉 𝙋𝙇𝘼𝙕𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙍𝙈𝙀 𝙀𝙉 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙉 𝘾𝘼𝙎𝙊 𝘾𝙊𝙉𝙏𝙍𝘼𝙍𝙄𝙊́ 𝙀𝙎𝙏𝘼𝙉 𝙁𝙐𝙀𝙍𝘼 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊.
*_________________*
`
let txt = '';
let count = 0;
for (const c of top) {
    await new Promise(resolve => setTimeout(resolve, 15));
    txt += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
    await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} );
//m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendFile(m.chat, vn, '🏆ACERQUESE A RECLAMAR SU PREMIO🏅', null, m, true, {
type: 'audioMessage',
ptt: true })}
handler.help = handler.command = ['sorteo5']
handler.tags = ['fun']
handler.group = true
handler.limit = 0
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
