const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsFinalCode } = require('@hizollo/games');

const finalCode = new SlashCommandBuilder()
	.setName("finalcode")
	.setDescription("start a finalcode game")
	.addUserOption(option => 
		option.setName("p2")
		.setDescription("Player2")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p3")
		.setDescription("Player3")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p4")
		.setDescription("Player4")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p5")
		.setDescription("Player5")
		.setRequired(false))

module.exports = {
	data: finalCode,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const user = interaction.user;
		const p2 = interaction.options.getUser("p2");
		const p3 = interaction.options.getUser("p3");
		const p4 = interaction.options.getUser("p4");
		const p5 = interaction.options.getUser("p5");

		const game = new DjsFinalCode({
			source: interaction,
			players: [user, p2, p3, p4, p5]
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		console.log(`>finalcode`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}

