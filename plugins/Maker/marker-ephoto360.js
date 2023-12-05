import {Maker} from 'imagemaker.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  const response = args.join(' ').split('|');
  if (!args[0]) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾*';
  
  if (command == 'imgcorazon') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-heart-flashlight-188.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
    }
  }
  if (command == 'imgnavidad') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/christmas-effect-by-name-376.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
          }
  }
  if (command == 'imgcarta') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉.♥️', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/love-card-187.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
          }
  }
  if (command == 'imgpareja') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉.♥️', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/sunlight-shadow-text-204.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
    }
  }
  if (command == 'imgretro') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
     }
  }
  if (command == 'imgretro2') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
  await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);
    }
  }
if (command == 'imgdbz') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imgcalle') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imgvidrio') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/write-text-on-wet-glass-online-589.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-text-5-180.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti2') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-color-199.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti3') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-graffiti-3d-208.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti4') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/cover-graffiti-181.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti5') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-text-3-179.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti6') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-text-text-effect-online-178.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti7') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-color-199.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imggrafiti8') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/graffiti-lettering-online-64.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imglogoneon') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-blue-neon-logo-online-507.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imgcalle2') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-glowing-text-effects-online-706.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  if (command == 'imgpornhub') {
    try {
      await conn.reply(m.chat, '𝘿𝘼𝙈𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙀𝙎𝙏𝙊𝙔 𝙀𝙇𝘼𝘽𝙊𝙍𝘼𝙉𝘿𝙊 𝙏𝙐 𝙄𝙈𝘼́𝙂𝙀𝙉 .♥️', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
   await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m);

   }
  }
  
/* if (command == 'logoephoto360') {
if (!response[0].includes('ephoto360')) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 "𝙴𝙿𝙷𝙾𝚃𝙾𝟹𝟼0", 𝙼𝙰𝚂 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁*

*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂:*
◉ https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html | Shadow

◉ https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html | Shadow | dominando`
try {
await conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
let res2 = await new Maker().Ephoto360(response[0], [response[1]], [response[2]])
await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m)}}
if (command == 'logotextpro') {
try {
await conn.reply(m.chat, '*[❗] 𝙴𝙻𝙰𝙱𝙾𝚁𝙰𝙽𝙳𝙾 𝚂𝚄 𝙳𝙸𝚂𝙴𝙽̃𝙾, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*', m)
let res2 = await new Maker().TextPro(response[0], [response[1], response[2]])
await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*', m)}}*/
};
handler.command = /^imgcorazon|imgcalle2|imgpornhub|imggrafiti3|imggrafiti4|imggrafiti5|imggrafiti6|imggrafiti7|imggrafiti8|imglogoneon|imgcalle|imgvidrio|imggrafiti|imggrafiti2|imgnavidad|imgcarta|imgretro|imgdbz|imgretro2|imgpareja|logoephoto360|logotextpro/i;
export default handler;
