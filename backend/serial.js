

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});




  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      io.emit('chat message', "hey appended")
    });
  });
server.listen(3000, () => {
  console.log('listening on *:3000');
});






// const { SerialPort } = require('serialport')
// // Create a port
// const serialport = new SerialPort({
//   path: '/dev/cu.usbserial-DN01EYVM',
//   baudRate: 9600,
// })

// serialport.write('main screen turn on', function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message)
//     }
//     console.log('message written')
//   })
  
//   // Open errors will be emitted as an error event
//   serialport.on('error', function(err) {
//     console.log('Error: ', err.message)
//   })

//   serialport.on('data', function (data) {
//     console.log('Data:', data)
    
//   })



