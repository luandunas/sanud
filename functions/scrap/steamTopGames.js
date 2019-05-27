function steamTopGames(channel){
    request('https://store.steampowered.com/stats/?l=portuguese', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('div#detailStats a.gameLink').each(function(a, b){
      if (topg != 10){
      topg++;
      gamessteam += `${topg}: ${b.children[0].data}\n`;
    }
    })
    bot.createMessage(channel, gamessteam)
    /*Array.from(games).forEach(function (a){
      console.log(a)
    })*/
  }
});
};
