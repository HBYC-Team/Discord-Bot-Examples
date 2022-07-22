const { SlashCommandBuilder } = require("@discordjs/builders");

const echo = new SlashCommandBuilder()
	.setName("echo")
	.setDescription("讓HBYC重複一句話")
	.addStringOption(option => 
		option.setName("訊息內容")
			.setDescription("要讓機器人重複的話")
			.setRequired(true)
	)
	

module.exports = {
	data: echo,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
        		
		const c = interaction.options.getString("訊息內容");

		await interaction.reply(c);

		console.log(`>echo ${c}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	},
}