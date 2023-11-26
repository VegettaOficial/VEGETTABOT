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
     const text2 = `💌 *⌈* 𝑩𝑼𝑬𝑵𝑨𝑺 𝑻𝑨𝑹𝑫𝑬𝑺 *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

 𝑩𝒖𝒆𝒏𝒂𝒔 𝒕𝒂𝒓𝒅𝒆𝒔, 𝒕𝒆 𝒆𝒏𝒗𝒊́𝒐 𝒖𝒏 𝒇𝒖𝒆𝒓𝒕𝒆 𝒂𝒃𝒓𝒂𝒛𝒐 𝒚 𝒎𝒖𝒄𝒉𝒂 𝒆𝒏𝒆𝒓𝒈𝒊́𝒂 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒕𝒆𝒏𝒈𝒂𝒔 𝒖𝒏𝒂 𝒉𝒆𝒓𝒎𝒐𝒔𝒂 𝒕𝒂𝒓𝒅𝒆.`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(buenastardes)$/i; 
 export default handler;
