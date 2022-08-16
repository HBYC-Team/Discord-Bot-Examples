# autoConfigure document
This is the documentation of autoConfigure file.

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

# Configure Script/Batch
This part introduces about configure Script/Batch file.

These files can use on ALL Languages Examples. 


## Windows
You can run [build.bat](../configure/build.bat) to auto configure this repo.

If you have any problem, please contract me.

## Linux, Mac
You can run [build.sh](../configure/build.sh) to auto configure this bot.

Before you start using this file, please remember to enter this:
```bash
$ chmod a + x ./configure/build.sh
```

If you have any problem, use `$ ~/your/path/to/HBYC/configure && ./build.sh -h`.

If the help list isn't help you, please contract me.
