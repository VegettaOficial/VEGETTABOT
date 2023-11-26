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
     const text2 = `ㅤㅤㅤㅤㅤ💌 *⌈* 𝑪𝑶𝑵𝑭𝑬𝑺𝑰𝑶́𝑵 𝑷𝑬𝑹𝑽𝑬𝑹𝑻𝑰𝑫𝑨   *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

 𝑴𝒆 𝒈𝒖𝒔𝒕𝒂 𝒎𝒊 𝒄𝒂𝒎𝒂, 𝒑𝒆𝒓𝒐 𝒂𝒉𝒐𝒓𝒂 𝒎𝒊𝒔𝒎𝒐 𝒔𝒐𝒍𝒐 𝒒𝒖𝒊𝒆𝒓𝒐 𝒆𝒔𝒕𝒂𝒓 𝒆𝒏 𝒍𝒂 𝒕𝒖𝒚𝒂, 𝒒𝒖𝒆 𝒎𝒆 𝒉𝒂𝒈𝒂𝒔 𝒕𝒖𝒚𝒂 , 𝒎𝒆 𝒃𝒆𝒔𝒆𝒔 𝒆𝒍 𝒄𝒖𝒆𝒍𝒍𝒐 𝒚 𝒃𝒓𝒊𝒏𝒄𝒂𝒓 𝒆𝒏𝒄𝒊𝒎𝒂 𝒅𝒆 𝒕𝒊 𝒕𝒐𝒅𝒂 𝒍𝒂 𝒏𝒐𝒄𝒉𝒆 .`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(pervertida)$/i; 
 export default handler;
