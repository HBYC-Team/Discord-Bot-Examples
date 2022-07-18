const { createMusicManager } = require("@kyometori/djsmusic");

module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		createMusicManager(client);
		console.log(`Logged in as ${client.user.tag}`);
	}
}