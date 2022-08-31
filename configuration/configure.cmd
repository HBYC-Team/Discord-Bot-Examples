@echo off

SET /P confLang = "Please Enter The Language(EN or ZH_TW)"

if %confLang% == "EN" (
	SET /P = "Select a Programming Language(js, go or python):"

	if %codeLang% == "js" (
		echo "Select a step:"
		echo "deploy: Deploy the application command."
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		SET /P jsStep

		if %jsStep% == "deploy" (
			cd ../src/js
			node deploy.js

		) else if %jsStep% == "install" (
			npm install
	
		) else if %jsStep% == "start" (
			cd ../src/js
			node app.js

		) else (
			echo "Please enter a step in support."
		)

	) else if %codeLang% == "go" (
		echo "Select a step:"
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		SET /P goStep

		if %goStep% == "install" (
			cd ../src/go
			go get github.com/bwmarrin/discordgo

		) else if %goStep% == "start" (
			cd ../src/go
			echo "Enter your bot token."
			SET /P token
			set token=%token%
			go run main.go -t token

		) else (
			echo "Please enter a step in support."
		)
	

	) else if %codeLang% == "python" (
		echo "Select a step:"
		echo "install: Install the dependencies."
		echo "start: Start the bot."
		read pyStep

		if %pyStep% == "install" (
			cd ../src/python
			python3 -m pip -r requirements.txt

		) else if %pyStep% == "start" (
			cd ../src/python
			python3 app.py

		) else (
			echo "Please enter a step in support."
		)

) else if %confLang% == "ZH_TW" (
	echo "請輸入程式語言名稱（js, go 或 python）"
	SET /P codeLang

	if %codeLang% == "js" (
		echo "選擇一個步驟："
		echo "deploy: 部署斜線指令。"
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		SET /P jsStep

		if %jsStep% == "deploy" (
			cd ../src/js
			node deploy.js

		) else if %jsStep% == "install" ( 
			npm install

		) else if %jsStep% == "start" (
			cd ../src/js
			node app.js

		) else (
			echo "請輸入一個存在的步驟。"
		)

	) else if %codeLang% == "go" (
		echo "選擇一個步驟："
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		SET /P goStep

		if %goStep% == "install" (
			cd ../src/go
			go get github.com/bwmarrin/discordgo

		) else if %goStep% == "start" (
			cd ../src/go
			echo "請輸入你的機器人token"
			SET /P token
			set token=%token%
			go run main.go -t token

		) else (
			echo "請輸入一個存在的步驟。"
		)

	) else if %codeLang% == "python" (
		echo "選擇一個步驟："
		echo "install: 安裝依賴項。"
		echo "start: 啟動機器人。"
		SET /P pyStep

		if %pyStep% == "install" (
			cd ../src/python
			python3 -m pip -r requirements.txt

		) else if %pyStep% == "start" (
			cd ../src/python
			python3 app.py

		) else ( 
			echo "請輸入一個存在的步驟。"
		)
	
) else ( 
	echo "Please give a Language in support."
)