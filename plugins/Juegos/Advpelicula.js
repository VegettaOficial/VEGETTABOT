//Créditos a Katashi Fukushima

import fs from 'fs'

let timeout = 30000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Todavía hay una palabra sin ordenar en este chat', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
ⷮ » 𝗔𝗗𝗜𝗩𝗜𝗡𝗔 𝗟𝗔 𝗣𝗘𝗟𝗜́𝗖𝗨𝗟𝗔 𝗖𝗢𝗡 𝗘𝗠𝗢𝗝𝗜𝗦.
*${json.question}*

 » 𝗧𝗶𝗲𝗺𝗽𝗼: ${(timeout / 1000).toFixed(2)} segundos

✨ Responde a este mensaje con la palabra correcta ✨
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Palabra:* ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['palabra']
handler.tags = ['game']
handler.command = /^(advpeli)$/i

export default handler
