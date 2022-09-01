const { SlashCommandBuilder } = require("@discordjs/builders");
const { presence } = require("../../config.json");

const presenceData = new SlashCommandBuilder()
	.setName("presence")
	.setDescription("更改目前機器人的動態")

module.exports = {
	data: presenceData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		let statusList = Math.floor(Math.random()*presence.length);
		let status = presence[statusList];

		await interaction.client.user.setPresence({ activities: [{ name: status }] });
		
		await interaction.reply(`<@!${interaction.user.id}>，已經將動態更改為\`${status}\`，5分鐘後可以再次使用這個指令！"`);
		
		console.log(`>presence => ${status}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}