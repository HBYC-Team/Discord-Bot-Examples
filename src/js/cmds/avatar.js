const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js');
const { bot } = require('../../constants.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
	id: cmdHookId,
	token: cmdHookToken
});

const avatarData = new SlashCommandBuilder()
	.setName("avatar")
	.setDescription("取得一個用戶的頭像")
	.addUserOption(option =>
		option.setName("用戶名稱")
		.setDescription("用戶")
		.setRequired(false)
	)

module.exports = {
	data: avatarData,
	
	async execute(interaction){
		const member = (() => {
			if(interaction.options.getUser("用戶名稱") === null){
				return interaction.user;
			} else {
				return interaction.options.getUser("用戶名稱");
			};
		})();

		const description = (() => {
			if(member === interaction.user){
				return `<@!${interaction.user.id}>，以下是你的頭像：`;
			} else {
				return `<@!${interaction.user.id}>，這是你要查看的頭像：\n ${member.tag}的頭像`;
			}
		})();

		const avatar = member.displayAvatarURL({ format: "png", size: 1024 });
		
		const avatarEmbed = new EmbedBuilder()
			.setColor(0x00af2a)
			.setTitle("查看頭像")
			.setDescription(description)
			.setImage(avatar)
			.setTimestamp()
			.setFooter({ text: interaction.user.tag });
		
		await interaction.reply({ embeds: [avatarEmbed] });

		const cmdHookEmbed = new EmbedBuilder()
			.setTitle(`Command Log - /avatar ${member.tag}`)
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