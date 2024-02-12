let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    // Split the message text using the '|' character and slice the array to remove the first element.
    let a = text.split("|").slice(1)
    if (!a[1]) throw "Ejemplo de uso\n" + usedPrefix + command + " Quieren pizza|si|no"
    if (a[12]) throw "Ejemplo de uso\n" + usedPrefix + command + " Quieren pizza|si|no"
    // Check for duplicate options in the poll.
    if (checkDuplicate(a)) throw "Duplicate options in the message!"
    let cap = "*Encuesta hecha por:* " + m.name + "\n*Mensaje:* " + text.split("|")[0]

   
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

handler.help = ["poll question |option|option"]
handler.tags = ["group"]
handler.command = /^(encuesta)$/i

export default handler

// Function to check for duplicate elements in an array.
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
