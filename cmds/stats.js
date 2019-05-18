exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();

    var api = require("../modules/api.json")
 
        const m = await message.channel.send("Fetching Stats...");
        var stats = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor("FiveM Bot", client.user.avatarURL)
        .setTitle("Discord Server")
        .setDescription(`Bot Statistics`)
        .addField("Ping", `API: ${Math.round(client.ping)}ms\nMessage: ${Math.round(m.createdTimestamp - message.createdTimestamp)}ms`)
        .addField("Servers", `${client.guilds.size}\n**API Servers**: ${api.servers}`)
        .addField("Users", `${client.users.size}\n**API Users**: ${api.users}`)
        .addBlankField(true)
        .setURL("https://discord.gg/yWddFpQ")
        .addField("Main Server", config.cdn)
        .addField("API Server", `${config.cdn}:1234/api`)
        .setImage("https://discordapp.com/api/guilds/326536820881883148/embed.png?style=banner2")
        .setThumbnail(client.user.avatarURL)

        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, client.user.avatarURL)
        /* .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon) */
        message.channel.send({embed: stats});
        m.delete();
        log(`Used Command [Stats] in ${message.guild.name}`)
       
      


};