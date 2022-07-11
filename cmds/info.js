const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
	.setName("info")
	.setDescription("Get a info of a user or a server.")
	.addSubcommand(subcommand =>
		subcommand
			.setName("user")
			.setDescription("Info about a user.")
			.addUserOption(option => option.setName("target").setDescription("The user")))
	.addSubcommand(subcommand =>
		subcommand
			.setName("server")
			.setDescription("Info about a server."))

module.exports = {
	data: data,
	async execute(interaction) {
		if(interaction.options.getUser === null) {
			const user = interaction.user;

			if(interaction.options.getSubcommand() === "user") {

				if(user) {
					await interaction.reply(`Name:${user.username}\nId:${user.userid}`);
				} else {
					await interaction.reply(`Name:${interaction.user.username}\nId:${interaction.user.userid}`);
				}
			} else if(interaction.options.getSubcommand() === "server") {
				await interaction.reply(`Server Name:${interaction.guild.name}\nTotal Members:${interaction.guild.memberCount}`);
			} else {
				await interaction.reply("Please check that if you entered the wrong command.");
			}
		} else {
			const user = interaction.options.getUser("target");

			if(interaction.options.getSubcommand() === "user") {

				if(user) {
					await interaction.reply(`Name:${user.username}\nId:${user.userid}`);
				} else {
					await interaction.reply(`Name:${interaction.user.username}\nId:${interaction.user.userid}`);
				}
			} else if(interaction.options.getSubcommand() === "server") {
				await interaction.reply(`Server Name:${interaction.guild.name}\nTotal Members:${interaction.guild.memberCount}`);
			} else {
				await interaction.reply("Please check that if you entered the wrong command.");
			}
		}
	}
};
