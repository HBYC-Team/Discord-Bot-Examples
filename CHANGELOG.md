# HBYC CHANGELOG
This document is a Changelog of this Repo.

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
