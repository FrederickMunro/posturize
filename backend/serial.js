

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


//serving a server 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
  });
  


  io.on('connection', (socket) => {

   

    socket.on('chat message', (msg) => {
        
      io.emit('chat message', msg);
      console.log(msg)
      
    });



  });






  const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const parser = new ReadlineParser()
const port = new SerialPort({
  path: '/dev/cu.usbserial-DN01EYVM',
  baudRate: 9600,
  databits: 8, 
  parity:'none',
  stopBits:1, 
  flowControl: false
})

port.pipe(parser);
parser.on('data', function(data) {
    
    console.log('Received data from port: ' + data);
    io.emit('data', data);
      
  });
  


