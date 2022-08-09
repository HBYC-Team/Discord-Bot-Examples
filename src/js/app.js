/*****************************************
 ************HBYC Discord Bot*************
 **********Author: dragonyc1002***********
 **********License: BSD 3-Clause**********
 *************Version: 0.2.0**************
 ********Release Date: 2022-08-01*********
 *****************************************/
const { Client, Collection, GatewayIntentBits, Partials, InteractionType } = require("discord.js");
const { createMusicManager } = require("@kyometori/djsmusic");
const { lanBot, dalao, mention, lanDino, www } = require("../config.json");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent], partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] });


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
	if(message.author.bot) return;

	if(message.content === "爛bot" || message.content === "lan bot" || message.content === "爛Bot" || message.content === "爛BOT"){
		let replies = Math.floor(Math.random()*lanBot.length);
		let replyMsg = lanBot[replies];
		await message.channel.send(replyMsg);
		console.log("爛bot");
		console.log("------");
	};

	if(message.content === "x04bot"){
		message.channel.send("要罵人之前請先記得切換輸入法呦;)");
		console.log("x04bot");
		console.log("------");
	};

	if(message.content === "大佬" || message.content === "lao" || message.content === "佬"){
		let replies = Math.floor(Math.random()*dalao.length);
		let replyMsg = dalao[replies];
		await message.channel.send(replyMsg);
		console.log("dalao");
		console.log("------");
	};

	if(message.mentions.has(client.user.id)){
		let replies = Math.floor(Math.random()*mention.length);
		let replyMsg = mention[replies];
		await message.channel.send(replyMsg);
		console.log("Got tag");
		console.log("------");
	};

	if(message.content === "爛恐龍" || message.content === "恐龍很爛"){
		let replies = Math.floor(Math.random()*lanDino.length);
		let replyMsg = lanDino[replies];
		await message.channel.send(replyMsg);
		console.log("爛恐龍");
		console.log("------");
	};

	if(message.content === "w" || message.content === "ww" || message.content === "www" || message.content === "wwww" || message.content === "wwwww" || message.content === "wwwwww"){
		const replyChoose = ["True", "False", "False"];
		let replyTrueFalse = replyChoose[Math.floor(Math.random()*replyChoose.length)];

		if(replyTrueFalse == "True"){
			let replies = Math.floor(Math.random()*www.length);
			let replyMsg = www[replies];
			await message.channel.send(replyMsg);
			console.log("www");
			console.log("------");
		} else {
			return;
		};
	};
  
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







client.login(token);
