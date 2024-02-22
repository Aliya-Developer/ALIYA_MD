import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['923261989905', 'ZAHID ASHIQ 2⁰²4', true],
  ['923266688062', 'DANI JOIYA 2⁰²4', true], 
  [''] 
] //Number of owners

global.mods = ['923261989905','923266688062'] 
global.prems = ['923261989905', '923266688062', '923261989905']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ALIYA_MD 💞'
global.premium = 'true'
global.packname = 'Created By 💞 ZAHID ASHIQ²⁰²³' 
global.author = 'DANI JOIYA 923266688062' 
global.igfg = '▢ Follow on Facebook\https://www.facebook.com/profile.php?id=61551915615888\n' 
global.dygp = 'https://whatsapp.com/channel/0029VaQGXHZ3WHTP45GRLX3o'
global.fgsc = 'https://github.com/Aliya-Developer/ALIYA_MD' 
global.fgyt = 'https://whatsapp.com/channel/0029VaQGXHZ3WHTP45GRLX3o'
global.fgpyp = 'https://whatsapp.com/channel/0029VaQGXHZ3WHTP45GRLX3o'
global.fglog = 'https://i.ibb.co/fpnbSwB/173176089-padded-logo.png' 


global.wait = '*Please wait upload is started...*'
global.rwait = '🇵🇰'
global.dmoji = '💔'
global.done = '✅'
global.error = '🚫' 
global.xmoji = '💘' 

global.multiplier = 69 
global.maxwarn = '3' // maximum adevrtise

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
