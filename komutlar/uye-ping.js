const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");
 
  const embed2 = new Discord.MessageEmbed()
  .setDescription('**Botun pingi hesaplanıyor...**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(embed2)
    let diff = (Date.now() - start); 
    let API = (client.ws.ping).toFixed(2)
  
 const Embed = new Discord.MessageEmbed()
 .setColor("30d5c8")
 .setAuthor("Kt Bot", client.user.avatarURL())
.setDescription(`
<a:Altin2_sari:1018130453707882556> Pingim = **${client.ws.ping} ms**
`)
 .setFooter(`Kt Bot`, message.author.avatarURL())
 .setTimestamp() 
 
  const newEmbed = new Discord.MessageEmbed()
 .setColor("30d5c8")
 .setAuthor("Kt Bot", client.user.avatarURL())
.setDescription(`
<a:Altin2_sari:1018130453707882556> Pingim = **${client.ws.ping} ms**
`)
 .setFooter(`Kt Bot`, message.author.avatarURL())
 .setTimestamp() 
  
   const newEmbed2 = new Discord.MessageEmbed()
 .setColor("30d5c8")
 .setAuthor("Kt Bot", client.user.avatarURL())
.setDescription(`
<a:Altin2_sari:1018130453707882556> Pingim = **${client.ws.ping} ms**
`)
 .setFooter(`Kt Bot`, message.author.avatarURL())
 .setTimestamp() 
    setInterval(() => {
  const newEmbed = new Discord.MessageEmbed()
 .setColor("30d5c8")
 .setAuthor("Kt Bot", client.user.avatarURL())
.setDescription(`
<a:Altin2_sari:1018130453707882556> Pingim = **${client.ws.ping} ms**
`)
 .setFooter(`Kt Bot`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(newEmbed)
        }, 4000)
  /*
    setInterval(() => {
  const newEmbed2 = new Discord.MessageEmbed()
 .setColor("f7ff00")
 .setAuthor("Carnoxis", client.user.avatarURL())
.setDescription(`
<a:altin4:829828404249231450> Pingim = **${client.ws.ping} ms**
<a:altin4:829828404249231450> Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Carnoxis`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(newEmbed2)
        }, 6000)  
    setInterval(() => {
  const Embed = new Discord.MessageEmbed()
 .setColor("ff0000")
 .setAuthor("Carnoxis", client.user.avatarURL())
.setDescription(`
<a:altin4:829828404249231450> Pingim = **${client.ws.ping} ms**
<a:altin4:829828404249231450> Mesaj Gecikmem = **${message.createdTimestamp} ms**
`)
 .setFooter(`Carnoxis`, message.author.avatarURL())
 .setTimestamp() 
  
  mesaj.edit(Embed)
        }, 80000)  
  */
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "ping",
usage: ""
}