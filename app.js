/*****************************************
 ************HBYC Discord Bot*************
 **********Author: dragonyc1002***********
 **********License: BSD 3-Clause**********
 *************Version: 0.1.0**************
 ********Release Date: 2022-07-31*********
 *****************************************/
const { Client, Collection, GatewayIntentBits, Partials, InteractionType } = require("discord.js");
const { createMusicManager } = require("@kyometori/djsmusic");
const { lanBot, dalao, mention, lanDino } = require("./config.json");
const fs = require("node:fs");
const path = require("node:path");

require("dotenv").config();
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] });


client.on("interactionCreate", async interaction => {

	if(!interaction.type === InteractionType.ApplicationCommand) return;


	const command = client.commands.get(interaction.commandName);

	if(!command) return;

	try {
		await command.execute(interaction);
	} catch(error) {
		console.error(error);
	 	await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true});
	}
});

client.on('messageCreate', async message => {
  	if (!message.content.startsWith('c!')) return;

  	const args = message.content.slice('c!'.length).trim().split(/ +/);
  	/*if (args[0] === 'game') {
    	const game = new DjsGameName({
      		source: message, 
      		Other options 
    	});

    await game.initialize();
    await game.start();
    await game.conclude();
  	}*/
  
});


client.commands = new Collection();

const commandsPath = path.join(__dirname, 'cmds');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

for(const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}



/*****Event of messages*****/

client.on("messageCreate", message => {
	if(message.author.id === client.user.id) return;

	if(message.content === "爛bot" || message.content === "lan bot" || message.content === "爛Bot" || message.content === "爛BOT"){
		let replies = Math.floor(Math.random()*lanBot.length);
		let replyMsg = lanBot[replies];
		message.channel.send(replyMsg);
	};

	if(message.content === "x04bot"){
		message.channel.send("要罵人之前請先記得切換輸入法呦;)");
	};

	if(message.content === "大佬" || message.content === "lao" || message.content === "佬"){
		let replies = Math.floor(Math.random()*dalao.length);
		let replyMsg = dalao[replies];
		message.channel.send(replyMsg);
	};

	if(message.mentions.has(client.user.id)){
		let replies = Math.floor(Math.random()*mention.length);
		let replyMsg = mention[replies];
		message.channel.send(replyMsg);
	};

	if(message.content === "爛恐龍" || message.content === "恐龍很爛"){
		let replies = Math.floor(Math.random()*lanDino.length);
		let replyMsg = lanDino[replies];
		message.channel.send(replyMsg);
	};
});




client.login(token);