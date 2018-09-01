exports.run = async (client, message, args) => {
    var util = require("../fivem.js");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = `${servers[message.guild.id].ip}`    
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (errr, response, main) {
    req(api, function (err, response, body) {
      if (err) {
        console.log(err);
        util.embed("That server is offline or does not exist... \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.embed("That server is offline or does not exist... \n**Console:**\n```js\n"+err+"```")
        }
         // deprecated due to instablility
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}
        if (start === null || start === []) {
            var e = 0
        } else {
            var e = start.length
        }
        if (!start2.vars.tags) {var tags = 'None'} else {var tags = start2.vars.tags}
        var resourcee = JSON.stringify(start2.resources)
        if (resourcee.length > 850) {
            var resourc = `There are too many...\n(Passed Discord Char Limit)`
        } else {
            var resourc = resourcee;
        }
        if (err || errr) { 
            util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")
            return;
         } else {
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(title, client.user.avatarURL)
        .setDescription(`Server Information`)
     
        .addField("Total Players", `${e}/${start2.vars.sv_maxClients}`, true)
        .addField("Script Hook", `${start2.vars.sv_scriptHookAllowed}`, true)
        .setThumbnail(`${config.cdn}/assets/fivem.png`)
        .addField("Server Version", `${start2.version}`, true)
        .addField("Tags", `${tags}`)

        .addField("Server", `${start2.server}`)
     
        .addField("OneSync", `${start2.vars.onesync_enabled}`)
        .addField("Resources", "```json\n"+resourc+"```")

        //.attachFile(`cache/${num}.png`)
      
        message.channel.send({embed: embed});
        }
    }
// Since the addField limit is 25, is there a way to use `forEach` function for an array and make it go into a 
}) 
})
  } catch (err) {
      util.embed("That server does not exist. \n**Console:**\n```js\n"+err+"```");
  }
} else {
    return util.embed("Please **set** a Direct-Address for this server. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with port.__***")
  } 
};
