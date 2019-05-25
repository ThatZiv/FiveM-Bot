exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR")) return util.bad(`<@${message.author.id}>, You do not have permission to do this.`);
    if (args[0] == "set") {
        if (args[1] == null || args[1] == " " || !args[1]) { return util.embed(`Please enter a \`rcon_password\` ex: \`${config.prefix}rcon set password123\` or do \`${config.prefix}rcon help\``) }
        rcondb[message.guild.id] = {
            guild: message.guild.id,
            hash: crypto.AES.encrypt(args[1], config.token).toString() /* HASES WITH BOT TOKEN */
        }

        fs.writeFile("./auth/rcon.json", JSON.stringify(rcondb), (err) => {
            if (err) { return util.embed("An Error Occured...\n**Console:**\n```js\n" + err + "```") }
            log(`RCON [Set] | ${message.guild.name}`)
            util.good(`You successfully configured **${message.guild.name}**'s RCON server`)
            return;
        })
    } else if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setAuthor(state, icon)
        .setDescription("FiveM Bot RCON Help")
        .addField("RCON in FiveM", "RCON basically is the highest rank of administration on a server. After you login with RCON while playing on a server, you can change basically any server setting")
        .addField("Setting up RCON for FXServer", "In your `server.cfg`, un-comment/add `rcon_password your_password` anywhere in the file.")
        .addField("Linking FXServer to FiveM Bot", `Do \`${config.prefix}rcon set your_rconpassword\` in a channel where no one can see the message`)
        .addField("Executing RCON Commands with FiveM Bot", `In any channel, do \`${config.prefix}rcon any_command\` (arguments too)\nFind [RCON Commands](https://docs.fivem.net/server-manual/server-commands/) here.`)
        .addField("RCON Password Security", "**All** RCON passwords are encrypted in [AES Encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) and are secured.")
        .setColor(color)
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    } else {
        try {
            //  console.log(crypto.AES.decrypt(rcondb[message.guild.id].hash, config.token).toString(crypto.enc.Utf8))
            let temp = servers[message.guild.id].ip.split(":")
            var rcon = new Q3RCon({
                address: temp[0],
                port: temp[1],
                password: crypto.AES.decrypt(rcondb[message.guild.id].hash, config.token).toString(crypto.enc.Utf8),
            });
            rcon.send(args.join(" "), function (response) {
                let embed = new Discord.RichEmbed()
                    .setAuthor(state, icon)
                    .setTitle(`RCON Output at ${servers[message.guild.id].ip} - `)
                    .setDescription(`\`\`\`css\n${response.slice(6)}\`\`\``)
                    .setFooter(`RCON Query: ${args.join(" ")}`)
                    .setColor(color)
                    .setThumbnail(icon)
                message.channel.send({ embed: embed })
                return;
            });
        } catch (e) {
            return util.bad(`Make sure to set your rcon password. ex: \`${config.prefix}rcon set password123\` or do \`${config.prefix}rcon help\``)
        }
    }

};