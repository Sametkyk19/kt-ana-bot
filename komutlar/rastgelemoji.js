const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
	  if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");
	   
  let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `))
  
  
// --------------------------------------------------------------------
// EMOJİLER
  
  var gifler = [

    //                1
    "<a:kt_prizm:1002916619783262258>",

    //                2
 
    "<a:siyahkrmzta:1007376832758300812>",

    //                3
    
    "<:kt_nitro:1002918436839620689>",

//      4
    
    ":nerd:",

//      5
    
    ":eyes:",

//      6
    
    ":angel:",

//       7
    
    ":luggage:",

//      8
    
    ":spider_web:",

//         9
    
    ":cloud_tornado:",
    
//       10

    ":heart_on_fire:",

//      11

    
    ":kiss:",
    
//     12

    ":yarn:",
    
//     13
    
    ":alien:",

//     14
    
    ":ghost:",
    
//     15 
    
    ":tooth:",
    
//     16 
    
    ":goggles:",
    
//     18 
    
    ":crown:",
    
//     19   
    
    ":ocean:",
    
//     20   
    
    ":kaaba:",
    
//     21  
    
    ":printer:",
    
//     22  
    
    ":gem:",
    
//     23  
    
    ":moneybag:",
    
//     24  
    
    ":coin:",
    
//     25  
    
    ":gear:",
    
//     26   
    
    ":dna:",
    
//     27   
    
    ":shower:",
    
//     28   
    
    ":star_and_crescent:",
    
//     29   
    
    ":sweat:",
    
//     30  
    
    ":rage:",
    
//     31   
    
    ":gloves:",
    
//     32  
    
    ":zombie:",
    
//     33
    
    ":santa:",
    
//     34
    
    ":ring:"
  ];
  
  
// -----------------------------------------------------------------------------------------
  
  
  
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  
  message.channel.send(resimler);
  message.channel.send("Al Bakalım :D")
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emocii", "remoji", "emoji", "rastgelemoji", "rastgeleemoji", "remoci", "remocii"],
    permLevel: 0
}

exports.help = {
    name: ["emocii"],
    description: 'Rastgele Emoji Gönderir..',
    usage: 'a?remoji'
}