const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const report = new SlashCommandBuilder()
	.setName("report")
	.setDescription("回報錯誤或建議給作者")
	.addStringOption(option => 
		option.setName("內容")
			.setDescription("回報內容")
			.setRequired(true)
	)

module.exports = {
	data: report,

	async execute(interaction) {
		let currentdate = new Date(); 
		let datetime = currentdate.getFullYear() + "-"
				+ (currentdate.getMonth()+1) + "-" 
				+ currentdate.getDate() + " "
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                
		const c = interaction.options.getString("內容");
		const replyEmbed = new EmbedBuilder()
			.setColor(0x4b56a8)
			.setTitle("用戶回報")
			.addFields(
				{ name: "用戶名稱", value: `${interaction.user.username}` },
				{ name: "ID", value: `${interaction.user.id}` },
				{ name: "回報內容", value: `\`${c}\`` },
				{ name: "回報伺服器", value: `${interaction.guild.name} (ID:${interaction.guild.id})` }
			)	
			.setTimestamp()
			.setThumbnail(interaction.user.avatarURL())
			.setFooter({ text: `你的訊息已經回報至後台`, iconURL: interaction.client.user.avatarURL() });

		await interaction.reply({ embeds: [replyEmbed] });
		console.log("######## User Report ########");
		console.log(`From ${interaction.guild.name}`);
		console.log(`By ${interaction.user.tag}`);
		console.log(c);
		console.log(`At ${datetime}`);
		console.log("-------------------------------");
	}
}