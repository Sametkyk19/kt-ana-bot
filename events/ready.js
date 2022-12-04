const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
client.user.setPresence({
        game: {
            name: ` ❤️ KT`,
            type: 'WATCHING'   //WATCHING - İZLİYOR LISTINING - DİNLİYOR
        },
        status: 'idle'   //online - Çevrimiçi idle - Boşta
});
  var msgArray = [
"a?yardım",
"a?davet",
"Efsanevi Kt Bot Ekonomi sistemi",
"KÜYÜK TEKNOLOJİ GURURLA SUNAR... 🔥"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`)
}, 5000);
}