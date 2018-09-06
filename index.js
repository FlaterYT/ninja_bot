const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const config = require('./config.json');
const Fortnite = require("fortnite")
const ftnApi = new Fortnite(process.env.FRTNT);
const currentSeason = "5";
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
        var meme = Math.floor((Math.random() * 54 - 1 + 1) + 1);
       
      
      
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
	    
	    
            if (meme == 25) {
   message.channel.send({
            file: "https://image.ibb.co/kFSz5z/25.jpg" 
             });
} 
	    
	    
            if (meme == 26) {
   message.channel.send({
            file: "https://image.ibb.co/kzkxaz/26.jpg" 
             });
} 
	    
	    
            if (meme == 27) {
   message.channel.send({
            file: "https://cdn.discordapp.com/attachments/387281775996698646/480448731632631808/Dk17yfOX0AAkbam.png" 
             });
} 


            if (meme == 28) {
   message.channel.send({
            file: "https://cdn.discordapp.com/attachments/387281775996698646/480483894060384257/DkqTmp2WwAA8fe4.png" 
             });
} 
	    
	    
            if (meme == 29) {
   message.channel.send({
            file: "https://cdn.discordapp.com/attachments/387281775996698646/480451183669018624/sjwkwllx.jpg" 
             });
}


if (meme == 30) {
    message.channel.send({
             file: "https://cdn.discordapp.com/attachments/387281775996698646/480484416536313856/DkIt73zUYAAq9rj.png" 
              });
} 


if (meme == 31) {
    message.channel.send({
             file: "https://cdn.discordapp.com/attachments/387281775996698646/480484568407736320/DkKb4MIUUAAavF-.png" 
              });
}


if (meme == 32) {
    message.channel.send({
             file: "https://cdn.discordapp.com/attachments/434869701970100224/480485085754294312/DkMGAL6XcAApYO4.png" 
              });
}


if (meme == 33) {
    message.channel.send({
             file: "https://cdn.discordapp.com/attachments/434869701970100224/480485251521445888/DkMJsRPXgAEhdtd.png" 
              });
} 


if (meme == 34) {
    message.channel.send({
             file: "https://image.ibb.co/dz8EOK/36.png" 
              });
 } 
       
       
             if (meme == 35) {
    message.channel.send({
             file: "https://image.ibb.co/nkb13K/37.png" 
              });
 } 
         
         
             if (meme == 36) {
    message.channel.send({
             file: "https://image.ibb.co/gR0Hce/38.png" 
              });
 } 
         
         
             if (meme == 37) {
    message.channel.send({
             file: "https://image.ibb.co/bUwCAz/39.png" 
              });
 } 
         
         
             if (meme == 38) {
    message.channel.send({
             file: "https://image.ibb.co/jSPXAz/40.png" 
              });
 } 
 
 
             if (meme == 39) {
    message.channel.send({
             file: "https://image.ibb.co/iKjAxe/41.png" 
              });
 } 
         
         
             if (meme == 40) {
    message.channel.send({
             file: "https://image.ibb.co/f7g13K/42.png" 
              });
 }
 
 
 if (meme == 41) {
     message.channel.send({
              file: "https://image.ibb.co/bZUXAz/43.png" 
               });
 } 
 
 
 if (meme == 42) {
     message.channel.send({
              file: "https://image.ibb.co/gw4zqz/44.png" 
               });
 }
 
 
 if (meme == 43) {
     message.channel.send({
              file: "https://image.ibb.co/grRCAz/34.png" 
               });
 }
 
 
 if (meme == 44) {
     message.channel.send({
              file: "https://image.ibb.co/k0yEOK/35.png" 
               });
 }


 if (meme == 45) {
  message.channel.send({
           file: "https://image.ibb.co/j6nw3K/45.jpg" 
            });
} 
       
       
           if (meme == 46) {
  message.channel.send({
           file: "https://image.ibb.co/dA0iiK/46.jpg" 
            });
} 
       
       
           if (meme == 47) {
  message.channel.send({
           file: "https://image.ibb.co/jAdQxe/47.png" 
            });
} 
       
       
           if (meme == 48) {
  message.channel.send({
           file: "https://image.ibb.co/eyviiK/48.jpg" 
            });
} 


           if (meme == 49) {
  message.channel.send({
           file: "https://image.ibb.co/e9U9OK/49.jpg" 
            });
} 
       
       
           if (meme == 50) {
  message.channel.send({
           file: "https://image.ibb.co/m7vSAz/50.jpg" 
            });
}


if (meme == 51) {
   message.channel.send({
            file: "https://image.ibb.co/m0znAz/51.jpg" 
             });
} 


if (meme == 52) {
   message.channel.send({
            file: "https://image.ibb.co/hXQ5xe/52.jpg" 
             });
}


if (meme == 53) {
   message.channel.send({
            file: "https://image.ibb.co/jqRdHe/53.jpg" 
             });
}


if (meme ==54) {
   message.channel.send({
            file: "https://image.ibb.co/gujnAz/54.jpg" 
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
    if(message.content == '+ligma'){
        var text = "You have " + Math.floor((Math.random() * 101) + 0) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});

client.on('message', (message) => {
    if(message.content == '+gay zilbo'){
        var text = "Zilbo is 0% gay ??????";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});

client.on('message', (message) => {
    if(message.content == '+vote'){
       var text11 = "If you are liking Ninja bot so far pls vote by [Clicking Here](https://discordbots.org/bot/480105002925555713) also if you have any suggestions for the bot or need help join our support server [Here](https://discord.gg/sNwDy6J)";
        message.channel.send({embed: {
        color: 15844367,
        description: text11
}});
    }
});

client.on('message', (message) => {
    if (message.content.indexOf("+ligma ") !=-1) {	 
	    if (message.content.length > 6) {
		
//var taggedmember1 = message.mentions.members.first();

var taggedmember1 = message.mentions.members.first();

		var text = (taggedmember1) + " has " + Math.floor((Math.random() * 101) + 0) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";
		
		var messagecontentxd = message.content;
		var text1 = messagecontentxd.replace('+ligma ','');
		var textD = (text1) + " has " + Math.floor((Math.random() * 101) + 0) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";

		
		
				if (taggedmember1 = "undefined") {
    
	
	message.channel.send({embed: {
        color: 15844367,
        description: textD
}});
	
	
} else {
   
   
   message.channel.send({embed: {
        color: 15844367,
        description: text
}});
   
   
} 
			 
		


}
}
});

client.on("message", async message => {
	
  if(message.author.bot) return;
	
  if(message.channel.type === "dm") return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
    const user = message.mentions.users.first() || message.author;
  if(command === "avi") {
	  
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL) // User's avatar
    .setColor('RANDOM') // Generate random color
    
    message.channel.send(embed);
}
});

client.on("message", async message => {
	
  if(message.author.bot) return;
	
  if(message.channel.type === "dm") return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
    const user = message.mentions.users.first() || message.author; // Get User from mention
  if(command === "userinfo") {
  let embed = new Discord.RichEmbed() // Embed constructor
  .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL) // Embed's author
  .setThumbnail(user.displayAvatarURL) // User's avatar
  .setColor('RANDOM') // Generates random color
  .addField('ID', user.id, true) // User ID
  .addField('Username', user.username, true) // Username
  .addField('Discrim', user.discriminator, true) // User tag/discriminator
  .addField('Status', user.presence.status, true) // User status (online, idle, do not disturb, invisible/offline)
  .addField('Bot?', user.bot, true) // If the user is bot or not
  .setThumbnail()
  message.channel.send(embed) // Sends the embed in the channel
}
});

client.on("message", async message => {
	
  if(message.author.bot) return;
	
  if(message.channel.type === "dm") return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "fortnite") {

  if (args[0].toLowerCase() == "drop") {
    let places = [
      "Lazy Links",
      "Dusty Divot",
      "Fatal Fields",
      "Flush Factory",
      "Greasy Grove",
      "Haunted Hills",
      "Junk Junction",
      "Lonely Lodge",
      "Loot Lake",
      "Lucky Landing",
      "Paradise Palms",
      "Pleasant Park",
      "Retail Row",
      "Risky Reels",
      "Salty Springs",
      "Shifty Shafts",
      "Snobby Shores",
      "Tilted Towers",
      "Tomato Temple",
      "Wailing Woods"
    ];

    let picker = Math.floor(Math.random() * places.length); //Randomely picks a spot

    return message.channel.send(places[picker]); //Sends randomely picked spot
  }
  //Fortnite stats
  //let username = args[0]; //Gets username
  let platform = args[0]
    if(platform) platform = platform.toLowerCase()
    const username = args.slice(1,args.length).join('%20')

  if (args[2]) {
    if (args[2].toLowerCase() == "all" || args[2].toLowerCase() == "season") {
      mode = args[2]; //Gets stats type, all or season stats
    } else {
      return message.channel.send(
        "Error. Use the right syntax: `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn]`"
      ); //Sends error message
    }
  }

  if (!username)
    //No username specified?
    return message.channel.send(
      "Username not provided. Use the right syntax: `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn]`"
    ); //Sends error message

  let data = ftnApi
    .user(username, platform)
    .then(data => {
      let stats = data.stats; //Raw stats
      if (mode == "life") {
        let lifetime = stats.lifetime; //Lifetime stats
        let lifeScore = lifetime[6]["Score"];
        let lifeMatches = lifetime[7]["Matches Played"];
        let lifeWins = lifetime[8]["Wins"];
        let lifeWinPercent = lifetime[9]["Win%"];
        let lifeKills = lifetime[10]["Kills"];
        let lifeKd = lifetime[11]["K/d"];

        let lifeEmbed = new Discord.RichEmbed()
          .setTitle("Fortnite Lifetime Stats")
          .setThumbnail(
            "https://blog.lifetime.com/imagecache/Blog/Generic%20Lifetime%20Banner%20Blog.png"
          )
          .setDescription(`Lifetime stats for ${data.username}`)
          .setColor("#42b6f4")
          .addField("Wins", lifeWins, true)
          .addField("Kills", lifeKills, true)
          .addField("K/D", lifeKd, true)
          .addField("Matches Played", lifeMatches, true)
          .addField("Score", lifeScore, true)
          .addField("Win Percentage", lifeWinPercent, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );

        message.channel.send(lifeEmbed); //Sends lifetime stats
      }

      if (mode.toLowerCase() == "all") {
        //Solo stats
        let solo = stats.solo;
        let soloScore = solo.score;
        let soloMatches = solo.matches;
        let soloWins = solo.wins;
        let soloKills = solo.kills;
        let soloKd = solo.kd;

        let soloEmbed = new Discord.RichEmbed()
          .setTitle("Fortnite Solo Stats")
          .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
          .setDescription(`Solo stats for ${data.username}`)
          .setColor("#42b6f4")
          .addField("Wins", soloWins, true)
          .addField("Kills", soloKills, true)
          .addField("K/D", soloKd, true)
          .addField("Matches Played", soloMatches, true)
          .addField("Score", soloScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(soloEmbed); //Send solo stats

        //Duo stats
        let duo = stats.duo;
        let duoScore = duo.score;
        let duoMatches = duo.matches;
        let duoWins = duo.wins;
        let duoKills = duo.kills;
        let duoKd = duo.kd;

        let duoEmbed = new Discord.RichEmbed()
          .setTitle("Fortnite Duo Stats")
          .setThumbnail(
            "http://www.dualski.com/wp-content/uploads/2015/08/Duo.png"
          )
          .setDescription(`Duo stats for ${data.username}`)
          .setColor("#42b6f4")
          .addField("Wins", duoWins, true)
          .addField("Kills", duoKills, true)
          .addField("K/D", duoKd, true)
          .addField("Matches Played", duoMatches, true)
          .addField("Score", duoScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(duoEmbed); //Send duo stats

        //Squad stats
        let squad = stats.squad;
        let squadScore = squad.score;
        let squadMatches = squad.matches;
        let squadWins = squad.wins;
        let squadKills = squad.kills;
        let squadKd = squad.kd;

        let squadEmbed = new Discord.RichEmbed()
          .setTitle("Fortnite Squad Stats")
          .setThumbnail(
            "https://images.joinsquad.com/Logos/squadlogo_black_hires.png"
          )
          .setDescription(`Squad stats for ${data.username}`)
          .setColor("#42b6f4")
          .addField("Wins", squadWins, true)
          .addField("Kills", squadKills, true)
          .addField("K/D", squadKd, true)
          .addField("Matches Played", squadMatches, true)
          .addField("Score", squadScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(squadEmbed); //Send squad stats
      }

      if (mode.toLowerCase() == "season") {
        //Solo season stats
        let currentSolo = stats.current_solo;
        let currentSoloScore = currentSolo.score;
        let currentSoloMatches = currentSolo.matches;
        let currentSoloWins = currentSolo.wins;
        let currentSoloKills = currentSolo.kills;
        let currentSoloKd = currentSolo.kd;

        let currentSoloEmbed = new Discord.RichEmbed()
          .setTitle(`Fortnite Season ${currentSeason} Solo Stats`)
          .setThumbnail("https://s3.amazonaws.com/media.atp/42511_solof.png")
          .setDescription(
            `Season ${currentSeason} Solo stats for ${data.username}`
          )
          .setColor("#42b6f4")
          .addField("Wins", currentSoloWins, true)
          .addField("Kills", currentSoloKills, true)
          .addField("K/D", currentSoloKd, true)
          .addField("Matches Played", currentSoloMatches, true)
          .addField("Score", currentSoloScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(currentSoloEmbed); //Send solo season stats

        //Duo season stats
        let currentDuo = stats.current_duo;
        let currentDuoScore = currentDuo.score;
        let currentDuoMatches = currentDuo.matches;
        let currentDuoWins = currentDuo.wins;
        let currentDuoKills = currentDuo.kills;
        let currentDuoKd = currentDuo.kd;

        let currentDuoEmbed = new Discord.RichEmbed()
          .setTitle(`Fortnite Season ${currentSeason} Duo Stats`)
          .setThumbnail(
            "http://www.dualski.com/wp-content/uploads/2015/08/Duo.png"
          )
          .setDescription(
            `Season ${currentSeason} Duo stats for ${data.username}`
          )
          .setColor("#42b6f4")
          .addField("Wins", currentDuoWins, true)
          .addField("Kills", currentDuoKills, true)
          .addField("K/D", currentDuoKd, true)
          .addField("Matches Played", currentDuoMatches, true)
          .addField("Score", currentDuoScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(currentDuoEmbed); //Send duo season stats

        //Squad season stats
        let currentSquad = stats.current_duo;
        let currentSquadScore = currentSquad.score;
        let currentSquadMatches = currentSquad.matches;
        let currentSquadWins = currentSquad.wins;
        let currentSquadKills = currentSquad.kills;
        let currentSquadKd = currentSquad.kd;

        let currentSquadEmbed = new Discord.RichEmbed()
          .setTitle(`Fortnite Season ${currentSeason} Squad Stats`)
          .setThumbnail(
            "https://images.joinsquad.com/Logos/squadlogo_black_hires.png"
          )
          .setDescription(
            `Season ${currentSeason} Squad stats for ${data.username}`
          )
          .setColor("#42b6f4")
          .addField("Wins", currentSquadWins, true)
          .addField("Kills", currentSquadKills, true)
          .addField("K/D", currentSquadKd, true)
          .addField("Matches Played", currentSquadMatches, true)
          .addField("Score", currentSquadScore, true)
          .addBlankField()
          .addField(
            "Note",
            "If you like the bot please vote using the **`+vote`** command. "
          );
        message.channel.send(currentSquadEmbed); //Send squad stats
      }
    })
    .catch(e => {
      //Error handling
      //console.log(e);
      return message.channel.send(
        "Error. User not found, make sure you are using the right syntax: `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn] {mode all/season}`.\nFor lifetime stats use `+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn]`\n\n**If this problem keeps happening join our support server [Here](https://discord.gg/sNwDy6J)**"
      ); //Send error message
    });
  }})        

client.on('message', (message) => {
    if(message.content == '+help'){
        message.channel.send({embed: {
    color: 15844367,
    footer: {
    text: "Bot made by Flater#0420"
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
        name: "**Fun**",
        value: "+snap, +ligma",
      },
      {
        name: "**Utility**",
        value: "+avi, +userinfo, +invite, +vote"
      },
      {
        name: "**Fortnite**",
        value: "`+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn]` : Shows lifetime stats.\n`+fortnite <epic-username>/xbl(username)/psn(username) [platform pc/xbl/psn] {mode all/season}` : Looks up stats for solo/duo/squad or season stats.\n`+fortnite drop` : Randomly picks a spot on the fortnite map"
      },
      {
        name: "Support Server",
        value: "Join our support server by clicking [Here](https://discord.gg/sNwDy6J)"
      }
    ]
  }
} 
        
        
        );   
    }
});

client.on('message', (message) => {
  const args = message.content.split(" ").slice(1);
	
    if (message.content.startsWith("+eval")) {
    if(message.author.id !== "136191833196855296") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.login(process.env.B0T_T0KEN);
