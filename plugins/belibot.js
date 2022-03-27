let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _3k/grup (1 Minggu)_
║┊ ⌲ Sewa = _4k/grup (2 Minggu)_
║┊ ⌲ Sewa = _5k/grup (3 Minggu )_
║┊ ⌲ Sewa = _6k/grup (1 Bulan)_  
║┊ ⌲ Sewa = _8k/grup (2 Bulan)_
║┊ ⌲ Sewa = _10k/grup (3 Bulan)_
║┊ ⌲ Sewa = _12k/grup (permanent)_
╰═ ┅ ═══════


༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Dan 900+ Fitur Lainnya*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/BYcW7rue6fA8gNdyLPedDe_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm
