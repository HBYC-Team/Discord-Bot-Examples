# HBYC Bot Tutorial
This is a easy tutorial of the HBYC Bot.

In this document, you'll see how to configure this bot.

## First
Check your [app.js](../app.js), you can import any array from `config.json` or any json file.

In line 17, you can check the intent that you need.

In line 84, you can see:
```js
client.on("messageCreate", message => {
	/*Lots of event*/
});
```
Then, you can put the function you need, for example:
```js
client.on("messageCreate", message => {
	if(message.author.id === client.user.id) return; //if author is the bot, stop this function.

	if(message.content === "ping" || message.content === "PING"){ //if the message content is ping or PING, send pong, put the string in the "".
		message.channel.send("pong!");
	};
});
```
That's all easy code from `app.js`.

## Next
You can configure the command from [cmds/](../cmds/).
For example of `ping` tutorial command from discord.js guide:
```js
const { SlashCommandBuilder } = require("@discordjs/builders"); //use our slash command builder

const ping = new SlashCommandBuilder() //configure our slash command
	.setName("ping") //set command name
	.setDescription("pong") //the description of the command

module.exports = { //exports our command
	data: ping //our command data

	async execute(interaction){ //we use async/await, and put interaction argument in the "()", which defined "interaction"
		await interaction.reply("pong"); //replies pong.
		//if you uses "interaction.channel.send", the channel will show "This interaction failed".
	};
}
```
## Last
You should create a `.env` file, and use a variable to define your token.
```
TOKEN=YOUR_TOKEN_GOES_HERE
```
Attention:YOU CAN NOT PUT A SPACE KEY BETWEEN THE "=".

The `.env` file that can help your token into public.

## At the End
If you have any problems, you can join my discord server(see at README.md), and Mention me, then I will help you as possible as I can.