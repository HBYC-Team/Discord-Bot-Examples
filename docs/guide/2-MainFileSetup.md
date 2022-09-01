# Main File Setup
In this file, you can learn how to setup the main files.

**Main files:**

* JavaScript: [app.js](../src/js/app.js)

> Attention: The JavaScript files of this project are using CommonJS.

* TypeScript: [index.ts](../src/ts/index.ts)

* Go: [main.go](../src/go/main.go)

* Python: [app.py](../src/go/app.py)

## JavaScript
First, we need to call our `discord.js` module, for our `Client`, `GatewayIntentBits`, `Partials`, `InteractionType`.
```js
const { Client, GatewayIntentBits, Partials, InteractionType } = require("discord.js");
```

Then, we need to call our `fs`, `path` module for [executing command](./javaScript/).
```js
const fs = require("fs");
const path = require("path");
```

And requires `dotenv` for our variable in `.env` file, define our token using `process.env.YOUR_VARIABLE_NAME` syntax.
```js
require("dotenv").config()
const token = process.env.TOKEN;
```

After we called our library(modules), we need to add our intents.
```js
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates], partials: [Partials.Channel, Partials.Message] });
```

