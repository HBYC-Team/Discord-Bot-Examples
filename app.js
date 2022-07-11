const { Client, Intents } = require("discord.js");

require("dotenv").config();
const token = process.env.TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
	console.log(`Sucessfully logged ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
	if(!interaction.isCommand()) return;
	
	const { commandName } = interaction;

	if(commandName === "ping") {
		await interaction.reply("pong");
	} else if(commandName === "beep") {
		await interaction.reply("boop");
	}
});

client.login(token);