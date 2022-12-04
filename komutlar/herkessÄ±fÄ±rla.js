const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
	
if(message.author.id !== "842005344027672576") if(message.author.id !== "994246863903531151") return message.channel.send("YÜREK YEDİN SANIRIM?! :D");
 db.delete(`bakiye`)
  db.delete(`hesapdurum`)
  db.delete(`hesapismi`)
  
  db.delete(`coinbakiye`)
  db.delete(`coinhesapdurum`)
  db.delete(`coinhesapismi`)

message.channel.send(`Başarıyla Bütün Kullanıcılarımın Hesaplarını Sildim :+1:`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['herkessıfırla','ekonomisıfırla'],
    permLevel: 0
}

exports.help = {
    name: 'herkessıfırla',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}
