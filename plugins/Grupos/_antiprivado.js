export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `Hijo de su ... madre no le escribas al bot !!!

> Serás bloqueado/a

Contáctacte mi creador si quieres comprar Élite Bot Global, no es gratis y no hagas perder el tiempo que paso ocupado haciendo negocios $$.
» Wa.me/593993370003`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
