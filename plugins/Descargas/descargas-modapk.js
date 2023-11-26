import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] Ingrese el nombre de la APK que quiera buscar.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `🔰 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝘼𝙋𝙏𝙊𝙄𝘿𝙀 🔰\n\n🇨🇦 𝙉𝙊𝙈𝘽𝙍𝙀: ${data5.name}\n📦 𝙁𝙐𝙀𝙉𝙏𝙀: ${data5.package}\n🕒 𝙐́𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘾𝙄𝙊́𝙉: ${data5.lastup}\n🇦🇶 𝙏𝘼𝙈𝘼𝙉̃𝙊: ${data5.size}\n\n𝙀𝙎𝙋𝙀𝙍𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙏𝙐 𝘼𝙋𝙆.🎁`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] El archivo es demasiado pesado por lo que no se enviará.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
