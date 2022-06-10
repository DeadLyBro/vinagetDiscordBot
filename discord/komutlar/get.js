const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.run = async (client, message, args) => {
if(message.channel.id == "974003541653983253"){
const data = await fetch("http://146.19.168.139/index.php?link="+args[0]) .then(response => response.json());
const sonkonu = data;
 var mesaj=sonkonu["FileName"] + `(` + sonkonu["FileSize"] +`)`;
   if(sonkonu.hata){
	   let konu = new Discord.MessageEmbed()
  .setAuthor(sonkonu["hata"], message.author.displayAvatarURL())  
  .setColor('RANDOM')
  .setDescription(sonkonu["msg"])
  .addField("» Support", `[TopDebrid.FuN](https://topdebrid.fun)`  , false)
  .setFooter('User using this command ' + message.author.tag, message.author.displayAvatarURL())
 
message.channel.send({embed: konu});
	   
   }else{
 let konu = new Discord.MessageEmbed()
  .setAuthor('Your Link Translation Request has been fulfilled', message.author.displayAvatarURL())  
  .setColor('RANDOM')
  .setDescription(`**URL:** \` ${sonkonu["getlink"]} \` \n   **File Name:** \` ${sonkonu["FileName"]} \` \n  **File Size:** \` ${sonkonu["FileSize"]} \``)
  .addField("» Download", `[${mesaj}](${sonkonu["URL"]})`  , false)
  .setFooter('User using this command ' + message.author.tag, message.author.displayAvatarURL())
 
message.channel.send({embed: konu});
console.log("Link Generate by "+message.author.tag + " URL => " +sonkonu["getlink"]+" File Size =>("+sonkonu["FileSize"]+")")
}
 }else{
		   let konu = new Discord.MessageEmbed()
  .setAuthor("This command does not work on this channel!", message.author.displayAvatarURL())  
  .setColor('RANDOM')
  .setDescription("I do not provide service on this channel")
  .addField("» Support", `[TopDebrid.FuN](https://topdebrid.fun)`  , false)
  .setFooter('User using this command ' + message.author.tag, message.author.displayAvatarURL())
 
message.channel.send({embed: konu}); 
	 
 } 

 }       


exports.conf = {
  aliases: ['getlink','gt'],
  permLevel: 0,
  kategori: 'Genel'
};
exports.help = {
  name: 'get',
   description: 'Güncel Konuları Gösterir.',
  usage: 'get'
};