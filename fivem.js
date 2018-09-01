//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//            Complied and Created
//            By Zua (ThatZiv)
//            Purpose: "FiveM Bot"
//            Version: 1.0.0
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Load up the discord.js library (node.js)
global.Discord = require("discord.js");

global.client = new Discord.Client();

global.config = require("./cmds/config/config.json");
global.package = require("./package.json");
global.servers = require('./servers.json')
global.req = require('request');
global.fs = require("fs");
global.dns = require('dns');
global.sleep = require("system-sleep")
global.set = new Set();
// User Config
global.title = config.title;

global.prefix = config.prefix;

global.color = config.color;

global.author = package.author;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

/* Error thing
zembed("An Error Occured...\n**Console:**\n```js\n"+error+"```");
 */

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {

    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});



client.on("message", message => {

  if(!message.content.startsWith(config.prefix)) return;
  if(set.has(message.author.id)) {
    message.delete();
    return zembed(`<@${message.author.id}>, Please wait 3 seconds between using commands.`)
  }
    set.add(message.author.id)

  module.exports.zembed = function (args, colour) {
    let embed = new Discord.RichEmbed()
      .setDescription(args)
      .setColor(colour)
    message.channel.send({ embed: embed })
    return;
  }

  module.exports.good = function (args) {
    let embed = new Discord.RichEmbed()
    .setAuthor(title, client.user.avatarURL)
      .addField("Successful.", args)
      .setColor('#1daf4c')
      .setThumbnail(`${config.cdn}/assets/check.png`)
    message.channel.send({ embed: embed })
    return;
  }

  module.exports.embed = function (args) {
    let embed = new Discord.RichEmbed()
      .setDescription(args)
      .setColor(color)
    message.channel.send({ embed: embed })
    return;
  }
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  module.exports.num = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
global.num = rand(1111, 999999);
  // z-embed
function zembed(args) {
  let embed = new Discord.RichEmbed()
    .setDescription(args)
    .setColor(color)
  message.channel.send({ embed: embed })
  return;
}
setTimeout(() => {
  set.delete(message.author.id) 
}, 3000)

  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./cmds/${command}.js`);

    commandFile.run(client, message, args);
  } catch (err) {

    zembed("Sorry, That Command Doesn't Exist\n\n**Console**: ```js\n"+err+"```")
  }
});

//initial start funtion
client.on("ready", () => {

    setInterval(function start(){
        console.log(`[${client.user.username} Bot]: INITIALIZED...`);
        client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help `, { type: "WATCHING" });
        client.user.setStatus('online');
        
        return start;
      }(), 1800000);
      // 1800000 = 30 mins
});
/* 
  console.log(title, `INITIALIZED...`);
  client.user.setActivity(`${config.prefix}help | ❌Unstable`, { type: "LISTENING" });
  client.user.setStatus('dnd');

  console.log(title, `INITIALIZED...`);
  client.user.setActivity(`${config.prefix}help | ✔️Online`, { type: "LISTENING" });
  client.user.setStatus('online');
*/
client.on("guildCreate", guild => {
  console.log(`[${config.title}]: New guild joined: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", guild => {
  console.log(`[${config.title}]: Removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

 

});

client.login(config.token);