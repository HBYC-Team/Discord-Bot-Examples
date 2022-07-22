const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsBullsAndCows } = require('@hizollo/games');

const BullsAndCows = new SlashCommandBuilder()
	.setName("bullsandcows")
	.setDescription("開啟一場猜AB遊戲")
	.addStringOption(option =>
		option.setName("難度")
		.setDescription("遊戲難度")
		.setRequired(true)
		.addChoices(
			{ name: "簡單", value: '簡單模式' },
			{ name: "困難", value: '困難模式' },
		));

module.exports = {
	data: BullsAndCows,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const user = interaction.user;
		const mode = interaction.options.getString("難度");

		if(mode === "簡單") {
			const game = new DjsBullsAndCows({
				source: interaction,
				players: [user],

			});

			await game.initialize();
			await game.start();
			await game.conclude();
		} else {
			const game = new DjsBullsAndCows({
				source: interaction,
				players: [user],
				hardmode: true
			});

			await game.initialize();
			await game.start();
			await game.conclude();
		};

		console.log(`>bullsandcows ${mode}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

	},
}