const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');
exports.run = async (client, message, args) => {   
 let ekoban = db.get(`sistemban_${message.author.id}`)
 if (ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/8cVm2u2Y8r)'na katılarak söyleyebilirsin.
   `)
   .setFooter("Kt Ekonomi Botu", client.user.avatarURL())
   .setTimestamp()
 )
    const hesapdurumu = await db.fetch(`hesapdurum_${message.author.id}`);
  const hesapismi = await db.fetch(`hesapismi_${message.author.id}`);
  const olta = await db.fetch(`olta_${message.author.id}`)
  if(!olta) return message.channel.send(`Hiç oltanız bulunamamkta lütfen satın alınız! a?market`)
  if(!hesapdurumu) {
    message.channel.send(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
   let timeout = 15000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`baliktutma_${message.author.id}`)

   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Balık tutmak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
     let gerekenpara = 250
     let para = db.fetch(`bakiye_${message.author.id}`)
     if(para < 250) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))

                                                .setDescription(`Balık tutmak için balıkçı dayıdan olta kiralamalısın! Gereken Para: 250 💸`))
        const result = [
          "KAZANDIN",
          "KAYBETTİN"
        ] 

        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Balık oltadan kaçtı","Hırsızın biri balığını çaldı","Martının biri gelip balığını kaptı"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "KAYBETTİN") {
 var kaybettin = 300         
      message.channel.send(new Discord.MessageEmbed()

                           .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} ve ${kaybettin} 💸 kaybettin!`));
         
      await db.set(`baliktutma_${message.author.id}`, Date.now());
       await db.add(`bakiye_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = ["Çipura tuttun","Hamsi tuttun","Kolyoz tuttun","İsavrit tuttun"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(350,600,1000)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} ve dayı sana ${kazandın} 💸 ödedi!`)
      message.channel.send(embed)   
     await db.set(`baliktutma_${message.author.id}`, Date.now());
    await db.add(`bakiye_${message.author.id}`, kazandın);

        }}}}
exports.conf = {
  enabled: true,
  aliases: ["balık-tut"],
};

exports.help = {
  name: 'Balık Tutma',
};