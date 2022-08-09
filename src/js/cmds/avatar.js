const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

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
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
        		
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


		console.log(`>avatar ${member.tag}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}