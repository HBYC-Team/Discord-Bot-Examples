# HBYC Bot Tutorial
This is a easy tutorial of the HBYC Bot.

In this document, you'll see how to configure this bot.

## First
Check your [app.js](../app.js), you can import any array from [config.json](../config.json) or any json file.

In line 17, you can check the intent that you need.

In line 84, you can see:
```js
client.on("messageCreate", message => {
	/*Lots of event*/
});
```
Then, you can put the function you need, for example:
```js
client.on("messageCreate", async message => {
	if(message.author.id === client.user.id) return; // If author is the bot, stop this function.

	if(message.content === "ping" || message.content === "PING"){ // If the message content is ping or PING, send pong, put the string in the "".
		await message.channel.send("pong!"); // Because we use the async/await syntax, so you have to use "await".
	};
});
```
That's all easy code from `app.js`.

## Next
You can configure the command from [cmds/](../cmds/).
For example of `ping` tutorial command from discord.js guide:
```js
const { SlashCommandBuilder } = require("@discordjs/builders"); // Use our slash command builder

const ping = new SlashCommandBuilder() // Configure our slash command
	.setName("ping") // Set command name
	.setDescription("pong") // The description of the command

module.exports = { // Exports our command
	data: ping, // Our command data

	async execute(interaction){ // We use async/await syntax on execute, and put interaction argument in the "()", which defined "interaction"
		await interaction.reply("pong"); // Replies pong
		// If you uses "interaction.channel.send("pong")", the channel will show "This interaction failed" and send a pong message
	};
}
```
## Last
Create a file, then name it `.env`,  and use a variable to define your token and application ID.

```
TOKEN=YOUR_TOKEN_GOES_HERE
clientId=YOUR_APPLICATION_ID_GOES_HERE
```
Attention:YOU CAN NOT PUT A SPACE KEY BETWEEN THE "=".

The `.env` file that can help your token and application ID don't into public.

## Commands
* Install the dependencies:
```bash
$ npm install
```
* Deploy slash command:
```bash
$ node deploy.js
```
* Run the bot:
```bash
$ node app.js
```

## At the End
If you have any problems, you can join my discord server(see at [README.md](../README.md)), and Mention me, then I will help you as possible as I can.

BUT IF YOU JUST COPY PRASTE THE CODE AND YOU DON'T KNOW WHAT YOU ARE DOING, I WILL **NOT** HELP YOU.