
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `ALIYA MD 💞, Enter a Google Drive link`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
*ALIYA MD 💞 Google Drive DOWNLOADER*

🇵🇰 *Number:* ${res.fileName}
🇵🇰 *Size:* ${res.fileSize}
🇵🇰 *type:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('🇵🇰 Error: Check the link or try another link 🇵🇰') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = false
handler.premium = false

export default handler
