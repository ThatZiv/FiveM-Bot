// This whole project was poorly made, sorry for the bad code :)
exports.run = async (client, message, args) => {
  
    var util = require("../fivem.js");
      /* ----------------------------- */
      message.delete();
      if (servers[message.guild.id].guild === message.guild.id) { 
      try {
      var arg = `${servers[message.guild.id].ip}`
   /*    var args = `${servers[message.guild.id].ip}` */
      let api = `http://${arg}/players.json`
      let api2 = `http://${arg}/info.json`
   /*    if (!args) {return util.embed("Please Specify a Direct-IP address ex: `"+config.prefix+"players thatziv.ddns.net:30120`")}
      if (!message.content.includes(":")) {return util.embed("Please Specify a port ex: **"+config.prefix+"players thatziv.ddns.net__:30120__**")} */
      req(api2, function (err, response, main) {
      req(api, function (err, response, body) {
        if (err) {
          util.zembed("That server is offline or does not exist... \n**Console:**\n```js\n"+err+"```")
        }
        else {
          try {
          var start = JSON.parse(body)
          var start2 = JSON.parse(main)
 
          if (start == null || start == []) {
            var e = 0
        } else {
            var e = start.length;
        }

          var embed = new Discord.RichEmbed()
          .setColor(color)
          .setAuthor(title, client.user.avatarURL)
          .setThumbnail(`${config.cdn}/assets/fivem.png`)
          .setDescription(`**${e}** out of **${start2.vars.sv_maxClients}** Players.\n\n*(First 25 People)*`)
         start.forEach(function(element) {
          var sv = `**${element.name}**\nID: **${element.id}** Ping: **${element.ping}**`;

        embed.addField(`**${element.name}**`, `ID: **${element.id}** Ping: **${element.ping}**`)
  
        })
        
          message.channel.send({embed: embed});
        } catch (err) {
          util.embed("That server is offline or does not exist...\n**Console:**\n```js\n"+err+"```")
        }
      }

      })
      
    })
    
    } catch (err) {
        util.embed("That server does not exist. \n**Console:**\n```js\n"+err+"```");
    }
   } else {
    return util.embed("Please **set** a Direct-Address for this server. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with port.__***")
  
  } 
  };

    

var exampleJSON = [
{
"endpoint": "[::ffff:5.15.226.104]:27594",
"id": 294,
"identifiers": [
"steam:110000114ff0dc9",
"license:12eaf8ef61955729188ff56b08e820c8a61bcbc3",
"ip:5.15.226.104"
],
"name": "Leonadro Di la Londra",
"ping": 165
}
]