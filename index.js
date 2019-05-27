/* variaveis */
var eris = require('eris'), puppeteer = require('puppeteer'), fs = require('fs'), options = JSON.parse(fs.readFileSync('base/bot.json')), request = require('request'), cheerio = require('cheerio'), bot = new eris(process.env.BOT_TOKEN), database, result, ref, mesg = "", rank = 1, command, args, power = false, cid, gamessteam = "", item,topg = 0;

/*outros js*/
eval(fs.readFileSync('functions/commands/commands.js') + fs.readFileSync('functions/voiceEvents/voiceJoin.js') + fs.readFileSync('functions/scrap/steamTopGames.js') + fs.readFileSync('functions/scrap/topPorn.js') + fs.readFileSync('functions/puppeteer/neonImg.js') + '');

/*bot ready*/
bot.on("ready", () => {
  console.log("Ready!");
});
bot.connect();
