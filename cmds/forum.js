// This was aids....
exports.run = async (client, message, args) => {
    var util = require("../fivem");
    // DO NOT DELETE THIS 
    const fivem_forum = "https://forum.fivem.net"
        message.delete();
        // request from https://forum.fivem.net/categories.json
        req("https://forum.fivem.net/categories.json", function (error, response, body) {
            var main = JSON.parse(body)
            const categories = main.category_list.categories;
            var arg = args.join(" ");
            if (args[0] == "user") {
                let argum = args.join(" ").slice(5)
                req(`https://forum.fivem.net/users/${argum}.json`, function (error, response, bod33) {
                    let main = JSON.parse(bod33)
                    try {
                        if (main.errors) { return util.embed("There was no user found") }

                        let username = main.user.username;
                        let name = main.user.name;
                        let created = new Date(main.user.created_at);
                        let seen = new Date(main.user.last_seen_at);
                        let link = `${fivem_forum}/users/${argum}`;
                        if (main.user.avatar_template.includes("letter_avatar")) {
                            // there is already a '/' in the dir dont worry 
                            var logo = `${fivem_forum}${main.user.avatar_template.substring(0, main.user.avatar_template.length - 11)}/1000.png`;
                        } else {
                            var logo = `${fivem_forum}/user_avatar/forum.fivem.net/${main.user.username}/360/1.png`
                        }
                        if (main.topics) {
                            var topic = main.topics[0]
                            var topicTitle = topic.title
                            var topicCount = topic.posts_count;
                            var topic_final = `**[${topicTitle}](${fivem_forum}/t/${topic.id})**\nPosts: **${topicCount}**`;
                        } else {
                            var topic_final = `None`;
                        }
                        /*  log(logo) */
                        // Discord embed part
                        let user_embed = new Discord.RichEmbed()
                            .setAuthor(state, icon)
                            .setColor(color)
                            .setThumbnail(logo)
                            .setTitle("FiveM User Search")
                            .setURL(link)
                            .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
                            .addField("User", `**Username**: ${username}\n**Name**: ${name}\n**Created at**: ${created}\n**Last seen**: ${seen}`)
                            .addField("Recent Topics", topic_final)
                        message.channel.send({ embed: user_embed })
                     
                        return;

                    } catch (err) {
                        return util.embed("There was no user found")
                    }
                })
                return;
            };
            if (args[0] == "search") {
                let argum = args.join(" ").slice(6)
                req(`https://forum.fivem.net/search/query.json?term=${argum}`, function (error, response, bod) {

                    var main2 = JSON.parse(bod)
                    try {
                        if (main2.topics.length == 0 || main2.topics.length == null || main2.topics.length == []) {
                            return util.embed("There was no thread found");
                        }
                        let posts = main2.posts
                        let topics = main2.topics

                        var sarch = new Discord.RichEmbed()
                            .setAuthor(state, icon)
                            .setColor(color)
                            .setThumbnail(icon)
                            .setTitle("FiveM Forums Search")
                            .setURL(fivem_forum)
                            .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
                        topics.forEach(function (data) {
                            let link = `${fivem_forum}/t/${data.id}/`
                            sarch.addField(data.title, `${link}\nPosts count: **${data.posts_count}**\nVisible: **${data.visible}**\nClosed: **${data.closed}**\n`)
                        })
                        message.channel.send({ embed: sarch })
               
                        return;
                    } catch (err) {
                        return util.embed("There was no thread found");
                    }
                })
            } else {
                // Checks info of forum post that user searches for (topic)
                if (arg) {

                    try {
                        let result = categories.find(found => found.name == arg);
                        let topics = result.topics
                        var forumsearch = new Discord.RichEmbed()
                            .setAuthor(state, icon)
                            .setColor(color)
                            .setThumbnail(icon)
                            .setTitle("FiveM Forum Latest Topics")
                            .setURL(fivem_forum)
                            .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
                            .addField("Forum Categories", `Use these as arguments\n**Example**\n\`${config.prefix}forum Announcements\` - To see recent posts in that topic.`)
                            .addBlankField(true)
                        topics.forEach(function (data) {
                            forumsearch.addField(data.title, `Link: ${fivem_forum}/t/${data.id}/\nPosts count: **${data.posts_count}**\nVisibility: **${data.visible}**\nLast Poster: **${data.last_poster.username}**`)
                        })
                        message.channel.send({ embed: forumsearch })
         
                        return;
                    } catch (err) {
                        return util.embed(`Unable to find this category. Remember you can search indiviual topics with \`${config.prefix}forum search <search-terms>\``)
                    }
                } else {
                    var forum = new Discord.RichEmbed()
                        .setAuthor(state, icon)
                        .setColor(color)
                        .setThumbnail(icon)
                        .setTitle("FiveM Forums Categories")
                        .addField("Searching the Forums (with terms)", `\`${config.prefix}forum search <search-terms>\``)
                        .addField("Searching the Topics on Categories", `\`${config.prefix}forum <forum-category>\``)
                        .setURL(fivem_forum)
                        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
                        .addBlankField(true)
                    categories.forEach(function (data) {
                        forum.addField(`${data.name}`, data.description_text)
                    })

                    message.channel.send({ embed: forum })
         
                    return;
                }
            }
            log(`Used Command [Forum] in ${message.guild.name}`);
        })

};