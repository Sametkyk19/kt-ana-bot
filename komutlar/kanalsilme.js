const Discord = require('discord.js');

exports.run = function (client, message, args) {
message.channel.delete()

}

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['sew'],

  permLevel: 0

};

exports.help = {

  name: 'sew',

  description: 'Belirlenen miktarda mesajı siler.',

  usage: 'temizle '

};