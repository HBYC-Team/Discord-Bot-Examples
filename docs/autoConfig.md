# autoConfigure docs
This is the documentation of autoConfigure file.

Before you start running the file, please remember to put the your token and application id in the `.env` file.(See at [tutorial](./tutorial.md)).

# You can auto configure this bot using these step
1. Use npm scripts.
2. Use the batch file or shell script.

## npm
You can run `npm run` command line to auto configure.

The command you can use:
`$ npm run all` - Install the dependencies, deploys the Application Command and starts the bot.
`$ npm run install` - Install the dependencies.
`$ npm run  deploy` - Deploys the Application Command.
`$ npm run start` - Starts the bot.

## Windows
You can run [build.bat](../build.bat) to auto configure this bot.

The actions you can enter after you start running this batch file:
```
deploy - Deploys the Application(/) Command.
help - Shows the action list.
install - Install the dependencies.
start - Starts the bot.
```

## Linux, Mac
You can run [build.sh](../build.sh) to auto configure this bot.

Argument list:
```
-D, --deploy    Deploys the Application(/) Command.
-H, --help      Shows the argument list.
-I, --install   Install the dependencies.
-S, --start     Starts the bot.
```

## Dev
You can add anything you want or rename the arguments, just edit the batch or the shell file.
