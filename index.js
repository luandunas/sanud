var fs = require('fs');
var Eris = require('eris');
var sCala = ['214946188108103680', '211962239433834498', '233372554058792970'];
var bot = new Eris(process.env.BOT_TOKEN);
eval(fs.readFileSync('scrap.js') + '');

var setarGame = 0;
var mute = [];
var cuck = [];
bot.on("ready", () => {
    console.log("Ready!");

});
bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    let command = msg.content.split(" ")[0];
    let args = msg.content.split(" ").slice(1);

    if (command === "!calaboca" && args[0] != null && sCala.indexOf(msg.author.id) != -1 && mute.indexOf(args[0].replace(/\D/g, '')) == -1) {
        msg.channel.createMessage(args[0] + ' CALADO PORA! Kk');
        mute.push(args[0].replace(/\D/g, ''));
    }


    if (command === "!calaboca" && args[0] != null && sCala.indexOf(msg.author.id) == -1) {
        msg.channel.createMessage(msg.author.mention + ' você não, você é CROCODILO!');
    }

    if (command === "!logg") {
        console.log(mute)
    }
    if (command == 'user') {
        console.log(msg.member.roles)
    }

    if (command === "!descalar" && args[0] != null && sCala.indexOf(msg.author.id) != -1 && mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
        msg.channel.createMessage(args[0] + ' PODE FALAR KRL! Kk');
        if (mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
            mute.splice(mute.indexOf(args[0].replace(/\D/g, '')), 1);
            console.log(mute);
        }
    }

    if (command == '!cuck' && args[0] != null && cuck.indexOf(args[0].replace(/\D/g, '')) == -1) {
        cuck.push(args[0].replace(/\D/g, ''));
        bot.createMessage(msg.channel.id, args[0] + 'TA CUCKADO KKKK!');
    }
    if (command == '!descuck' && args[0] != null && cuck.indexOf(args[0].replace(/\D/g, '')) != -1) {
        if (cuck.indexOf(args[0].replace(/\D/g, '')) != -1) {
            cuck.splice(cuck.indexOf(args[0].replace(/\D/g, '')), 1);
            console.log(cuck);
            bot.createMessage(msg.channel.id, args[0] + 'vc é meu unico amor bb!');
        }
    }

    if (cuck.indexOf(msg.author.id) != -1 && msg.channel.id == '399026580174667788') {
        msg.addReaction('🐂')
    }

    /*if (command === "!descalar" && args[0] != null && sCala.indexOf(msg.author.id) != -1) {
        msg.channel.createMessage(args[0] + ' To na festa ainda Kk');
    }*/


    if (mute.indexOf(msg.author.id) != -1) {
        msg.delete();
    }
    if (command === "ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
    if (command == "!say" && args[0] != undefined && msg.author.id == 211962239433834498) {
        msg.delete();

        msg.channel.createMessage(args[0]);
        console.log(args[0]);
    }

    /*if(command === "testar" && args[0] != null){
        console.log(args[0])
    }*/

});
bot.connect();
