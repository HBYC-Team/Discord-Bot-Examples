const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
	id: cmdHookId,
	token: cmdHookToken
});

const announcementData = new SlashCommandBuilder()
	.setName("announcement")
	.setDescription("目前最新版本的公告")


module.exports = {
	data: announcementData,

	async execute(interaction){
		const annEmbed = new EmbedBuilder()
			.setColor(0x1cb7ca)
			.setTitle(`最新版本公告 - ${bot.version}`)
			.addFields(
				{ name: ">> 使用者方面", value: "+ 將已知的bug修正\n+ 將`/report`指令的回報內容整理後直接送至後台伺服器\n+ 新增一些神奇的回應\n+ 將`/presence`指令新增一些活動狀態" },
				{ name: ">> 專案庫方面", value: "+ Rewrite 大部分的指令\n+ 將buttonRole, join, osu的副檔名改成.cjs\n+ 新增webhook的一些使用\n+ 修改一些資料的引入方式" }
			)
			.setTimestamp()
			.setFooter({ text: "更詳細的內容請到Github上查看喔！" });

		await interaction.reply({ embeds: [annEmbed] });
		
		const cmdHookEmbed = new EmbedBuilder()
			.setAuthor({ name: "Command Log", iconURL: interaction.client.user.avatarURL() })
			.setColor(0x00bfff)
			.setDescription("Command: `/announcement`")
			.addFields(
				{ name: "User Tag", value: interaction.user.tag },
				{ name: "User ID", value: interaction.user.id },
				{ name: "Guild Name", value: interaction.guild.name },
				{ name: "Guild ID", value: interaction.guild.id }
			)
			.setTimestamp()
			.setFooter({ text: 'Shard#1' });

		cmdHook.send({
			embeds: [cmdHookEmbed]
		});
	}
}
