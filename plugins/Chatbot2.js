let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^todo bien$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `𝑩𝒊𝒆𝒏 𝒄𝒂𝒑𝒐 😎 𝒚 𝒕𝒖`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}

if (/^elite bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `𝑸𝒖𝒆 𝒃𝒖𝒆𝒏𝒐 𝒔𝒂𝒃𝒆𝒓 𝒍𝒂 𝒍𝒆𝒕𝒓𝒂 𝒆`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
