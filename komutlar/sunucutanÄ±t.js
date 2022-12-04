const discord = require('discord.js')
const db = require('megadb')
const ms = require('parse-ms')
const DBL = require('dblapi.js')
const ayarlar = require('../ayarlar.json')
let server = new db.crearDB('server')
let cooldown = 8.64e+7 

exports.run = async(client, message, args) => {
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTA0NTE1Nzg4MDI2ODM5MDQiLCJib3QiOnRydWUsImlhdCI6MTY2MTUxMzc3Mn0.9xGuOLhiT_i_81fyg3CaMzRA3blMx-vi7sCV-ZaCgag', client); //Dbl Tokeninizi Yazınız.

      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanabilmek İçin **`Yönetici`** Yetkisine Sahip Olmalısın!')
  let zaman = await server.get(`sunucutanit.${message.guild.id}`)
      
      if (zaman !== null && cooldown - (Date.now() - zaman) > 0) {
        let süre = ms(cooldown - (Date.now() - zaman))
      message.channel.send(`Sunucunu **${süre.hours}** Saat **${süre.minutes}** Dakika Sonra Tanıtabilirsin! `)
return;
      } else { 

      }  

  let kanal = '1011332917995257979'
let prefix = ayarlar.prefix
const codeworld = await client.channels.cache.get(message.channel.id).createInvite({ maxAge: 0})

const embed = new discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Sunucu tanıt kullandınız 24 saat sonra tekrar kullanabilirsin . \n\n Sunucunuz [Destek](https://discord.gg/n93N78vC9m) Sunucumuzda Paylaşıldı!')
message.channel.send(embed)
  const sunucutanıtıldı = new discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
.setTitle(`Sunucu Tanıt Sistemi!`)
.setColor('RANDOM')
.addField(`Sunucunun İsmi;`, `**${message.guild.name}**`)
.addField(`Sunucudaki Kullanıcı Sayısı;`, `**${message.guild.memberCount}**`)
.addField('Sunucu ID',`**${message.guild.id}**`)
.addField(`Sunucuyu Tanıtan Kullanıcı;`, `${message.author} (${message.author.id})`)
.addField(`Sunucunun Davet Linki;`, `[Sunucuya Katıl](${codeworld.url})`)
.setFooter(`Sizde Sunucunuzu Tanıtmak İstiyorsanız Sunucunuza Botumuzu Ekliyip Bir Kanala a?sunucu-tanıt (Sınırsız Sunucu Davet Linkiniz)" Yazın. İyi Günler Dileriz. 😇 😊`)
.setThumbnail(`${client.user.avatarURL()}`)
client.channels.cache.get(kanal).send(sunucutanıtıldı)
  
        server.set(`sunucutanit.${message.guild.id}`, Date.now())

}
exports.conf = {

  aliases: ['sunucu-tanıt']
}
exports.help = {
  name: 'sunucutanıt'
}