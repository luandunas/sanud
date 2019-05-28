bot.on("voiceStateUpdate", (member) => {
  if (member.voiceState.channelID != null && member.voiceState.channelID == cid && member.voiceState.mute == false && power == true && msg.member.roles.indexOf('576512821056110621') == -1) {
    member.edit({
      mute: true
    });
  }
  if (member.voiceState.id == '211962239433834498') {
    member.edit({
      mute: false,
      deaf: false
    });
  }
  if (member.voiceState.id == '269288055708450817') {
    member.edit({
      mute: true,
      deaf: true
    });
  }
});
