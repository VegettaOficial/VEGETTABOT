import fetch from 'node-fetch'; 
 import axios from 'axios'; 
 import instagramGetUrl from 'instagram-url-direct'; 
 import {instagram} from '@xct007/frieren-scraper'; 
 import {instagramdl} from '@bochilteam/scraper'; 
 const handler = async (m, {conn, args, command, usedPrefix}) => { 
   if (!args[0]) throw `⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝙇𝙄𝙉𝙆 𝘿𝙀 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈.\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`; 
   m.reply(`⭐ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙏𝙀 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝙋𝙐𝙀𝘿𝙀 𝘿𝙐𝙍𝘼𝙍 𝙀𝙉𝙏𝙍𝙀 2 𝙈𝙄𝙉 𝘼 10 𝙈𝙄𝙉 𝘿𝙀𝙋𝙀𝙉𝘿𝙄𝙀𝙉𝘿𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍.`); 
   try { 
     const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`; 
     const responsel = await axios.get(apiUrll); 
     const resultl = responsel.data; 
     for (const item of resultl.message) { 
       const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text(); 
       const tXXxt = `🔗 *Url:* ${shortUrRRl}`.trim(); 
       conn.sendFile(m.chat, item._url, null, tXXxt, m); 
       await new Promise((resolve) => setTimeout(resolve, 10000)); 
     } 
   } catch {     
   try { 
     const datTa = await instagram.v1(args[0]); 
     for (const urRRl of datTa) { 
       const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text(); 
       const tXXxt = `🔗 *Url:* ${shortUrRRl}`.trim(); 
       conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m); 
       await new Promise((resolve) => setTimeout(resolve, 10000)); 
     } 
   } catch { 
       try { 
         const resultss = await instagramGetUrl(args[0]).url_list[0]; 
         const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text(); 
         const txt2 = `🔗 *Url:* ${shortUrl2}`.trim(); 
         await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m); 
       } catch { 
         try { 
           const resultssss = await instagramdl(args[0]); 
           const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text(); 
           const txt4 = `🔗 *Url:* ${shortUrl3}`.trim(); 
           for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m); 
         } catch { 
           try { 
             const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`); 
             const json = await human.json(); 
             const videoig = json.result; 
             const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text(); 
             const txt1 = `🔗 *Url:* ${shortUrl1}`.trim(); 
             await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m); 
           } catch { 
             throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`; 
           } 
         } 
       } 
     } 
   } 
 }; 
 handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i; 
 export default handler;
