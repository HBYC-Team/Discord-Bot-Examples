# Setup Guide Document
In this file, you can learn how to setup this repo.

## JavaScript
In Js, you have to create a file, which names `.env`, and we can put some environment variable of the bot in it.

The Example Usage:
```
TOKEN=YOUR_TOKEN_GOES_HERE
clientId=YOUR_APPLICATION_ID(also called ClientID)_GOES_HERE

cmdHookId=
cmdHookToken=
errHookId=
errHookToken=
msgHookId=
msgHookToken=
botHookId=
botHookToken=

reportHookId=
reportHookToken=
```
Then, your token will be used on your bot.

## Go
* Unix-like os users: You need to use `export` syntax for setup the environment.

```bash
$ export Token=YOUR_TOKEN_GOES_HERE
```

If you are lazy to export the variable, you can put the same command in your `.bashrc` file.

* Windows users:

Enter this for setup the environment:

```cmd
set Token=YOUR_TOKEN_GOES_HERE
```

## Python
In Python, you just need to follow the environment setup steps of JavaScript.

The steps are the same.

## Next
See [mainFileSetup](./2-MainFileSetup.md).