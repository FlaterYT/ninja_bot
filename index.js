const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const config = require('./config.json');
client.config = config;

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Snapchat`);
});

client.on('message', (message) => {
   if (msg.startsWith (prefix + "meme")) {
       number = 24;
       imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
       message.channel.send ( {files: ["./images" + imageNumber + ".png"]} )
   }


});

client.login(process.env.B0T_T0KEN);
