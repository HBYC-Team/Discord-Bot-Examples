const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder, WebhookClient } = require("discord.js");
const { bot, links } = require('../../constants.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
	id: cmdHookId,
	token: cmdHookToken
});

const ToSData = new SlashCommandBuilder()
	.setName("tos")
	.setDescription("查看HBYC的服務條款");

module.exports = {
	data: ToSData,

	async execute(interaction){

		const ToSEmbed = new EmbedBuilder()
			.setTitle("HBYC的服務條款")
			.addFields(
				{ name: "中文版", value: links.tos_en },
				{ name: "English Version", value: links.tos_zh }
			)
			.setTimestamp()
			.setFooter({ text: `${interaction.user.username}，若有更多問題歡迎加入後台伺服器！`, iconURL: interaction.user.displayAvatarURL() })

		await interaction.reply({ embeds: [ToSEmbed] });

		const cmdHookEmbed = new EmbedBuilder()
			.setTitle(`Command Log - /tos`)
			.setColor(0x00bfff)
			.addFields(
				{ name: "User Tag", value: interaction.user.tag },
				{ name: "User ID", value: interaction.user.id },
				{ name: "Guild", value: interaction.guild.name },
				{ name: "Guild ID", value: interaction.guild.id }
			)
			.setTimestamp()
			.setFooter({ text: `版本號:${bot.version}` });

		cmdHook.send({
			embeds: [cmdHookEmbed]
		});
	}
}
