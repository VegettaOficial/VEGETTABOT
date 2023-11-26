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
     const text2 = `💌 *⌈*  𝑪𝑨𝑹𝑻𝑨 𝑫𝑬 𝑨𝑴𝑶𝑹 *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

 𝑽𝒖𝒆𝒍𝒗𝒐 𝒂 𝒕𝒊 𝒄𝒂𝒅𝒂 𝒅𝒊́𝒂, 𝒄𝒖𝒓𝒂𝒔 𝒎𝒊𝒔 𝒉𝒆𝒓𝒊𝒅𝒂𝒔 𝒄𝒐𝒏 𝒄𝒂𝒅𝒂 𝒃𝒆𝒔𝒐 𝒒𝒖𝒆 𝒎𝒆 𝒅𝒂𝒔, 𝒏𝒖𝒆𝒔𝒕𝒓𝒐 𝒂𝒎𝒐𝒓 𝒆𝒔 𝒖𝒏 𝒔𝒐𝒍 𝒆𝒕𝒆𝒓𝒏𝒐 𝒒𝒖𝒆 𝒏𝒐𝒔 𝒍𝒍𝒆𝒗𝒂𝒓𝒂 𝒂 𝒍𝒂 𝒈𝒍𝒐𝒓𝒊𝒂 𝒆𝒕𝒆𝒓𝒏𝒂. 𝑬𝒓𝒆𝒔 𝒕𝒐𝒅𝒐, 𝒆𝒓𝒆𝒔 𝒍𝒂 𝒇𝒊𝒆𝒔𝒕𝒂 𝒅𝒆 𝒎𝒊 𝒄𝒐𝒓𝒂𝒛𝒐́𝒏, 𝒍𝒂 𝒍𝒖𝒛 𝒅𝒆 𝒕𝒖𝒔 𝒐𝒋𝒐𝒔 𝒑𝒐𝒓 𝒔𝒊𝒆𝒎𝒑𝒓𝒆 𝒊𝒍𝒖𝒎𝒊𝒏𝒂𝒓𝒂 𝒎𝒊 𝒄𝒂𝒎𝒊𝒏𝒐.`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(carta3)$/i; 
 export default handler;
