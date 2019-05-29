/* variaveis */
var eris = require('eris'), myJsonAPI = require('myjson-api'), tmi = require('tmi.js'), puppeteer = require('puppeteer'), https = require('https'), fs = require('fs'), options = JSON.parse(fs.readFileSync('base/bot.json')), request = require('request'), cheerio = require('cheerio'), bot = new eris(process.env.BOT_TOKEN), database, result, ref, mesg = "", myJsonAPI = require('myjson-api'), json, mandarUm = false, rank = 1, command, args, power = false, cid, gamessteam = "", item, makako = false, topg = 0;

/*outros js*/
eval(fs.readFileSync('functions/commands/commands.js') + fs.readFileSync('functions/voiceEvents/voiceJoin.js') + fs.readFileSync('functions/voiceEvents/voiceStateUpdate.js') + fs.readFileSync('functions/scrap/steamTopGames.js') + fs.readFileSync('functions/scrap/topPorn.js') + fs.readFileSync('functions/puppeteer/neonImg.js') + fs.readFileSync('functions/dunas/bot.js') + fs.readFileSync('functions/twitch/twitch.js') + '');

/*bot ready*/
bot.on("ready", () => {
  console.log("Ready!");
});
bot.connect();
