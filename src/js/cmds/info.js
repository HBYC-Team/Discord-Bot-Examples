const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");
const moment = require("moment");

const infoData = new SlashCommandBuilder()
	.setName("info")
	.setDescription("取得伺服器或一個使用者的資訊")
	.addSubcommand(subcommand =>
		subcommand
			.setName("member")
			.setDescription("關於一個使用者的資訊")
			.addUserOption(option => option.setName("使用者").setDescription("要取得資訊的使用者")))
	.addSubcommand(subcommand =>
		subcommand
			.setName("server")
			.setDescription("伺服器資訊"))

module.exports = {
	data: infoData,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		if(interaction.options.getSubcommand() === "member"){
			const member = (() => {
				if(interaction.options.getUser("使用者") === null){
					return interaction.user;
				} else {
					return interaction.options.getUser("使用者");
				}
			})();

			const guildInfo = interaction.guild.members.cache.get(member.id);

			const Status = (() => {
  				if(guildInfo.presence?.status === "online") {
    				return "🟢 在線";
  				} else if(guildInfo.presence?.status === "dnd") {
    				return "⛔ 請勿打擾";
  				} else if(guildInfo.presence?.status === "idle") {
  					return "🌙 閒置";
  				} else if(guildInfo.presence?.status === "offline") {
  					return "⚫ 離線";
  				}
			})();

			const bot = (() => {
				if(member.bot === true){
					return "是";
				} else {
					return "否";
				}
			})();

			const memberEmbed = new EmbedBuilder()
                .setColor("#B0EA6B")
                .setTitle(`${member.tag} 的資訊`)
                .addFields(
                    { name: "使用者名稱", value: member.username, inline: true },
                    { name: "於本伺服器的暱稱", value: guildInfo.nickname || "無", inline: false },
                    { name: "ID", value: member.id, inline: false },
                    { name: "是否為機器人", value: bot, inline: false },
                    { name: "狀態", value: Status },
                    { name: "加入伺服器時間", value: `${moment.utc(guildInfo.joinedAt).format("YYYY-MM-DD HH:mm:ss")}`, inline: false },
                    { name: "帳號創立時間", value: `${moment.utc(member.createdAt).format("YYYY-MM-DD HH:mm:ss")}`, inline: false },
                    { name: "擁有的身份組", value: `${guildInfo.roles.cache.map(roles => `${roles}`).join(', ')}` }
                    )
                .setThumbnail(member.avatarURL())
            
            await interaction.reply({ embeds: [memberEmbed] });
            console.log(`>info member ${member.tag}`);
			console.log(`from ${interaction.guild.name}`);
			console.log(`by ${interaction.user.tag}`);
			console.log(`at ${datetime}`);
			console.log("------------");

		} else {
			const guild = interaction.guild
			const guildEmbed = new EmbedBuilder()
               	.setColor("#B0EA6B")
               	.setTitle(`${guild.name} 的資訊`)
                .addFields(
                    { name: "伺服器ID", value: guild.id, inline: false },
              		{ name: "成員數量", value: `${guild.memberCount}`, inline:false },
              		{ name: "擁有者", value: `<@!${guild.ownerId}>`, inline:false },
              		{ name: "創立日期", value: `${moment.utc(guild.createdAt).format("YYYY-MM-DD HH:mm:ss")}`, inline: false }
                )
                .setThumbnail(guild.iconURL())
            await interaction.reply({ embeds: [guildEmbed] });
           	
           	console.log(`>info server`);
			console.log(`from ${interaction.guild.name}`);
			console.log(`by ${interaction.user.tag}`);
			console.log(`at ${datetime}`);
			console.log("------------");
		}
	}
}
