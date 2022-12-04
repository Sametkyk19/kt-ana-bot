const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTA0NTE1Nzg4MDI2ODM5MDQiLCJib3QiOnRydWUsImlhdCI6MTY2MTUxMzc3Mn0.9xGuOLhiT_i_81fyg3CaMzRA3blMx-vi7sCV-ZaCgag', client); //Dbl Tokeninizi Yazınız.
  
dbl.hasVoted(message.author.id).then(voted => { 
  
  
if (!voted) {
  
const embed = new Discord.MessageEmbed()
                     
.setTitle("OY VER!")
.setColor("RANDOM")

.setThumbnail(client.user.avatarURL())

.setDescription("Birçok Komuta Erişmek, Bota Ve Yapımcısına Destek Olmak İçin Lütfen Botumuza Oy Verin!")

.addField("Oy Vermek için :", `[Bana Tıkla!](https://top.gg/bot/1010451578802683904?s=0c5dfb003365f)`) //Dbl Oy Linkini Yazınız.

.setFooter(client.user.username)

return message.channel.send(embed)
   
    let user = message.author.id();

  
  if (voted) return user.send("Botumuza Oy Verdiğiniz İçin Size Minnettarız. \n \n Küyük Teknoloji (KT) Discord Destek Sunucusu: https://discord.gg/xKzGMUnZmh")

} 
})

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["vote", "oy"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "oyver",
usage: ""
}