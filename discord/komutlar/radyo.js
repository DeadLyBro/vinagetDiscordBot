const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const path = require("path");


const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio",
    kralpop : "https://www.kralmuzik.com.tr/radyo/kral-pop",
    vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox",
	sinner:"https://www.youtube.com/watch?v=koVHN6eO4Xg&list=PLAEFE27rTx7q8agJ_rIwLUfMbmNAOVUHc&index=1"
}

exports.run =async function(client, message, args) {

  message.delete({timeout: 5000}).catch(console.error);
    if (!message.member.voice.channel) return message.reply("**:bangbang: Sana bağlanmam için ilk önce sesli bir kanala katılmalısın.").then(m => m.delete({timeout: 5000})).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply("**\n \n  🎵 Radyo İstasyonları 🎵  \n \n 1 = Fenomen \n 2 = FenomenTürk \n 3 = KralPop \n 4 = Virgin Radio\n   5 = SinnerClownYoutube\n \n Açmak İçin !radyo <numara> \n Kapatmak İçin !radyo kapat**").then(m => m.delete({timeout: 5000})).catch(console.error);
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            await message.member.voice.channel.join().then(connection => {
				
                var dispatcher =  connection.play(radyo.fenomen);
				dispatcher.setVolume(0.5);
				dispatcher.on('error', error =>
{
console.log(error)
});
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete({timeout: 5000})).catch(console.error);
           console.log("Radyo Kanalı FenomenFM");
		   console.log(connection.play);
		   })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "2") {
           await message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.fenomenfm);
                message.reply("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**").then(m => m.delete({timeout: 5000})).catch(console.error);
          console.log("Radyo Kanalı FenomenTÜRK");

		  })                                                                                    
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voice.channel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voice.channel}.`);
        
            } else if (args[0].toLowerCase() === "KralPop" || args[0] === "3") {
            await message.member.voice.channel.join().then(connection => {
                var dispatcher =  connection.play(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPop` çalınıyor.**").then(m => m.delete({timeout: 5000})).catch(console.error);
            }) 
} else if (args[0].toLowerCase() === "Virgin Radio" || args[0] === "4") {
            await message.member.voice.channel.join().then(connection => {
                var dispatcher =  connection.play(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPop` çalınıyor.**").then(m => m.delete({timeout: 5000})).catch(console.error);
            }) 			
            } else if (args[0].toLowerCase() === "SinnerClown" || args[0] === "5") {
          await  message.member.voice.channel.join().then(connection => {
                var dispatcher =  connection.play(ytdl(radyo.sinner));
                message.reply("🎧 | **Başarılı! `SinnerClown` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete({timeout: 5000000})).catch(console.error);
            })   
        }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rd','RD','radyo','RADYO'],
  kategori: 'Genel',
  permLevel: 0
  
};

exports.help = {
  name: 'radyo',   
  description: 'Radyo Kanalını Ses kanalında Açar.', 
  usage: 'radyo'
};