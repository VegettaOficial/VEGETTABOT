let handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = (await conn.profilePictureUrl(m.chat, "image").catch((_) => null)) || "./src/novios.jpg";
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`).join("\n");
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === "superadmin")?.id || m.chat.split`-`[0] + "@s.whatsapp.net";
  let pesan = args.join` `;
  let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let text = `*━「* 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 *」━*

${oi}

*𝙰𝙳𝙼𝙸𝙽𝚂:*
${listAdmin}

*[ ⚠ ️] 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙲𝚄𝙰𝙽𝙳𝙾 𝚂𝙴 𝚃𝚁𝙰𝚃𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙴𝙼𝙴𝚁𝙶𝙴𝙽𝙲𝙸𝙰!!*`.trim();
  conn.sendFile(m.chat, pp, "error.jpg", text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ["kevvin <texto>"];
handler.tags = ["group"];
handler.command = /^(kevvin)$/i;
handler.group = true;
export default handler;
