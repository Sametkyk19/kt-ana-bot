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
   .setFooter("Asperius", client.user.avatarURL())
   .setTimestamp()
 )
if(message.author.id !== "842005344027672576") if(message.author.id !== "994246863903531151") return message.channel.send("hoop bilader sahip komutu bu");
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiye_${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismi_${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiye_${silinecekkllnc.id}`)
  db.delete(`hesapdurum_${silinecekkllnc.id}`)
  db.delete(`hesapismi_${silinecekkllnc.id}`)
  
  db.delete(`coinbakiye_${silinecekkllnc.id}`)
  db.delete(`coinhesapdurum_${silinecekkllnc.id}`)
  db.delete(`coinhesapismi_${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hesap-sil', 'hesapsil'],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}