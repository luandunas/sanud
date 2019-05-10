var fs = require('fs');
var Eris = require('eris');
var sCala = ['214946188108103680', '211962239433834498', '206470647143071744', '438563600135880704', '270983931006812160', '269288055708450817'];
var voiceCanal = ['480612648405434388', '459477541774688256', '460272075089641492', '411924159413878806', '454811068473278464', '416342807297523712', '421864849815896065', '464882248718483458'];
var bot = new Eris(process.env.BOT_TOKEN);
eval(fs.readFileSync('scrap.js') + '');
eval(fs.readFileSync('roles.js') + '');

//var setarGame = 0;
var mute = [];
var cuck = [];
var viado = [];
var furacao = [];
var power = false;
var cid;

bot.on("ready", () => {
    console.log("Ready!");
    bot.editStatus({ name: 'PornHub', type: 3, url: 'https://www.pornhub.com/' });
});
bot.on("guildMemberAdd", (guild, member) => {
    if (bot.guilds.get(member.guild.id).roles.map(r => r.id).indexOf('481690111675727882') != -1){
        bot.getDMChannel(member.id).then(dm => {
            bot.createMessage(dm.id, '``.bem vindo a Kaimon.`` 🌜');
        });
        member.addRole('481719915523604505');
   }
})
bot.on("voiceChannelJoin", (member, newChannel) => {
  cid = member.voiceState.channelID;
  if (power == true){
      newChannel.voiceMembers.forEach(function (m){
        if(m.roles.indexOf('576512821056110621') == -1){
          setTimeout(function() {
          m.edit({mute: true})
          }, 1000);
        }
      })
  }
  if(newChannel.id == member.voiceState.channelID && member){
  }
});

bot.on("voiceStateUpdate", (member) => {
  if(member.voiceState.channelID != null && member.voiceState.channelID == cid && member.voiceState.mute == false && power == true && member.roles.indexOf('576512821056110621') == -1){
    member.edit({mute: true});
  }
});

bot.on("presenceUpdate", (member) =>{
   if (bot.guilds.get(member.guild.id).roles.map(r => r.id).indexOf('481690111675727882') != -1 && member.status == 'offline'){
        member.addRole('481715680375472128');
   }
   if (bot.guilds.get(member.guild.id).roles.map(r => r.id).indexOf('481690111675727882') != -1 && member.status != 'offline'){
    member.removeRole('481715680375472128');
}
});
bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    let command = msg.content.split(" ")[0];
    let args = msg.content.split(" ").slice(1);

    if (command === "!calaboca" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && mute.indexOf(args[0].replace(/\D/g, '')) == -1) {
        msg.channel.createMessage(args[0] + ' CALADO PORA! Kk');
        mute.push(args[0].replace(/\D/g, ''));
    }


    if (command === "!calaboca" && args[0] != null && sCala.indexOf(msg.author.id) == -1) {
        msg.delete();
        msg.channel.createMessage(msg.author.mention + ' você não, você é CROCODILO!');
    }

    if (command === "!logg") {
        console.log(mute)
    }
    if (command == 'user') {
        console.log(msg.member.roles)
    }

    if (command === "!descalar" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
        msg.delete();
        msg.channel.createMessage(args[0] + ' PODE FALAR KRL! Kk');
        if (mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
            mute.splice(mute.indexOf(args[0].replace(/\D/g, '')), 1);
            console.log(mute);
        }
    }

    if (command == '!cuck' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && cuck.indexOf(args[0].replace(/\D/g, '')) == -1){
        msg.delete();
        cuck.push(args[0].replace(/\D/g, ''));
        bot.createMessage(msg.channel.id, args[0] + ' te amo bb, você é meu unico amor ❤');
    }
    if (command == '!descuck' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && cuck.indexOf(args[0].replace(/\D/g, '')) != -1){
        if(cuck.indexOf(args[0].replace(/\D/g, '')) != -1){
            msg.delete();
            cuck.splice(cuck.indexOf(args[0].replace(/\D/g, '')), 1);
            console.log(cuck);
            bot.createMessage(msg.channel.id, args[0] + ' PASSEI A MAKITA NO TEU CHIFRE 🐃 KKKKK');
        }
    }

    if (cuck.indexOf(msg.author.id) != -1 && msg.channel.id != '0') {
        msg.addReaction('🐂')
    }
    
        if (command == '!viado' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && viado.indexOf(args[0].replace(/\D/g, '')) == -1){
        msg.delete();
        viado.push(args[0].replace(/\D/g, ''));
        bot.createMessage(msg.channel.id, args[0] + ' ta chupando uns pitão 🏳️‍🌈');
    }
    if (command == '!hetero' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && viado.indexOf(args[0].replace(/\D/g, '')) != -1){
        if(viado.indexOf(args[0].replace(/\D/g, '')) != -1){
            msg.delete();
            viado.splice(viado.indexOf(args[0].replace(/\D/g, '')), 1);
            console.log(viado);
            bot.createMessage(msg.channel.id, args[0] + ' descobriu LA BUCETONA 🍑');
        }
    }
    if (viado.indexOf(msg.author.id) != -1 && msg.channel.id != '0'){
        msg.addReaction('🏳️‍🌈')
    }
    /*if (command == "!furacão2000" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1){
        furacao.push(args[0].replace(/\D/g, ''));
        console.log(furacao);
        bot.createMessage(msg.channel.id, args[0] + ' OLHA A CARRETA PORAAAAAAAAA');
    }*/

    /*if (command === "!descalar" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1) {
        msg.channel.createMessage(args[0] + ' To na festa ainda Kk');
    }*/


    if (mute.indexOf(msg.author.id) != -1) {
        msg.delete();
    }
    if (command == "!say" && args[0] != undefined && msg.author.id == 211962239433834498) {
        msg.delete();

        msg.channel.createMessage(args[0]);
        console.log(args[0]);
    }
    
        if(command == "!dentadura" && msg.member.roles.indexOf('576512821056110621') != -1 && power == false){
      power = true; 
      bot.createMessage(msg.channel.id, '**COMEÇOU A DENTADURA PORRA**');
    }

    if(power == true && msg.channel.guild.id == '562717330501664771' && msg.member.roles.indexOf('576512821056110621') == -1){
      msg.delete();
    }

    if(command == "!cabodentadura" && power == true && msg.member.roles.indexOf('576512821056110621') != -1){
      msg.member.guild.channels.find(channel => channel.id == msg.member.voiceState.channelID).voiceMembers.forEach(function (m){
        if(msg.member.roles.indexOf('576512821056110621') == -1){
          setTimeout(function() {
          m.edit({mute: false})
          }, 1000);
        }
        power = false;
      });
      bot.createMessage(msg.channel.id, '**CABO DETADURA KARAIO**');
    }

    /*if(command === "testar" && args[0] != null){
        console.log(args[0])
    }*/

});
bot.connect();
