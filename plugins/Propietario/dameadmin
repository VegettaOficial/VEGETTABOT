let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*Usted ya es administrador de este grupo creador.*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^dameadmin|tenerpoder$/i
handler.rowner = true
handler.botAdmin = true
export default handler
