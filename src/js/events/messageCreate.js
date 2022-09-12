const { Message, EmbedBuilder, WebhookClient } = require('discord.js');
const { lanBot, dalao, mention, lanDino, www, errors } = require("../../config.json");
const { banList } = require("../../banList.json");

require('dotenv').config({ path: '/src/js' });
const msgHookId = process.env.msgHookId;
const msgHookToken = process.env.msgHookToken;
const errHookId = process.env.errHookId;
const errHookToken = process.env.errHookToken;

const msgHook = new WebhookClient({
	id: msgHookId,
	token: msgHookToken
});

const errHook = new WebhookClient({
	id: errHookId,
	token: errHookToken
});

module.exports = {
	name: "messageCreate",
	
	async execute(Message) {
		const message = Message;

		function getRandomNumber(num){
			return Math.random()*num;
		}

		if(message.author.bot) return;
		if(message.guild == null) return;
		if(banList.includes(message.author.id)) return;

	   	switch(message.content){
	   		case '爛bot': case '爛Bot': case '爛BOT':
	   			let lanBotChance = Math.round(getRandomNumber(1000))/10;
				const itemRandom = Math.floor(getRandomNumber(lanBot.rare.length));
				const rareRandomReply = lanBot.rare[itemRandom];

				const lanBotReplyMsg = (() => {
					if(lanBotChance >= 40){
						return lanBot.common;
					} else if(lanBotChance < 40 && lanBotChance > 0.5){
						return rareRandomReply;
					} else if(lanBotChance <= 0.5){
						return lanBot.epic;
					}
				})();

				try {
					await message.channel.send(lanBotReplyMsg);

					const msgHookEmbed = new EmbedBuilder()
						.setTitle(`Message Log - ${message.content}`)
						.setColor(0xcc00ff)
						.addFields(
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id },
							{ name: "Chance", value: `${lanBotChance}` }
						)
						.setTimestamp();

					msgHook.send({
						embeds: [msgHookEmbed],
					});

				} catch(error){
					const channelName = message.client.channels.cache.get(message.channelId);
					await message.author.send(errors.messageSendErr);

					const errHookEmbed = new EmbedBuilder()
						.setTitle(`Error Log - ${message.content}`)
						.setColor(0xff0000)
						.addFields(
							{ name: "Error Code", value: error.message },
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

					errHook.send({
						embeds: [errHookEmbed],
					});
				}

				break;

			case 'x04bot':
				try {
					await message.channel.send("要罵人之前請先記得切換輸入法呦;)");

					const msgHookEmbed = new EmbedBuilder()
						.setTitle(`Message Log - ${message.content}`)
						.setColor(0xcc00ff)
						.addFields(
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

					msgHook.send({
						embeds: [msgHookEmbed],
					});

				} catch(error){
					const channelName = message.client.channels.cache.get(message.channelId);

					await message.author.send(errors.messageSendErr);
					
					const errHookEmbed = new EmbedBuilder()
						.setTitle(`Error Log - ${message.content}`)
						.setColor(0xff0000)
						.addFields(
							{ name: "Error Code", value: error.message },
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

					errHook.send({
						embeds: [errHookEmbed],
					});
				}

				break;
			
			case '大佬': case '佬': case 'dalao':
				const dalaoItem = getRandomNumber(dalao.length);
				
				const dalaoReplyMsg = dalao[replies];

				try {
					await message.channel.send(dalaoReplyMsg);

					const msgHookEmbed = new EmbedBuilder()
						.setTitle(`Message Log - ${message.content}`)
						.setColor(0xcc00ff)
						.addFields(
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id },
							{ name: "Replied", value: dalaoReplyMsg }
						)
						.setTimestamp();

					msgHook.send({
						embeds: [msgHookEmbed],
					});

				} catch(error){
					const channelName = message.client.channels.cache.get(message.channelId);
					await message.author.send(errors.messageSendErr);
					
					const errHookEmbed = new EmbedBuilder()
						.setTitle(`Error Log - ${message.content}`)
						.setColor(0xff0000)
						.addFields(
							{ name: "Error Code", value: error.message },
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

					errHook.send({
						embeds: [errHookEmbed],
					});
				}

				break;

			case '爛恐龍': case '恐龍很爛':
				const lanDinoItem = Math.floor(getRandomNumber(lanDino.length));
				
				lanDinoReplyMsg = lanDino[lanDinoItem];

				try {
					await message.channel.send(lanDinoReplyMsg);

					const msgHookEmbed = new EmbedBuilder()
						.setTitle(`Message Log - ${message.content}`)
						.setColor(0xcc00ff)
						.addFields(
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id },
							{ name: "Replied", value: lanDinoReplyMsg }
						)
						.setTimestamp();

					msgHook.send({
						embeds: [msgHookEmbed],
					});

				} catch(error){
					const channelName = message.client.channels.cache.get(message.channelId);
					await message.author.send(errors.messageSendErr);
					
					const errHookEmbed = new EmbedBuilder()
						.setTitle(`Error Log - ${message.content}`)
						.setColor(0xff0000)
						.addFields(
							{ name: "Error Code", value: error.message },
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

					errHook.send({
						embeds: [errHookEmbed],
					});
				}

				break;
			
			case 'w': case 'ww': case 'www': case 'wwww': case 'wwwww':
				const wwwReplyChance = Math.round(getRandomNumber(1000))/10;

				if(wwwReplyChance > 50) return;
			
				const wwwReplyType = (() => {
					if(wwwReplyChance <= 50 && wwwReplyChance > 30){
						return www.common1;
					} else if(wwwReplyChance <= 30 && wwwReplyChance > 10){
						return www.common2;
					} else if(wwwReplyChance <= 10 && wwwReplyChance > 0.2){
						return www.rare;
					} else if(wwwReplyChance <= 0.2){
						return www.epic;
					}
				})();

				try {
					await message.channel.send(wwwReplyType);

					const msgHookEmbed = new EmbedBuilder()
					.setTitle(`Message Log - ${message.content}`)
					.setColor(0xcc00ff)
					.addFields(
						{ name: "User Tag", value: message.author.tag },
						{ name: "User ID", value: message.author.id },
						{ name: "Guild", value: message.guild.name },
						{ name: "Guild ID", value: message.guild.id },
						{ name: "Chance", value: `${wwwReplyChance}` },
						{ name: "Replied", value: wwwReplyType }
					)
					.setTimestamp();

					msgHook.send({
						embeds: [msgHookEmbed],
					});

				} catch(error){
					const channelName = message.client.channels.cache.get(message.channelId);
					await message.author.send(errors.messageSendErr);

					const errHookEmbed = new EmbedBuilder()
					.setTitle(`Error Log - ${message.content}`)
					.setColor(0xff0000)
					.addFields(
						{ name: "Error Code", value: error.message },
						{ name: "User Tag", value: message.author.tag },
						{ name: "User ID", value: message.author.id },
						{ name: "Guild", value: message.guild.name },
						{ name: "Guild ID", value: message.guild.id }
					)
					.setTimestamp();

					errHook.send({
						embeds: [errHookEmbed],
					});
				}

				break;
		}

		if(message.mentions.has(message.client.user.id)){
			const item = Math.floor(getRandomNumber(mention.length));
			const replyMsg = mention[item];

			try {
				await message.channel.send(replyMsg);

				const msgHookEmbed = new EmbedBuilder()
						.setTitle(`Message Log - ${message.content}`)
						.setColor(0xcc00ff)
						.addFields(
							{ name: "User Tag", value: message.author.tag },
							{ name: "User ID", value: message.author.id },
							{ name: "Guild", value: message.guild.name },
							{ name: "Guild ID", value: message.guild.id }
						)
						.setTimestamp();

				msgHook.send({
					embeds: [msgHookEmbed],
				});

			} catch(error){
				const channelName = message.client.channels.cache.get(message.channelId);
				await message.author.send(errors.messageSendErr);
					
				const errHookEmbed = new EmbedBuilder()
					.setTitle(`Error Log - ${message.content}`)
					.setColor(0xff0000)
					.addFields(
						{ name: "Error Code", value: error.message },
						{ name: "User Tag", value: message.author.tag },
						{ name: "User ID", value: message.author.id },
						{ name: "Guild", value: message.guild.name },
						{ name: "Guild ID", value: message.guild.id }
					)
					.setTimestamp();

				errHook.send({
					embeds: [errHookEmbed],
				});
			}
		}
	}
}

