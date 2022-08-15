const { SlashCommandBuilder } = require("@discordjs/builders");
const { selectPrefix } = require("../../config.json");

const select = new SlashCommandBuilder()
	.setName("select")
	.setDescription("讓HBYC幫你解決選擇困難症")
	.addStringOption(option =>
		option.setName("選項1")
		.setDescription("選項1")
		.setRequired(true)
	)
	.addStringOption(option =>
		option.setName("選項2")
		.setDescription("選項2")
		.setRequired(true)
	)
	.addStringOption(option =>
		option.setName("選項3")
		.setDescription("選項3")
		.setRequired(false)
	)
	.addStringOption(option =>
		option.setName("選項4")
		.setDescription("選項4")
		.setRequired(false)
	)
	.addStringOption(option =>
		option.setName("選項5")
		.setDescription("選項5")
		.setRequired(false)
	)


module.exports = {
	data: select,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const c1 = interaction.options.getString("選項1");
		const c2 = interaction.options.getString("選項2");
		const c3 = interaction.options.getString("選項3");
		const c4 = interaction.options.getString("選項4");
		const c5 = interaction.options.getString("選項5");

		const choices = [c1, c2];

		if(c3 !== null){
			choices.push(c3);
		};

		if(c4 !== null){
			choices.push(c4);
		};

		if(c5 !== null){
			choices.push(c5);
		};


		let prefix = Math.floor(Math.random()*selectPrefix.length);
		let replyPrefix = selectPrefix[prefix];
			
		let Random = Math.floor(Math.random()*choices.length);
		let decision = choices[Random];

		if(replyPrefix === "我的決定是" || replyPrefix === "我選" || replyPrefix ==="我覺得是"){
			await interaction.reply(`${replyPrefix} ${decision}`);
		} else {
			await interaction.reply(`${decision} ${replyPrefix}`);
		};

		console.log(`>select ${choices}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}
