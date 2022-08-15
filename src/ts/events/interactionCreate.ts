import { Client, Interaction, InteractionType, CommandInteraction } from "discord.js";
import { Command, commandHandler } from "../struct/commandManager";

export default (client: Client): void => {
	client.on("interactionCreate", async(interaction: Interaction) => {
		if(interaction.guild.name !== null){
			console.log(`${interaction.user.tag} 於 ${interaction.guild.name} 觸發了一次交互`);
		} else {
			console.log(`${interaction.user.tag} 在除伺服器外的地方觸發了一次交互`);
		};

		if(interaction.type === InteractionType.ApplicationCommand){
			await commandHandler(client, interaction);
		};
		
		console.log("--");
	});

	
}