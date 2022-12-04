const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
		   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("KT Bot", client.user.avatarURL())
   .setTimestamp()
 )
	let etkt = message.mentions.users.first();
if(message.author.id !== "842005344027672576") if(message.author.id !== "994246863903531151") return message.channel.send("hoop bilader sahip komutu bu");
  const uye = args[0]
if(!uye) return message.channel.send(`Lütfen bir kullanıcı girin.`)
message.channel.send(`Kullanıcı başarıyla ekonomi sisteminden banlandı!`)  
  db.add(`sistemban_${etkt.id}`)
    

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ekonomi-sistem-banla', 'sistemban', 'sistem-ban',],
    permLevel: 0
}

exports.help = {
    name: 'ekonomi-sistem-ban',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}