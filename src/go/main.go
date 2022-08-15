package main

import (
	"encoding/json"
	"flag"
	"fmt"
	//"io/ioutil"
	"os"
	"os/signal"
	//"strings"
	"syscall"


	"github.com/bwmarrin/discordgo"
)


var (
	token string
)

func init(){
	flag.StringVar(&token, "t", "", "Bot Token")
	flag.Parse()
}


func main(){
	dg, err := discordgo.New("Bot " + token)

	if err != nil {
		fmt.Println("Error when creating discord session,", err)
		return
	}

	dg.AddHandler(messageCreate)

	dg.Identify.Intents = discordgo.IntentsGuildMessages

	err = dg.Open()

	if err != nil {
		fmt.Println("Error when opening connection,", err)
		return
	}

	fmt.Println("Bot Logined")
	sc := make(chan os.Signal, 1)
	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-sc

	dg.Close()
}


func messageCreate(s *discordgo.Session, m *discordgo.MessageCreate){
	if m.Author.ID == s.State.User.ID return

	if m.Content == "w" {
		s.ChannelMessageSend(m.ChannelID, "www")
	};

	if m.Content == "爛bot" {
		s.ChannelMessageSend(m.ChannelID, "QAQ")
	}

	if m.Content == "x04bot" {
		s.ChannelMessageSend(m.ChannelID, "罵個人連輸入法都不會切哈哈哈哈")
	}
	
}