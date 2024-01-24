import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw m.reply(`*Formato incorrecto*\n*Ejemplo:*\n\n${usedPrefix + command} Consolador Con forma del temach`);
    let res = await mercado(text);
    let cap = `「🛍️ 𝗠𝗘𝗥𝗖𝗔𝗗𝗢 𝗟𝗜𝗕𝗥𝗘 🛍️」\n\n`;
    const limit = 15;
    for (let i = 0; i < limit && i < res.length; i++) {
      let link = res[i].link.length > 30 ? res[i].link.substring(0, 30) + '...' : res[i].link;
      cap += `📂 𝗡𝗼𝗺𝗯𝗿𝗲: ${res[i].title}\n📂 𝗘𝘀𝘁𝗮𝗱𝗼: ${res[i].state}\n📂 𝗟𝗶𝗻𝗸: ${res[i].link}\n`;
      cap += '\n' + '••••••••••••••••••••••••' + '\n';
    }
    m.reply(cap)
  } catch (error) {
   
  }
};
handler.command = ['mercadolibre'];
export default handler;

async function mercado(query) {
  try {
    const url = `https://listado.mercadolibre.com.pe/${query}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const results = $('.ui-search-layout__item').map((i, element) => {
      const title = $(element).find('.ui-search-item__title').text();
      const state = $(element).find('.ui-search-item__group__element').last().text().trim();
      const link = $(element).find('a').attr('href');
      return {
        title,
        state,
        link
      };
    }).get();
    
    return results;
  } catch (error) {
   
  }
}
