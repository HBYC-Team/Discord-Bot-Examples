import { Client } from "discord.js";
import { Commands } from "../utils/Commands";

export default (client: Client): void => {
	client.on("ready", async() => {

		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();

        await client.application.commands.set(Commands);

		console.log("Bot Logined");
        console.log(client.user.tag);
        console.log("Logined at", datetime);
        console.log("------------------------");
        console.log(`Now Services in ${client.guilds.cache.size} guilds`)
		console.log("------------------------");
		client.user.setPresence({ activities: [{ name: `在 ${client.guilds.cache.size} 個伺服器中服務` }] });
		console.log(client.guilds.cache.map(guild => guild.name));
		console.log(client.guilds.cache.map(guild => guild.id));
		console.log("------------------------");
	});
}