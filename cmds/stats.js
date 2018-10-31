exports.run = async (client, message, args) => {
    var util = require("../fivem.js");
    message.delete();

    var api = require("../api.json")
 
        const m = await message.channel.send("Fetching Stats...");
        var stats = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor("FiveM Bot", client.user.avatarURL)
        .setDescription(`Bot Statistics`)
        .addField("Ping", `API: ${Math.round(client.ping)}ms\nMessage: ${Math.round(m.createdTimestamp - message.createdTimestamp)}ms`)
        .addField("Servers", `${client.guilds.size}\n**API Servers**: ${api.servers}`)
        .addField("Users", `${client.users.size}\n**API Users**: ${api.users}`)
        .addBlankField(true)
        .setURL(`${config.cdn}:1234/api`)
        .addField("Main Server", config.cdn)
        .addField("API Server", `${config.cdn}:1234/api`)
        .setThumbnail(client.user.avatarURL)

        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, client.user.avatarURL)
        /* .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon) */
        message.channel.send({embed: stats});
        m.delete();
        console.log(`Used Command [Stats] in ${message.guild.name}`)
        util.log(`Stats`)
      


};
