const db = require('quick.db')
var ayarlar = require('../ayarlar.json')
const ms = require('ms');
const Discord = require('discord.js')
    
exports.run = async (client, message, args, config) => {
    
  const commonTags = require("common-tags");
  const util = require("util");
   let { MessageEmbed } = require("discord.js");
if(message.author.id !== "842005344027672576" && message.author.id !== "994246863903531151")  return message.channel.send("<:Yldz2Png:806136574328176671> sahip komutu bu");
    function cleanText(text) {
      if (typeof text === "string") {
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      } else {
        return text;
      }
    }

    try {
      let executedIn = process.hrtime();
      let result = eval(args.join(" "));
      result = cleanText(result);
      result = util.inspect(result);
      executedIn = process.hrtime(executedIn);
      executedIn =
        executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);

      let embed = new MessageEmbed();
         embed.setColor("RANDOM")
      embed.setDescription(commonTags.stripIndents`<a:YidirimGif:1022872961545416745> ${executedIn.toFixed(3)} milisaniyede çalıştırıldı 
    `);
      message.channel.send({ embed });
    } catch (error) {
      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      <a:twitchbit:793899916614828062> Hata Çıktı <a:twitchbit:793899916614828062>
      \`\`\`js
      ${cleanText(error)}\`\`\`
    `);
        embed.setColor("BLUE")
 message.channel.send({ embed });
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["evals"], 
  permLevel: 0 
};

exports.help = {
  name: 'eval'
};