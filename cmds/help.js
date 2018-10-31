exports.run = async (client, message, args) => {
    var util = require("../fivem.js")
    message.delete();

var icon = "http://thatziv.ddns.net/assets/fivem.png"
    let embed = new Discord.RichEmbed()
    .setAuthor("FiveM Bot", icon)
    .setColor(color)
    .setDescription(`**__FiveM Bot Help__**`)

    .addBlankField(true)
    .addField(`${config.prefix}set <serverIP:port>`, "Sets the current guild FiveM server")
    .addField(`${config.prefix}players`, "Gets the current player list of a server")
    .addField(`${config.prefix}server`, "Gets all information of a server")
    .addField(`${config.prefix}find <username>`, "Finds a user that is on the server via Username")
    .addField(`${config.prefix}id <id>`, "Finds a user that is on the server via Server ID")
    .addField(`${config.prefix}status`, "Checks if the server is online")
    .addField(`${config.prefix}stats`, "Checks bot statistics")
    .addField(`${config.prefix}premium`, "Check **__FiveM Bot Premium__**")
    .addField(`${config.prefix}activate <key>`, "Activates the **Premium Plan** for the discord server\nWant a key? Join the Discord Server.")
    .addBlankField(true)
    .addField("FiveM Bot API", `Log - ${config.cdn}:1234\nAPI (JSON) - ${config.cdn}:1234/api`)
    .setThumbnail(icon)
    .setTitle("Support/Activation Discord")
    .setURL("https://discord.gg/yWddFpQ")
    .addBlankField(true)
    .addField("Also Remember To Check Out Zua's:", `Twitch - https://twitch.tv/zuacp \nYoutube - https://www.youtube.com/channel/UCjAu7aRli_GePQb4FnzRRWg\nWebsite - http://zavaar.cf/\n`)
    .setFooter("Copyright © Zua - http://zavaar.cf", icon)
    console.log(`FIVEM help cmd was used.. in ${message.guild.name}`)
    util.log(`FIVEM help`)
    message.channel.send({embed: embed})
};
