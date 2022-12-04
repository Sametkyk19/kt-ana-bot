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
   `)
   .setFooter("KT Bot", client.user.avatarURL())
   .setTimestamp()
 )

	
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
  const coinbakiye = await db.fetch(`coinbakiye_${kllanç.id}`)

  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.MessageEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Hesap Bakiyesi: ${bakiye}\n Hesap Oluşturma Tarihi: Bilinmiyor`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`<:kt_member:1039901605077717044> **Hesap İsmi:** ${hesapismi}\n\n <a:kt_ucanpara:1003670205299425290> **Bakiye:** ${bakiye}\n\n :coin: **Coin:** ${coinbakiye}\n\n Hesap Oluşturma Tarihi: ***${hesaptarihay}/${hesaptarihgün}/${hesaptarihyıl}***`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
 
}

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bilgilerim"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bilgiler',
    description: 'Bilgilerinizi gösterir.',
    usage: 'bilgiler <@kullanıcı>',
}