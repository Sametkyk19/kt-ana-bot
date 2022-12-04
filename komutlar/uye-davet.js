const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const WestraEmbed = new Discord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<:WumpusCool:1029429649484296212>  Kt Ekonomi Botunu davet etmek için [buraya](https://discord.com/api/oauth2/authorize?client_id=1012689971590733845&permissions=8&scope=bot) tıkla! <a:kt_red:1002916021641941052>`)
  message.channel.send(WestraEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "davet",
usage: ""
}