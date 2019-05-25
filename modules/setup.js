const fs = require("fs");
fs.writeFile("./CONFIGURATION_README.txt", 
"Make sure to go to the folder -> /cmds/config/config.json and change the token to your discord application ( find at https://discordapp.com/developers/applications/ )", 
(err) => {
    if (err) {return console.log(err)}
})
fs.writeFile("./auth/servers.json", JSON.stringify({}), (err) => {
    if (err) {return console.log(err);}else{
        fs.writeFile("./auth/notes.json", JSON.stringify({}), (err) => {
            if (err) {return console.log(err)}
            fs.writeFile("./auth/rcon.json", JSON.stringify({}), (err) => {
                if (err) {return console.log(err)}
                return console.log("Completed initial setup successfully.")
            })
        })
    }
})
