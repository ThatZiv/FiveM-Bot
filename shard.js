const Discord = require("discord.js")
const Manager = new Discord.ShardingManager('./fivem.js');
Manager.spawn(2); 
// This example will spawn 2 shards (5,000 guilds);