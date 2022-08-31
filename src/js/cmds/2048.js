const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsTofe } = require('@hizollo/games');
const { tofe } = require("./strings.json");

const tofeData = new SlashCommandBuilder()
	.setName("2048")
	.setDescription("開啟一場2048遊戲")
	.addStringOption(option => 
		option.setName("難度")
			.setDescription("遊戲的難度")
			.setRequired(true)
			.addChoices(
				{ name: "簡單", value: '簡單模式' },
				{ name: "困難", value: '困難模式' },
			)
	);



module.exports = {
	data: tofeData,
	
	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
        		
		const hardMode = (() => {
			if(interaction.options.getString("難度") === "簡單模式"){
				return false;
			} else {
				return true;
			}
		})();

		const game = new DjsTofe({
			hardMode: hardMode,
  			source: interaction, 
  			players: [interaction.user],
  			strings: tofe
		});

		console.log(`>2048 *Game Start* hardMode: ${hardMode}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

		await game.initialize();
		await game.start();
		await game.conclude();
	}
}
