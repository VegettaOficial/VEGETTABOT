let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ` ${pesan}`
let teks = `𝐔𝐍𝐃𝐄𝐑 𝐅𝐈𝐑𝐄${oi}\n`
teks += `• *Armas:* Desert, ump y m10
• *Habilidades:* alok, kelly, maxim, moco
• Primera ronda a desert (solo se usa en primera)
• 1 M10 por equipo
• Alturas solo cuentan segundo pisos y techos 
• +4 para segunda y reclamos (solo válido para el equipo contrario) 
• 2 cambios por equipo
•2 espectadores por equipo
• 10 de tolerancia para todo
•Si ambos equipos incumplieron reglas el punto se dará al ganador de la sala 
• Cancelar el vs 2 horas antes o se tomará por ganado
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(reglaslow)$/i
handler.admin = false
handler.group = true
export default handler
