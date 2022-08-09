#!/bin/sh
if [ $1 = "-H" ]
then
	echo "This Shell Script Can Help You Auto Configure This Bot."
	echo "The Argument You Can Put:"
	echo "-D, --deploy    Deploys the Application(/) Command.\n-H, --help      Shows this.\n-I, --install   Install the dependencies.\n-S, --start     Start the bot."

elif [ $1 = "--help" ]
then
	echo "This Shell Script Can Help You Auto Configure This Bot."
	echo "The Argument You Can Put:"
	echo "-D, --deploy    Deploys the Application(/) Command.\n-H, --help     Shows this.\n-I, --install   Install the dependencies.\n-S, --start     Start the bot."

elif [ $1 = "--install" ]
then
	echo "Running $1"
	echo "Installing the dependencies..."
	npm install

elif [ $1 = "-I" ]
then
	echo "Running $1"
	echo "Installing the dependencies..."
	npm install

elif [ $1 = "--deploy" ]
then
	echo "Running $1"
	echo "Deploying the Application(/) command..."
	node deploy.js

elif [ $1 = "-D" ]
then
	echo "Running $1"
	echo "Deploying the Application(/) command..."
	node deploy.js

elif [ $1 = "--start" ]
then
	echo "Running $1"
	echo "Starting the bot..."
	node app.js

elif [ $1 = "-S" ]
then
	echo "Running $1"
	echo "Starting the bot..."
	node app.js

else
	echo "Please put a true argument, use ./build.sh -H to see the arguments."

fi
