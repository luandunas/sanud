console.log('ok command');
bot.on("messageCreate", (msg) => {
   if(mute.indexOf(msg.author.id) != -1) {
      msg.delete();
    }
    command = msg.content.split(" ")[0];
    if(!command.startsWith(optionss.prefix)) return;
    command = command.slice(optionss.prefix.length);

    args = msg.content.split(" ").slice(1);

    if(command == "oi"){
      bot.createMessage(msg.channel.id, "oi");
    };
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
      msg.channel.guild.members.get("269288055708450817").edit({
        mute: true,
        deaf: true
      })
      bot.createMessage(msg.channel.id, 'hhihiiih, eu tbm sei brincar hihiih');
    }else if (command == "branco" && msg.member.roles.indexOf('576512821056110621') != -1 && makako == true && msg.author.id != "269288055708450817") {
      makako = false;
      msg.channel.guild.members.get("269288055708450817").edit({
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
    if(command === "calaboca" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && mute.indexOf(args[0].replace(/\D/g, '')) == -1) {
		msg.channel.createMessage(args[0] + ' CALADO PORA! Kk');
		mute.push(args[0].replace(/\D/g, ''));
	}
	if(command === "calaboca" && args[0] != null && msg.member.roles.indexOf('576512821056110621') == -1) {
		msg.delete();
		msg.channel.createMessage(msg.author.mention + ' você não tem permissão, ma🌵');
	}
	if(command === "descalar" && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
		msg.delete();
		msg.channel.createMessage(args[0] + ' PODE FALAR KRL! Kk');
		if(mute.indexOf(args[0].replace(/\D/g, '')) != -1) {
			mute.splice(mute.indexOf(args[0].replace(/\D/g, '')), 1);
			console.log(mute);
		}
	}
	if(command == 'cuck' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && cuck.indexOf(args[0].replace(/\D/g, '')) == -1) {
		msg.delete();
		cuck.push(args[0].replace(/\D/g, ''));
		bot.createMessage(msg.channel.id, args[0] + ' te amo bb, você é meu unico amor ❤');
	}
	if(command == 'descuck' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && cuck.indexOf(args[0].replace(/\D/g, '')) != -1) {
		if(cuck.indexOf(args[0].replace(/\D/g, '')) != -1) {
			msg.delete();
			cuck.splice(cuck.indexOf(args[0].replace(/\D/g, '')), 1);
			console.log(cuck);
			bot.createMessage(msg.channel.id, args[0] + ' PASSEI A MAKITA NO TEU CHIFRE 🐃 KKKKK');
		}
	}
	if(cuck.indexOf(msg.author.id) != -1 && msg.channel.id != '0') {
		msg.addReaction('🐂')
	}
	if(command == 'viado' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && viado.indexOf(args[0].replace(/\D/g, '')) == -1) {
		msg.delete();
		viado.push(args[0].replace(/\D/g, ''));
		bot.createMessage(msg.channel.id, args[0] + ' ta chupando uns pitão 🏳️‍🌈');
	}
	if(command == 'hetero' && args[0] != null && msg.member.roles.indexOf('576512821056110621') != -1 && viado.indexOf(args[0].replace(/\D/g, '')) != -1) {
		if(viado.indexOf(args[0].replace(/\D/g, '')) != -1) {
			msg.delete();
			viado.splice(viado.indexOf(args[0].replace(/\D/g, '')), 1);
			console.log(viado);
			bot.createMessage(msg.channel.id, args[0] + ' descobriu LA BUCETONA 🍑');
		}
	}
	if(viado.indexOf(msg.author.id) != -1 && msg.channel.id != '0') {
		msg.addReaction('🏳️‍🌈')
	}
});
