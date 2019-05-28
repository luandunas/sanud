const neonImg = async(msg, args) => {
    const browser = await puppeteer.launch({'args':['--no-sandbox','--disable-setuid-sandbox']})
	const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
    await page.goto('https://photofunia.com/categories/all_effects/neon-sign', {
      waitUntil: 'networkidle2',
      timeout: 0
    });
    bot.sendChannelTyping(msg.channel.id);
    await page.waitForSelector('input[type="text"]');
    await page.click('div.text-container');
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(args.join(" "));
    await page.click('button.button.js-send-button');
    await page.waitForSelector('#result-image');
    item = await page.evaluate('document.getElementById("result-image").src');
    await bot.createMessage(msg.channel.id, {
            "embed": {
                "image": {
                "url": item,
                }
            }
        });
    browser.close(); 
}

const upImg = async(msg, args) => {
    if(msg.attachments != ""){
        const file = fs.createWriteStream("functions/img/file.jpg");
        const requ = https.get(msg.attachments[0].url, function(response) {
      response.pipe(file);
    });
}

if(args[0].indexOf('https://') != -1){
        const file = await fs.createWriteStream("functions/img/file.jpg");
        const requ = await https.get(args[0], function(response) {
      response.pipe(file);
      console.log('1');
    });
}
    const browser = await puppeteer.launch({'args':['--no-sandbox','--disable-setuid-sandbox',]});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
    await page.goto('https://photofunia.com/categories/faces/bunny_ears', {
      waitUntil: 'networkidle2',
      timeout: 0
    });
    page.click('button.button.gray.js-choose-photo')
    await page.waitForSelector('input[type="file"]');
    const elementHandle = await page.$('input[type="file"]');
    await elementHandle.uploadFile('functions/img/file.jpg');
    await page.waitForSelector('.jcrop-tracker');
    await page.click('button.button.js-crop');
    await page.click('button.js-send-button');
    try {
        await page.waitForSelector('.image.p402_hide');
        item = await page.evaluate(`document.getElementsByClassName('links')[0].children[0].children[0].getAttribute('href').replace('?download', '')`) 
        await bot.createMessage(msg.channel.id, {
            "embed": {
                "image": {
                    "url": item,
                }
            }
        });
        browser.close();
     } catch(error) {
        browser.close();
        bot.createMessage(msg.channel.id, "Não foi possivel identificar alguma face");
     }
};
