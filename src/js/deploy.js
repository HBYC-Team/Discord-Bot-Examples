const fs = require("fs");
const path = require("path");

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

require("dotenv").config();

const clientId = process.env.clientId;
const token = process.env.TOKEN;

const commands = [];
const commandFiles = fs.readdirSync("./cmds").filter(file => file.endsWith(".js"));

for(const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
	try {
		console.log("Started refreshing application commands.");

		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },

		);
	} catch(error) {
		console.error(error);
	}
})();
