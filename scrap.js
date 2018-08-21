var Eris = require('eris');
var request = require('request');
var cheerio = require('cheerio');
var rNum = 42;
var rShow = 4;

setInterval(function() {
request('http://www.brawlhalla.com/community/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('h2.entry-title').each(function(i, element){
      var a = $(this);
      var sites = a.text();
      if(sites.indexOf('Community Roundup #' + rNum) != -1){
        rNum++;
        console.log('CONTEM!');
        request('http://www.brawlhalla.com/news/community-roundup-42/', function (error, response, html) {
        if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div.et_post_meta_wrapper').each(function(i, element){
        var cc = $(this).prev().text().match(/.....-.....-...../g);
        if(cc != null){
        bot.createMessage('399026580174667788', '<@211962239433834498> <@214946188108103680> **CC CARALHOOOOO:**\n' + cc.toString().replace(/,/g, '\n'));
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
  request('http://www.brawlhalla.com/community/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('h2.entry-title').each(function(i, element){
        var a = $(this);
        var sites = a.text();
        if(sites.indexOf('Brawlhalla Community Art Showcase #' + rShow) != -1){
          console.log('CONTEM SHOW!');
          rShow++;
          request('http://www.brawlhalla.com/news/brawlhalla-community-art-showcase-4/', function (error, response, html) {
          if (!error && response.statusCode == 200) {
          var $ = cheerio.load(html);
          $('div.et_post_meta_wrapper').each(function(i, element){
          var cc = $(this).prev().text().match(/.....-.....-...../g);
          if(cc != null){
          bot.createMessage('399026580174667788', '<@211962239433834498> <@214946188108103680> **CC CARALHOOOOO:**\n' + cc.toString().replace(/,/g, '\n'));
        }
      });
    }
  });
        }
      });
    }
  });
  }, 5000);
