const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const config = require('./config.json');
client.config = config;

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`+help for ${client.users.size} members in ${client.guilds.size} servers.`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`+help for ${client.users.size} members in ${client.guilds.size} servers.`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`+help for ${client.users.size} members in ${client.guilds.size} servers.`);
});

client.on('message', (message) => {
    if(message.content == '+snap'){
        var meme = Math.floor((Math.random() * 24) + 1);
       
      
      
      if (meme == 1) {
   message.channel.send({
            file: "https://image.ibb.co/cJ743K/1.jpg" 
             });
}
       if (meme == 2) {
   message.channel.send({
            file: "https://image.ibb.co/dDu6He/2.png" 
             });
}
      
        if (meme == 3) {
   message.channel.send({
            file: "https://image.ibb.co/jH6xOK/3.jpg" 
             });
}
      
       if (meme == 4) {
   message.channel.send({
            file: "https://image.ibb.co/cauTVz/4.jpg" 
             });
}
      
      if (meme == 5) {
   message.channel.send({
            file: "https://image.ibb.co/mEO0ce/5.jpg" 
             });
}
      
      if (meme == 6) {
   message.channel.send({
            file: "https://image.ibb.co/c7KvAz/6.jpg" 
             });
}
      if (meme == 7) {
   message.channel.send({
            file: "https://image.ibb.co/mtnhqz/7.jpg" 
             });
}
      
      
            if (meme == 8) {
   message.channel.send({
            file: "https://image.ibb.co/fiGsqz/8.jpg" 
             });
}			 
      
      
            if (meme == 9) {
   message.channel.send({
            file: "https://image.ibb.co/ktSyVz/9.jpg" 
             });
}  
      
      
            if (meme == 10) {
   message.channel.send({
            file: "https://image.ibb.co/fGSbHe/10.jpg" 
             });
} 
      
      
            if (meme == 11) {
   message.channel.send({
            file: "https://image.ibb.co/mgHMiK/11.jpg" 
             });
}      
      
      
            if (meme == 12) {
   message.channel.send({
            file: "https://image.ibb.co/jebE3K/12.jpg" 
             });
} 
      
      
            if (meme == 13) {
   message.channel.send({
            file: "https://image.ibb.co/nsHbHe/13.jpg" 
             });
} 
      
      
            if (meme == 14) {
   message.channel.send({
            file: "https://image.ibb.co/mNB3xe/14.jpg" 
             });
} 
      
      
            if (meme == 15) {
   message.channel.send({
            file: "https://image.ibb.co/e38SOK/15.jpg" 
             });
} 
      
      
            if (meme == 16) {
   message.channel.send({
            file: "https://image.ibb.co/c1JGHe/16.jpg" 
             });
} 
      
      
            if (meme == 17) {
   message.channel.send({
            file: "https://image.ibb.co/mG1giK/17.jpg" 
             });
} 
      
      
            if (meme == 18) {
   message.channel.send({
            file: "https://image.ibb.co/cHVVce/18.jpg" 
             });
} 
      
      
            if (meme == 19) {
   message.channel.send({
            file: "https://image.ibb.co/n5hyVz/19.jpg" 
             });
} 
      
      
            if (meme == 20) {
   message.channel.send({
            file: "https://image.ibb.co/iyYSOK/20.jpg" 
             });
} 
      
      
            if (meme == 21) {
   message.channel.send({
            file: "https://image.ibb.co/gwsMiK/21.jpg" 
             });
} 
      
      
            if (meme == 22) {
   message.channel.send({
            file: "https://image.ibb.co/bwi5Az/22.jpg" 
             });
} 
      
      
            if (meme == 23) {
   message.channel.send({
            file: "https://image.ibb.co/nkdGHe/23.jpg" 
             });
} 
      
      
            if (meme == 24) {
   message.channel.send({
            file: "https://image.ibb.co/h0vwHe/24.jpg" 
             });
} 
      
    }
});

client.on('message', (message) => {
    if(message.content == '+invite'){
       var text11 = "[Click Here](https://discordapp.com/oauth2/authorize?&client_id=480105002925555713&scope=bot&permissions=114688) to invite me to your server.";
        message.channel.send({embed: {
        color: 15844367,
        description: text11
}});
    }
});

client.on('message', (message) => {
    if(message.content == '+help'){
        message.channel.send({embed: {
    color: 15844367,
    footer: {
    },
    thumbnail: {
      "url": "https://vz.cnwimg.com/thumbc-250x250/wp-content/uploads/2018/03/nin.jpg"
    },
    author: {
      name: "Ninja Commands",
      url: "https://twitter.com/FlaterVFX",
      icon_url: "https://www.famousbirthdays.com/headshots/tyler-blevins-6.jpg"
    },
    fields: [
      {
        name: "**Commands**",
        value: "+snap, +invite"	
      }

    ]
  }
}
        
        
        
        );   
    }
});

client.login(process.env.B0T_T0KEN);
