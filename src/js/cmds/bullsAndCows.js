const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js')
const { DjsBullsAndCows } = require('@hizollo/games');
const { bullsAndCows } = require('../../gameStrings.json');
const { bot } = require('../../constants.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
    id: cmdHookId,
    token: cmdHookToken
});

const bullsAndCowsData = new SlashCommandBuilder()
	.setName("bullsandcows")
	.setDescription("遊玩一場猜AB遊戲！")
	.addStringOption(option =>
		option.setName("難度")
		.setDescription("遊戲難度")
		.setRequired(true)
		.addChoices(
			{ name: "簡單", value: '簡單模式' },
			{ name: "困難", value: '困難模式' },
		));

module.exports = {
	data: bullsAndCowsData,

	async execute(interaction) {
		const hardMode = (() => {
			if(interaction.options.getString("難度") === "簡單模式"){
				return false;
			} else {
				return true;
			}
		})();

		const game = new DjsBullsAndCows({
			source: interaction,
			players: [interaction.user],
			hardMode: hardMode,
			strings: bullsAndCows
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		const cmdHookEmbed = new EmbedBuilder()
            .setTitle(`Command Log - /bullsandcows`)
            .setColor(0x00bfff)
            .addFields(
                { name: "User Tag", value: interaction.user.tag },
                { name: "User ID", value: interaction.user.id },
                { name: "Guild", value: interaction.guild.name },
                { name: "Guild ID", value: interaction.guild.id }
            )
            .setTimestamp()
            .setFooter({ text: bot.version });

        cmdHook.send({
            embeds: [cmdHookEmbed]
        }); 
	}
}