console.log('ok gaulestore');
function oldreq(){
	request('https://api.streamelements.com/kappa/v2/store/5cc799026e852d26fcf16717/items', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			data = JSON.parse(body);
			olddata = JSON.parse(body);
			doStuff();
		}
	});
}

function doStuff() {
    if (JSON.stringify(data) === JSON.stringify(olddata)) {
        request('https://api.streamelements.com/kappa/v2/store/5cc799026e852d26fcf16717/items', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                data = JSON.parse(body);
                setTimeout(doStuff, 50);
            }
        });
        setTimeout(doStuff, 50);
        //wait 50 millisecnds then recheck
        return;
    }
    for (x in data) {
        if (olddata[x].quantity.current != data[x].quantity.current) {
        	console.log(olddata[x].quantity.current + ' ' + data[x].quantity.current);
        	bot.createMessage('447195087768911883', `**Objeto alterado na loja do gaules!**\nItem alterado: ${data[x].bot.identifier}\nQuantidade: ${data[x].quantity.current}\nHabilitado: ${data[x].bot.enabled}\nPreview: ${data[x].preview}`);
        	oldreq();
        }
    }
}
oldreq();
