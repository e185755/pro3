var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/' , function(req, res){
    res.sendFile(__dirname+'/views/chat.html');
});

io.on('connection',function(socket){
    socket.on('info',function(info){
        console.log('info: ' + info);
        io.emit('info', info);
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});