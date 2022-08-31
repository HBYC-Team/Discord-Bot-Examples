const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const moment = require("moment");

require("dotenv").config({ path: "src/js/"});
const HBYCId = process.env.HBYCID;
const HBYCAvatarUrl = process.env.HBYCAvatarURL;

const HBYCInfoData = new SlashCommandBuilder()
	.setName("hbycinfo")
	.setDescription("查看我的資訊");


module.exports = {
	data: HBYCInfoData,

	async execute(interaction){
		const guildInfo = interaction.guild.members.cache.get(HBYCId);

		const HBYCInfoEmbed = new EmbedBuilder()
			.setTitle("HBYC的資訊")
			.addFields(
				{ name: "名字", value: "HBYC#1512" },
				{ name: "於本伺服器的暱稱", value: guildInfo.nickname || "無", inline: false },
                { name: "ID", value: HBYCId, inline: false },
                { name: "加入伺服器時間", value: `${moment.utc(guildInfo.joinedAt).format("YYYY-MM-DD HH:mm:ss")}`, inline: false },
                //{ name: "帳號創立時間", value: `${moment.utc(client.user.createdAt).format("YYYY-MM-DD HH:mm:ss")}`, inline: false },
                { name: "擁有的身份組", value: `${guildInfo.roles.cache.map(roles => `${roles}`).join(', ')}` }
			)
			.setThumbnail(/*client.user.avatarURL()*/HBYCAvatarUrl)
			.setFooter({ text: `${interaction.user.tag}，查看/help以取得指令文件！` });

		await interaction.reply({ embeds: [ HBYCInfoEmbed ] });
	}
}