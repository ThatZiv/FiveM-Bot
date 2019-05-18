const Discord = require("discord.js")
const Manager = new Discord.ShardingManager('./fivem.js');
// two shards
Manager.spawn(2); 
