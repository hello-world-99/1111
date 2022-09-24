//this is JS BITCHadd
const https  = require('https');
const express = require('express');
const app = express();
const path = require('path');

var num;

function currency(date,fromCurrency,toCurrency){
    var apiKey = '2fc09f43da30d6f80261';
    var rate;
    date =encodeURIComponent(date);
    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;  
    var url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&date=' + date + '&apiKey=' + apiKey;
    console.log('Request to API. Limit 50 per 3 hours');
    https.get(url, function(res){
        var body = '';
  
        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){ 
            var jsonObj = JSON.parse(body);
            var val = jsonObj[query];
            val=JSON.stringify(val);
            console.log(val);
            var a = val.indexOf(':')+1;
            var b = val.indexOf('}')-1;
            val = val.slice(a,b);  
            var total = val * 1;
            rate = Math.round(total * 100) / 100;
            console.log(fromCurrency+' '+rate);
            num = parseFloat(rate)
            //callback(fromCurrency);
            console.log(num)
        }); 
    }).on('error', function(e){
          console.log("Got an error: ", e);
          cb(e);
        }
    );

}

app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/dagree_button', function(req, res) {
    const url = req.body.url;
    var mes="MESSAGE";

    res.json(
        {
            message: mes
        }
    )
});
app.post('/lev_button', function(req, res) {
    const url = req.body.url;
    var mes="MESSAGE";

    res.json(
        {
            message: mes
        }
    )

    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ/","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
});
