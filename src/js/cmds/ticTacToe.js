const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsTicTacToe } = require("@hizollo/games");

const ticTacToeData = new SlashCommandBuilder()
    .setName("tictactoe")
    .setDescription("遊玩一場圈圈叉叉遊戲！")
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

        const players = [{
            username: p1.username,
            id: p1.id,
            symbol: "❌"
        },{
            username: p2.username,
            id: p2.id,
            symbol: "⭕",
            bot: true
        }];

        if(p3 !== null){
            players.push({
                username: p3.name,
                id: p3.id,
                symbol: "🔺",
                bot: true    
            });
        }

        const game = new DjsTicTacToe({
            source: interaction,
            players: players
        });

        console.log(`>ticTacToe *Game Start*`);
        console.log(`from ${interaction.guild.name}`);
        console.log(`by ${interaction.user.tag}`);
        console.log(`at ${datetime}`);
        console.log("------------");

        await game.initialize();
        await game.start();
        await game.conclude();   
    }
}