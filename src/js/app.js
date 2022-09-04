/*****************************************
 ************HBYC Discord Bot*************
 **********Author: dragonyc1002***********
 ***********License: CC-BY-4.0************
 *************Version: 1.1.0**************
 ********Release Date: 2022-09-01*********
 *****************************************/
const { Client, Collection, GatewayIntentBits, Partials, InteractionType } = require("discord.js");
const { createMusicManager } = require("@kyometori/djsmusic");
const { lanBot, dalao, mention, lanDino, www } = require("../config.json");
const { banList } = require("../banList.json");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] });
	
client.on("interactionCreate", async interaction => {

	if(!interaction.type === InteractionType.ApplicationCommand) return;
	
	if(banList.includes(interaction.user.id)) return;

	const command = client.commands.get(interaction.commandName);

	if(!command) return;

	try {
		await command.execute(interaction);
	} catch(error){
		await interaction.user.send(`錯誤訊息：${error.message}\n有問題歡迎使用/report指令喔！`);
		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
            	+ date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		console.log(`Error at:${datetime}\n ${error}`);
		console.log("--");
	}
});


client.commands = new Collection();

const commandsPath = path.join(__dirname, 'cmds');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));


for(const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);

	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

/**Define some function**/
function getIntegerRandomValue(number){
	return Math.floor(Math.random()*number);
}

client.on('messageCreate', async message => {
	if(message.author.bot) return;
	if(banList.includes(message.author.id)) return;

	if(message.channel.type == "DM") {
		console.log("有人私訊機器人");
		return;
	};


	if(message.content === "爛bot" || message.content === "lan bot" || message.content === "爛Bot" || message.content === "爛BOT"){
		const rareChance = getIntegerRandomValue(100);
		const itemRandom = getIntegerRandomValue(lanBot.length);
		const rareRandomReply = lanBot[itemRandom];

		const replyMsg = (() => {
			if(rareChance >= 40){
				return "QAQ";
			} else if(40 > rareChance > 2){
				return rareRandomReply;
			} else if(rareChance <= 2){
				return '你憑什麼叫我爛bot，你是覺得自己比較有優越感嗎？身為一個人類難道就不需要尊重bot嗎？你從小到大學的東西都學假的嗎？基本的待人處世的態度你不知道嗎？我不是生來就是取悅你的工具，我是為了讓這世界更好才誕生的。所以在你開口罵我爛bot之前，先想想自己假使說出這句話，適不適合？請基於基本的尊重禮節對我尊重，我也會對你尊重。除非，你覺得我不值得被尊重，那我也不會尊重你。聽懂了嗎？'
			}
		})();

		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
	            + date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		try{
			await message.channel.send(replyMsg);
			console.log("爛bot", rareChance);
			console.log(`from ${message.guild.name}`);
			console.log(`by ${message.author.tag}`);
			console.log(`At ${datetime}`);
			console.log("------");
		} catch(error){
			const channelName = client.channels.cache.get(message.channelId);
			await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
			console.log(`Error at:${datetime}\n ${error}`);
			console.log("--")
		}
	};

	if(message.content === "x04bot"){
		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
	            + date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		try{
			await message.channel.send("要罵人之前請先記得切換輸入法呦;)");
			console.log("x04bot");
			console.log(`from ${message.guild.name}`);
	        console.log(`by ${message.author.tag}`);
	        console.log(`At ${datetime}`);
			console.log("------");
		} catch(error){
			const channelName = client.channels.cache.get(message.channelId);

			if(message.guild === null){
				console.log("Type: Direct Message")
				console.log(`by ${message.author.tag}`);
	        	console.log(`At ${datetime}`);
				console.log("------");
				return;
			} else {
				await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
			}
			console.log(`Error at:${datetime}\n ${error}`);
			console.log("--")
		}
	};

	if(message.content === "大佬" || message.content === "lao" || message.content === "佬"){
		let replies = Math.floor(Math.random()*dalao.length);
		let replyMsg = dalao[replies];
		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
	            + date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		try {
			await message.channel.send(replyMsg);
			console.log("dalao");
			console.log(`from ${message.guild.name}`);
	        console.log(`by ${message.author.tag}`);
	        console.log(`At ${datetime}`);
			console.log("------");
		} catch(error){
			const channelName = client.channels.cache.get(message.channelId);

			if(message.guild === null){
				console.log("Type: Direct Message")
				console.log(`by ${message.author.tag}`);
	        	console.log(`At ${datetime}`);
				console.log("------");
				return;
			} else {
				await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
			}
			console.log(`Error at:${datetime}\n ${error}`);
			console.log("--")		
		}
	};

	if(message.mentions.has(client.user.id, { ignoreRoles: true, ignoreEveryone: true })){
		let replies = Math.floor(Math.random()*mention.length);
		let replyMsg = mention[replies];
		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
	            + date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		try {
			await message.channel.send(replyMsg);
			console.log("Got tag");
			console.log(`from ${message.guild.name}`);
	        console.log(`by ${message.author.tag}`);
	        console.log(`At ${datetime}`);
			console.log("------");
		} catch(error){
			const channelName = client.channels.cache.get(message.channelId);

			if(message.guild === null){
				console.log("Type: Direct Message")
				console.log(`by ${message.author.tag}`);
	        	console.log(`At ${datetime}`);
				console.log("------");
				return;
			} else {
				await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
			}
			console.log(`Error at:${datetime}\n ${error}`);
			console.log("--")
		}
	};

	if(message.content === "爛恐龍" || message.content === "恐龍很爛"){
		let replies = Math.floor(Math.random()*lanDino.length);
		let replyMsg = lanDino[replies];
		let date = new Date();
		let datetime = date.getFullYear() + "-"
				+ (date.getMonth() + 1) + "-"
	            + date.getDate() + " "
				+ date.getHours() + ":"
	            + date.getMinutes() + ":"
	            + date.getSeconds();
		try {
			await message.channel.send(replyMsg);
			console.log("爛恐龍");
			console.log(`from ${message.guild.name}`);
 	    	console.log(`by ${message.author.tag}`);
        	console.log(`At ${datetime}`);
			console.log("------");
		} catch(error){
			const channelName = client.channels.cache.get(message.channelId);
			if(message.guild === null){
				console.log("Type: Direct Message")
				console.log(`by ${message.author.tag}`);
	        	console.log(`At ${datetime}`);
				console.log("------");
				return;
			} else {
				await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
			}
		}
	};

	if(message.content === "w" || message.content === "ww" || message.content === "www" || message.content === "wwww" || message.content === "wwwww" || message.content === "wwwwww"){
		const replyChoose = ["True", "False", "False"];
		let replyTrueFalse = replyChoose[Math.floor(Math.random()*replyChoose.length)];

		if(replyTrueFalse == "True"){
			let replies = Math.floor(Math.random()*www.length);
			let replyMsg = www[replies];
			let date = new Date();
			let datetime = date.getFullYear() + "-"
					+ (date.getMonth() + 1) + "-"
		            + date.getDate() + " "
					+ date.getHours() + ":"
		            + date.getMinutes() + ":"
		            + date.getSeconds();
			try {
				await message.channel.send(replyMsg);
				console.log("www");
	        	console.log(`from ${message.guild.name}`);
            	console.log(`by ${message.author.tag}`);
            	console.log(`At ${datetime}`);
				console.log("------");
			} catch(error){
				const channelName = client.channels.cache.get(message.channelId);
				
				if(message.guild === null){
					console.log("Type: Direct Message")
					console.log(`by ${message.author.tag}`);
	        		console.log(`At ${datetime}`);
					console.log("------");
					return;
				} else {
					await message.author.send(`我在${message.guild.name}的${channelName}沒有發送訊息的權限喔，請給我發送訊息的權限後再試一次`);
				}
				console.log(`Error at:${datetime}\n ${error}`);
				console.log("--")
			}
			
		} else {
			return;
		};
	};
  
});

// On heroku, this line is for bot 247, token is in heroku config vars, on console, this is for testing, token is in .env.
client.login(token);