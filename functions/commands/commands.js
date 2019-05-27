bot.on("messageCreate", (msg) => {
    command = msg.content.split(" ")[0];
    if(!command.startsWith(options.prefix)) return;
    command = command.slice(options.prefix.length);

    args = msg.content.split(" ").slice(1);

    /*comando dentadura*/
    if (command == "dentadura" && msg.member.roles.indexOf('576512821056110621') != -1 && power == false && msg.member.voiceState.channelID != null) {
      power = true;
      msg.member.guild.channels.find(channel => channel.id == msg.member.voiceState.channelID).voiceMembers.forEach(function(m) {
        if (m.roles.indexOf('576512821056110621') == -1) {
          m.edit({
            mute: true
          });
        }
      });
      bot.createMessage(msg.channel.id, '**COMEÇOU A DENTADURA PORRA**');
    }else if (command == "dentadura" && msg.member.roles.indexOf('576512821056110621') != -1 && power == false && msg.member.voiceState.channelID == null) {
      power = true;
      bot.createMessage(msg.channel.id, '**COMEÇOU A DENTADURA PORRA**');
    }
    if (power == true && msg.channel.guild.id == '562717330501664771' && msg.member.roles.indexOf('576512821056110621') == -1) {
      msg.delete();
    }

    /*comando acabou a dentadura*/
    if (command == "cabodentadura" && msg.member.roles.indexOf('576512821056110621') != -1 &&power == true && msg.member.voiceState.channelID != null && cid != undefined) {
      power = false;
      msg.member.guild.channels.find(channel => channel.id == msg.member.voiceState.channelID).voiceMembers.forEach(function(m) {
        if (m.roles.indexOf('576512821056110621') == -1) {
          m.edit({
            mute: false
          })
        }
      });
      bot.createMessage(msg.channel.id, '**CABO DETADURA KARAIO**');
    }else if (command == "cabodentadura" && msg.member.roles.indexOf('576512821056110621') != -1 && power == true && msg.member.voiceState.channelID == null && cid != undefined) {
      power = false;
      msg.member.guild.channels.find(channel => channel.id == cid).voiceMembers.forEach(function(m) {
        if (m.roles.indexOf('576512821056110621') == -1) {
          m.edit({
            mute: false
          })
        }
      });
      bot.createMessage(msg.channel.id, '**CABO DETADURA KARAIO**');
    } else if (command == "!abodentadura" && msg.member.roles.indexOf('576512821056110621') != -1 && power == true && msg.member.voiceState.channelID == null && cid == undefined) {
      power = false;
      bot.createMessage(msg.channel.id, '**CABO DETADURA KARAIO**');
    }

    /*comandos de teste de stream voice*/
    if (command == 'creme') {
      //console.log(msg.channel.guild.members.get("211962239433834498"))
      msg.member.guild.channels.find(channel => channel.id == msg.member.voiceState.channelID).join().then(aew =>{
                  bot.voiceConnections.get(msg.channel.guild.id).play('./pikadura.wav');
                });
    }
    if (command == 'caminions') {
      //console.log(msg.channel.guild.members.get("211962239433834498"))
      msg.member.guild.channels.find(channel => channel.id == msg.member.voiceState.channelID).join().then(aew =>{
                  bot.voiceConnections.get(msg.channel.guild.id).play('./caminions.wav');
                });
    }

    /*comando macaco*/
    if (command == "makako" && msg.member.roles.indexOf('576512821056110621') != -1 && makako == false) {
      makako = true;
      msg.channel.guild.members.get("172027213972111360").edit({
        mute: true,
        deaf: true
      })
      bot.createMessage(msg.channel.id, 'hhihiiih, eu tbm sei brincar hihiih');
    }else if (command == "branco" && msg.member.roles.indexOf('576512821056110621') != -1 && makako == true) {
      makako = false;
      msg.channel.guild.members.get("172027213972111360").edit({
        mute: false,
        deaf: false
      })
      bot.createMessage(msg.channel.id, 'hhihiiih, eu tbm sei brincar hihiih');
    }

    /*comando topgames*/
    if (command == "topsteam"){
        steamTopGames(msg.channel.id);
      }
    if(command == "topxv"){
      topPorn(msg.channel.id);
    }

    if(command == 'neon' && args[0] != null){
      bot.createMessage(msg.channel.id, "Processando, aguarde.");
      neonImg(msg, args);
    }
});
