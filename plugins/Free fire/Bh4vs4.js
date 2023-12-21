let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🧚🏻‍♀️VERSUS FEMENINO🧚🏻‍♀️ ${pesan}`
let teks = `${oi}\n`
teks += `HORA: 🇲🇽  🇨🇴
MODALIDAD:
4vs4 
Jugadoras :

👸 

👸  

👸 

👸  

Suplentes 

🦋

🦋

Donadoras de salas

💋

NOTA: SI NO PUEDEN ASISTIR AL VS AVISAR 1 HORA ANTES PARA REEMPLAZAR O SERAN SANCIONADOS.
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(4vs4bh)$/i
export default handler
