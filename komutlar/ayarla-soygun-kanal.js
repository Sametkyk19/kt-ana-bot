const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:-1: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let kanal = message.mentions.channels.first();  
  if(args[0] === "sıfırla") {
  const sıfırlandı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)  
  .setTitle(`${client.user.username} | Erkek rol sıfırlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`:-1: Sunucu için ayarladığınız erkek rolü başarıyla sıfırlandı!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`KT`)
  message.channel.send(sıfırlandı)
  db.delete(`soygunlog_${message.guild.id}`)
  return;
  }
 if(args[0] === "ayarla") {
    db.set(`soygunlog_${message.guild.id}`, kanal.id)
    const ayarlandı = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
    .setColor(0x36393F)
    .setDescription(`<a:-1:793899916614828062> Erkek rolü başarıyla ${kanal} olarak ayarlandı!`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`KT`)
    message.channel.send(ayarlandı)
 } 
 
  if (!kanal) {
    const ayarlanmadı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())  
  .setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`<a:-1:793899916614828062> Lütfen bir kanal veya sıfırlama belirtiniz. a?soygun-log ayarla #kanal veya sıfırla!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`KT`)
  message.channel.send(ayarlanmadı)
  }
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["soy-log"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "soygun-log",
usage: ""
}
