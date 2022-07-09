module.exports = {
	name: "interactionCreate",
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.guild.name} triggered an interaction.`);
	}
}