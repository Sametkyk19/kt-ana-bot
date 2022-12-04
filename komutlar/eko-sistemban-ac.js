const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
  
 // let bantarama = db.fetch(`sistemban_${etkt.id}`)
 // if (bantarama) return message.reply(`**Kullanıcı Sistemimde Banlı Gözükmüyor.**`)
  
  
		let etkt = message.mentions.users.first();

if(message.author.id !== "842005344027672576") if(message.author.id !== "994246863903531151") return message.channel.send("hoop bilader sahip komutu bu");
  const uye = args[0] || message.mentions.users.first()
if(!uye) return message.channel.send(`Lütfen bir kullanıcı girin.`)
db.delete(`sistemban_${etkt.id}`)
message.channel.send(`Kullanıcı başarıyla ekonomi sisteminden banı açıldı!`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ekonomi-sistem-banaç', 'eko-sistem-ban-aç', 'sistembanaç', 'banaç', 'sistem-ban-aç', 'ban-aç'],
    permLevel: 0
}

exports.help = {
    name: 'ekonomi-sistem-ban-aç',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}