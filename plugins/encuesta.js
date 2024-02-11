let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    // Split the message text using the '|' character and slice the array to remove the first element.
    
    if (!a[1]) throw "Ingresa el texto\n" + usedPrefix + command + " hello |confirmo|desconfirmo"
    if (a[12]) throw "Too many options, Format\n" + usedPrefix + command + " hello |confirmo|desconfirmo"
    // Check for duplicate options in the poll.
    if (checkDuplicate(a)) throw "Duplicate options in the message!"
    let cap = "*ENCUESTA REALIZADA POR:* " + m.name + "\n*Mensaje:* "

   
    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
  
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })
}

//handler.help = ["poll question|option|option"]
//handler.tags = ["group"]
//handler.command = /^encues(l((l?ing|ls)|l)|ta?)$/i

handler.help = ['encuesta <Horas>']
handler.tags = ['owner']
handler.command = /^(encuesta|encuestas)$/i
export default handler


export default handler

// Function to check for duplicate elements in an array.
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
