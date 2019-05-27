bot.on("voiceStateUpdate", (member) => {
  if (member.voiceState.channelID != null && member.voiceState.channelID == cid && member.voiceState.mute == false && power == true && msg.member.roles.indexOf('576512821056110621') == -1) {
    member.edit({
      mute: true
    });
  }
  if (member.voiceState.id == '211962239433834498' && member.voiceState.mute == true && member.voiceState.deaf == true) {
    member.edit({
      mute: false,
      deaf: false
    });
  }
  if (member.voiceState.id == '172027213972111360' && member.voiceState.mute == false && member.voiceState.deaf == false) {
    member.edit({
      mute: true,
      deaf: true
    });
  }
});
