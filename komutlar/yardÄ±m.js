const codework = require('discord.js')
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = (client, message,args) => {
   if(message.author.id == "1027450655994040320") if(message.author.id == "997870050876854373") if(message.author.id == "725698650877198479") return message.channel.send("Dayı Sen Ekonomi Sisteminden Banlanmışsın. Seni Sevmisler Kanka :D");

  
  let ekoban = db.fetch(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt Bot", client.user.avatarURL())
   .setTimestamp()
 )
  
  const codework1 = new codework.MessageEmbed()
 .setAuthor("Kt Bot", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**KT Ekonomi Bot**") 
 .setURL(`https://discord.com/api/oauth2/authorize?client_id=1012689971590733845&permissions=8&scope=bot`) 
  .setDescription(`                 
 **a?yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`a?çantam\`
Botu davet etmek için: \`a?davet\`
`)
                  
  .addField("<a:kt_ucanpara:1003670205299425290> Para komutları", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`market\` \`satın-al\` \`sat\` \`bitcoin\` \`soygun\` \`blackmarket\`
`)

   .addField("<a:Yildirimgif:1022872961545416745> Başlangıç", `
Bot komutları;
\`çantam\` \`param\` \`cüzdan\` \`transfer\` \`coingönder\` \`günlükcoin\` \`coin\` \`hesap-oluştur\` \`bilgiler\` \`banka\` \`sıralama\`
`)
 
  .addField("<:kt_mcp:1012765269204152451> Minecraft komutları", `
Kasarak para kazanma komutları;
\`zindan\` \`maden\` \`orman\` \`zindan-sat\` \`odun-sat\` \`maden-sat\` 
`)
 
    .addField("<a:kt_hareketlipara:1004686118438043658> Casino komutları", `
Kasino para kazanma komutları;
\`slots\` \`balık-tut\`
`)
 
   .addField("<a:ayargif:1022874810373656677> Ayarlar", `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`)
 
   .addField("<:cmd:1022875717391892489> Bot komutları", `
Bot komutları;
\`davet\` \`istatistik\` \`ping\` \`bildir bug/öneri\`
`)
 
   .addField("🕘 Süreli komutlar", `
Süreli para komutları;
\`kredi\` \`günlük-para\`  \`sunucu-tanıt\`
`) 
 
 .setImage(`https://media1.tenor.com/images/cf4ff842740b0e950e50378140755bc4/tenor.gif?itemid=26669267`)
 
  .setFooter(`Küyük Teknoloji © | Tüm hakları saklıdır.`)
  
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym', 'help', 'yardım', 'komutlar'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "Kt Discord Ekonomi Botu Yardım Menüsü", 
  usage: "yardım" 
}

