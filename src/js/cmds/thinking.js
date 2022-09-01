const { SlashCommandBuilder } = require("@discordjs/builders");

const thinkingData = new SlashCommandBuilder()
	.setName("thinking")
	.setDescription("讓HBYC發出一個thinking的表情符號")
	.addStringOption(option =>
		option.setName("種類")
		.setDescription("要發送的thinking")
		.setRequired(false)
			.addChoices(
				{ name: "normal", value: "normal" },
				{ name: "pythonk", value: "pythonk" },
				{ name: "cat", value: "cat" }, 
				{ name: "attano", value: "attano" },
				{ name: "thonk", value: "thonk" },
				{ name: "superThonk", value: "superThonk" },
				{ name: "ray", value: "ray" },
				{ name: "rainbow", value: "rainbow" },
				{ name: "owo", value: "owo" },
				{ name: "thongk", value: "thongk" },
				{ name: "smile1", value: "smile1" },
				{ name: "smile2", value: "smile2" },
				{ name: "rayteeThonk", value: "raytee" },
				{ name: "blue", value: "blue" },
				{ name: "10", value: "10" },
				{ name: "distortion", value: "distortion" },
				{ name: "pistol", value: "pistol" }
			)
	)


module.exports = {
	data: thinkingData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const type = interaction.options.getString("種類");

		if(type === "normal" || type === null){
			await interaction.reply({ content: "<:thinking:974621588257398784>已傳送", ephemeral: true });
			await interaction.channel.send("<:thinking:974621588257398784>");
		} else if(type === "pythonk"){
			await interaction.reply({ content: "<:pythonk:998169023428702238>已傳送", ephemeral: true });
			await interaction.channel.send("<:pythonk:998169023428702238>");
		} else if(type === "cat"){
            await interaction.reply({ content: "<:cathink:985794732926074900>已傳送", ephemeral: true });
            await interaction.channel.send("<:cathink:985794732926074900>");
        } else if(type === "attano"){
            await interaction.reply({ content: "<:attanothink:984310669425930251>已傳送", ephemeral: true });
            await interaction.channel.send("<:attanothink:984310669425930251>");
        } else if(type === "thonk"){
            await interaction.reply({ content: "<:thonk:984310370363645962>已傳送", ephemeral: true });
            await interaction.channel.send("<:thonk:984310370363645962>");
        } else if(type === "superThonk"){
            await interaction.reply({ content: "<:superthonk:984310368790781992>已傳送", ephemeral: true });
            await interaction.channel.send("<:superthonk:984310368790781992>");
        } else if(type === "ray"){
            await interaction.reply({ content: "<:raythonk:984310421072773170>已傳送", ephemeral: true });
            await interaction.channel.send("<:raythonk:984310421072773170>");
        } else if(type === "rainbow"){
            await interaction.reply({ content: "<:rainbowthonk:984310367276650546>已傳送", ephemeral: true });
            await interaction.channel.send("<:rainbowthonk:984310367276650546>");
        } else if(type === "owothonk"){
            await interaction.reply({ content: "<:owothonk:984310416672960553>已傳送", ephemeral: true });
            await interaction.channel.send("<:owothonk:984310416672960553>");
        } else if(type === "thongk"){
            await interaction.reply({ content: "<:thongk:984310425648779325>已傳送", ephemeral: true });
            await interaction.channel.send("<:thongk:984310425648779325>");
        } else if(type === "smile1"){
            await interaction.reply({ content: "<:smilethonk:984310424155611206>已傳送", ephemeral: true });
            await interaction.channel.send("<:smilethonk:984310424155611206>");
        } else if(type === "smile2"){
            await interaction.reply({ content: "<:w_:984310372091703296>已傳送", ephemeral: true });
            await interaction.channel.send("<:w_:984310372091703296>");
        } else if(type === "rayteeThonk"){
            await interaction.reply({ content: "<:rayteethonk:984310422637281342>已傳送", ephemeral: true });
            await interaction.channel.send("<:rayteethonk:984310422637281342>");
        } else if(type === "blue"){
            await interaction.reply({ content: "<:bluethonk:984310412256358450>已傳送", ephemeral: true });
            await interaction.channel.send("<:bluethonk:984310412256358450>");
        } else if(type === "10"){
            await interaction.reply({ content: "<:10thonk:984310410738028604>已傳送", ephemeral: true });
            await interaction.channel.send("<:10thonk:984310410738028604>");
        } else if(type === "distortion"){
            await interaction.reply({ content: "<:distrotionthonk:984310414097657877>已傳送", ephemeral: true });
            await interaction.channel.send("<:distrotionthonk:984310414097657877>");
        } else if(type === "pistol"){
            await interaction.reply({ content: "<:pisthonk:984310418455539742>已傳送", ephemeral: true });
            await interaction.channel.send("<:pisthonk:984310418455539742>");
		};

        console.log(`>thinking ${type}`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");	
	}
}