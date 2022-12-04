const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    
 message.channel.send(`**ADAM GİBİ ADAM, KRAL GİBİ KRAL, OLAN CNAIM CİGERİM SAHİBÜL BABALARIM:** \n <a:siyahkrmzta:1007376832758300812> ***M. FURKAN KÜYÜK*** ve ***ABDUSSAMED KÜYÜK*** <a:siyahkrmzta:1007376832758300812>`)
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sahip',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: '!sa-as'
};