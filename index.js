const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true, sync: true });
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const config = require('./config.json');
client.config = config;

const prefix = "+";
client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! What a #VicoryRoyale!`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
    });
  }
});

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
