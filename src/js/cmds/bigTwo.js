const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js');
const { DjsBigTwo } = require('@hizollo/games');
const { bigTwo } = require('../../gameStrings.json');
const { bot } = require('../../constants.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
	id: cmdHookId,
	token: cmdHookToken
});

const bigTwoData = new SlashCommandBuilder()
	.setName("bigtwo")
	.setDescription("開啟一場大老二撲克牌遊戲")
	.addUserOption(option =>
		option.setName("p2")
		    .setDescription("玩家2")
			.setRequired(true))
	.addUserOption(option =>
		option.setName("p3")
			.setDescription("玩家3")
			.setRequired(true))
	.addUserOption(option =>
		option.setName("p4")
			.setDescription("玩家4")
			.setRequired(true))

module.exports = {
	data: bigTwoData,
	
	async execute(interaction) {
		const p1 = interaction.user;
		const p2 = interaction.options.getUser("p2");
		const p3 = interaction.options.getUser("p3");
		const p4 = interaction.options.getUser("p4");

		const game = new DjsBigTwo({
  			source: interaction, 
  			players: [p1, p2, p3, p4],
  			strings: bigTwo 
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		const cmdHookEmbed = new EmbedBuilder()
			.setTitle(`Command Log - /bigtwo`)
			.setColor(0x00bfff)
			.addFields(
				{ name: "User Tag", value: interaction.user.tag },
				{ name: "User ID", value: interaction.user.id },
				{ name: "Guild", value: interaction.guild.name },
				{ name: "Guild ID", value: interaction.guild.id },
				{ name: "Players", value: `${p1.tag}, ${p2.tag}, ${p3.tag}, ${p4.tag}`}
			)
			.setTimestamp()
			.setFooter({ text: bot.version });

		cmdHook.send({
			embeds: [cmdHookEmbed]
		});
	}
}
