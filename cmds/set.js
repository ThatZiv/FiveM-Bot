exports.run = async (client, message, args) => {
    try {
    var util = require("../fivem");
      /* ----------------------------- */ 
      message.delete();
      var ss = args.join(" ");
      if (message.content.includes("<") || message.content.includes(">")) {return util.embed("**__Do Not Add Any Symbols like `<>` Just Do Your IP.__** example: ```\n$set thatziv.ddns.net:30120```")}
      if (!ss || ss === " " || ss == "" || ss === null) {
          return util.embed("Please provide an address with port to set this discord server to. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with the port__***")
      }
      
      if (!message.content.includes(":")) {return util.embed("Please Specify a port ex: **"+config.prefix+"set thatziv.ddns.net__:30120__**")}
if (!message.member.hasPermission("ADMINISTRATOR")) return util.embed(`<@${message.author.id}>, You do not have permission to do this.`);
        servers[message.guild.id] =  {
            guild: message.guild.id,
            ip: ss
        };
    
      fs.writeFile('./auth/servers.json', JSON.stringify(servers), (err) => {
          if(err) {
            
              util.embed("An Error Occured...\n**Console:**\n```js\n"+err+"```");
              return;
          } else {
            log(`Used Command [Set] to ${ss} | ${message.guild.name}`)
            
              util.good(`You successfully set **${message.guild.name}**'s FiveM server to *${ss}*`)
              return;
          }
      })
    } catch (err) {
        log(err)
    }
      
};