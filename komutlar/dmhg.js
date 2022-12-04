const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    
    
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':dikkat:Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':dikkat:**dm-hg sistemini açmak için `a?dmhg aç veya kapat` yazmalısın!**')

  let member = ('GuildMemberAdd')
  
    if (args[0] == 'aç') {
        db.set(`dmhg_${member.guild.id}`, 'açık')
        message.channel.send(`**Başarıyla \`dm-hg Sistemini\` Açtınız!**`)
        
    }
    if (args[0] == 'kapat') {
        db.set(`dmhg_${member.guild.id}`, 'kapali')
        
        message.channel.send(`**Başarıyla \`dm-hg Sistemini\` Kapattınız!**`)
        
    }
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["dmhg"],
    permLevel: 3
};

exports.help = {
    name: 'dm-hg',
    description: 'Selamün aleyküm, Aleyküm selam',
    usage: 'dm-hg'
};