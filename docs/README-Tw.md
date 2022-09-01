# HBYC
![license](https://img.shields.io/github/license/dragonyc1002/HBYC?style=for-the-badge)
![last_commit](https://img.shields.io/github/last-commit/dragonyc1002/HBYC?style=for-the-badge)
![Discord](https://img.shields.io/discord/977204156043509780?style=for-the-badge)
[![EMU900!!!](./public/images/banner-EMU800.jpeg)](https://reurl.cc/GxQqdy)
一個簡易的Discord機器人範例，主要使用套件如下：

* JavaScript / TypeScript
```
> discord.js v14.3.0
> @hizollo/games v2.4.0
> @kyometori/djsmusic v0.8.5 -> 本套件需等待作者rewrite至適用於djs v14的版本。
```

* Go
```
> discord.go v0.25.0
```

* Python
```
> pycord v2.1.1
```

目前正在進行Go, Python範例的製作。

**本機器人使用JavaScript運行，Go/Python/TypeScript為單純範例，並無使用於機器人。**

## 如何做一台跟這台一樣的機器人
自己fork這份專案或抓source code回去。

取得source code的方式可以在Release的區塊找到。

## 如何讓機器人上線
如果你是使用JavaScript，請於`src/js/`裡面的`.env`檔案，輸入以下內容：
```
TOKEN=你的機器人token放在這裡
clientId=請放入你的clientid(又稱application id)
```
接著，請記得確認你的terminal所在的目錄為`src/js`，接下來請輸入：
```bash
$ node app.js
```
機器人即可上線。

請記得執行`src/js/deploy.js`：
```bash
$ node deploy.js
```
進行斜線指令的部署。

也可以使用npm script進行配置（請於`package.json`的同一層資料夾執行）：

`$ npm run all` - 安裝依賴項、部署斜線指令、執行機器人。

`$ npm run install` - 安裝依賴項。

`$ npm run  deploy` - 部署斜線指令。

`$ npm run start` - 讓機器人上線。

## Go, Python快速配置(也可適用於JavaScript)
Windows使用者可以直接運行`configuration/configure.cmd` 進行配置。

Linux, Mac使用者可以直接運行`configure/configure` 進行配置。（請記得將運行此script的權限開啟）

## 專案包含
* discord.js v14達成簡易的許多功能
* 達成以discord.js v14部署斜線指令
* 簡易的遊戲指令
* 簡易聊天指令

## 指令列表
請見[指令列表](./docs/commandList.md)檔案。

## 授權方式
本專案採CC-BY-4.0授權，詳細內容請參見[本檔案](../LICENSE)。

## 相依性套件
請見[package.json](./package.json)檔案。

## 更新日誌
請見[更新日誌](./CHANGELOG.md)檔案(EN-Only)。

## 注意
本專案有部份指令原始碼並無公開。

## 作者
恐龍#2549/dragonyc1002。

有關於其他問題可以使用Discord聯絡或是加入作者正在建立中的[程式伺服器](https://discord.gg/J7X2nWXszp)。