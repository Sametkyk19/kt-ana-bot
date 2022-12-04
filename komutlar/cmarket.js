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

  
  
  let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;

  
  let cbakiye = db.fetch(`coinbakiye_${member.id}`)
  
  
  if(!args[0]) return message.channel.send(
new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("KT Bot", client.user.avatarURL())
.setDescription(`
Lüfen Almak İstediğiniz Ürünü Giriniz.
-
Örn:
**a?cmarket modbot**
`)
.setFooter("KT Botu", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "modbot") {
    let fiyatcık =  7// istediğiniz fiyat
    let varyok = db.fetch(`cmarketmodbot_${kllanç.id}`, "Var")
       
    if (varyok) return message.channel.send("Bu Ürünü Önceden Almış Olduğunuz İçin Tekrar Veremiyoruz. \n Eğer Bir Sorun Varsa Biografimdeki Linkten Destek Sunucumuza Gelebilirsin!")

      try {

    if (cbakiye < fiyatcık) return message.reply(`Yeterli Coinin Yok! Senin Coinin **${cbakiye}** `)
  db.set(`cmarketmodbot_${kllanç.id}`, "Var")
  db.add(`coinbakiye_${kllanç.id}`, -fiyatcık)
  member.send("İşte Coin Market'ten Aldığın **Discord Moderasyon Bot Altyapın! **: \n https://glitch.com/edit/#!/mire-wood-softball?path=OKU.md%3A12%3A46")
    return message.reply(`Ürünü başarıyla Dm Üzerinden Gönderdim.`)
  }
  catch {
  message.channel.send("Sanırım Dm'in Kapalı Paranı Geri İade Ettim. Lütfen Dm'ini Aç!")
      db.add(`coinbakiye_${kllanç.id}`, fiyatcık)

  }
  
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["cmarketal"],
    permLevel: 5 ,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'cmarket',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}
