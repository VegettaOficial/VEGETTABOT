import fetch from 'node-fetch'; 
 import MessageType from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, text, groupMetadata}) => { 
   try {
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  let who; 

   if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender; 
   else who = m.sender; 
   let name = conn.getName(who);
     if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender); 
     if (!m.mentionedJid.length) m.mentionedJid.push(m.sender); 
     const res = await fetch('https://nekos.life/api/kiss'); 
     const json = await res.json(); 
     const {url} = json; 
     const text2 = 
`━━━━━━━♥️ *𝑨𝑴𝑶𝑹* ♥️━━━━━━━
❥ 𝑬𝒏 𝒆𝒍 𝒖𝒏𝒊𝒗𝒆𝒓𝒔𝒐 𝒅𝒆𝒍 𝒂𝒎𝒐𝒓, ${text} 𝒚 @${m.sender.split("@")[0]} 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏𝒂 𝒄𝒐𝒏𝒆𝒙𝒊𝒐́𝒏 𝒆𝒔𝒑𝒆𝒄𝒊𝒂𝒍, 𝒂𝒖𝒏𝒒𝒖𝒆 𝒆𝒏 𝒆𝒍 𝒂𝒎𝒐𝒓 𝒔𝒖 𝒑𝒐𝒓𝒄𝒆𝒏𝒕𝒂𝒋𝒆 𝒆𝒔 𝒅𝒆𝒍 ${(100).getRandom()}% 𝒅𝒆 𝒖𝒏 *100%*

❥ 𝑬𝒍 𝒕𝒊𝒆𝒎𝒑𝒐 𝒑𝒖𝒆𝒅𝒆 𝒓𝒆𝒗𝒆𝒍𝒂𝒓 𝒄𝒐𝒔𝒂𝒔 𝒔𝒐𝒓𝒑𝒓𝒆𝒏𝒅𝒆𝒏𝒕𝒆𝒔.
¡𝑺𝒊𝒈𝒂𝒎𝒐𝒔 𝒆𝒙𝒑𝒍𝒐𝒓𝒂𝒏𝒅𝒐 𝒋𝒖𝒏𝒕𝒐𝒔!
━━━━━━━♥️ *𝑨𝑴𝑶𝑹* ♥️━━━━━━━`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(amor)$/i; 
 export default handler;
