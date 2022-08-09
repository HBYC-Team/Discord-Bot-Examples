const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const devData = new SlashCommandBuilder()
	.setName("dev")
	.setDescription("有關創作者的資訊")


module.exports = {
	data: devData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const devEmbed = new EmbedBuilder()
			.setTitle("HBYC的創作者")
			.setColor(0x756452)
			.addFields(
				{ name: "團隊成員", value: "恐龍#2549" },
				{ name: "程式設計", value: "恐龍#2549" },
				{ name: "網管控制", value: "恐龍#2549" },
				{ name: "美術設計", value: "恐龍#2549" }

			)
			.setTimestamp()
			.setThumbnail(interaction.client.user.displayAvatarURL())
			.setFooter({ text: "HBYC From 2022~" })

		await interaction.reply({ embeds: [devEmbed] });
		console.log(">dev");
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}
