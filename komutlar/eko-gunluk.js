const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')
const DBL = require('dblapi.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



exports.run = async (client, message, args) => {
  if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");

  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTA0NTE1Nzg4MDI2ODM5MDQiLCJib3QiOnRydWUsImlhdCI6MTY2MTUxMzc3Mn0.9xGuOLhiT_i_81fyg3CaMzRA3blMx-vi7sCV-ZaCgag', client); //Dbl Tokeninizi Yazınız.
  
let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt Ekonomi Bot", client.user.avatarURL())
   .setTimestamp()
 )	  
	

  // ------------------------------------------------------------------  
  
  ///////////////////////////////////////
// Bota Oy Verince Dm Üzerinden Mesaj Gönderme Ayar.   
  
  
  //let DBLl = dbl.user.send
  
     // if (DBLl) return message.user.send("Botumuza Oy Verdiğiniz İçin Size Minnettarız. \n \n Küyük Teknoloji (KT) Discord Destek Sunucusu: https://discord.gg/xKzGMUnZmh")
  
  
  ///////////////////////////////////////
  
// -------------------------------------------------------------------  
  
 
  let timeout = 86400000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`günlükpara_${message.author.id}`);

  ///////////////////////////////////////

  //  ZAMAN DİLİMLERİ (SAAT, DAKİKA, SANİYE)
  
    let hours =  86400000
  
    let minutes = 86400000
    
    let seconds = 86400000
    
  ///////////////////////////////////////
   
    if (timeout !== null )
  
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Günlük ödülünü tekrar alabilmek için **${time}** ***saat*** beklemelisin!`)
   
    .catch();
    } else {
      if(client.ekoayarlar.dbloy == false) {
        db.set(`günlükpara_${message.author.id}`, Date.now())
        if(client.ekoayarlar.rastgelepara == true) {
          const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
          db.add(`bakiye_${message.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()
          .setColor(client.ekoayarlar.renk)
          .setDescription(`**Günlük Para**`)
          .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)
          message.channel.send(para1)
        } else {
          if(client.ekoayarlar.rastgelepara == false) {
            db.add(`bakiye_${message.author.id}`, client.ekoayarlar.günlükpara)
            let para1 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`**Günlük Para**`)
            .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
            message.channel.send(para1)
          }
        }
      } else {
        if(client.ekoayarlar.dbloy == true) {
          const datal = new DBL(client.ekoayarlar.dblkey, client)
          dbl.hasVoted(message.author.id).then(voted => {
            if(voted) {
              db.set(`günlükpara_${message.author.id}`, Date.now())
              if(client.ekoayarlar.rastgelepara == true) {
                const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
                db.add(`bakiye_${message.author.id}`, randomizer)
                let para1 = new Discord.MessageEmbed()
                .setColor(client.ekoayarlar.renk)
                .setDescription(`**Günlük Para**`)
                .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)
                message.channel.send(para1)
              } else {
                if(client.ekoayarlar.rastgelepara == false) {
                  db.add(`bakiye_${message.author.id}`, client.ekoayarlar.günlükpara)
                  let para1 = new Discord.MessageEmbed()
                  .setColor(client.ekoayarlar.renk)
                  .setDescription(`**Günlük Para**`)
                  .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
                  message.channel.send(para1)
                }
              }
            } else {
              return message.channel.send(`${client.ekoayarlar.dblmsj}`)
            }
          })
        }
      }
  
}


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['günlük-para', 'günlük'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'günlükpara',
    description: 'Günlük para alırsınız.',
    usage: 'günlükpara'
}