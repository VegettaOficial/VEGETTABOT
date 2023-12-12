


export default handler
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let _pp = './storage/menus/Menu1.jpg'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/novios.jpg')
    let { premium, level, diamond, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `┃ 𝙉𝙊𝙈𝘽𝙍𝙀 ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙉𝙐𝙈𝙀𝙍𝙊 ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙀𝙉𝙇𝘼𝘾𝙀 wa.me/${who.split`@`[0]}${registered ?'\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ 𝙀𝘿𝘼𝘿 ' + age + ' *años*' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 *${limit}* 𝙙𝙚 𝙐𝙨𝙤𝙨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊(𝘼) ${registered ? '✅': '❎'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ${prem ? '✅' : '❎'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀
┃ *${sn}*
`.trim()
  //m.react(🌟) 
 conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkon, false, { mentions: [who] })
}
handler.help = ['profile [@user]']
handler.tags = ['rg']
handler.command = /^perfil$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Dias ☀️*\n ', h, ' *Horas 🕐*\n ', m, ' *Minutos ⏰*\n ', s, ' *Segundos ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
