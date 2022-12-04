const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('ms');
exports.run = async(client, message, args) => {
	 let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("KT BOT", client.user.avatarURL())
   .setTimestamp()
 )	  
	
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
let cd = 30000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure))
      message.channel.send(`Bir daha çalışmak için biraz beklemen gerekli **${timeObj} saniye** sonra tekrar dene!`)
        .then(msg => {
        msg.delete({ timeout: `${cd}` }) // 5000 = 5 saniye
    })
    .catch();
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `a?hesap-oluştur <isim>`")
        let gelcekpara = Math.round(Math.random() * 200)
        db.add(`bakiye_${message.author.id}`, gelcekpara)

      message.channel.send('Çalışarak` '+gelcekpara +"` Para Kazandın !")
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çalış', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};