const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
	.setName("say")
	.setDescription("sent a message")
	.addStringOption(option => 
		option.setName("message")
			.setDescription("The content of the message.")
			.setRequired(true));


module.exports = {
	data: data,
	async execute(interaction) {
		const content = interaction.options.getString("say"); 
		await interaction.reply({ content: "The message has been send.", ephemeral: true });
		await interaction.channel.send(content);
	}
}