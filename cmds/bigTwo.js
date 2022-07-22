const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsBigTwo } = require("@hizollo/games");

const BigTwo = new SlashCommandBuilder()
	.setName("bigtwo")
	.setDescription("開啟一場大老二撲克牌遊戲")
	.addUserOption(option =>
		option.setName("p1")
			.setDescription("玩家1")
			.setRequired(true))
	.addUserOption(option =>
		option.setName("p2")
		    .setDescription("玩家2")
			.setRequired(true))
	.addUserOption(option =>
		option.setName("p3")
			.setDescription("玩家3")
			.setRequired(true))
	.addUserOption(option =>
		option.setName("p4")
			.setDescription("玩家4")
			.setRequired(true))

module.exports = {
	data: BigTwo,
	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();

		const p1 = interaction.options.getUser("p1");
		const p2 = interaction.options.getUser("p2");
		const p3 = interaction.options.getUser("p3");
		const p4 = interaction.options.getUser("p4");

		const game = new DjsBigTwo({
  			source: interaction, 
  			players: [p1, p2, p3, p4] 
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		console.log(`>bigtwo ${p1.tag} ${p2.tag} ${p3.tag} ${p4.tag}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	},
}
