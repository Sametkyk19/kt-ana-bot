const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt Ekonomi Shop", client.user.avatarURL())
   .setTimestamp()
 )
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  
  //////// Market Fiyatlar;
  
  
  
  
  let silahfyt = ayarlar.silah
  
  let oltafyt = ayarlar.olta
  
  let telefonfyt = ayarlar.telefon
  
  let btcfyt = ayarlar.btc

  
  let elmaskazmafyt = ayarlar.elmaskazma
  
  let demirkazmafyt = ayarlar.demirkazma
  
  let taşkazmafyt = ayarlar.taşkazma
 
  
  let elmasbaltafyt = ayarlar.elmasbalta
  
  let demirbaltafyt = ayarlar.demirbalta
  
  let taşbaltafyt = ayarlar.taşbalta
  
  
  let elmaskılıcfyt = ayarlar.elmaskılıc
  
  let demirkılıcfyt = ayarlar.demirkılıc
  
  let taşkılıcfyt = ayarlar.taşkılıc
  
  ///////// Market Fiyat Finish..
  
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`olta_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)

const market = new Discord.MessageEmbed()
.setAuthor("Market", client.user.avatarURL())
.setDescription(`
 --------------------------------------**Genel**--------------------------------------
🔫 Silah ile avlanarak para kazan. \n --> Fiyat: ${silahfyt} 💵 
||**Almak İçin a?satın-al silah** \n||

🎣 Olta ile balık tutarak para kazan. \n --> Fiyat: ${oltafyt} 💵 
||**Almak İçin a?satın-al olta \n**||

📱 Telefon ile fenomen olarak para kazan. \n --> Fiyat: ${telefonfyt} 💵 
||**Almak İçin a?satın-al telefon**||

--------------------------------------***Diğer***--------------------------------------
₿ Bitcoin al ve bir yatırımcı ol!. \n --> Fiyat: ${btcfyt} 💵
||**Almak İçin a?satın-al bitcoin** \n||

🛡️ Kalkan satın al ve seni soymaya çalışanlardan korun!. \n --> Fiyat: 3.500 💵
||**Almak İçin a?satın-al kalkan** \n||
--------------------------------------***Maden***--------------------------------------
⛏️ **Demir kazma satın al, elmas ve altın ile para kazan** \n **-->** Fiyat: ${demirkazmafyt} 💵
||**Almak İçin a?satın-al demir-kazma** \n||

⛏️ **Elmas kazma satın al, zümrüt ile para kazan** \n **-->** Fiyat: ${elmaskazmafyt} 💵
||**Almak İçin a?satın-al elmas-kazma** \n||

⛏️ **Taş kazma satın al, demir ile para kazan** \n **-->** Fiyat: ${taşkazmafyt} 💵
||**Almak İçin a?satın-al taş-kazma** \n||

--------------------------------------***Zindan***--------------------------------------
⚔️ **Elmas kılıç satın al, zindanda para kazan** \n **-->** Fiyat: ${elmaskılıcfyt} 💵
||**Almak İçin a?satın-al elmas-kılıç** \n||

⚔️ **Demir kılıç satın al, zindanda para kazan** \n **-->** Fiyat: ${demirkılıcfyt} 💵
||**Almak İçin a?satın-al demir-kılıç** \n||

⚔️ **Taş kılıç satın al, zindanda para kazan** \n **-->** Fiyat: ${taşkılıcfyt} 💵
||**Almak İçin a?satın-al taş-kılıç** \n||

--------------------------------------***Orman***--------------------------------------
🪓 **Elmas balta satın al, ladin, huş, meşe ve koyu meşe den para kazan** \n **-->** Fiyat: ${elmasbaltafyt} 💵
||**Almak İçin a?satın-al elmas-balta** \n||

🪓 **Demir balta satın al, ladin, huş ve meşe den para kazan** \n **-->** Fiyat: ${demirbaltafyt} 💵
||**Almak İçin a?satın-al demir-balta** \n||

🪓 **Taş balta satın al, huş ve meşe den para kazan** \n **-->** Fiyat: ${taşbaltafyt} 💵
||**Almak İçin a?satın-al taş-balta** \n||

`) 
.setFooter("Market", client.user.avatarURL())
.setTimestamp()
message.channel.send(market)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['shop', 'ekonomi-yardım', 'ekonomiyardım', 'ekonomibilgi', 'market'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'market',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}