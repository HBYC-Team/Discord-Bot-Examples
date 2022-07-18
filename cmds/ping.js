const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const ping = new SlashCommandBuilder()
	.setName("ping")
	.setDescription("看看HBYC的跑速");

const Ping = Math.round;

module.exports = {
	data: ping,
	async execute(interaction) {
		var p = Ping(interaction.client.ws.ping);
		const replyEmbed = new EmbedBuilder()
            .setColor(0xffbc00)
            .setTitle("HBYC目前的跑速")
            .addFields({ name: "目前延遲", value: `${p}(ms)` })
            .setThumbnail(interaction.client.user.avatarURL())
        await interaction.reply({ embeds: [replyEmbed] });
	},
}
