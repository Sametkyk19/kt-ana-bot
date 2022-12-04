const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");

  const embed = new Discord.MessageEmbed()
  .setAuthor("Kt Ekonomi Bot", client.user.avatarURL())
  .setDescription(`
  Lütfen ne yapmak istediğinizi belirtiniz.
  a?bildir öneri <öneriniz> -> Öneri bildirmenizi sağlar:
  a?bildir bug <bugunuz> -> Bug bildirmenizi sağlar
  `)
if(args[0] === "öneri") {  
    const öneri = args.slice(1).join(' ');
    if(!öneri) return message.channel.send("Bir öneri belirtmelisin. ")
       
  const embed = new Discord.MessageEmbed()
.setTitle("Bana bir öneride bulundular! :tada:")
  .addField("Belirtilen Öneri:", öneri)
  .addField("Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`Öneriniz başarıyla iletildi!`)
  client.channels.cache.get("1013746816099033150").send(embed)  
}
if(args[0] === "bug") {
  const bug = args.slice(1).join(' ');
  if(!bug) return message.channel.send("Bir öneri belirtmelisin. ")
     
const embed = new Discord.MessageEmbed()
.setTitle("Aga Yine Bug'ım Bulundu Ya :/ (özür dilerim :pleading_face:)")
.addField("Belirtilen Bug:", bug)
.addField("Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
.setFooter(client.user.username, client.user.avatarURL())
.setThumbnail(message.author.avatarURL({format: "gif"}))
message.channel.send(`Bugunuz başarıyla iletildi!`)
client.channels.cache.get("1029436486224978000").send(embed) 
}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "bildir",
usage: ""
}