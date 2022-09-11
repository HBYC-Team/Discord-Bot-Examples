/*****************************************
 ************HBYC Discord Bot*************
 **********Author: dragonyc1002***********
 ***********License: CC-BY-4.0************
 *************Version: 2.0.0**************
 ********Release Date: 2022-09-10*********
 *****************************************/
const { Client, Collection, GatewayIntentBits, Partials, InteractionType, WebhookClient, EmbedBuilder } = require("discord.js");
const { createMusicManager } = require("@kyometori/djsmusic");
const { lanBot, dalao, mention, lanDino, www, errors } = require("../config.json");
const { bot, supportGuild } = require('../constants.json')
const { banList } = require("../banList.json");
const fs = require("fs");
const path = require('path');

require("dotenv").config();
const token = process.env.TOKEN;

const errHookId = process.env.errHookId;
const errHookToken = process.env.errHookToken;
const botHookId = process.env.botHookId;
const botHookToken = process.env.botHookToken;

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages, 
		GatewayIntentBits.DirectMessageTyping, 
		GatewayIntentBits.MessageContent
	], 
	partials: [
		Partials.Channel, 
		Partials.Message, 
		Partials.User, 
		Partials.GuildMember, 
		Partials.Reaction
	] 
});

const errHook = new WebhookClient({
    id: errHookId,
    token: errHookToken
});

const botHook = new WebhookClient({
	id: botHookId,
	token: botHookToken
});


client.commands = new Collection();

const cmdPath = path.join(__dirname, 'cmds');
const eventPath = path.join(__dirname, 'events');

const commandFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	client.commands.set(command.data.name, command);
}

for(const file of eventFiles) {
	const event = require(`./events/${file}`);

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

	
client.on("interactionCreate", async interaction => {
	if(!interaction.type === InteractionType.ApplicationCommand) return;
	if(banList.includes(interaction.user.id)) return;
	
	const command = client.commands.get(interaction.commandName);

	if(!command) return;

	try {
		await command.execute(interaction);
	} catch(error){
		await interaction.user.send(`指令發生錯誤，已經將錯誤回報到後台，有任何問題可以到此詢問：${supportGuild.invite}`);

		const errHookEmbed = new EmbedBuilder()
			.setTitle(`Error Log - /${interaction.commandName}`)
			.setColor(0xff0000)
			.addFields(
				{ name: 'Error Code', value: error.message },
				{ name: "User Tag", value: interaction.user.tag },
				{ name: "User ID", value: interaction.user.id },
				{ name: "Guild", value: interaction.guild.name },
				{ name: "Guild ID", value: interaction.guild.id }
			) 
			.setTimestamp()
			.setFooter({ text: `Shard#5` });

		errHook.send({
			embeds: [errHookEmbed]
		});

	}
});

client.on("guildCreate", guild => {
	const guildJoinHookEmbed = new EmbedBuilder()
			.setTitle(`Bot Log - Joined Guild`)
			.setColor(0x29803b)
			.addFields(
				{ name: "Guild Name", value: guild.name },
				{ name: "Guild ID", value: guild.id },
				{ name: "Server Count", value: `${guild.client.guilds.cache.size}` }
			) 
			.setTimestamp()
			.setFooter({ text: `Shard#3` });

	botHook.send({
		embeds: [guildJoinHookEmbed]
	});
});

client.on("guildCreate", guild => {
	const guildJoinHookEmbed = new EmbedBuilder()
			.setTitle(`Bot Log - Lefted Guild`)
			.setColor(0x362980)
			.addFields(
				{ name: "Guild Name", value: guild.name },
				{ name: "Guild ID", value: guild.id },
				{ name: "Server Count", value: `${guild.client.guilds.cache.size}` }
			) 
			.setTimestamp()
			.setFooter({ text: `Shard#3` });

	botHook.send({
		embeds: [guildJoinHookEmbed]
	});
});

client.login(token);
