const { createMusicManager } = require("@kyometori/djsmusic");

module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		createMusicManager(client);
		console.log(`Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: "新機上機測試中" }] });
		console.log(client.guilds.cache.map(guild => guild.name));
		console.log(client.guilds.cache.map(guild => guild.id));
		console.log("---------------");

	}
}