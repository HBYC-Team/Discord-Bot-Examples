import { Client, ApplicationCommandType, CommandInteraction, EmbedBuilder } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../struct/commandManager";



export const ping: Command = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("看看HBYC的跑速"),
	
	name: "ping",
	description: "看看機器人的跑速",
	type: ApplicationCommandType.ChatInput,
	run: async(client: Client, interaction: CommandInteraction) => {
		const Ping = Math.round;
		
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		let p = Ping(interaction.client.ws.ping);
		
		const replyEmbed = new EmbedBuilder()
            .setColor(0xffbc00)
            .setTitle("HBYC目前的跑速")
            .addFields({ name: "目前延遲", value: `${p}(ms)` })
            .setThumbnail(interaction.client.user.avatarURL())

        await interaction.followUp({ embeds: [replyEmbed] });

        console.log(`>ping`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

	}
}

