
const express = require('express');
const app = express();
const http = require('http');
const socketIO = require("socket.io");

const port2 =process.env.PORT || 3000
const server = http.createServer(app);

const io = socketIO(server);
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');


//serving a server 
app.get('/', (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

server.listen(port2, () => {
    console.log('listening on:' + port2);
  });
  
const port = new SerialPort({
  path: '/dev/cu.usbserial-DN01YP3P',
  baudRate: 9600,
  databits: 8, 
  parity:'none',
  stopBits:1, 
  flowControl: false
})
const parser = new ReadlineParser()
port.pipe(parser);


io.on("connection", (socket)=> {
    console.log("new connection")
   
    socket.on("disconnect", ()=>{
        console.log("client disconnected")
    })   
    
})

  
parser.on('data', (data)=> {
    
    console.log('Received data from port: ' + data);
    io.emit('data', data);
    


      
  });
  


