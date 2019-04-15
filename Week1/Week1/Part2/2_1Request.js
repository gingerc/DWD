
var request = require('request');

var url = process.argv[2];

//   https://www.example.com
request(url,function (err, res, body) {

if (err) { return console.log(err); }
console.log(body);

});



