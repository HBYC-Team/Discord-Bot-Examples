import { Client, CommandInteraction, ChatInputApplicationCommandData } from "discord.js";
import {
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder
} from "@discordjs/builders";

import { Commands } from "../utils/Commands";

export interface Command extends ChatInputApplicationCommandData {
	run: (client: Client, interaction: CommandInteraction) => Promise<void>;
};

export const commandHandler = async (client: Client, interaction: CommandInteraction): Promise<void> => {
	const slashCommand = Commands.find(c => c.name === interaction.commandName);

	if(!slashCommand){
		interaction.followUp({ content: "載入指令時發生錯誤，有可能是參數異常導致。"});
		return;
	}

	await interaction.deferReply();

	slashCommand.run(client, interaction);
};