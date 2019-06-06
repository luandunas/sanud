FB.options({accessToken: process.env.FB_TOKEN, appSecretProof: process.env.FB_ID});
console.log(fboptions);

function requestjson() {
    setTimeout(function() {
        request({
            url: 'https://api.myjson.com/bins/njwy4',
        }, function(err, res, body) {
            json = JSON.parse(body);
            console.log(body);
        });
    }, 2000);
}

function fbsend() {
    if (cc != undefined) {
        FB.api('yggdrasilbrz/feed', 'post', {
            message: `Community Colors! \n ${cc} \n Nos siga para ser notificado quando houver nova showcase! Entre em nosso discord para receber notificação por lá https://discord.gg/VxVujFe`;
        }, function(res) {
            if (!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            console.log('Post Id: ' + res.id);
        });
    }
}

bot.on("ready", () => {
    console.log("Ready!");
    requestjson();
});
setInterval(function() {
    request('http://www.brawlhalla.com/news/', function(error, response, body) {
        if (!error && response.statusCode != 404 && response.statusCode == 200) {
            const $ = cheerio.load(body);
            Array.from($('div.et_pb_blog_grid_wrapper h2.entry-title a')).forEach(function(elem) {
                if (elem.children[0].data.indexOf('Art') != -1 && JSON.stringify(json).indexOf(elem.attribs['href']) == -1) {
                    request(elem.attribs['href'], function(error, response, body) {
                        if (!error && response.statusCode != 404 && response.statusCode == 200) {
                            cc = cheerio.load(body);
                            bot.createMessage('564337011268517890', `**CCS: <@&481690111675727882>  <@211962239433834498> \n ${cc.text().match(/.....-.....-...../g).toString().replace(/,/g, '\n')}**`);
                            fbsend();
                        }
                        json = JSON.stringify(json).replace('}}', `},"${elem.attribs['href']}":{"link":"${elem.attribs['href']}"}}`);
                        json = JSON.parse(json);
                        myJsonAPI.update("njwy4", json).then((updatedJSON) => console.log(""));
                        requestjson();
                    })
                }
            })
        }
    });
}, 10000);
