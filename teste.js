var fs = require('fs');
let config = JSON.parse(fs.readFileSync('./teste.json'));
bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    let command = msg.content.split(" ")[0];
    let args = msg.content.split(" ").slice(1);
    if (command === "!t") {
        config.game_name = "A";
        fs.writeFile("teste.json", JSON.stringify(config), function(err) {});
        console.log(config);
        bot.createMessage(msg.channel.id, "done!");
    }
    if (command == "!log"){
        console.log(config);
    }
});
