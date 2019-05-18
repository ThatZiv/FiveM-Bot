const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
    module.exports.zembed = (args, colour) => {

        let embed = new Discord.RichEmbed()
            .setDescription(args)
            .setColor(colour)
        message.channel.send({ embed: embed })
            .then(msg => {
                msg.delete(5000)
            })
        return;

    }

    module.exports.good = (args) => {

        let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .addField("Successful.", args)
            .setColor('#1daf4c')
            .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;

    }
    module.exports.bad = (args) => {

        let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .addField("Failed.", args)
            .setColor('#e22424')
            .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;

    }
    module.exports.error = (args) => {

        let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .setDescription(args)
            .setColor('#e22424')
            .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;

    }
    module.exports.embed = (args) => {

        let embed = new Discord.RichEmbed()
            .setDescription(args)
            .setColor(color)
        message.channel.send({ embed: embed })
        return;


    }
    module.exports.num = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

})