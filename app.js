


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(client){    
    
    client.on('join', function(name){        
        client.name = name;
        client.emit("message", name + " has joined the chat.");
         client.broadcast.emit("message", name + " has joined the chat.");
    });

    client.on('messages', function(data){
            client.broadcast.emit("messages", {name :client.name, message: data});            
            client.emit('mymessages', {name :client.name, message: data});
    });
    
});

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
    
});


server.listen(8080);

// var server = http.createServer(app);
// server.on('request', function(request, response){
//     response.writeHead(200);
//     response.write("starting to write to response");
//     setTimeout(function(){
//         response.write("still writing to file");
//         setTimeout(function(){
//             response.end("This is just a test");
//         }, 2000);
//     }, 5000);

    
//     console.log("new request came in : " + request);
// });
// server.listen(8080);
// console.log("server is running on 8080");

