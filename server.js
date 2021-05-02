var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/myDataBase', function(req, res) {

    var name = req.body.nombre;
    res.send(name);

});



app.listen(8080, function() {

    console.log('esto no va a funcionar');


});








/* var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function(req, res) {
    res.write('Hello and now part 3'); //write a response to the client
    res.write('seguimos');
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 */