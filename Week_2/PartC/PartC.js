var express=require('express');
var app = express();
var request = require('request');

var content = "";

app.set('view engine', 'html');

//show the index.html file
//when node runs go to http://localhost:8000/index.html
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })



 app.get('/process_get', function(req, res){
    //send json
    var url = req.query.userinput;
    // console.log(url);  
    request(url,function (err, data) {

        if (err) { return console.log(err); }
        content = data;
        res.send(data.body);
        });
        
});


app.listen(8000, function () {
    console.log('app started on port 8000')
  });