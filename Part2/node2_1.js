
var request = require('request');


request("https://example.com", { json: true }, (err, res, body) => {

if (err) { return console.log(err); }
console.log(body);

});



