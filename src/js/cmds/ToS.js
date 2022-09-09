const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const { links } = require('../../constants.json');

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
	}
}
