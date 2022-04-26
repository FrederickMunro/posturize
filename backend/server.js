var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    port = 8888;

//Server start
server.listen(port, () => console.log('on port' + port))

//user server
app.use(express.static(__dirname + '/public'));

io.on('connection', onConnection);

var connectedSocket = null;
function onConnection(socket){
    connectedSocket = socket;
}