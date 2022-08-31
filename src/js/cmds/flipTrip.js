const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsFlipTrip } = require("@hizollo/games");
const { flipTrip } = require("./strings.json");

const flipTripData = new SlashCommandBuilder()
	.setName("fliptrip")
	.setDescription("開啟一場Flip trip遊戲")
	.addIntegerOption(option =>
		option.setName("棋盤數")
		.setDescription("棋盤數(1~10，1最簡單，10最困難)")
		.setRequired(true)
	)


module.exports = {
	data: flipTripData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const size = interaction.options.getInteger("棋盤數");

		const game = new DjsFlipTrip({
			source: interaction,
			players: [interaction.user],
			boardSize: size,
			strings: flipTrip
		});

		console.log(`>fliptrip *Game Start* ${size}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

		await game.initialize();
		await game.start();
		await game.conclude();
	}
}