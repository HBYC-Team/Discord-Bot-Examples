/*Discord Bot TypeScript Example*
******Author: dragonyc1002*******
*********Version: 1.0.0**********/
import { Client, Collection, GatewayIntentBits, Partials, CommandInteraction } from "discord.js";

import ready from "./events/ready";
import interactionCreate from "./events/interactionCreate";


import { lanBot, dalao, mention, lanDino } from "../config.json";
import fs from "node:fs";
import path from "node:path";

require("dotenv").config({ path: "./src/ts/.env" });

const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });


/*****Event of messages*****

client.on("messageCreate", message => {
	if(message.author.id === client.user.id) return;

	if(message.content === "爛bot" || message.content === "lan bot" || message.content === "爛Bot" || message.content === "爛BOT"){
		let replies = Math.floor(Math.random()*lanBot.length);
		let replyMsg = lanBot[replies];
		message.channel.send(replyMsg);
	};

	if(message.content === "x04bot"){
		message.channel.send("要罵人之前請先記得切換輸入法呦;)");
	};

	if(message.content === "大佬" || message.content === "lao" || message.content === "佬"){
		let replies = Math.floor(Math.random()*dalao.length);
		let replyMsg = dalao[replies];
		message.channel.send(replyMsg);
	};

	if(message.mentions.has(client.user.id)){
		let replies = Math.floor(Math.random()*mention.length);
		let replyMsg = mention[replies];
		message.channel.send(replyMsg);
	};

	if(message.content === "爛恐龍" || message.content === "恐龍很爛"){
		let replies = Math.floor(Math.random()*lanDino.length);
		let replyMsg = lanDino[replies];
		message.channel.send(replyMsg);
	};
});

*/

ready(client);
interactionCreate(client);

client.login(token);
