var colors = require("colors")
module.exports = (str) => {
    function formatDate(date) {
        var hours = date.getHours();
        var mins  = date.getMinutes();

        hours = (hours < 10 ? "0" : "") + hours;
        mins = (mins < 10 ? "0" : "") + mins;

        return `${hours}:${mins}`;
    }
        console.log(`${colors.cyan(`[${formatDate(new Date())}]:`)} ${str}`);
    
}