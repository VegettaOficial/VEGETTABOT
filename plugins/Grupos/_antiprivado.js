export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `Hijo de su ... madre no le escribas a EliteBot !!!
      Tu número será mandado a soporte por leyes de EBG, en el transcurso de estos días.

> Serás bloqueado/a

Contáctacte con mi creador si quieres comprar Élite Bot Global, no es gratis.
» Wa.me/593993370003`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
