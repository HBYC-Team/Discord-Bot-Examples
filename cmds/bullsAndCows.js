const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsBullsAndCows } = require('@hizollo/games');
const { bullsAndCows } = require("./strings.json")

const bullsAndCowsData = new SlashCommandBuilder()
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
	data: bullsAndCowsData,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const user = interaction.user;
		
		const hardMode = (() => {
			if(interaction.options.getString("難度") === "簡單模式"){
				return false;
			} else {
				return true;
			}
		})();

		const game = new DjsBullsAndCows({
			source: interaction,
			players: [interaction.user],
			hardMode: hardMode,
			strings: bullsAndCows
		});

		await game.initialize();
		await game.start();
		await game.conclude();


		console.log(`>bullsandcows hardMode: ${hardMode}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

	},
}