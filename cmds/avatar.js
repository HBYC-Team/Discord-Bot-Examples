const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const avatar = new SlashCommandBuilder()
	.setName("avatar")
	.setDescription("取得一個用戶的頭像")
	.addUserOption(option =>
		option.setName("用戶名稱")
		.setDescription("用戶")
		.setRequired(false)
	)

module.exports = {
	data: avatar,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
        		
		const member = interaction.options.getUser("用戶名稱");

		if(member === null){
			const user = interaction.user
			const avatar = user.displayAvatarURL({ format: "png", size: 1024 });

			const avatarEmbed = new EmbedBuilder()
				.setColor(0x00af2a)
				.setTitle("查看頭像")
				.setDescription(`<@!${user.id}>，這是你的頭像`)
				.setImage(avatar)
				.setTimestamp()
				.setFooter({ text: interaction.user.tag });

			await interaction.reply({ embeds: [avatarEmbed] });

		} else {			
			const avatar = member.displayAvatarURL({ format: "png", size: 1024 });

			const avatarEmbed = new EmbedBuilder()
				.setColor(0x00af2a)
				.setTitle("查看頭像")
				.setDescription(`<@!${interaction.user.id}>，這是你要查看的頭像：\n ${member.tag}的頭像`)
				.setImage(avatar)
				.setTimestamp()
				.setFooter({ text: interaction.user.tag });

			await interaction.reply({ embeds: [avatarEmbed] });
		}

		console.log(`>avatar ${member.tag}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.username}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}