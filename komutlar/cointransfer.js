const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



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
    
  let transkllanç = message.mentions.users.first()
  if(!transkllanç) return message.channel.send("Lütfen Birini Etiketleyin.");
  let kllanç = message.author
  let para = args[1]
  if(transkllanç == kllanç) return message.channel.send(`Kendinize Coin gönderemezsiniz.`)
  if(transkllanç.bot == true) return message.channel.send(`Botlara cOİN gönderemezsiniz.`)
  if(!transkllanç) return message.channel.send(`Bir kullanıcı girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}coingönder @${client.user.tag} 5\``)
  if(!para) return message.channel.send(`Bir miktar girmelisiniz. Doğru Kullanım;\n\`${client.ekoayarlar.botunuzunprefixi}coingönder @${client.user.tag} 5\``)
  const bakiye = await db.fetch(`coinbakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`coinhesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`coinhesapismi_${kllanç.id}`);
  
  const transbakiye = await db.fetch(`coinbakiye_${transkllanç.id}`);
  const transhesapdurumu = await db.fetch(`coinhesapdurum_${transkllanç.id}`);
  const transhesapismi = await db.fetch(`coinesapismi_${transkllanç.id}`);
  
  if(!hesapdurumu) {
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            if(bakiye < para) return message.channel.send(`:warning: Coininiz Yetersiz!`)
            if(!transhesapdurumu) return message.channel.send(`Transfer etmek istediğin kullanıcının bir hesabı bulunmamakta.`)
            if(transhesapdurumu) {
             
              db.add(`coinbakiye_${message.author.id}`, -para)
                db.add(`coinbakiye_${message.author.id}`, 10 -para)
                db.add(`coinbakiye_${transkllanç.id}`, para)
                transkllanç.send(`${message.author.tag} adlı kullanıcı size \`${para}\` Coin yolladı`)
                message.channel.send(`${transkllanç} adlı kullanıcıya başarıyla \`${para}\` Coin yolladınız.`)
              }
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['coingönder', 'coingonder'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'ctransfer',
    description: 'Hesabınızdan başka bir hesaba para transferi yaparsınız.',
    usage: 'transfer <@kullanıcı>',
}
