//this is JS BITCHadd
const https  = require('https');
const express = require('express');
const app = express();
const path = require('path');
var num;

app.use(express.json());

app.listen('3000', () => console.log(`WEB_APP working on port 3000!`));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index2_.html'));
});

app.post('/dagree_button', function(req, res) {

    var rate;
    var url2='https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&date=2022-09-16&apiKey=2fc09f43da30d6f80261'
    console.log('Request to API. Limit 50 per 3 hours');
    https.get(url2, function(res){
        var body = '';
  
        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){ 
            var val=JSON.stringify(JSON.parse(body)['USD_RUB']);
            val = (val.slice(val.indexOf(':')+1,val.indexOf('}')-1))*1;  
            rate = Math.round(val * 100) / 100;
            num = 'USD'+' '+rate;
            console.log(num);
        }); 
    })
    .on('error', function(e){
          console.log("Got an error: ", e);
          cb(e);
        }
    );

    setTimeout(function(){
        res.json(
            {
                message: num
            }
        )
        },2000);
    
    
});

app.post('/lev_button', function(req, res) {
    //window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ/', '_blank');
    res.json(
        {
            message:
        }
    )

    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ/","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
});
