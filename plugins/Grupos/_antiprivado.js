export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `*Vegetta Bot es un bot mundial automatizado y tiene prohibido los mensajes a mi privado*
 | Seras bloqueado 
 
*Creador VGT:*
👤 +593992402778

Nota:
Llega a mi privado solo si tienes dinero para comprar el servicio.
Cero sapos y cero niños ratas.`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
