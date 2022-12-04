const Discord = require('discord.js')
const moment = require('moment')
require("moment-duration-format")

    exports.run = async(client, message, args) => {
        // Let tanımları
        let sunucuikon = message.guild.iconURL({dynamic: true})
        let codemarefizaman = new Date().getTime() - message.guild.createdAt.getTime()

        // Zaman
        const kurulus = moment.duration(codemarefizaman).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 

        message.channel.createInvite().then(inv => {
            const codemarefisbilgi = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name} Sunucu Bilgileri`)
            .addField(`Sunucu İsmi - **${message.guild.name}**`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucu Kurucusu - ${message.guild.owner}`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucudaki Üye Sayısı - **${message.guild.memberCount}**`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucudaki Rol Sayısı - **${message.guild.roles.cache.size || "Rol Yok"}**`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucudaki Kanal Sayısı - **${message.guild.channels.cache.size}**`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucu Açılalı - ${kurulus} Olmuş`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`Sunucu İD'si - **${message.guild.id}**`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`[Sunucunun Avatar Linki](${sunucuikon})`, `<a:kt_cizgi:1002916962877325342>`)
            .addField(`[Sunucunun Davet Linki](${inv.url})`, `<a:kt_cizgi:1002916962877325342>`)
                .setColor('BLACK')
                .setFooter("Kt Bot")
            message.channel.send(codemarefisbilgi)
        })
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Sunucu bilgi','SUNUCU BİLGİ','sunucu bilgi','Sunucu-bilgi','Sunucu-Bilgi', 'sunucubilgi'],
    permLevel: 0
}

exports.help = {
    name: 'sunucu-bilgi'
}