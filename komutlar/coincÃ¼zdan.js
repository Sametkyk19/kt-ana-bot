
const Discord = require("discord.js");
const db = require("quick.db");
var ayarlar = require('../ayarlar.json');
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
	 let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt", client.user.avatarURL())
   .setTimestamp()
 )	  
	
  let member = message.author;
  let member2 = message.mentions.members.first()
  let kllanç = message.mentions.users.first() || message.author.id;
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  
  const hesapdurumu = await db.fetch(`coinhesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`coinhesapismi_${kllanç.id}`);
  const hesaptarihyıl = await db.fetch(`hesaptarihiçdayreyıl-${kllanç.id}`);
  const hesaptarihay = await db.fetch(`hesaptarihiçdayreay-${kllanç.id}`);
  const hesaptarihgün = await db.fetch(`hesaptarihiçdayregün-${kllanç.id}`)
  
  const coinbakiye = await db.fetch(`coinbakiye_${kllanç.id}`)
if(!member2) return message.reply("Bir Kullanıcı Etiketlermisin.")
  if (!hesapdurumu) {
    if (args[0])
      return message.reply(
        `Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`
      );
    message.reply(
      `İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`
    );
  } else {
    if (hesapdurumu) {
        const embedczdn = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(
            `${member2} Kullanıcısının Coin Miktarı: \`${coinbakiye}\` `
          );
        message.channel.send(embedczdn);
      }
}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["coinc"],
  permLevel: 0,
  katagori: "Ekonomi"
};
exports.help = {
  name: "coincüzdan",
  description: "Bakiyenizi gösterir.",
  usage: "cüzdan <@kullanıcı>"
};
