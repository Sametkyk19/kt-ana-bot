const Discord = require('discord.js');
var ayarlar = require("../ayarlar.json")
const db = require('quick.db')
exports.run = function(client, message,  args) {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("KT", client.user.avatarURL())
   .setTimestamp()
 )
    const hesapdurumu = db.fetch(`hesapdurum_${message.author.id}`);
    const hesapismi = db.fetch(`hesapismi_${message.author.id}`);
    if(!hesapdurumu) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("KT", client.user.avatarURL())
    .setDescription(`Bir hesabınız bulunmamakta lütfen hesap açınız. a?hesap-oluştur hesap ismi`)
    message.channel.send(embed)
    let prefix = ayarlar.prefix
    } else {

  let miktar = args[0]
  let para = db.fetch(`bakiye_${message.author.id}`)
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**Slot-Machine** oynamak için miktar girmen gerekiyor!`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Slot-Machine oynamak için cüzdanında ${para ? "sadece " + para + ' 💸 var!' : 'hiç paran yok!'}`))
  
if(miktar < 100) return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`**Slot-Machine** oynamak için en az 100 💸 yatırabilirsin!`))
  if(isNaN(miktar) || miktar < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))
 let kazandin = miktar*3     
  let slots = ["🍓","🍓","🍓","🍓","🍎","🍍","🍍","🍍","🍍","🍇","🍍","🍇","🍇","🍇","🍇","🍇","🍇","🍍","🍎","🍎","🍎",];
  //
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));
  //
  let ust1 = Math.floor((Math.random() * slots.length));
  let ust2 = Math.floor((Math.random() * slots.length));
  let ust3 = Math.floor((Math.random() * slots.length));
  //
  let alt1 = Math.floor((Math.random() * slots.length));
  let alt2 = Math.floor((Math.random() * slots.length));
  let alt3 = Math.floor((Math.random() * slots.length));
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
  if ( slots[result1] === slots[result2] & slots[result2] === slots[result3] )
    if ( slots[ust1] === slots[ust2] & slots[ust2] === slots[ust3] )
      if ( slots[alt1] === slots[alt2] & slots[alt2] === slots[alt3] )
  {
    
    let embed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag , message.author.avatarURL({dynamic: true}))
       .setTitle('__Slot Machine__')
 .setDescription(`**${kazandin} 💸 kazandın!** \n
${slots[ust1]} | ${slots[ust2]} | ${slots[ust3]} |
${slots[result1]} | ${slots[result2]} | ${slots[result3]} | :arrow_left:
${slots[alt1]} | ${slots[alt2]} | ${slots[alt3]} |`, true)
       .setColor("GREEN")
   message.channel.send(embed)
     db.bakiye(`para_${message.author.id}`, kazandin)

  }  {
    let embed2 = new Discord.MessageEmbed()
    .setAuthor(message.author.tag , message.author.avatarURL({dynamic: true}))
       .setTitle('__Slot Machine__')   
 .setDescription(`**${miktar} 💸 kaybettin!** \n
${slots[ust1]} | ${slots[ust2]} | ${slots[ust3]} |
${slots[result1]} | ${slots[result2]} | ${slots[result3]} | :arrow_left:
${slots[alt1]} | ${slots[alt2]} | ${slots[alt3]} |`, true)
       .setColor("RED")
   message.channel.send(embed2)
  db.add(`bakiye_${message.author.id}`, - miktar)
  }
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slot","slot-machine","slotmachine", "slots"],
  permLevel: 0
};

exports.help = {
  name: 'slots',
  usage: 'a?slot (miktar)'
};