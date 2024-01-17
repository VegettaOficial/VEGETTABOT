let handler = async(m, { user, isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner || user)) {
global.dfail('Admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `👸🏻 *VERSUS FEMENINO* 👸🏻  ${pesan}`
let teks = `${oi}\n`
teks += `HORA: 🇲🇽  🇨🇴
MODALIDAD:
8vs8 
Escuadra 1 :

🧚🏻‍♀️ 

🧚🏻‍♀️  

🧚🏻‍♀️ 

🧚🏻‍♀️  

Escuadra 2 :

🧚🏻‍♂️ 

🧚🏻‍♂️

🧚🏻‍♂️ 

🧚🏻‍♂️  

Suplentes 

🧚🏻‍♀️

🧚🏻‍♂️

Donadoras de salas

🧜🏻‍♀️

NOTA: SI NO PUEDEN ASISTIR AL VS AVISAR 1 HORA ANTES PARA REEMPLAZAR O SERAN SANCIONADOS.

  *🦋DE NO AVISAR 3 VECES Q COMETA ESTA FALTA SERA EXPULSADA.*
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf20 <mesaje>','fem20 <mesaje>']
handler.tags = ['group']
handler.command = /^(8vs8bh)$/i
export default handler
