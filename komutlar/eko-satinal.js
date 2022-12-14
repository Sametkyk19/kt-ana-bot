const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')
let dbs = require("coders.db");

exports.run = async (client, message, args) => {
    if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");
 
  let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt Ekonomi Botu", client.user.avatarURL())
   .setTimestamp()
 )
    
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
  
  
  let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  const soygunlog = db.get(`soygunlog_${kllanç.id}`)
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const para = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`olta_${kllanç.id}`)
  const telefon = db.get(`telefon${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)

    const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
  
  const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
const demirbalta = db.get(`demirbalta_${message.author.id}`)
const taşbalta = db.get(`taşbalta_${message.author.id}`)

var demirkazma = db.get(`demirkazma_${message.guild.id}`)
var elmaskazma = db.get(`elmaskazma_${message.guild.id}`)
var taşkazma = db.get(`taşkazma_${message.guild.id}`)
  if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Kt Ekonomi Botu", client.user.avatarURL())
.setDescription(`
Satın almak istediğiniz eşyanın id sini giriniz. **Örnek**
**a?satın-al silah/telefon/olta/bitcoin/kalkan** 
**a?satın-al elmas-kazma/demir-kazma/taş-kazma** 
**a?satın-al elmas-balta/demir-balta/taş-balta**
**a?satın-al elmas-kılıç/demir-kılıç/taş-kılıç**`)
.setFooter("Kt Ekonomi Botu", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "silah") {
    let fiyatcık = silahfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık) return message.reply('Yeterli Paran Yok!')
  db.set(`silah_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık)
  
  return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "telefon") {
    let fiyatcık3 = telefonfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık3) return message.reply('Yeterli Paran Yok!')
      db.set(`telefon_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık3)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = oltafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık4) return message.reply('Yeterli Paran Yok!')
      db.set(`olta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık4)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = btcfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`btc_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "elmas-kazma", "elmaskazma") {
    let fiyatcık5 = elmaskazmafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmaskazma_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-kazma") {
    let fiyatcık5 = demirkazmafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirkazma_${kllanç.id}`, "Var", +1)
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-kazma") {
    let fiyatcık5 = taşkazmafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşkazma_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
      if(args[0] === "elmas-balta") {
    let fiyatcık5 = elmasbaltafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmasbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-balta") {
    let fiyatcık5 = demirbaltafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-balta") {
    let fiyatcık5 = taşbaltafyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşbalta_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
        if(args[0] === "elmas-kılıç") {
    let fiyatcık5 = elmaskılıcfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`elmaskılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "demir-kılıç") {
    let fiyatcık5 = demirkılıcfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`demirkılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
    if(args[0] === "taş-kılıç") {
    let fiyatcık5 = taşkılıcfyt // istediğiniz fiyat
    
    if (bakiye < fiyatcık5) return message.reply('Yeterli Paran Yok!')
      db.set(`taşkılıç_${kllanç.id}`, "Var")
  db.add(`bakiye_${kllanç.id}`, -fiyatcık5)
    
    return message.reply(`Ürünü başarıyla aldınız`)
}
if (args[0] === "kalkan") {
  if (bakiye < 200) {
  if(await db.has(`${message.author.id}.kalkan`) === true) return message.reply(`**Zaten 1 adet kalkanın bulunuyor!** `)
    message.reply(
      "`1 Günlük Kalkan` almak için 200 ₺'ye ihtiyacın var. Senin paran: **" +
        para +
        "**"
    );
  }

  if (bakiye > 200) {
    if(await db.has(`${message.author.id}.kalkan`) === true) return message.reply(`**Zaten 1 adet kalkanın bulunuyor!** `)
    message.reply(
      `Marketten **1** adet \`1 Günlük Kalkan\` aldın. Şuanki paran: ${bakiye -
        200} `
    );
    db.set(`${message.author.id}.kalkan`, true);
    db.set(`bakiye_${message.author.id}`, bakiye -200);
           db.set(`${message.author.id}.kalkan_süre`, 86400000)// 1 gün
           db.set(`${message.author.id}.kalkan_süre2`, Date.now())
           dbs.set(`market_${message.author.id}`, Date.now());
           
           client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı marketten \`1 Günlük Kalkan\` satın aldı. Geriye **${bakiye - 3500}**TL'si kaldı.`)
         }
        }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["satınal", "satın-al", "satinal", "satin-al"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'satın-al',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}