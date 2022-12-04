const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('ms')
const db = require('quick.db')
let dbs = require("coders.db");

exports.run = (client, message, args) => {
  let kllanç = message.mentions.users.first() || message.author;

  if (!message.member.hasPermission("ADMINISTRATOR")) if(!message.author.id("842005344027672576")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);  let mesaj = args.slice(0).join(' ');
  let etkt = message.mentions.users.first();
  if (!etkt) return message.channel.send("Birini Etiketlemelisin!")
  
  
  db.set(`${kllanç}.kalkan`, false);
           db.delete(`${kllanç}.kalkan_süre`)// 1 gün
           db.delete(`${kllanç}.kalkan_süre2`, Date.now())
  message.channel.send("BAŞARILI! :+1:")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kalkansil'],
  permLevel: 0
};

exports.help = {
  name: 'kalkansil',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};