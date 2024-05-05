
let img = 'https://telegra.ph/file/da9da8b6f606e8490cfcc.jpg' 
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},* _Te toco donar una sala mi pana juegas y juegas y no te he visto colaborar una sala._`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['pepe']
handler.group = true
export default handler
