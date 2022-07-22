const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsBullsAndCows } = require('@hizollo/games');

const BullsAndCows = new SlashCommandBuilder()
	.setName("bullsandcows")
	.setDescription("bullsandcows game.")
	.addStringOption(option =>
		option.setName("mode")
		.setDescription("The difficulty of the game.")
		.setRequired(true)
		.addChoices(
			{ name: "Easy", value: 'Easy mode' },
			{ name: "Hard", value: 'Hard mode' },
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
		const mode = interaction.options.getString("mode");

		if(mode === "Easy") {
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