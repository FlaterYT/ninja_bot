const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const config = require('./config.json');
client.config = config;

