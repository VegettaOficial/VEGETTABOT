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
     const text2 = `ㅤㅤㅤㅤㅤ💌 *⌈* 𝑪𝑶𝑵𝑭𝑬𝑺𝑰𝑶́𝑵 𝑷𝑬𝑹𝑽𝑬𝑹𝑻𝑰𝑫𝑨 *⌋* 💌
    
𝑫𝑬: @${m.sender.split("@")[0]} 
𝑷𝑨𝑹𝑨: ${text}

𝑷𝒊𝒆𝒏𝒔𝒐 𝒄𝒐𝒏𝒔𝒕𝒂𝒏𝒕𝒆𝒎𝒆𝒏𝒕𝒆 𝒆𝒏 𝒕𝒊. 𝑷𝒐𝒓 𝒍𝒂 𝒏𝒐𝒄𝒉𝒆, 𝒂𝒍 𝒂𝒄𝒐𝒔𝒕𝒂𝒓𝒎𝒆, 𝒆𝒔 𝒖𝒏𝒂 𝒗𝒆𝒓𝒅𝒂𝒅𝒆𝒓𝒂 𝒕𝒐𝒓𝒕𝒖𝒓𝒂. 𝑵𝒐 𝒗𝒐𝒚 𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓𝒕𝒆 𝒆𝒏 𝒆𝒔𝒕𝒂 𝒉𝒐𝒋𝒂 𝒍𝒐 𝒒𝒖𝒆 𝒍𝒍𝒆𝒏𝒂 𝒎𝒊 𝒑𝒆𝒏𝒔𝒂𝒎𝒊𝒆𝒏𝒕𝒐, 𝒚 𝒅𝒆𝒍 𝒅𝒆𝒔𝒆𝒐 𝒅𝒆 𝒉𝒂𝒄𝒆𝒓𝒕𝒆 𝒎𝒊́𝒂 𝒋𝒂𝒍𝒂𝒓 𝒕𝒖 𝒄𝒂𝒃𝒆𝒍𝒍𝒐 𝒚 𝒑𝒐𝒏𝒆𝒓𝒕𝒆 𝒆𝒏 𝒄𝒖𝒂𝒕𝒓𝒐 𝒚 𝒇𝒐𝒍𝒍𝒂𝒓𝒕𝒆 𝒕𝒐𝒅𝒂 𝒍𝒂 𝒎𝒂𝒅𝒓𝒖𝒈𝒂𝒅𝒂 𝒚 𝒓𝒆𝒈𝒂𝒓𝒕𝒆 𝒎𝒊 𝒍𝒆𝒄𝒉𝒆 𝒆𝒏 𝒕𝒖 𝒄𝒂𝒓𝒊𝒕𝒂 𝒃𝒆𝒃𝒆́ . `.trim()
 conn.sendMessage(m.chat, {text: text2, mentions: [_user, m.sender]}, {quoted: m})
const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio besos a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`); 
conn.sendFile(m.chat, stiker, null, {asSticker: true}); 
   } catch (e) { } 
 }; 
 handler.command = /^(pervertido)$/i; 
 export default handler;
