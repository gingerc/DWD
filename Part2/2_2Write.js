var fs = require('fs');
var request = require('request');
var content = "";

//the api generates a random kanye west quote
var url = "https://api.kanye.rest/"

fs.writeFileSync('aNewFile.html', content);

request(url,function (err, res, data) {

    if (err) { return console.log(err); }
    //console.log(data);
    var quote = JSON.parse(data);
    // console.log(quote.quote);
    content = "<!DOCTYPE html><html><body><p>Kanye says:</p><h1>" + quote.quote + "</h1></body></html>";
    fs.appendFileSync('aNewFile.html', content);
    
    });


