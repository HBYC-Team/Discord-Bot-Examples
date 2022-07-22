const { createMusicManager } = require("@kyometori/djsmusic");

module.exports = {
	name: "ready",
	once: true,
	execute(client) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();

		createMusicManager(client);
		console.log("Bot Logined");
        console.log(client.user.tag);
        console.log("Logined at", datetime);
        console.log("------------------------");

		client.user.setPresence({ activities: [{ name: "新機上機測試中" }] });
		console.log(client.guilds.cache.map(guild => guild.name));
		console.log(client.guilds.cache.map(guild => guild.id));
		console.log("------------------------");

	}
}