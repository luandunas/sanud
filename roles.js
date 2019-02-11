var jsson;

request({
    url: "https://api.myjson.com/bins/s0efk",
}, function(err, res, body) {
    jsson = JSON.parse(body);
});

bot.on("ready", () => {
    console.log("Ready!");
    bot.guilds.get('399026579679870977').roles.map(i => i).forEach(function(role) {
        if (role.name == 'Muted') {
            //console.log(role.id);
        }
    })
    bot.editStatus({
        name: 'PornHub',
        type: 3,
        url: 'https://www.pornhub.com/'
    });
    //console.log(bot.guilds.get('399026579679870977').members.map(i => i))
    //console.log(bot.guilds.get('395994705869144068').members.get('193041297538285568').game.name);
});

bot.on("guildMemberAdd", (guild, member) => {
    if (guild.id == "399026579679870977" && member.bot == false && JSON.stringify(jsson).indexOf(member.id) !== -1) {
        jsson[member.id].role.forEach(function(role) {
            member.addRole(role);
        })
        setTimeout(function() {
            member.removeRole('462745717895856140');
        }, 5000);
    }
})

bot.on("messageCreate", (msg) => {
    if (msg.author.bot) return;
    let command = msg.content.split(" ")[0];
    let args = msg.content.split(" ").slice(1);

    if (command === "!atj" && msg.author.id == '211962239433834498') {
        bot.guilds.get('399026579679870977').members.map(i => i).forEach(function(user) {
            if (user.bot == false && user.id != '211962239433834498') {
                jsson = JSON.stringify(jsson).replace(/}}/g, `},"${user.id}":{"role":${JSON.stringify(user.roles)}}}`);
                jsson = JSON.parse(jsson);
            }
        })
        setTimeout(function() {
            myJsonAPI.update("s0efk", jsson).then((updatedJSON) => console.log(updatedJSON));
            msg.channel.createMessage('atualizado');
        }, 2000);
    }
});

bot.connect();
