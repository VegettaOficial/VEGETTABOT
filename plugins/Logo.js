import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].antiTraba && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 .on modohorny*';
  switch (command) {
		  
    case 'tiktokhot':
      const url = await goku[Math.floor(Math.random() * tiktokhot.length)];
      conn.sendMessage(m.chat, {image: {url: url}, caption: `» 𝙆𝘼𝙆𝘼𝙍𝙊𝙏𝙊 ☢️`}, {quoted: m});
      break;
  /*  case 'dragonbz':
      const url2 = await dragonbz[Math.floor(Math.random() * dragonbz.length)];
      conn.sendMessage(m.chat, {image: {url: url2}, caption: `» 𝘿𝙍𝘼𝙂𝙊́𝙉 𝘽𝘼𝙇𝙇 𝙕 ☢️`}, {quoted: m});
      break;
    case 'vegueta':
      const url3 = await vegueta[Math.floor(Math.random() * vegueta.length)];
      conn.sendMessage(m.chat, {image: {url: url3}, caption: `» 𝙑𝙀𝙂𝙐𝙀𝙏𝘼 ☢️`}, {quoted: m});
      break;*/
    
  }
};
handler.command = /^(tiktokhot)$/i;
export default handler;

global.tiktokhot = [
 'https://telegra.ph/file/3fae29ee8a4cc3cca0b39.jpg',
	'https://telegra.ph/file/4adcd128f450aa182582b.jpg',

];

/*global.dragonbz = [
'https://telegra.ph/file/12a77f4664169a751a26b.jpg',
'https://telegra.ph/file/180e881c896397a11227f.jpg',
'https://telegra.ph/file/c02dcbadf616b144c6e01.jpg',
'https://telegra.ph/file/57d2fe758fa348d17092a.jpg',
'https://telegra.ph/file/55e31eb9294593b1248d0.jpg',
'https://telegra.ph/file/4e0961406fabf03e70d2e.jpg',
'https://telegra.ph/file/87346ef7e033261e7d1ba.jpg',
'https://telegra.ph/file/18e9af19aa89b6264d6bf.jpg',
'https://telegra.ph/file/1666cbdf565e8c278453e.jpg',
'https://telegra.ph/file/8563764f80f27c6c1c7a9.jpg',
'https://telegra.ph/file/f65bb7d8718e01574d994.jpg',
'https://telegra.ph/file/f51afde30a830737bab30.jpg',
'https://telegra.ph/file/ecbe3169cf4e845ba0edc.jpg',
'https://telegra.ph/file/d509747b11af296779e84.jpg',
'https://telegra.ph/file/f0974e1c3fecc7990989b.jpg',
'https://telegra.ph/file/e9fe10109c2ff9052f51d.jpg',
'https://telegra.ph/file/0648b346b964d02f34f52.jpg',
'https://telegra.ph/file/fcb84912dedaded6919f5.jpg',
'https://telegra.ph/file/091b8b6a32a042c1a4ed7.jpg',	
'https://telegra.ph/file/b3ca575f45d175bab2925.jpg',
'https://telegra.ph/file/ed56620ed1753821c4eb8.jpg',
'https://telegra.ph/file/cb0bc6d16d12f213001fc.jpg',
'https://telegra.ph/file/b2b0725c5bc167c1797ae.jpg',
'https://telegra.ph/file/cba2e319ca200b876941c.jpg',
'https://telegra.ph/file/cba2e319ca200b876941c.jpg',
'https://telegra.ph/file/ef70d18c73ca0417d174f.jpg',
'https://telegra.ph/file/ef14c47a0a10b18dfdb63.jpg',
'https://telegra.ph/file/707e42d51021c8ed48c6d.jpg',	
'https://telegra.ph/file/9816e9e6747ea50152521.jpg',
'https://telegra.ph/file/43cd30f1b098a09e97d7d.jpg',
'https://telegra.ph/file/43cd30f1b098a09e97d7d.jpg',
'https://telegra.ph/file/f0245afdb4e394224df3a.jpg',
'https://telegra.ph/file/65cb2b1e5ee5e10b3aad4.jpg',
'https://telegra.ph/file/936f1f3218b730c21824f.jpg',
'https://telegra.ph/file/2ac2b35c7fec5382d8e8a.jpg',
'https://telegra.ph/file/e09099f244f4e85526c1b.jpg',
'https://telegra.ph/file/4e022f7ba1331ddf72ae0.jpg',
'https://telegra.ph/file/60af8890f811ed67c77c1.jpg',
'https://telegra.ph/file/3023f3b2c4a41f8f4d0ff.jpg',
'https://telegra.ph/file/6d989b14c1f958a75a6b6.jpg',
'https://telegra.ph/file/d853d1bd9828feb11bb95.jpg',
'https://telegra.ph/file/5540ef1f4f8814270829f.jpg',
'https://telegra.ph/file/5540ef1f4f8814270829f.jpg',
'https://telegra.ph/file/24e2837c55c0cafb1058a.jpg',
'https://telegra.ph/file/f4a9aeab5367a75fae060.jpg',
'https://telegra.ph/file/3a99168df9897218dea8e.jpg',
'https://telegra.ph/file/ac406425eb258a544ef33.jpg',
'https://telegra.ph/file/bdafea34070578ab78f99.jpg',
'https://telegra.ph/file/f3066ea047ea65481d85c.jpg',		
];


/*global.vegueta = [
  
'https://telegra.ph/file/492f9720490dfef4336f8.jpg',
'https://telegra.ph/file/5c748011ac86ad9fcb213.jpg',
'https://telegra.ph/file/79d62ab1e23b5006ccde0.jpg',
'https://telegra.ph/file/a2d902be3dc5a3aad71a2.jpg',
'https://telegra.ph/file/b676e7f70214d33aaf796.jpg',
'https://telegra.ph/file/24b3bb64932fa1eb94e33.jpg',
'https://telegra.ph/file/a3e4dda809c4a12faf6ba.jpg',
'https://telegra.ph/file/80a7224b06d4a9fcc220a.jpg',
'https://telegra.ph/file/219ff9f91abfc80937590.jpg',
'https://telegra.ph/file/fb9511b5d62bef86513b9.jpg',
'https://telegra.ph/file/5c918b38ea661f4a490f5.jpg',
'https://telegra.ph/file/ae76230f08ddb1e9f4b5f.jpg',
'https://telegra.ph/file/e10069f5c98608201a4da.jpg',
'https://telegra.ph/file/c775a4c52b1829f61c0ae.jpg',
'https://telegra.ph/file/440f2d835c70cc3cc353a.jpg',
'https://telegra.ph/file/33e1de5b82d6fb0b85dd7.jpg',
'https://telegra.ph/file/eb413dd9501113930c479.jpg',
'https://telegra.ph/file/4fddcf4b44b3ac8a83c68.jpg',	
'https://telegra.ph/file/422a2b7906859b82c8e45.jpg',
'https://telegra.ph/file/08c0161ff9b5566c3cd65.jpg',
'https://telegra.ph/file/fe4a3ffc5f9193d4ea1ca.jpg',
'https://telegra.ph/file/1c381fa621a5dce24cefa.jpg',
'https://telegra.ph/file/de409d1f9915213b720a6.jpg',
'https://telegra.ph/file/c3f5d8db1e7ac6bd42307.jpg',	
'https://telegra.ph/file/be0fc85df017964683882.jpg',
'https://telegra.ph/file/82b9c881fa6c028b2b46e.jpg',
'https://telegra.ph/file/a9925431bc4c0478cefa7.jpg',
'https://telegra.ph/file/1861dd02f34bece7ca5bd.jpg',
'https://telegra.ph/file/7c36a29295213cd9fb090.jpg',	
'https://telegra.ph/file/e2033d7b226dd9d9125df.jpg',
'https://telegra.ph/file/0a0662ac7f53fe8d9afd4.jpg',
'https://telegra.ph/file/5e15a24a18773649dba66.jpg',
'https://telegra.ph/file/66bf0ed4877f3bb020c8b.jpg',
'https://telegra.ph/file/1e9ac6af424b703113174.jpg',	
'https://telegra.ph/file/f57ec36082a2b191f61eb.jpg',
];
