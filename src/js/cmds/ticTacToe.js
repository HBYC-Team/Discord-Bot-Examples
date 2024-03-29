const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, WebhookClient } = require('discord.js')
const { DjsTicTacToe } = require('@hizollo/games');
const { ticTacToe } = require('../../gameStrings.json');

require('dotenv').config({ path: '/src/js'});

const cmdHookId = process.env.cmdHookId;
const cmdHookToken = process.env.cmdHookToken;

const cmdHook = new WebhookClient({
    id: cmdHookId,
    token: cmdHookToken
});

const ticTacToeData = new SlashCommandBuilder()
    .setName("tictactoe")
    .setDescription("遊玩一場圈圈叉叉遊戲！")
    .addIntegerOption(option => 
        option.setName("盤面大小")
        .setDescription("請輸入盤面大小(1~4)")
        .setRequired(true)
    )
    .addUserOption(option => 
        option.setName("對手1")
        .setDescription("對手1")
        .setRequired(true)
    )
    .addUserOption(option =>
        option.setName("對手2")
        .setDescription("對手2")
        .setRequired(false)
    );

module.exports = {
    data: ticTacToeData,

    async execute(interaction){
        const p1 = interaction.user;
        const p2 = interaction.options.getUser("對手1");
        const p3 = interaction.options.getUser("對手2");
        const boardSize = interaction.options.getInteger("盤面大小");

        if(!(boardSize > 0 && boardSize <= 4)){
            await interaction.reply({ content: "你沒看到版面大小只能設定1至4之間嗎？眼睛瞎了？", ephemeral: true });
            return;
        }

        const players = [{
            username: p1.username,
            id: p1.id,
            symbol: "❌",
            bot: true
        },{
            username: p2.username,
            id: p2.id,
            symbol: "⭕",
        }];

        if(p3 !== null){
            players.push({
                username: p3.name,
                id: p3.id,
                symbol: "🔺"
            });
        }

        const game = new DjsTicTacToe({
            source: interaction,
            players: players,
            strings: ticTacToe,
            boardSize: boardSize
        });

        await game.initialize();
        await game.start();
        await game.conclude();

        const cmdHookEmbed = new EmbedBuilder()
            .setAuthor({ name: "Command Log", iconURL: interaction.client.user.avatarURL() })
            .setColor(0x00bfff)
            .setDescription("Command: `/tictactoe`")
            .addFields(
                { name: "User Tag", value: interaction.user.tag },
                { name: "User ID", value: interaction.user.id },
                { name: "Guild Name", value: interaction.guild.name },
                { name: "Guild ID", value: interaction.guild.id },
                { name: "Players", value: `${p1.tag} & ${p2.tag}`}
            )
            .setTimestamp()
            .setFooter({ text: 'Shard#1' });
                
        cmdHook.send({
            embeds: [cmdHookEmbed]
        }); 
    }
}