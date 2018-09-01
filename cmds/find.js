exports.run = async (client, message, args) => {
    var util = require("../fivem.js");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = `${servers[message.guild.id].ip}`    
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (err, response, main) {
    req(api, function (err, response, body) {

      if (err) {
        console.log(err);
        util.zembed("That server is offline or does not exist... \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.zembed("That server is offline or does not exist... \n**Console:**\n```js\n"+err+"```")
        }
             // deprecated due to instablility
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}
                      //
            
        try {
        var person = args.join(" ")
        if (!person) {return util.embed("Please Specify a username ex: **"+config.prefix+"find __Zua__** (With space)")}
        let result = start.find( found => found.name === `${person}`);
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(title, client.user.avatarURL)
        .setDescription(`Found User`)
        .addField("Username:", `${result.name}`, true)
        .addField("Server ID:", result.id, true)
        .setThumbnail(`${config.cdn}/assets/fivem.png`)
        .addField("Ping:", result.ping, true)

        .addBlankField(true)
        .addField("Identifiers", "```json\n"+`${JSON.stringify(result.identifiers)}`+"```")
        //.attachFile(`cache/${num}.png`)
        message.channel.send({embed: embed})
        } catch (error) {
            util.embed("The person was not found.")
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