const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js');

const { bot } = require('../../constants.json');

require('dotenv').config({ path: '/src/js' });

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
				{ name: ">> 使用者方面", value: "+ 當HBYC被@everyone或是被@身份組時，不會再亂吵了\n+ 當HBYC同時遇到兩個不同的隱藏回應時，只會回應其中一個\n+ 當/tictactoe指令的參數錯誤時，機器人不會私訊你了" },
				{ name: ">> 專案庫方面", value: "+ 將漏掉的webhook添加\n+ 將錯誤分支號碼更改為正確號碼+ 將catch(error)的部份簡化\n+ 將avatar.ts的部份內容稍做更改\n- 把沒用到的import移除\n+ 將已知的bug修正" }
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
