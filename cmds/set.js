exports.run = async (client, message, args) => {
    var util = require("../fivem.js");
      /* ----------------------------- */
      message.delete();
      var ss = args.join(" ");
      if (!ss || ss === " " || ss == "" || ss === null) {
          return util.embed("Please provide an address with port to set this discord server to. ex: `"+config.prefix+"set thatziv.ddns.net:30120`\n***__Please make sure to include the address with the port__***")
      }
      if (!message.content.includes(":")) {return util.embed("Please Specify a port ex: **"+config.prefix+"set thatziv.ddns.net__:30120__**")}
if (!message.member.hasPermission("ADMINISTRATOR")) return util.embed(`<@${message.author.id}>, You do not have permission to do this.`);
        servers[message.guild.id] =  {
            guild: message.guild.id,
            ip: ss
        };
    
      fs.writeFile('./servers.json', JSON.stringify(servers), (err) => {
          if(err) {
              util.embed("An Error Occured...\n**Console:**\n```js\n"+error+"```");
          } else {
              util.good(`You successfully set **${message.guild.name}**'s FiveM server to *${ss}*`)
          }
      })
};