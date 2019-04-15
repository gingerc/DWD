var fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, data)=> {
    fs.writeFile('hello.html', '<!DOCTYPE html><html><body><h3>'+ data + "</h3></body></html>", (err)=> {
        console.log("hello.txt is online as hello.html");
    });
});