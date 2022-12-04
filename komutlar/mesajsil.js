const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  if (args[0] > 100) return message.channel.send("**En Fazla 100 Mesaj Silebilirim** <a:kt_yukleniyor:1004686817292984382>")
  .then(msg => {
        msg.delete({ timeout: 5000 }) 
    })
  message.delete()
  message.channel.bulkDelete(args[0] +1).then(() => {
    message.channel.send(`<a:kt_Onay:1002916440199925890> ${args[0]} tane mesaj silindi`)
    .then(msg => {
        msg.delete({ timeout: 5000 }) 
    })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear', 'sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle '
};