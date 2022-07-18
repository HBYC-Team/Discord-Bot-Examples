const { SlashCommandBuilder } = require("@discordjs/builders");

const say = new SlashCommandBuilder()
	.setName("say")
	.setDescription("讓HBYC發送一則訊息")
	.addStringOption(option => 
		option.setName("訊息內容")
			.setDescription("要發送的訊息內容")
			.setRequired(true));


module.exports = {
	data: say,
	async execute(interaction) {
		const content = interaction.options.getString("訊息內容"); 
		await interaction.reply({ content: "訊息已傳送", ephemeral: true });
		await interaction.channel.send(content);
		console.log(`>say ${content}\n `)
	},
}