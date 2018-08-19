const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const config = require('./config.json');
client.config = config;

client.on("ready", () => {
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`+help for ${client.users.size} members in ${client.guilds.size} servers.`);
  // Check if the table "points" exists.
  const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  // And then we have two prepared statements to get and set the score data.
  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
  client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
});

client.on("message", message => {
  // Ignore bots, DMs and group messages. 
  if (message.author.bot || !message.guild) return;
  

  /* 
    START Points CODE
  */ 

  // Initialize ("declare") the points. If we did this in the condition it would not be
  // available later in commands. Because "scopes"! 
  let score;
  
  if (message.guild) {
    // Try to get the current user's score. 
    score = client.getScore.get(message.author.id, message.guild.id);
    
    // If the score doesn't exist (new user), initialize with defaults. 
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 };
    }
    
    // Increment points.
    score.points++;
    
    // Calculate the current level through MATH OMG HALP.
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
    
    // Check if the user has leveled up, and let them know if they have:
    if(score.level < curLevel) {
      // Level up!
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
    }

    // Save data to the sqlite table. 
    // This looks super simple because it's calling upon the prepared statement!
    client.setScore.run(score);
  }
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "points") {
    return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
  }
  
  if(command === "give") {
    // Limited to guild owner - adjust to your own preference!
    if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
  
    // Try to get the user from mention. If not found, get the ID given and get a user from that ID. 
    const user = message.mentions.users.first() || client.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their ID!");
  
    // Read the amount of points to give to the user. 
    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
  
    // Get their current points. This can't use `score` because it's not the same user ;)
    let userscore = client.getScore.get(user.id, message.guild.id);
    
    // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
    if (!userscore) {
      userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 };
    }
    
    // Increment the score. 
    userscore.points += pointsToAdd;
  
    // We also want to update their level (but we won't notify them if it changes)
    let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
    userscore.level = userLevel;
  
    // And we save it!
    client.setScore.run(userscore);
  
    return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
  }
  
  if(command === "leaderboard") {
    // Grab the 
    const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);

    // Now shake it and show it! (as a nice embed, too!)
    const embed = new Discord.RichEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription("Our top 10 points leaders!")
      .setColor(0x00AE86);

    for(const data of top10) {
      embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
    }
    return message.channel.send({embed});
  }
  
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
        var text = "You have " + Math.floor((Math.random() * 100) + 1) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});

client.on('message', (message) => {
    if (message.content.indexOf("+ligma ") !=-1) {	 
	    if (message.content.length > 14) {
		
//var taggedmember1 = message.mentions.members.first();

var taggedmember1 = message.mentions.members.first();

		var text = (taggedmember1) + " has " + Math.floor((Math.random() * 100) + 1) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";
		
		var messagecontentxd = message.content;
		var text1 = messagecontentxd.replace('+ligma ','');
		var textD = (text1) + " has " + Math.floor((Math.random() * 100) + 1) + "% ligma <:GWqlabsArmLeft:463123955772030976> <:ninja:480134047969050634> <:vbucksarmright:467371808782417940>";

		
		
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
        name: "**Commands**",
        value: "+snap, +ligma, level, points, +invite"	
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
