export function before(m) {
  const user = global.db.data.users[m.sender];

  if (user && user.afk > -1) {
    m.reply(
      `
    *🔷 DEJASTE DE ESTAR AFK${user.afkReason ? `\nMOTIVO: ${user.afkReason}` : ""}*
    *⏳ TIEMPO DE INACTIVIDAD AFK: ${(new Date() - user.afk).toTimeString()}*
  `.trim()
    );

    user.afk = -1;
    user.afkReason = "";
  }

  const jids = [...new Set([...m.mentionedJid, ...(m.quoted ? [m.quoted.sender] : [])])].filter(jid => global.db.data.users[jid]);

  for (const jid of jids) {
    const afkTime = global.db.data.users[jid]?.afk;

    if (afkTime && afkTime > -1) {
      const reason = global.db.data.users[jid].afkReason || "";
      m.reply(
        `*❍ NO LO ETIQUETES, ESTÁ (INACTIVO) (𝙰𝙵𝙺)*\n*❍ ${reason ? `MOTIVO (AFK): ${reason}` : "MOTIVO (AFK): _EL USUARIO NO ESPECIFICA UN MOTIVO_"}*\n*❍ TIEMPO INACTIVO (AFK): ${(new Date() - afkTime).toTimeString()}*`.trim()
      );
    }
  }

  return true;
}
