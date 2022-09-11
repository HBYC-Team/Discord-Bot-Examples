const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, UserRequestType, GameMode } = require("@hizollo/osu-api");
const { EmbedBuilder } = require("discord.js");

require("dotenv").config();
const osuApi = process.env.osuApi;

const osu = new Client({
	apiKey: osuApi
});

const osuData = new SlashCommandBuilder()
	.setName("osu")
	.setDescription("查看特定用戶的osu!資訊")
	.addSubcommand(subcommand =>
		subcommand
			.setName("user")
			.setDescription("取得一個特定玩家的osu!資料")
			.addStringOption(option => 
				option.setName("玩家名稱")
				.setDescription("要取得資訊的玩家名稱")
			)
	)
	.addSubcommand(subcommand =>
		subcommand
			.setName("best")
			.setDescription("取得一個玩家於osu!最佳成績")
			.addStringOption(option =>
				option.setName("玩家名稱")
				.setDescription("要取得最佳成績的玩家名稱")
			)
	)

module.exports = {
	data: osuData,

	async execute(interaction){
		const userName = interaction.options.getString("玩家名稱");

		switch(interaction.options.getSubcommand()){
			case user:
				const user = await osu.users.getUser({
					user: userName
				});

			case best:
				const best = await osu.users.getUserBest({
					user: userName,
					type: UserRequestType.Id,
					mode: GameMode.Catch,
					limit: 10
				});

				
		}
	}
}