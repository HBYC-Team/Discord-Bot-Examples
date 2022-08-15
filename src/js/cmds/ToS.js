const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const ToSData = new SlashCommandBuilder()
	.setName("tos")
	.setDescription("查看HBYC的服務條款");

module.exports = {
	data: ToSData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-"
					+ (new Date().getMonth()+1) + "-"
 					+ new Date().getDate() + " "
					+ new Date().getHours() + ":"
                    + new Date().getMinutes() + ":"
					+ new Date().getSeconds();

		const ToSEmbed = new EmbedBuilder()
			.setTitle("HBYC的服務條款")
			.addFields(
				{ name: "中文版", value: "https://github.com/HBYC-BOT/HBYC/tree/master/docs/TeamofService-Tw.md" },
				{ name: "English Version", value: "https://github.com/HBYC-BOT/HBYC/tree/master/docs/TeamofService.md" }
			)
			.setTimestamp()
			.setFooter({ text: `${interaction.user.username}，若有更多問題歡迎與作者聯絡！`, iconURL: interaction.user.displayAvatarURL() })

		await interaction.reply({ embeds: [ToSEmbed] });
		
		console.log(">tos");
        console.log(`from ${interaction.guild.name}`);
        console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
        console.log("------------");
	}
}
