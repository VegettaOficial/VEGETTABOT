import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, __dirname, isRowner, isOwner, isBotAdmin, usedPrefix, groupMetadata, groups, _package, participants }) => { 
let blockedUser = global.db.data.blockedUsers && global.db.data.blockedUsers[i] ? global.db.data.blockedUsers[i] : [];
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}

let txt
const chats = Object.entries(conn.chats).filter(([jid, data]) => jid && data.isChats)
groups = Object.values(await conn.groupFetchAllParticipating())
for (let i = 0; i < groups.length; i++) {
txt += ` 
👤@${i.split("@")[0]}\n
*GRUPO*: ${groups[i].subject}
*ID:* ${groups[i].id}\n`
}
m.reply(txt.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(grupos)$/i
handler.rowner = true;
handler.exp = 30
export default handler
