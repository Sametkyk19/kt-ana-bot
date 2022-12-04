 const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')

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
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const coin = await db.fetch(`coinbakiye_${message.author.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`coinhesapismi_${kllanç.id}`);
  const banka = await db.fetch(`bank_${kllanç.id}`)
  const bankaismi2 = await db.fetch(`banka_${kllanç.id}`)
   let deger = db.fetch(`bankabakiye_${message.author.id}`)

   if (!hesapismi) return message.channel.send("Bir Hesabınız Bulunmamakta! Hesap Oluşturmak İçin **a?hesap-oluştur (İstediğiniz Hesap İsmi)** ")
   
const coinim = new Discord.MessageEmbed()
.setAuthor("Coin'in", client.user.avatarURL())
.setDescription(`
💵 Coin: ${coin}
`)
.setFooter(message.author.tag, message.author.avatarURL())
 .setTimestamp()
message.channel.send(coinim)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['coin', 'coinim', 'coins'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'coin',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}