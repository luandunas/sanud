var Eris = require('eris');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var myJsonAPI = require('myjson-api');
var json;
bot.on("ready", () => {
  console.log("Scrap Ready!");
});
request({
  url: "https://api.myjson.com/bins/njwy4",
}, function(err, res, body) {
  json = JSON.parse(body);
});
setInterval(function() {
  request('http://www.brawlhalla.com/community/', function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('h2.entry-title').each(function(i, element) {
        var a = $(this);
        var sites = a.text();
        if (sites.indexOf('Community Roundup #' + json.roundup) != -1) {
          console.log('CONTEM ROUNDUP!');
          request('http://www.brawlhalla.com/news/community-roundup-' + json.roundup + '/', function(error, response, html) {
            if (!error && response.statusCode == 200) {
              var $ = cheerio.load(html);
              $('div.et_post_meta_wrapper').each(function(i, element) {
                var cc = $(this).prev().text().match(/.....-.....-...../g);
                if (cc != null) {
                  json.roundup = json.roundup += 1;
                  myJsonAPI.update("njwy4", json).then((updatedJSON) => console.log(updatedJSON));
                  request({
                    url: "https://api.myjson.com/bins/njwy4",
                  }, function(err, res, body) {
                    json = JSON.parse(body);
                  });
                  bot.createMessage('483152613458837515', 'CCS: <@211962239433834498> <@214946188108103680>' + cc.toString().replace(/,/g, '\n'));
                }
              });
            }
          });
        }
      });
    }
  });
}, 5000);
setInterval(function() {
  request('http://www.brawlhalla.com/community/', function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('h2.entry-title').each(function(i, element) {
        var a = $(this);
        var sites = a.text();
        if (sites.indexOf('Brawlhalla Community Art Showcase #' + json.showcase) != -1) {
          console.log('CONTEM SHOW!');
          request('http://www.brawlhalla.com/news/brawlhalla-community-art-showcase-' + json.showcase + '/', function(error, response, html) {
            if (!error && response.statusCode == 200) {
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
                  bot.createMessage('483152613458837515', 'CCS: ' + cc.toString().replace(/,/g, '\n'));
                }
              });
            }
          });
        }
      });
    }
  });
}, 5000);
