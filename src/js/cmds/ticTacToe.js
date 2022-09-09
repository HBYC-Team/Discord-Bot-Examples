const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsTicTacToe } = require("@hizollo/games");
const { tocTacToe } = require('../gameStrings.json')

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
    )

module.exports = {
    data: ticTacToeData,

    async execute(interaction){
        const p1 = interaction.user;
        const p2 = interaction.options.getUser("對手1");
        const p3 = interaction.options.getUser("對手2");
        const boardSize = interaction.options.getInteger("盤面大小");

        const players = [{
            username: p1.username,
            id: p1.id,
            symbol: "❌"
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
            boardSize: boardSize
        });

        await game.initialize();
        await game.start();
        await game.conclude();   
    }
}