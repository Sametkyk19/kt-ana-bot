const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
	
if(message.author.id !== "842005344027672576") if(message.author.id !== "994246863903531151") return message.channel.send("hoop bilader sahip komutu bu");
  const silinecekkllnc = message.mentions.members.first();
  let para = args[1]
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiye_${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismi_${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  await db.add(`bakiye_${silinecekkllnc.id}`, -para)
  
  
  message.channel.send(`:+1:`)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['parasil'],
    permLevel: 0
}

exports.help = {
    name: 'para-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}
