const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js')
const { DjsTofe } = require('@hizollo/games');
const { tofe } = require('../../gameStrings.json');
const { bot } = require('../../constants.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
	id: cmdHookId,
	token: cmdHookToken
});

const tofeData = new SlashCommandBuilder()
	.setName("2048")
	.setDescription("開始一場2048遊戲")
	.addStringOption(option => 
		option.setName("難度")
			.setDescription("遊戲的難度")
			.setRequired(true)
			.addChoices(
				{ name: "簡單", value: '簡單模式' },
				{ name: "困難", value: '困難模式' },
			)
	);



module.exports = {
	data: tofeData,
	
	async execute(interaction) {
		const hardMode = (() => {
			if(interaction.options.getString("難度") === "簡單模式"){
				return false;
			} else {
				return true;
			}
		})();

		const game = new DjsTofe({
			hardMode: hardMode,
  			source: interaction, 
  			players: [interaction.user],
  			strings: tofe
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		const cmdHookEmbed = new EmbedBuilder()
			.setTitle(`Command Log - /2048 `)
			.setColor(0x00bfff)
			.addFields(
				{ name: "User Tag", value: interaction.user.tag },
				{ name: "User ID", value: interaction.user.id },
				{ name: "Guild", value: interaction.guild.name },
				{ name: "Guild ID", value: interaction.guild.id }
			)
			.setTimestamp()
			.setFooter({ text: `${bot.version}` });

		cmdHook.send({
			embeds: [cmdHookEmbed]
		});
	}
}
