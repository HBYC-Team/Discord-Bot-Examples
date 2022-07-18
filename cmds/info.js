const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

const info = new SlashCommandBuilder()
	.setName("info")
	.setDescription("取得伺服器或一個使用者的資訊")
	.addSubcommand(subcommand =>
		subcommand
			.setName("member")
			.setDescription("關於一個使用者的資訊")
			.addUserOption(option => option.setName("使用者").setDescription("要取得資訊的使用者")))
	.addSubcommand(subcommand =>
		subcommand
			.setName("server")
			.setDescription("伺服器資訊"))

module.exports = {
	data: info,
	async execute(interaction) {
		if(interaction.options.getSubcommand() === "member"){
			const member = interaction.options.getUser("使用者");

			if(member === null){
				const member = interaction.user;
				const guildInfo = interaction.guild.members.cache.get(member.id)
				const memberEmbed = new MessageEmbed()
                    .setColor("#B0EA6B")
                    .setTitle(`${member.tag} 的資訊`)
                    .addFields(
                        { name: "使用者名稱", value: member.username, inline: true },
                        { name: "於本伺服器的暱稱", value: guildInfo.nickname || "無", inline: false },
                        { name: "ID", value: member.id, inline: false },
                        { name: "是否為機器人", value: "否", inline: false },
                        { name: "加入伺服器時間", value: guildInfo.joinedAt.toLocaleDateString(), inline: false },
                        { name: "帳號創立時間", value: member.createdAt.toLocaleDateString(), inline: false }
                    )
                    .setThumbnail(member.avatarURL())
                await interaction.reply({ embeds: [memberEmbed] });
			} else {
				if(member.bot === true){
					const guildInfo = interaction.guild.members.cache.get(member.id)
					const memberEmbed = new MessageEmbed()
                    	.setColor("#B0EA6B")
                    	.setTitle(`${member.tag} 的資訊`)
                    	.addFields(
                        	{ name: "使用者名稱", value: member.username, inline: true },
                        	{ name: "於本伺服器的暱稱", value: guildInfo.nickname || "無", inline: false },
                        	{ name: "ID", value: member.id, inline: false },
                        	{ name: "是否為機器人", value: "是", inline: false },
                        	{ name: "加入伺服器時間", value: guildInfo.joinedAt.toLocaleDateString(), inline: false },
                       		{ name: "帳號創立時間", value: member.createdAt.toLocaleDateString(), inline: false }
                    	)
                    	.setThumbnail(member.avatarURL())
               		await interaction.reply({ embeds: [memberEmbed] });
				} else {
					const guildInfo = interaction.guild.members.cache.get(member.id)
					const memberEmbed = new MessageEmbed()
                    	.setColor("#B0EA6B")
                    	.setTitle(`${member.tag} 的資訊`)
                    	.addFields(
                     		{ name: "使用者名稱", value: member.username, inline: true },
                    	    { name: "於本伺服器的暱稱", value: guildInfo.nickname || "無", inline: false },
                    	    { name: "ID", value: member.id, inline: false },
                        	{ name: "是否為機器人", value: "否", inline: false },
                        	{ name: "加入伺服器時間", value: guildInfo.joinedAt.toLocaleDateString(), inline: false },
                        	{ name: "帳號創立時間", value: member.createdAt.toLocaleDateString(), inline: false }
                    	)
                    	.setThumbnail(member.avatarURL())
               		await interaction.reply({ embeds: [memberEmbed] });
				}
			}
		} else {
			const guild = interaction.guild
			const memberEmbed = new MessageEmbed()
               	.setColor("#B0EA6B")
               	.setTitle(`${guild.name} 的資訊`)
                .addFields(
                    { name: "伺服器ID", value: guild.id, inline: false },
              		{ name: "成員數量", value: `${guild.memberCount}`, inline:false },
              		{ name: "擁有者", value: `<@!${guild.ownerId}>`, inline:false },
              		{ name: "創立日期", value: guild.createdAt.toLocaleDateString(), inline: false }
                )
                .setThumbnail(guild.iconURL())
            await interaction.reply({ embeds: [memberEmbed] });
		}
	}
}