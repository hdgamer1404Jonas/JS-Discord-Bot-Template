const Discord = require('discord.js');
const config = require('./config.json');
const { checkConfig } = require('./modules/checkConfig');

checkConfig();

const client = new Discord.Client({
    intents: config.intents
});

client.login(config.token);