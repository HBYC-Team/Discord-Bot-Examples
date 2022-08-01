@echo off

SET /P lang="Choose a Language: EN or ZH-Tw"

if %lang% == "EN" (
	echo "Actions you can enter:"
	echo "* install: Install the dependencies."
	echo "* deploy: Deploy the application(/) command."
	echo "* start: Start the bot."
	echo "* all: Install the dependencies, deploy the application(/) command, start the bot."

	SET /P todo="Please Enter an Action.

	if %todo% == "install" (
		echo "Install the dependencies..."
		npm install
	) else if %todo% == "start" (
		echo "Start the bot..."
		node app.js
	) else (
		echo "Please Enter a true argument."
		return
	)

) else if %lang% == "ZH-Tw" (
	echo "請擇一輸入以下動作(不含\"*\")"
	echo "* install: 安裝依賴項（請先確認已經安裝node.js/npm）"
	echo "* deploy: 部署斜線指令。"
	echo "* start: 使機器人上線（請先確認已經填入token）"
	echo "* all: 執行上述所有動作"

	SET /P todo="請輸入一個動作"

	if %todo% == "install" (
		echo "開始執行 安裝依賴項..."
		npm install
	) else if %todo% == "start" (
		echo "開始運行機器人..."
		node app.js
	) else if %todo% == "all"(
		echo "開始執行 所有項目..."
		npm install && node deploy.js && node app.js
	) else (
		echo "請填入正確的動作"
		return
	)
) else (
	echo "Please enter a true language."
	return
)
