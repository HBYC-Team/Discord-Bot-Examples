#!/bin/sh
echo "Please Enter The Language(EN or ZH_TW)"
read confLang

if [ $confLang == "EN" ]
then
	echo "Select a Programming Language(js, go or python):"
	read codeLang

	if [ $codeLang == "js" ]
		echo "Select a step:"
		echo "deploy: Deploy the application command."
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		read jsStep

		if [ $jsStep == "deploy" ]
		then
			cd ../src/js
			node deploy.js

		else if [ $jsStep == "install" ]
		then
			npm install discord.js@latest && npm install @hizollo/games && npm install @kyometori/djsmusic

		else if [ $jsStep == "start" ]
		then
			cd ../src/js
			node app.js

		else
			echo "Please enter a step in support."
		
		fi

	else if [ $codeLang == "go" ]
	then
		echo "Select a step:"
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		read goStep

		if [ $goStep == "install" ]
		then
			cd ../src/go
			go get github.com/bwmarrin/discordgo

		else if [ $goStep == "start" ]
		then
			cd ../src/go
			echo "Enter your bot token."
			read token
			export token=$token
			go run main.go -t token

		else
			echo "Please enter a step in support."

		fi

	else if [ $codeLang == "python" ]
	then
		echo "Select a step:"
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		read pyStep

		if [ $pyStep == "install" ]
		then
			cd ../src/python
			python3 -m pip -r requirements.txt

		else if [ $pyStep == "start" ]
		then
			cd ../src/python
			python3 app.py

		else
			echo "Please enter a step in support."

		fi

else if [ $confLang == "ZH_TW" ]
then
	echo "請輸入程式語言名稱（js, go 或 python）"
	read codeLang

	if [ $codeLang == "js" ]
		echo "選擇一個步驟："
		echo "deploy: 部署斜線指令。"
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		read jsStep

		if [ $jsStep == "deploy" ]
		then
			cd ../src/js
			node deploy.js

		else if [ $jsStep == "install" ]
		then
			npm install discord.js@latest && npm install @hizollo/games && npm install @kyometori/djsmusic

		else if [ $jsStep == "start" ]
		then
			cd ../src/js
			node app.js

		else
			echo "請輸入一個存在的步驟。"
		
		fi

	else if [ $codeLang == "go" ]
	then
		echo "選擇一個步驟："
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		read goStep

		if [ $goStep == "install" ]
		then
			cd ../src/go
			go get github.com/bwmarrin/discordgo

		else if [ $goStep == "start" ]
		then
			echo "請輸入你的機器人token"
			read token
			cd ../src/go
			export token=$token
			go run main.go -t token

		else
			echo "請輸入一個存在的步驟。"

		fi

	else if [ $codeLang == "python" ]
	then
		echo "選擇一個步驟："
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		read pyStep

		if [ $pyStep == "install" ]
		then
			cd ../src/python
			python3 -m pip -r requirements.txt

		else if [ $pyStep == "start" ]
		then
			cd ../src/python
			python3 app.py

		else
			echo "請輸入一個存在的步驟。"

		fi
	
else 
	echo "Please give a Language in support."

fi