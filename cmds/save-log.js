exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();

    if (servers[message.guild.id].guild === message.guild.id) {
        try {
            var arg = servers[message.guild.id].ip
            let api = `http://${arg}/players.json`;
            req(api, function (err, response, body) {
                if (err) {
                    util.zembed("That server is offline or does not exist... \n**Console:**\n```js\n" + err + "```")
                }
                try {
                    let start = JSON.parse(body);
                    var person = parseInt(args.join(" "));
                    if (!person) { return util.embed("Please Specify an id ex: **" + config.prefix + "save-log __9__** (With space)") }
                    let result = start.find(found => found.id == `${person}`);
                    let id = result.id
                    let name = result.name
                    let hash = createHash(21)
                    notes[message.guild.id] = {
                        username: result.name,
                        id: result.id,
                        identifiers: JSON.stringify(result.identifiers),
                        time: new Date(),
                        hash: createHash(21)
                    };

                    fs.writeFile("./auth/notes.json", JSON.stringify(notes), (err) => {
                        if (err) { return util.embed("An Error Occured...\n**Console:**\n```js\n" + err + "```"); }
                        util.good(`Successfuly logged -> \`${result.name}\`. To access these, do \`${config.prefix}get-log\``)
                      
                    })

                } catch (error) {
                    log(error)
                    util.embed("The person was not found. **Remember to use the player's ID __in-game__**")
                }
            })
        } catch (err) {
            util.embed("That server does not exist. \n**Console:**\n```js\n" + err + "```");
        }
        log(`Used Command [Save Log] in ${message.guild.name}`)
    }

}