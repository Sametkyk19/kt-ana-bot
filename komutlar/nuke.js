const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
let etk = message.author.tag
  message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
    message.channel.delete()
    knl.send(`**Nuked By** **\`${etk}\`** <a:Yildirimgif:1022872961545416745>`)
});
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nuke","nuk","nk"],
  permLevel: 0
};

exports.help = {
    name: 'nuke',
  description: 'belirtilen kanalı silip tekrar oluşturur ',
  usage: 'nuke'
};
