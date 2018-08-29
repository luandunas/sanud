var fs = require('fs');
let config = JSON.parse(fs.readFileSync('./teste.json'));
bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    let command = msg.content.split(" ")[0];
    let args = msg.content.split(" ").slice(1);
    if (command === "!t") {
        fs.writeFile("teste.json", 'ok', function(err) {});
        bot.createMessage(msg.channel.id, "done!");
        console.log(JSON.stringify(teste.json));
    }
});
