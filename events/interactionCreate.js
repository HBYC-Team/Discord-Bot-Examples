module.exports = {
	name: "interactionCreate",
	execute(interaction) {
		console.log(`${interaction.user.tag} 於 ${interaction.guild.name} 觸發了一次交互`);
		console.log("--");
	}
}
