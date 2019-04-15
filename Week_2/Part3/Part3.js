var express=require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

var url = "https://insult.mattbas.org/api/en/insult.json?template=is+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E";
var insult = " ";
var color = ["#c62121", "#42adf4", "#49873c", "#ff00d8", "#A64468", "#173BA6", "#F24535", "#38F205", "#FF775F", "#8C1B39"];

//use .static
app.use('/public', express.static('public'));

 
app.set('view engine', 'html');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//show the index.html file
//when node runs go to http://localhost:8000/index.html
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
request(url, function(err,res, data){
    var result = JSON.parse(data);
    insult = " " + result.insult;
    console.log(result.insult);
});

app.post('/process_post', urlencodedParser, function(req, res){
    //send json
    var response = {"band name": req.body.userinput};
    console.log(response);
    var index = Math.floor(Math.random() * 10); //random 0-9 integar  
    
    res.end("<h1 style=\"color:" + color[index] + "; font-family: sans-serif; font-size: 12em; vertical-align:center;\">" + req.body.userinput+ insult +"</h1>");
    
});


app.listen(8000, function () {
    console.log('app started on port 8000')
  })