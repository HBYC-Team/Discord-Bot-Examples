# Configuration
This is the documentation of Configuration.

Before you start running the file, please remember to setup the environment, see the guide [here](./guide/Setup.md).


# You can auto configure this bot using these step
1. Use npm scripts(for JavaScript only).

2. Use Batch or Shell Script file.

## npm (JavaScript Only)
You can run `npm run` command line to auto configure.

Before you start using this, please remember change the dirctory from your terminal to `src/js/`.

After that, you can use the npm script.

Script List:

`$ npm run all` - Install the dependencies, deploys the Application Command and starts the bot.

`$ npm run install` - Install the dependencies.

`$ npm run  deploy` - Deploys the Application Command.

`$ npm run start` - Starts the bot.


# Python/Go
See at the next part of this document.

# Configuring Shell/Batchfile
This part introduces about configuring Script/Batch file.

These files can use on ALL Languages Examples. 


## Windows
You can run [configure.cmd](../configuration/configure.cmd) to configure this repo.

## Linux, Mac
You can run [build.sh](../configuration/configure) to configure this bot.

Before you start using this file, please remember to enter this:
```bash
$ chmod a + x ./configuration/configure
```

If you have any problem, use `$ ~/your/path/to/HBYC/configure && ./build.sh -h`.

If the help list can't help you, please contact me.
