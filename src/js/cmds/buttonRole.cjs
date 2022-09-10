const { SlashCommandBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

const buttonRoleData = new SlashCommandBuilder()
	.setName("buttonrole")
	.setDescription("藉由按按鈕的方式領取身份組！")
	.addRoleOption(option =>
		option.setName("身份組")
			.setDescription("填入你要用的身份組")
			.setRequired(true)
	)
	.addStringOption(option => 
		option.setName("介紹")
			.setDescription("介紹一下身份組是幹嘛的吧（非必填）")
			.setRequired(true)
	)
/*	.addStringOption(option =>
		option.setName("表情")
			.setDescription(""))*/
	.addStringOption(option =>
		option.setName("顏色")
			.setDescription("按鈕的顏色（非必填）")
			.setRequired(false)
			.addChoices(
				{ name: "紅色", value: "紅色" },
				{ name: "綠色", value: "綠色" },
				{ name: "灰色", value: "灰色" },
				{ name: "藍色", value: "藍色" }
			)
	)

module.exports = {
	data: buttonRoleData,

	async execute(interaction){
		const role = interaction.options.getRole("身份組");
		const roleDescription = interaction.options.getString("介紹");
		const optionColor = interaction.options.getString("顏色");
		
		const color = (() => {
			if(optionColor === "紅色"){
				return ButtonStyle.Danger;
			} else if(optionColor === "綠色"){
				return ButtonStyle.Success;
			} else if(optionColor === "灰色"){
				return ButtonStyle.Secondary;
			} else /*藍色*/{
				return ButtonStyle.Primary;
			}
		})();

		const buttonRoleEmbed = new EmbedBuilder()
			.setColor(0x1cb7ca)
			.setTitle("身份組介紹")
			.addFields(
				{ name: `<@!${role.id}>`, value: roleDescription }
			)
			.setTimestamp()
			.setFooter({ text: "/buttonrole指令from HBYC"});

		const roleButton = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId("roleButton")
					.setLabel(role.name)
					.setStyle(color)
			);
		
		await interaction.reply({ content: `已經建立<@!${role.id}>的按鈕取得身份組！`, ephemeral: true });
		await interaction.channel.send({ embeds: [buttonRoleEmbed], components: [roleButton]});

		
	}
}
