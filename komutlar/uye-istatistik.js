const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
const os = require('os');
const client = require("moment-duration-format");
const fs = require("fs");
exports.run = async(client, message, args) => {
   let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


 

  

  
  
 const Embed = new Discord.MessageEmbed()
  .setAuthor(`KT Bot İstatistik`,client.user.avatarURL())
  .addField("<:script:1018147718180380794> Geliştiricilerim", `<@!842005344027672576>, <@!1035531320148889672> `,  true) 
  .addField("<:javascript:1014089138712104972> Discord.JS", `**v${Discord.version}**`, true)
  .addField("<a:loading:1014089487254564917> Ping", `**${client.ws.ping}ms**`, true)
.addField("<:discordlogo:1014089088921509898> Sunucu Sayısı", `**\`${client.guilds.cache.size.toLocaleString()}\`**`, true)
.addField("<:javascript:1014089138712104972>Kullanıcı Sayısı", `**\`${client.guilds.cache.reduce((a,b)=>a+=b.memberCount,0)}\`**`, true)
.addField("<:javascript:1014089138712104972> Kanal Sayısı", `**\`${client.channels.cache.size.toLocaleString()}\`**`, true)
.addField("<a:ayargif:1022874810373656677> Destek Sunucusu", `[Destek Sunucusu](https://discord.gg/n93N78vC9m)`, true)
.addField("<a:ayargif:1022874810373656677> Kuruluş Tarihi", `**\`${s}\`**`, true)
.addField("<a:ayargif:1022874810373656677> Uptime", `\`${uptime}\``, true)
.addField("<:ac_developer:1020053389171773542> Komut Sayısı", `\`${client.commands.size}\``)
 

 .setFooter(client.user.tag,client.user.avatarURL())
 
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed)
    
    

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["i", "botbilgi", "bot-bilgi", "İ"],
    permLevel: 0,
    katagori: "Ekonomi"}
exports.help = {
name: "istatistik",
usage: ""
}