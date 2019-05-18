exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    //////////////////////////////
    let base = notes[message.guild.id]
    if (!base) { return util.bad(`Make sure to save a log first, using \`${config.prefix}save-log <id>\`, where the \`id\` is someone's id on your server.`) }
    let log = new Discord.RichEmbed()
        .setAuthor(state, icon)
        .setColor(color)
        .setThumbnail(icon)
        .setTitle("FiveM Bot Log")
        .addField(base.username, `**Server ID**: ${base.id}\n**Identifiers**:\`\`\`json\n${base.identifiers}\`\`\``)
        .addField("Info", `**Unique hash**: ${base.hash}\n**Time Logged**: ${new Date(base.time)}`)
        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
    message.channel.send({ embed: log })
    log(`Used Command [Get Log] in ${message.guild.name}`)
}