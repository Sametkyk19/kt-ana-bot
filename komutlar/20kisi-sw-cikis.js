
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.author.id === "842005344027672576") return message.channel.send('Bu komutu sadece <@842005344027672576> kullanabilir!')

    bot.guilds.cache.filter(a => a.memberCount < 20).forEach(a => a.leave())
  message.channel.send("Heywallah:D")

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sv-çık"],
    permLevel: 3
};

exports.help = {
    name: 'sunucudan-çık',
    description: 'Botu 20 kişinin altındaki sunuculardan çıkartırsın.',
    usage: 'sunucudan-çık'
};
