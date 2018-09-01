exports.run = async (client, message, args) => {
    var util = require("../fivem.js")
    message.delete();
    req(`${config.cdn}:9999/api`, function (err, response, body) {
    if (err) {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Bot on ${client.guilds.size} Servers`, client.user.avatarURL)
    .setColor(color)
    .setDescription(`**__FiveM Bot Help__**`)
    .addField(`${config.prefix}set`, "Sets the current guild FiveM server")
    .addField(`${config.prefix}players`, "Gets the current player list of a server")
    .addField(`${config.prefix}server`, "Gets all information of a server")
    .addField(`${config.prefix}find <username>`, "Finds a user that is on the server via Username")
    .addField(`${config.prefix}id <id>`, "Finds a user that is on the server via Server ID")
    .addBlankField(true)
    .setThumbnail(`${config.cdn}/assets/fivem.png`)
    .setTitle("Support Discord")
    .setURL("https://discord.gg/yWddFpQ")
    .addBlankField(true)
    .addField("Also Remember To Check Out Zua's:", `Twitch - https://twitch.tv/zuacp \nYoutube - https://www.youtube.com/channel/UCjAu7aRli_GePQb4FnzRRWg\nWebsite - http://zavaar.cf/\n`)
    .setFooter("Copyright © Zua - http://zavaar.cf")
    console.log('FIVEM help cmd was used..')
    message.channel.send({embed: embed});
    }
    var res = JSON.parse(body)
    let embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Bot on ${client.guilds.size} Servers`, client.user.avatarURL)
    .setColor(color)
    .setDescription(`**__FiveM Bot Help__**`)
    .addField(`${config.prefix}set`, "Sets the current guild FiveM server")
    .addField(`${config.prefix}players`, "Gets the current player list of a server")
    .addField(`${config.prefix}server`, "Gets all information of a server")
    .addField(`${config.prefix}find <username>`, "Finds a user that is on the server")
    .addField(`${config.prefix}id <id>`, "Finds a user that is on the server via Server ID")
    .addBlankField(true)
    .setThumbnail(`${config.cdn}/assets/fivem.png`)
    .setTitle("Support Discord")
    .setURL("https://discord.gg/yWddFpQ")
    .addBlankField(true)
    .addField("Also Remember To Check Out Zua's:", `Twitch - https://twitch.tv/zuacp \nYoutube - https://www.youtube.com/channel/UCjAu7aRli_GePQb4FnzRRWg\nWebsite - http://zavaar.cf/\n\n**${res.title}**\n${res.text}\n`)
    .setFooter("Copyright © Zua - http://zavaar.cf")
    console.log('FIVEM help cmd was used..')
    message.channel.send({embed: embed});

})
};