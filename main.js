const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')

const Client = require('./lib/simple.js')

const WAConnection = Client.WAConnection(_WAConnection)

const  { Functions } = require('./lib/functions.js');

const { color, bgcolor } = require('./lib/color')

const fs = require("fs-extra")



const figlet = require('figlet')

const { uncache, nocache } = require('./lib/loader')

const setting = JSON.parse(fs.readFileSync('./message/setting.json'))

const welcome = require('./message/group')

baterai = 'unknown'

charging = 'unknown'



//nocache

let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];
global.media = require('./src/json/media.json');

global.Functs = new Functions();
global.rimuru = new WAConnection();
global.blocked = []
global.direct = `INFO : • ENG \n\nHello My Developer, Bot successfully Connected On This Device\n\n\n\nINFO : • IND \n\nHalo Pengembang Saya, Bot berhasil Terhubung Di Perangkat Ini.\n\n\n\n{\n "owner": "./message.setting.ownerName}",\n"bot": "./message.setting.botName": [Function (anonymous)],\n"cache": null\n}`
let server = `6285221604446@s.whatsapp.net`


require('./rimuru.js')

nocache('../rimuru.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))

require('./rimuru.js')

nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))



    const starts = async (rimuru = new WAConnection()) => {
	rimuru.logger.level = 'warn'
    rimuru.version = [2,2142,3]

	console.log(color(figlet.textSync('RIMURU EDITZ', {

		font: 'Standard',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'cyan'))

	console.log(color('[Scurity ʀɪᴍᴜʀᴜ ᴄʜᴀɴ]', 'cyan'), color('Owner is online now!', 'yellow'))

	console.log(color('[Scurity ʀɪᴍᴜʀᴜ ᴄʜᴀɴ]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'yellow'))

	rimuru.browserDescription = ["RIMURU - BOTZ", "Chrome", "3.0.0"];
	

	// Menunggu QR

	rimuru.on('qr', () => {

		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))

	})



	// Menghubungkan

	fs.existsSync(`./rimuru.json`) && rimuru.loadAuthInfo(`./rimuru.json`)

	rimuru.on('connecting', () => {

		console.log(color('[ RIMURU CHAN ]', 'cyan'), color('Menghubungkan....'));

	})


	//connect
	rimuru.on('open', async () => {
rimuru.logger.warn('Reconnect to device')
console.log(color('managed to re-access the network, the run-time forced test was also successfully submitted', 'cyan'))
console.log(color('[ RIMURU CHAN ]', 'cyan'), color('Bot Sudah Online!'));
		

	})



	// session

	await rimuru.connect({

		timeoutMs: 30 * 1000

	})

	fs.writeFileSync(`./rimuru.json`, JSON.stringify(rimuru.base64EncodedAuthInfo(), null, '\t'))



	// Baterai

	rimuru.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	rimuru.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})



	// welcome

	rimuru.on('group-participants-update', async (anu) => {

		await welcome(rimuru, anu)

	})

  

  rimuru.on("message-delete", async (m) => {

    if (m.key.remoteJid == "status@broadcast") return;

    if (!m.key.fromMe && m.key.fromMe) return;

    m.message =

      Object.keys(m.message)[0] === "ephemeralMessage"

        ? m.message.ephemeralMessage.message

        : m.message;

    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));

    const isGroup = m.key.remoteJid.endsWith("@g.us")

    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;

    const moment = require("moment-timezone");

    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");

    let d = new Date();

    let locale = "id";

    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();

    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][

      Math.floor((d * 1 + gmt) / 84600000) % 5

    ];

    let week = d.toLocaleDateString(locale, { weekday: "long" });

    let calender = d.toLocaleDateString(locale, {

      day: "numeric",

      month: "long",

      year: "numeric",

    });

    const type = Object.keys(m.message)[0];

    if (!isAntidel) return

    rimuru.sendMessage(

      m.key.remoteJid,

      `\`\`\`「 Anti Delete 」\`\`\`

  •> Nama : @${m.participant.split("@")[0]}

  •> Waktu : ${jam} ${week} ${calender}

  •> Type : ${type}`,

      MessageType.text,

      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }

    );



    rimuru.copyNForward(m.key.remoteJid, m.message);

  });

  

	rimuru.on('chat-update', async (message) => {

		require('./rimuru.js')(rimuru, message)

	})

}



starts()