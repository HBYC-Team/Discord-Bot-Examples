const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const helpData = new SlashCommandBuilder()
	.setName("help")
	.setDescription("取得協助文件")
/*	.addStringOption(option =>
		option.setName("指令名稱")
		.setDescription("欲取得的指令名稱")
		.setRequired(false)
		.addChoices(
			{ name: "2048", value: "2048" },
			{ name: "announcement", value: "announcement" },
			{ name: "avatar", value: "avatar" },
			{ name: "bigtwo", value: "bigtwo" },
			{ name: "bullsandcows", value: "bullsandcows" },
			{ name: "dev", value: "dev" },
			{ name: "echo", value: "echo" },
			{ name: "finalcode", value: "finalcode" },
			{ name: "fliptrip", value: "fliptrip" },
			{ name: "github", value: "github" },
			{ name: "gomoku", value: "gomoku" },
			{ name: "info", value: "info" },
			{ name: "ping", value: "ping" },
			{ name: "presence", value: "presence" },
			{ name: "report", value: "report" },
			{ name: "say", value: "say" },
			{ name: "select", value: "select" },
			{ name: "thinking", value: "thinking" }
		)
	);*/


module.exports = {
	data: helpData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();

        await interaction.reply(`<@!${interaction.user.id}> 指令協助文件在這裡：）\nhttps://github.com/HBYC-Team/HBYC/tree/master/docs/help.md`)
        /*const cmdName = interaction.options.getString("指令名稱");

        if(cmdName === "2048"){
        	await interaction.reply("遊戲指令教學請參見這裡→ https://github.com/dragonyc1002/HBYC/tree")
        } else if(cmdName === "announcement"){

        } else if(cmdName === "avatar"){

        } else if(cmdName === "bigtwo"){

        } else if(cmdName === "bullsandcows"){

        } else if(cmdName === "dev"){

        } else if(cmdName === "echo"){

        } else if(cmdName === "finalcode"){

        } else if(cmdName === "fliptrip"){

        } else if(cmdName === "github"){

        } else if(cmdName === "gomoku"){

        } else if(cmdName === "info"){

        } else if(cmdName === "ping"){

        } else if(cmdName === "presence"){

        } else if(cmdName === "report"){

        } else if(cmdName === "say"){

        } else if(cmdName === "select"){

        } else if(cmdName === "thinking"){

        };*/

        console.log(`>help`/* ${cmdName}*/);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}
