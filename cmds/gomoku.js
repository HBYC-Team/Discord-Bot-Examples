const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsGomoku } = require("@hizollo/games");

const gomoku = new SlashCommandBuilder()
	.setName("gomoku")
	.setDescription("Start a gomoku Game.")
	.addUserOption(option => 
		option.setName("p2")
			.setDescription("Player 2")
			.setRequired(true))
	.addUserOption(option => 
		option.setName("p3")
		.setDescription("Player3")
		.setRequired(false))


module.exports = {
	data: gomoku,
	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const { username, id, tag } = interaction.options.getUser("p2");
		const user3 = interaction.options.getUser("p3");
		const name3 = user3.username;
		const id3 = user3.id;
		const game = new DjsGomoku({
  			source: interaction, 
  			players: [{
    			username: interaction.user.username, 
    			id: interaction.user.id, 
    			symbol: '🔵'
 			}, {
    			username: username, 
    			id: id, 
    			symbol: '🔴'
    		}, {
    			username: name3,
    			id: id3,
    			symbol: '🟢'
  			}] 
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		console.log(`>2048 ${tag} ${user3.tag}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

	},
}

