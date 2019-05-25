//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//            Complied and Created
//            By Zua (ThatZiv)
//            Purpose: "FiveM Bot"
//            Version: 7.1.3
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Load up the discord.js library (node.js)
global.Discord = require("discord.js");

global.client = new Discord.Client();

global.config = require("./cmds/config/config.json");
global.package = require("./package.json");
global.servers = require('./auth/servers.json')
global.req = require('request');
//global.snek = require("snekfetch")
global.notes = require("./auth/notes.json")
global.news = require("./auth/news.json").body;
global.modules = require("./modules")
global.log = require("./modules/log") 
// RCON UPDATE
global.Q3RCon = require('quake3-rcon');
global.rcondb = require("./auth/rcon.json");
global.crypto = require("crypto-js");
// NATIVES
global.tempNatives = require("./auth/temp.json")
global.listNatives = require("./auth/names.json")

global.fs = require("fs");
global.dns = require('dns');
global.sleep = require("system-sleep");
global.createHash = require('hash-generator'); // horrible idea btw
global.Fuse = require("fuse.js")
global.colors = require("colors")
/* dumped from premium build */
global.state = config.title;
global.icon = `http://thatziv.ddns.net/assets/fivem.png`;

const express = require('express');
global.set = new Set();
// User Config
global.title = config.title;

global.prefix = config.prefix;

global.color = config.color;

global.premcolor = config.premcolor;

global.author = package.author;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Error thing
zembed("An Error Occured...\n**Console:**\n```js\n"+error+"```");
 */

client.on("message", message => {

  if (!message.content.startsWith(config.prefix)) return;
  if (set.has(message.author.id)) {
    message.delete();
    return zembed(`<@${message.author.id}>, Please wait 3 seconds between using commands.`)
  }
  set.add(message.author.id)

  module.exports.zembed = (args, colour) => {
       
    let embed = new Discord.RichEmbed()
    .setDescription(args)
    .setColor(colour)
    message.channel.send({ embed: embed })
    .then(msg => {
        msg.delete(5000)
    })
    return;

}

module.exports.good = (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .addField("Successful.", args)
    .setColor('#1daf4c')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.bad= (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .addField("Failed.", args)
    .setColor('#e22424')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.error = (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .setDescription(args)
    .setColor('#e22424')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.embed = (args) => {

    let embed = new Discord.RichEmbed()
    .setDescription(args)
    .setColor(color)
    message.channel.send({ embed: embed })
    return;
    

}
module.exports.num = (min, max) => {
return Math.floor(Math.random() * (max - min)) + min;
}
  

  /////// LOG

  /* Deprecated
  function log(content) {
    fs.appendFile('log.txt', `[${today}] | ${content}\n`, (err) => {  
      if (err) throw err;
  });
  } */

 /*  module.exports.log = function (content) {
    fs.appendFile('index.html', `
  <tr>
      <th scope="row">${new Date()}</th>
          <td>${content}</td>
          <td>${message.guild}</td>
  </tr>`, (err) => {
        if (err) throw err;
      });
  } */
  //////


 
  // z-embed
  function zembed(args) {
    let embed = new Discord.RichEmbed()
      .setDescription(args)
      .setColor(color)
    message.channel.send({ embed: embed })
      .then(msg => {
        msg.delete(5000)
      })
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

    zembed("Sorry, That Command Doesn't Exist\n\n**Console**: ```js\n" + err + "```")
  }
});

//initial start funtion
client.on("ready", () => {
  var statuss = [`${client.users.size} Users | ${config.prefix}help`, `${client.guilds.size} Servers | ${config.prefix}help`]
  setInterval(function start() {
    log(`(${client.user.username} Bot): ${colors.green(`Online.`)}`);
    
        var rand = statuss[Math.floor(Math.random() * statuss.length)];
        global.activity = `${client.guilds.size} Servers | ${config.prefix}help`;     
	      client.user.setActivity(`${rand}`, { type: "WATCHING" });
        /* client.user.setActivity(`Under Maintenance`, { type: "WATCHING"}); */
        /* client.user.setActivity(`${client.guilds.size} Servers | ${config.prefix}help `, { type: "WATCHING"}); */
    
    client.user.setStatus('online');

    return start;
  }(), 180000);
  // 180000 = 3 mins i think
});


client.on("guildCreate", guild => {
  log(`(${config.title}): New guild joined: ${guild.name} (id: ${guild.id})`);

});

client.on("guildDelete", guild => {
  log(`(${config.title}): Removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // FiveM Bot API -> cdn:1234/api (HTTP)
  setInterval(function start() {
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    fs.writeFile('./modules/api.json', `
    {
    "ping": ${Math.round(client.ping)}, 
    "users": ${client.users.size}, 
    "servers": ${client.guilds.size}, 
    "uptime": ["${hours} hours", 
    "${minutes} minutes", "${seconds} seconds"], 
    "news_simplified": "${news}", 
    "news_html": "${news.html}"
    }`, 
    (err) => {
      if (err) { console.error(err) }
    });
    return start;
  }(), 600000);
});



client.login(config.token);
