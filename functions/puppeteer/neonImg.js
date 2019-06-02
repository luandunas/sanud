var imgEffect = false;
const neonImg = async (msg, args) => {
  imgEffect = true;
  const browser = await puppeteer.launch({'args': ['--no-sandbox', '--disable-setuid-sandbox']})
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
  item = await page.evaluate(`document.getElementsByClassName('links')[0].children[0].children[0].getAttribute('href').replace('?download', '')`)
  file = await fs.createWriteStream("functions/img/file.jpg");
  requ = await https.get(item, function(response) {
    response.pipe(file).on('finish', function() {
      bot.createMessage(msg.channel.id, "", {
        file: fs.readFileSync("./functions/img/file.jpg"),
        name: "functions/img/file.jpg"
      })
    });
  });
  browser.close();
  imgEffect = false;
  item = undefined;
}
const bunny = async (msg, args) => {
  imgEffect = true;
  if (msg.attachments != "") {
    const file = fs.createWriteStream("functions/img/file.jpg");
    const requ = https.get(msg.attachments[0].url, function(response) {
      response.pipe(file);
    });
  }
  if (args[0] != null && args[0].indexOf('https://') != -1) {
    const file = await fs.createWriteStream("functions/img/file.jpg");
    const requ = await https.get(args[0], function(response) {
      response.pipe(file);
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.attachments != "" && item == undefined && m.content != "") {
          item = m.attachments[0].url;
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.content.split(" ")[0].indexOf('https://') != -1 && item == undefined) {
          item = m.content.split(" ")[0];
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  const browser = await puppeteer.launch({'args': ['--no-sandbox', '--disable-setuid-sandbox', ]});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
  await page.goto('https://photofunia.com/categories/faces/bunny_ears', {
    waitUntil: 'networkidle2',
    timeout: 0
  });
  bot.sendChannelTyping(msg.channel.id);
  await page.click('button.button.gray.js-choose-photo')
  await page.waitForSelector('input[type="file"]');
  const elementHandle = await page.$('input[type="file"]');
  await elementHandle.uploadFile('functions/img/file.jpg');
  await page.waitForSelector('.jcrop-tracker');
  await page.click('button.button.js-crop');
  await page.click('button.js-send-button');
  try {
    await page.waitForSelector('.image.p402_hide');
    item = await page.evaluate(`document.getElementsByClassName('links')[0].children[0].children[0].getAttribute('href').replace('?download', '')`)
    file = await fs.createWriteStream("functions/img/file.jpg");
    requ = await https.get(item, function(response) {
      response.pipe(file).on('finish', function() {
        bot.createMessage(msg.channel.id, "", {
          file: fs.readFileSync("./functions/img/file.jpg"),
          name: "functions/img/file.jpg"
        })
      });
    });
    browser.close();
    item = undefined;
    imgEffect = false;
  } catch (error) {
    browser.close();
    bot.createMessage(msg.channel.id, "Não foi possivel identificar alguma face");
    imgEffect = false;
    item = undefined;
  }
};
const fatImg = async (msg, args) => {
  imgEffect = true;
  if (msg.attachments != "") {
    const file = fs.createWriteStream("functions/img/file.jpg");
    const requ = https.get(msg.attachments[0].url, function(response) {
      response.pipe(file);
    });
  }
  if (args[0] != null && args[0].indexOf('https://') != -1) {
    const file = await fs.createWriteStream("functions/img/file.jpg");
    const requ = await https.get(args[0], function(response) {
      response.pipe(file);
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.attachments != "" && item == undefined && m.content != "") {
          item = m.attachments[0].url;
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.content.split(" ")[0].indexOf('https://') != -1 && item == undefined) {
          item = m.content.split(" ")[0];
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  const browser = await puppeteer.launch({'args': ['--no-sandbox', '--disable-setuid-sandbox', ]});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
  await page.goto('https://photofunia.com/categories/misc/fat_maker', {
    waitUntil: 'networkidle2',
    timeout: 0
  });
  bot.sendChannelTyping(msg.channel.id);
  await page.click('button.button.gray.js-choose-photo')
  await page.waitForSelector('input[type="file"]');
  const elementHandle = await page.$('input[type="file"]');
  await elementHandle.uploadFile('functions/img/file.jpg');
  await page.waitForSelector('.jcrop-tracker');
  await page.click('button.button.js-crop');
  await page.click('button.js-send-button');
  try {
    await page.waitForSelector('.image.p402_hide');
    item = await page.evaluate(`document.getElementsByClassName('links')[0].children[0].children[0].getAttribute('href').replace('?download', '')`)
    file = await fs.createWriteStream("functions/img/file.jpg");
    requ = await https.get(item, function(response) {
      response.pipe(file).on('finish', function() {
        bot.createMessage(msg.channel.id, "", {
          file: fs.readFileSync("./functions/img/file.jpg"),
          name: "functions/img/file.jpg"
        })
      });
    });
    browser.close();
    item = undefined;
    imgEffect = false;
  } catch (error) {
    browser.close();
    bot.createMessage(msg.channel.id, "Não foi possivel identificar alguma face");
    imgEffect = false;
    item = undefined;
  }
};
const bopbop = async (msg, args) => {
  imgEffect = true;
  if (msg.attachments != "") {
    const file = fs.createWriteStream("functions/img/file.jpg");
    const requ = https.get(msg.attachments[0].url, function(response) {
      response.pipe(file);
    });
  }
  if (args[0] != null && args[0].indexOf('https://') != -1) {
    const file = await fs.createWriteStream("functions/img/file.jpg");
    const requ = await https.get(args[0], function(response) {
      response.pipe(file);
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.attachments != "" && item == undefined && m.content != "") {
          item = m.attachments[0].url;
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  if (args[0] == null) {
    msg.channel.getMessages(15).then(mesa => {
      mesa.map(async function(m) {
        if (m.content.split(" ")[0].indexOf('https://') != -1 && item == undefined) {
          item = m.content.split(" ")[0];
          const file = await fs.createWriteStream("functions/img/file.jpg");
          const requ = await https.get(item, function(response) {
            response.pipe(file);
          });
        }
      })
    });
  }
  const browser = await puppeteer.launch({'args': ['--no-sandbox', '--disable-setuid-sandbox', ]});
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36');
  await page.goto('https://photofunia.com/effects/clown', {
    waitUntil: 'networkidle2',
    timeout: 0
  });
  bot.sendChannelTyping(msg.channel.id);
  await page.click('.replacement');
  await page.click('button.button.gray.js-choose-photo')
  await page.waitForSelector('input[type="file"]');
  const elementHandle = await page.$('input[type="file"]');
  await elementHandle.uploadFile('functions/img/file.jpg');
  await page.waitForSelector('.jcrop-tracker');
  await page.click('button.button.js-crop');
  await page.click('button.js-send-button');
  try {
    await page.waitForSelector('.image.p402_hide');
    item = await page.evaluate(`document.getElementsByClassName('links')[0].children[0].children[0].getAttribute('href').replace('?download', '')`)
    file = await fs.createWriteStream("functions/img/file.jpg");
    requ = await https.get(item, function(response) {
      response.pipe(file).on('finish', function() {
        bot.createMessage(msg.channel.id, "", {
          file: fs.readFileSync("./functions/img/file.jpg"),
          name: "functions/img/file.jpg"
        })
      });
    });
    browser.close();
    item = undefined;
    imgEffect = false;
  } catch (error) {
    browser.close();
    bot.createMessage(msg.channel.id, "Não foi possivel identificar alguma face");
    imgEffect = false;
    item = undefined;
  }
};
