let handler = async (m, { conn }) => {
    try {
        // Verificar si hay una imagen adjunta
        if (!m.quoted || !m.quoted.fileSha256) {
            return await conn.reply(m.chat, 'Debes responder a una imagen para convertirla a PNG.', m);
        }

        // Descargar la imagenn
        let imageBuffer = await conn.downloadMediaMessage(m.quoted);

        // Convertir a base64 y agregar encabezado de datos PNG
        let base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

        // Enviar la imagen convertida
        await conn.sendFile(m.chat, base64Image, 'imagen.png', '¡Aquí está tu imagen en formato PNG!', m);
    } catch (e) {
        // Enviar un mensaje de error al usuario
        return await conn.reply(m.chat, 'Se ha producido un error al procesar la imagen.', m);
    }
}

handler.help = ['png'];
handler.tags = ['image'];
handler.command = /^(png)$/i;

module.exports = handler;
