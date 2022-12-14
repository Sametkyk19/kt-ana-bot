const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
   let ekoban = db.get(`sistemban_${msg.author.id}`)
 if(ekoban) return msg.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", msg.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("KT", client.user.avatarURL())
   .setTimestamp()
 )
  const yasak = client.emojis.cache.get('801155304205189151');
      let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların parası bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
        let sira = '';
        var str = ''
        const sorted = msg.guild.members.cache.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`bakiye_${a.user.id}}`) - db.fetch(`bakiye_${a.user.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.cache.size)
        const mappedName = top10.filter(o => !o.bot).map(s => s.user.id);
        const mappedLevel = top10.filter(o => !o.bot).map(s => db.fetch(`bakiye_${s.user.id}`) || 0)
        const emoji = client.emojis.cache.get('801155287842947133');

        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < 5; i++) {
            var lvl = mappedLevel[i]
      
            if(msg.author.id == mappedID[i]) {
                str += `**${i + 1} - ** ***${lvl}*** Parası Bulunarak <@${mappedName[i]}> 1. Sırada! \n`
            }

            if(msg.author.id == mappedID[i]) {
                str += `**${i + 2} - ** ***${lvl}*** Parası Bulunarak <@${mappedName[i]}> 2. Sırada! \n`
                
                }
                
                 if(msg.author.id == mappedID[i]) {
                str += `**${i + 3} - ** ***${lvl}*** Parası Bulunarak <@${mappedName[i]}> 3. Sırada! \n`
                
                }
                
                 if(msg.author.id == mappedID[i]) {
                str += `**${i + 4} - ** ***${lvl}*** Parası Bulunarak <@${mappedName[i]}> 4. Sırada! \n`
                
                }
                
                 if(msg.author.id == mappedID[i]) {
                str += `**${i + 5} - ** ***${lvl}*** Parası Bulunarak <@${mappedName[i]}> 5. Sırada! \n`
            }
        }

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
        let wEmbed = new Discord.MessageEmbed()
        .setTitle(`KT Ekonomi Botu`)
        .setColor('RANDOM')
        .setDescription(`${str}`)
        msg.channel.send(wEmbed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıralama", "lider", "lidertablosu"],
  permLevel: 0,
    kategori: "lvl"
};

exports.help = {
  name: 'sıralama',
  description: 'Seviye sisteminin sunucudaki liderlik tablosunu gösterir.',
  usage: 'sıralama'
};