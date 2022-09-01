const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const announcementData = new SlashCommandBuilder()
	.setName("announcement")
	.setDescription("目前最新版本的公告")

module.exports = {
	data: announcementData,

	async execute(interaction){
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();

		const annEmbed = new EmbedBuilder()
			.setColor(0x1cb7ca)
			.setTitle("最新版本公告 - v1.1.0 & v1.1.0a")
			.addFields(
				{ name: ">> 使用者方面", value: "+ 修復已知bug：當後台報錯時，機器人會莫名其妙耍脾氣下線\n+ 新增封鎖名單，當違反使用者條款時，會將id列入封鎖名單，無法使用機器人\n+ 新增/tictactoe指令（圈圈叉叉遊戲）\n+ 新增/hbycinfo指令，現在可以查看一些HBYC的資訊了" },
				{ name: ">> 專案庫方面", value: "+ 新增Python版本的一些聊天指令\n+ 一些關於後台log時間的錯誤，未來會持續尋找優化的方法\n+ 修復部份會造成錯誤的bug\n+ 將封鎖名單列入近期版本測試內容\n- 移除觸發交互後後台會一直叫的狀況" },
				{ name: ">> 其他", value: "+ 將機器人更換頭像及專案庫介紹文裡面的橫幅\n- 將原頭像及橫幅更換，檔案會保留" }
				{ name: "v1.1.0a", value: "+ 將部份有存在但沒有反應的指令修復" }
			)
			.setTimestamp()
			.setFooter({ text: "更詳細的內容請到Github上查看喔！" });

		await interaction.reply({ embeds: [annEmbed] });
		
		console.log(">announcement");
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");

	}
}
