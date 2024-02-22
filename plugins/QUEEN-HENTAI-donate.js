
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
🇵🇰 *DONATE* 🇵🇰
If you get more info of ALIYA MD 🇵🇰! Please Contact 923261989905 💰`
let img = 'https://i.ibb.co/fpnbSwB/173176089-padded-logo.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donasi'] 

export default handler
