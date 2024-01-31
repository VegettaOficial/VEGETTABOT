import fs from 'fs'

let timeout = 30000
let poin = 10000

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Todavia hay un juego sin terminar!', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync("./src/game/casos.json"))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ *${json.caso}*

*Sospechosos:*
ⷮ${json.Sospechosos}

*Tiempo:* ${(timeout / 1000).toFixed(2)} segundos

Recuerda responder con el nombre completo del presunto culpable! 🪄
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!, intenta resolver de nuevo un caso policiaco.`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['caso']
handler.tags = ['game']
handler.command = /^(caso|casoinvestigar|casopoliciaco|investigarcaso)$/i

export default handler
