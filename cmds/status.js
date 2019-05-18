exports.run = async (client, message, args) => {
  var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
        try {
        var arg = `${servers[message.guild.id].ip}`    
        let api2 = `http://${arg}/info.json`
        req(api2, function (error, response, main) {
         
          if (error) {
            return util.bad("That server is offline");
          } else {
            util.good(`Online.\nServer IP: ${servers[message.guild.id].ip}`)
          }
          log(`Used Command [Status] in ${message.guild.name}`)
    });

      } catch (err) {
        return util.embed("That server does not exist. \n**Console:**\n```js\n"+err+"```");
      }
    } else {
        return util.embed("Please **set** a Direct-Address for this server. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with port.__***")
      } 
};