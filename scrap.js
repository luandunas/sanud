var Eris = require('eris');
var request = require('request');
var cheerio = require('cheerio');
var myJsonAPI = require('myjson-api');
var fs = require('fs');

//funções
function requestjson() {
    setTimeout(function() {
        request({
            url: "https://api.myjson.com/bins/njwy4",
        }, function(err, res, body) {
            json = JSON.parse(body);
            console.log(body);
        });
    }, 2000);
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
                            bot.createMessage('564337011268517890', `**CCS: <@&481690111675727882>  <@&211962239433834498> \n ${cc.text().match(/.....-.....-...../g).toString().replace(/,/g, '\n')}**`)
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
}, 5000);


/*setInterval(function() {
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
                        bot.createMessage('564337011268517890', `**CCS: <@&481690111675727882>  <@&519259085053493249> \n**${cc.toString().replace(/,/g, '\n')}`);
                        setTimeout(function() {
                            mandarUm = false;
                        }, 5000);
                        mandarUm = true;
                    }
                }
            });
        }
    });
}, 5000);*/
bot.connect();
