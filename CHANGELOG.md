# HBYC CHANGELOG
This documentation is a changelog of this repository.

## v2.1.0
* Added few lines of webhook embeds([messageCreate](./src/js/events/messageCreate.js)).

* Changed something([avatar.ts](./src/ts/avatar.ts)).

* Fixed missing webhook.

* Fixed wrong webhook embed shard number(errEmbed in [interactionCreate](./src/js/events/interactionCreate.js)).

* Ignore `@everyone` mentions and `role` mentions, the bot will not reply([messageCreate](./src/js/events/messageCreate.js)).

* Return when the bot got mention and the message event happen at the same time([messageCreate](./src/js/events/messageCreate.js)).

* Reply when the argument number is not allowed([ticTacToe](./src/js/cmds/ticTacToe.js)).

* Removed unuse import([deploy](./src/js/deploy.js)).

* Refactored events when catching errors([messageCreate](./src/js/events/messageCreate.js)).

## v2.0.1
* Fixed error when trigged interaction command(`/thinking`). 

* Fixed the wrong chances of `www` messageCreate event.

* Refactored `app.js`(moved interactionCreate event to a new module).

* Refactored interaction error message(import with `config.json`).

## v2.0.0
* Added Webhooks(Shard#1, #2, #3, #4, #5).

* Added `constants.json` for some data.

* Fixed known bugs.

* Refactored most of the files.

* Changed some import data way.

* Changed `messageCreate` event to [messageCreate.js](./src/js/events/messageCreate).

* Rewrite some code for refactore.

* Rename some command name because that is not finished yet.

## v1.1.0a
* Pushed ignored commands.

* Few bug fixes.

## v1.1.0
* Added Tic-Tac-Toe game, `hbycinfo` command and ban list test.

* Removed all events of [interactionCreate](./src/js/events/interactionCreate.cjs).

* Fixed more bugs:
```
(1) The bot will offline when erroring.
(2) Some datetime error of the games.
(3) On message event, console will show "interaction is not defined".
```

* Added ignore files, ban list.

* Finish Python [Chat Commands](./src/python/cmds/chat.py) example, configuration files.

* Added new banner and avatar.

## v1.0.0
* Added Go, Python, TypeScript main file examples.

* Added Guide.

* Removed `tutorial.md`.

* Rewrite auto-configure files for muiti languages.

* Bug fixes - `finalCode.js`, `info.js`.

* Updated link with new repo adress - `github.js`, `help.js`, `ToS.js`. 

> Guide document will out in future versions.

> More Examples of Other Languages will out in future versions.

## v0.2.0
* Added batch file for [autoConfigure](./docs/autoConfig.md).

* Added `tos` command.

* Added npm scripts.

* Changed game language to Chinese.

* The bugs of `Gomoku`.

* The code is being simplified now.

* Added `strings.json` of the custom strings.


## v0.1.0
**Moved Project From Python**

* Added Games - `BigTwo`, `2048`, `BullsAndCows`, `FinalCode`, `FlipTrip`, `Gomoku`.

* Added Commands - `dev`,  `info`,  `select`,  `github`.

* Changed repeat => echo.

* Added pythonk to `thinking` command.

* Fixed Lots of bugs.

* Refactored ping Command(Using Embed now).

* Refactored say, thinking Command(Now the check message will be ephemeral).

* Removed Music Commands.

* Removed Message Commands.

* Added `build.sh` for [autoConfigure](./docs/autoConfig.md).

* Added `disclaimer`, `ToS`, `help`, `tutorial` documents.
