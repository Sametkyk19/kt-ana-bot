const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
const data = require("quick.db");
const queue = new Map();
const ytdl = require("ytdl-core");
const db = require("quick.db")

//-----------------------------------------------\\
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("KT Bot pinglendi.");
  response.sendStatus(200);
});
//app.listen(8000);

//----------------Projeyi Aktif Tutma----------------\\

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//-----------------------------------------------\\


client.ayarlar = {
"prefix":"a?",
"sahip":["842005344027672576","994246863903531151"],
}
client.ekoayarlar = {
  parabirimi: "TL", //Para Birimi TL İsterseniz Dolar Euro Vb. Para Birimleri Girebilirsiniz.
 
  // BOT AYARLARI
 
  botunuzunprefixi: "a?",
  botunuzunidsi: "822534260953972746", 
 botismi: "KT Ekonomi Botu",
  renk: "RANDOM", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "İsimsiz", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  admin: [""],//["id","",""]
  dbloy: true, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTA0NTE1Nzg4MDI2ODM5MDQiLCJib3QiOnRydWUsImlhdCI6MTY2MTUxMzc3Mn0.9xGuOLhiT_i_81fyg3CaMzRA3blMx-vi7sCV-ZaCgag", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  dblmsj: "Bu komutu kullanabilmek için Kt Genel bota oy vermeniz gerekmektedir. Oy vermek için a?oyver", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
  // EKONOMİ AYARLARI

  rastgelepara: false, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 10, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 200, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 350, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  başlangıçparası: 200, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  
  // COİN AYARLARI

  günlükcoin: 1, // "RASTGELE COİN "FALSE" İse Burayı Ayarlayabilirnsiz."
  rastgelecoin: true,// Bunu "TRUE" Yapar iseniz "MAX COİN" ve "MİN COİN" Aktif Olur, Eğer Bunu "FALSE" Yapar İseniz Günlük Coin Aktif Olur
  maxcoin: 15, // GÜNLÜH COİNDE KULLANICININ ALABİLECEĞİ MAX COİN
  mincoin: 3,// GÜNLÜH COİNDE KULLANICININ ALABİLECEĞİ MİN COİN
  baslangıccoin: 3 // kullanıcının a?esap-oluştur (hesap ismi) Komutunu Kulladığı Zaman Başlangıç Coini Olarak Alacağı Coini Belirler.

}



// SA-AS START

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});


/////////////////

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "selamunaleyküm") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});

/////////////////

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "Selam") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});
/////////////////

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "Sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});
/////////////////

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sA") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});

/////////////////

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "Selamunaleyküm") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
 
    }
  }
});

// SA-AS FİNİSH


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.on("message", async (message) => {
  let süre = setTimeout(async() =>{
    if(message.author.bot) return
  await db.delete(`soygun_${message.author.id}`)
    console.warn(`${message.author.tag} (${message.author.id}) adlı kullanıcının soygun sistemi sıfırlandı.`)
    clearInterval(süre)
  }, 300000)
  })

client.login(ayarlar.token);

client.on('guildCreate', guild => {

let rrrsembed = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" Bot Eklendi! ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('1028289557839487066').send(rrrsembed);

});

client.on('guildDelete', guild => {

  let rrrsembed = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setTitle(" Bot Atıldı! ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('1028289557839487066').send(rrrsembed);
  
  });

  client.on("message", async msg => {
    const ms = require("parse-ms");
  
    const sure = await data.fetch(`${msg.author.id}.kalkan_süre2`)
    const zaman = 86400000;
  
    let cooldown = zaman;
  
    let süre = sure
  
    if (süre !== null && cooldown - (Date.now() - süre) > 0) {
      let timeObj = ms(cooldown - (Date.now() - süre));
            console.log(
          `${msg.author.tag} - ${timeObj.hours} saat  ${timeObj.minutes} dakika ${timeObj.seconds} saniye içinde hala kalkan sürüyor`
        );
    } else {
        data.delete(`${msg.author.id}.kalkan`)
        data.delete(`${msg.author.id}.kalkan_süre`)
        data.delete(`${msg.author.id}.kalkan_süre2`)
    }
  });
//--------BOT SES SİSTEMİ--------// 
client.on("ready", async function() {
const voiceChannel = "1036216154995310623"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})
//--------BOT SES SİSTEMİ--------// 
