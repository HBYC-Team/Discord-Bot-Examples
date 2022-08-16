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

  		createMusicManager(client, {
    		defaultMaxQueueSize: Infinity,
    		enableInlineVolume: true
		});
		
		console.log("Bot Logined");
        console.log(client.user.tag);
        console.log("Logined at", datetime);
        console.log("------------------------");
        console.log(`Now Services in ${client.guilds.cache.size} guilds`)
		console.log("------------------------");
		client.user.setPresence({ activities: [{ name: `請記得給我發送訊息的權限，不然只會顯示應用程式無回應喔！` }] });
		console.log(client.guilds.cache.map(guild => guild.name));
		console.log(client.guilds.cache.map(guild => guild.id));
		console.log("------------------------");

	}
}
