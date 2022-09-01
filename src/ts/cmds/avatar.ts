import { ApplicationCommandType, Client, CommandInteraction, EmbedBuilder } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

import { Command } from "../struct/commandManager";

export const avatar: Command = {
	name: "avatar",
	description: "取得一個用戶的頭像",
	type: ApplicationCommandType.ChatInput,
	args: string[],
	run: async(client: Client, interaction: CommandInteraction, ) => {
		await interaction.followUp(user);
	}
}