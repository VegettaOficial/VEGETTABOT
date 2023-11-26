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
`𝒀𝑶 @${m.sender.split("@")[0]} 𝑻𝑬 𝑬𝑺𝑻𝑶𝒀 𝑫𝑬𝑺𝑨𝑭𝑰𝑨𝑵𝑫𝑶 𝑨 𝑷𝑽𝑷
𝑨 𝑺𝑴𝑮 ${text} 👺
¿𝑪𝑹𝑬𝑬𝑺 𝑷𝑶𝑫𝑬𝑹 𝑺𝑨𝑪𝑨𝑹𝑴𝑬 +4 𝑹𝑶𝑵𝑫𝑨𝑺?😂

¡𝑵𝑶 𝑪𝑹𝑬𝑶́, 𝑬𝑹𝑬𝑺 𝑴𝑼𝒀 𝑩𝑰𝑵𝑨𝑹𝑰𝑶!`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(pvpsmg)$/i; 
 export default handler;
