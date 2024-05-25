export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `*Cabron no ves mi foto de perfil o eres ciego?*
*Te vamos a mandar a suspender tu número en la base de datos de WhatsApp por infringir normas de EBG*.⚠️

> Si deseas comprar EliteBotGlobal contáctate con mis creadores, caso contrario anda despidiendote de tu número.

*Creador EBG:*
👤 +593993370003

Nota:
Solo si tienes dinero en mano no me vengan a joder gente sin dinero.`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
