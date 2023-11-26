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
     const text2 = `💌 *⌈*  𝑨𝑵𝑰𝑴𝑶 *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

 𝑵𝒂𝒅𝒊𝒆, 𝒓𝒆𝒄𝒖𝒆́𝒓𝒅𝒂𝒍𝒐 𝒃𝒊𝒆𝒏, 𝒏𝒂𝒅𝒊𝒆 𝒆𝒔 𝒊𝒏𝒅𝒊𝒔𝒑𝒆𝒏𝒔𝒂𝒃𝒍𝒆 𝒆𝒏 𝒏𝒖𝒆𝒔𝒕𝒓𝒂𝒔 𝒗𝒊𝒅𝒂𝒔. 𝑷𝒓𝒐𝒃𝒂𝒃𝒍𝒆𝒎𝒆𝒏𝒕𝒆 𝒆𝒏 𝒆𝒔𝒕𝒐𝒔 𝒎𝒐𝒎𝒆𝒏𝒕𝒐𝒔 𝒑𝒊𝒆𝒏𝒔𝒆𝒔 𝒒𝒖𝒆 𝒏𝒂𝒅𝒂 𝒗𝒐𝒍𝒗𝒆𝒓𝒂́ 𝒂 𝒔𝒆𝒓 𝒍𝒐 𝒎𝒊𝒔𝒎𝒐 𝒆𝒏 𝒕𝒖 𝒗𝒊𝒅𝒂. 𝑪𝒓𝒆́𝒆𝒎𝒆 𝒒𝒖𝒆, 𝒄𝒖𝒂𝒏𝒅𝒐 𝒎𝒆𝒏𝒐𝒔 𝒍𝒐 𝒆𝒔𝒑𝒆𝒓𝒆𝒔, 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒂́𝒔 𝒂 𝒂𝒍𝒈𝒖𝒊𝒆𝒏 𝒎𝒖𝒄𝒉𝒐 𝒎𝒆𝒋𝒐𝒓 𝒒𝒖𝒆 𝒆́𝒍/𝒆𝒍𝒍𝒂.`.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(animo|ánimo)$/i; 
 export default handler;
