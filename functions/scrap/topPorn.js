function topPorn(channel){
    request('https://www.xvideos.com/pornstars-index', function(error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div.mozaique').each(function(i, element) {
          var a = $(this);
          var sites = a.children('div').find('.profile-name').text();
          $(a.children('div').find('p.profile-name').find('a').each(function(i, elem) {
            if (rank <= 10) {
                rank = 0;
              mesg += '#' + rank + ' ' + $(elem).text() + '\n';
              rank++
            }
          }))
            console.log(mesg);
          bot.createMessage(channel, {
            embed: {
              author: {
                name: "Sanud"
              },
              color: 0x00FF88,
              fields: [{
                name: "Top 10",
                value: mesg
              }],
              footer: { // Footer text
                text: 'XVideos!'
              }
            }
          });
          mesg = "";
          rank = 0;
          //console.log(sites);
        })
      }
    })
};
