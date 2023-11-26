import fs from 'fs'

let timeout = 40000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '⚠️ 𝙏𝙊𝘿𝘼𝙑𝙄𝘼 𝙃𝘼𝙔 𝘼𝘾𝙀𝙍𝙏𝙄𝙅𝙊𝙎 𝙎𝙄𝙉 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    const caption = `
ⷮ *${json.question}*
» 𝗧𝗜𝗘𝗠𝗣𝗢: ${(timeout / 1000).toFixed(2)} segundos
» 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔: Un besito 💋
╰─◆────⋆𝗘𝗕𝗚⋆─────◆─╯
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `¡𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢!\n𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔: ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i

export default handler
