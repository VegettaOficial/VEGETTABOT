/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoAG']()}𝙐𝙏𝙄𝙇𝙄𝙕𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙄𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 𝙀𝙉 𝙀𝙇 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝘿𝙀𝙇 𝘽𝙊𝙏` },
      { quoted: m }
    );
  }
 /* await conn.sendMessage(
    m.chat,
    { text: `${lenguajeGB['smsAvisoAG']()}𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝘿𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 : ${filesDeleted} 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉, 𝙀𝙓𝘾𝙀𝙋𝙏𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 *(creds.json)*` },
    { quoted: m }
  );*/
  const sessionPath = './GataBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()} 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 (EliteBotSession) 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀 𝙊 𝙀𝙎𝙏𝘼 𝙑𝘼𝘾𝙄́𝘼.*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙉𝙄𝙉𝙂𝙐𝙉 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙋𝘼𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙀𝙉 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 *(EliteBotSession)*` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `❱❱ 𝙀𝙉𝙏𝙀𝙉𝘿𝙄𝘿𝙊 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 ❰❰
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
 » 𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝙊𝙉 *${filesDeleted}* 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙀𝙇𝙄𝙏𝙀 𝘽𝙊𝙏 𝙎𝙀𝙎𝙎𝙄𝙊𝙉.` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙇𝙀𝙀𝙍 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙊 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉:', err);
    await conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoFG']()}𝙊𝘾𝙐𝙍𝙍𝙄𝙊́ 𝙐𝙉 𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉` },
      { quoted: m }
    );
  }


  await conn.sendMessage(m.chat,{text: `» 𝙎𝙀𝙍𝙑𝙄𝘿𝙊𝙍 𝙇𝙄𝙈𝙋𝙄𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 🌎`}, { quoted: m })}

handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|clearallsession|limpieza)$/i;
handler.rowner = true
export default handler;
