var myJsonAPI = require('myjson-api');
var json;
var mandarUm = false;
bot2.on("ready", () => {
    console.log("scrap ready!");
});
request({
    url: "https://api.myjson.com/bins/njwy4",
}, function(err, res, body) {
    json = JSON.parse(body);
});
setInterval(function() {
    request('http://www.brawlhalla.com/news/brawlhalla-community-art-showcase-' + json.showcase + '/', function(error, response, html) {
        if (!error && response.statusCode != 404 && response.statusCode == 200) {
            console.log('CONTEM ROUNDUP!');
            var $ = cheerio.load(html);
            $('div.et_post_meta_wrapper').each(function(i, element) {
                var cc = $(this).prev().text().match(/.....-.....-...../g);
                if (cc != null) {
                    json.showcase = json.showcase += 1;
                    myJsonAPI.update("njwy4", json).then((updatedJSON) => console.log(updatedJSON));
                    request({
                        url: "https://api.myjson.com/bins/njwy4",
                    }, function(err, res, body) {
                        json = JSON.parse(body);
                    });
                    if (mandarUm == false) {
                        bot2.createMessage('411187002134757378', {content: `@everyone \n **===COMMUNITY COLORS===** \n ${cc.toString().replace(/,/g, '\n')}`, disableEveryone: false});
                        setTimeout(function() {
                            mandarUm = false;
                        }, 5000);
                        mandarUm = true;
                    }
                }
            });
        }
    });
}, 5000);
bot2.connect();
