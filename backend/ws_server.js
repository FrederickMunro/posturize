
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);


io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
console.log('new client connected');
    
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("fromarduino", response);
  };




server.listen(port, () => console.log(`Listening on port ${port}`));

const serialport = new SerialPort({
    path: '/dev/cu.usbserial-DN01YP3P',
    baudRate: 9600,
    databits: 8, 
    parity:'none',
    stopBits:1, 
    flowControl: false
  })
  const parser = new ReadlineParser()
  serialport.pipe(parser);


 


//   serialport.on('data', (data)=> {   
//     console.log('Received data from port: ' + data);
    
//   });
