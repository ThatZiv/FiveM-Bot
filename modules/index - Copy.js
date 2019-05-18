const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    zembed: (args, colour) => {
        client.on("message", message => {
            let embed = new Discord.RichEmbed()
            .setDescription(args)
            .setColor(colour)
            message.channel.send({ embed: embed })
            .then(msg => {
                msg.delete(5000)
            })
            return;
        })
    }, 
    good: (args) => {
        client.on("message", message => {
            let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .addField("Successful.", args)
            .setColor('#1daf4c')
            .setThumbnail(icon)
            message.channel.send({ embed: embed })
            return;
        })
    },
    bad: (args) => {
        client.on("message", message => {
            let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .addField("Failed.", args)
            .setColor('#e22424')
            .setThumbnail(icon)
            message.channel.send({ embed: embed })
            return;
        })
    },
    error: (args) => {
        client.on("message", message => {
            let embed = new Discord.RichEmbed()
            .setAuthor(state, icon)
            .setDescription(args)
            .setColor('#e22424')
            .setThumbnail(icon)
            message.channel.send({ embed: embed })
            return;
        })
    },
    embed: (args) => {
        client.on("message", message => {
            let embed = new Discord.RichEmbed()
            .setDescription(args)
            .setColor(color)
            message.channel.send({ embed: embed })
            return;
            
        })
    },
    num: (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}


