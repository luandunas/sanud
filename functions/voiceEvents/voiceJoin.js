bot.on("voiceChannelJoin", (member, newChannel) => {
  cid = member.voiceState.channelID;
  if (power == true) {
    newChannel.voiceMembers.forEach(function(m) {
      if (m.roles.indexOf('576512821056110621') == -1) {
        m.edit({
          mute: true
        });
      }
    });
  }
  if (newChannel.id == member.voiceState.channelID && member) {}
});
