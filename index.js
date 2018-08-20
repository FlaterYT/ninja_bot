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
        value: "+ligma, +invite"	
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
