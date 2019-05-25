# FiveM Discord Bot - Monitor your FiveM Server easily
[![Discord Bots](https://discordbots.org/api/widget/status/483787947070586880.svg)](https://discordbots.org/bot/483787947070586880) [![Discord Bots](https://discordbots.org/api/widget/upvotes/483787947070586880.svg)](https://discordbots.org/bot/483787947070586880) [![Discord Bots](https://discordbots.org/api/widget/owner/483787947070586880.svg)](https://discordbots.org/bot/483787947070586880) 

##### All New FiveM Forum Integration and Save/Get Player Logs !


## No Advanced Setup Required!
**FiveM Bot** is a discord bot by *Zua* that makes monitoring your FiveM server easily.
https://discordbots.org/bot/483787947070586880

## __Set-Up__ 
1. Invite the [bot](https://discordapp.com/oauth2/authorize?client_id=483787947070586880&permissions=8192&redirect_uri=http%3A%2F%2Fzavaar.cf&scope=bot)
2. In any channel, type `$set <serverAddress:withPort>` (ex: `$set thatziv.ddns.net:30120`)
3. The Bot is now setup, do `$help` to see all the commands
 __Please Make Sure to Give the Bot Administrator Permissions.__*
__Also Make Sure to use it in a discord server channel and *not a DM channel*__ *
_____
## __Commands__
`$set <serverAddress:withPort>` - Sets the current guild FiveM server

`$players` - Gets the current player list of a server

`$server` - Gets all information of a server

`$find <username>` - Finds a user that is on the server via Username

`$id <id>` - Finds a user that is on the server via Server ID

`$status` - Checks the current status of the server

`$help` Sends Help Embed

`$status` - Checks if the server is online

`$stats` - Checks bot statistics

`$save-log <person's server id>` - Saves a player's information

`$get-log` - Gets a player's information (per guild)

`$forum <categories>` - Searches the latest topics in the categories on https://forum.fivem.net/

`$forum` - Checks the current categories on https://forum.fivem.net/

`$forum search <search terms>` - Searches terms on https://forum.fivem.net/

`$forum user <username>` - Searches user's info on https://forum.fivem.net/

`$native <search terms>` - returns a specific GTAV native that you searched for

`$rcon help` - Sends RCON help embed

`$rcon set <rcon_password>` - Sets the guild's rcon server

`$rcon <rcon_command>` - Executes an [RCON Command](https://docs.fivem.net/server-manual/server-commands/)




______


 ## __Tutorial/Demonstration__
www.youtube.com/watch?v=qphtBvXSusE
* Note this is a bit out of date.
______


## *Optional* __Installation__ (Advanced Users)
This bot is ran by [**node.js**](https://nodejs.org) using the [**discord.js**](https://discord.js.org/#/) library.
https://github.com/ThatZiv/FiveM-Bot 
### Make sure you have [NodeJS](https://nodejs.org) installed.
1. Download [Here](https://github.com/ThatZiv/FiveM-Bot).
2. Run `setup.cmd` and follow the prompts
 * __If you aren't able to execute bat files__ then cd into the directory of the bot and type:
```sh
npm i
# then after that is done, type:
npm run build
```
3. Run the `run.bat` file __or do (in the cmd line):__
```sh
node fivem.js
```
---
[Discord](https://discord.gg/yWddFpQ) :)
## Feedback is also pretty neat.
-------
[![Discord Bots](https://discordbots.org/api/widget/483787947070586880.svg)](https://discordbots.org/bot/483787947070586880)
-------
# __FAQ__
| **Error** | **Solution** | **Example**|
| ------ | ------ | ------- |
| `Error: Invalid URI ` | Set the FiveM server URL correctly: No `<>` symbols and no spaces between the port and **No** `http://` | `$set thatziv.ddns.net:30120` | 

*More to come.*

---
