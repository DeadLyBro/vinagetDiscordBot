const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

  if(args[0] === "Konular" || args[0] === "konular") {
              let konular = new Discord.MessageEmbed()
  .setAuthor('Konular', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
    .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=825742618528972890&scope=bot&permissions=2108157183)` + "** | **" + `[Web Sitesi](https://sinnerclownceviri.com)  `, false)
              return message.channel.send(Konular)
         
       
       return;
    }

//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
       .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=825742618528972890&scope=bot&permissions=2108157183)` + "** | **" + `[Web Sitesi](https://sinnerclownceviri.com)  `, false)
              return message.channel.send(Eğlence)
  
      
           return;
  }
//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım komut\` \n **Örnek:** \`${prefix}yardım Konular\``)
    .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=825742618528972890&scope=bot&permissions=2108157183)` + "** | **" + `[Web Sitesi](https://sinnerclownceviri.com)  `, false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'yardım',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'yardım', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
