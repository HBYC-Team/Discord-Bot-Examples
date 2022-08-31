const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsGomoku } = require("@hizollo/games");
const { gomoku } = require("./strings.json");

const gomokuData = new SlashCommandBuilder()
	.setName("gomoku")
	.setDescription("開啟一場九路五子棋遊戲")
	.addUserOption(option => 
		option.setName("p2")
			.setDescription("玩家2")
			.setRequired(true)
	)
	.addUserOption(option => 
		option.setName("p3")
		.setDescription("玩家3")
		.setRequired(false)
	)


module.exports = {
	data: gomokuData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();


        const p2 = interaction.options.getUser("p2");
        const p3 = interaction.options.getUser("p3");

        const players = [{
        	username: interaction.user.username,
        	id: interaction.user.id,
        	symbol: "🔵"
        }, {
        	username: p2.username,
        	id: p2.id,
        	symbol: "🔴"
        }];

        if(p3 !== null){
        	players.push({
        		username: p3.name,
        		id: p3.id,
        		symbol: "🟢" 
        	});
        }

        const game = new DjsGomoku({
        	source: interaction,
        	players: players,
        	strings: gomoku
        });

		console.log(`>gomoku *Game Start*`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

        await game.initialize();
        await game.start();
        await game.conclude();
	}
}

