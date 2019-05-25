exports.run = async (client, message, args) => {
  var util = require("../fivem");
  /* ----------------------------- */

  // decided not to use l8er
  let query = []
  var searchQuery = args.join(" ")
  var options = {
    shouldSort: true,
    findAllMatches: true,
    includeMatches: true,
    threshold: 0.8,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
  };
  try {
    var fuse = new Fuse(listNatives, options); // "listNatives" is the item array
    var result = fuse.search(searchQuery);
    //console.log(result[0].matches[0].value)

    for (i = 0; i < tempNatives.length; i++) {
      if (tempNatives[i].body == result[0].matches[0].value) {
        query.push(tempNatives[i].prefix)
        let embed = new Discord.RichEmbed()
          .setAuthor(state, icon)
          .setDescription(tempNatives[i].body)
          .addField("Body:", `\`\`\`yaml\n${tempNatives[i].prefix}\`\`\``)
          .addField("Description", tempNatives[i].description)
          .setColor(color)
          .setThumbnail(icon)
          .setFooter(`FiveM Native Search: ${searchQuery}`)
        message.channel.send({ embed: embed })
        return;
      }
    }



  } catch (err) {
    util.zembed(`Unable to find the native \`${searchQuery}\`.`);
  }
  log(`Used Command [Native] in ${message.guild.name}`)
};