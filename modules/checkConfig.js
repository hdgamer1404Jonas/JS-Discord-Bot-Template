const config = require('../config.json');

function checkConfig() {
    if (!config.token) {
        console.log('No token found. Please create a token in config.json');
        process.exit(1);
    }
    if (config.enable_slash_commands === undefined) {
        console.log('Config file is missing enable_slash_commands. Please add it to config.json');
        process.exit(1);
    }
    if (!config.intents) {
        console.log('No intents found. Please create an intents in config.json');
        process.exit(1);
    }
    if (config.enable_slash_commands == true) {
        console.log('Using Slash Commands');
    }
}

module.exports = {
    checkConfig
}
