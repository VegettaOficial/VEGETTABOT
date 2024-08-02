
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	if (global.db.data.chats[m.chat].expired < 1) throw `✅ 𝘌𝘴𝘵𝘦 𝘨𝘳𝘶𝘱𝘰 𝘯𝘰 𝘵𝘪𝘦𝘯𝘦 𝘭𝘪𝘮𝘪𝘵𝘦 𝘥𝘦 𝘵𝘪𝘦𝘮𝘱𝘰.`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var nDays = 86400000 * args[0]
    var now = new Date() * 1
    
    m.reply(`🕔 El tiempo restante de la prueba gratis de Elitebotglobal es :  
    
 ${msToDate(global.db.data.chats[who].expired - now)}

Despues VegettaBot se saldra automáticamente del grupo.`) 
    
}
handler.help = ['fechadeexpiracion']
handler.tags = ['group']
handler.command = /^(info)$/i
handler.group = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Días*\n ', h, ' *Horas*\n ', m, ' *Minutos*\n ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}
