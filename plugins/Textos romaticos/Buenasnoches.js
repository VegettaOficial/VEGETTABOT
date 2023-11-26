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
     const text2 = `💌 *⌈* 𝑩𝑼𝑬𝑵𝑨𝑺 𝑵𝑶𝑪𝑯𝑬𝑺 *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

 𝑩𝒖𝒆𝒏𝒂𝒔 𝒏𝒐𝒄𝒉𝒆𝒔, 𝒄𝒂𝒓𝒊𝒏̃𝒐, 𝒆𝒔𝒑𝒆𝒓𝒐 𝒒𝒖𝒆 𝒕𝒖 𝒔𝒖𝒆𝒏̃𝒐 𝒔𝒆𝒂 𝒍𝒊𝒈𝒆𝒓𝒐, 𝒚 𝒒𝒖𝒆 𝒂𝒍 𝒅𝒆𝒔𝒑𝒆𝒓𝒕𝒂𝒓 𝒊𝒍𝒖𝒎𝒊𝒏𝒆𝒔 𝒆𝒍 𝒎𝒖𝒏𝒅𝒐 𝒄𝒐𝒏 𝒆𝒔𝒂 𝒔𝒐𝒏𝒓𝒊𝒔𝒂 𝒕𝒂𝒏 𝒉𝒆𝒓𝒎𝒐𝒔𝒂 𝒒𝒖𝒆 𝒕𝒊𝒆𝒏𝒆𝒔, 𝒕𝒆 𝒒𝒖𝒊𝒆𝒓𝒐.`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(buenasnoches)$/i; 
 export default handler;
