const neonImg = async(msg, args) => {
    const browser = await puppeteer.launch({headless: true})
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
