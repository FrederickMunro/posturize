const { SerialPort } = require('serialport')
const { ByteLengthParser } = require('@serialport/parser-byte-length')
// Create a port
const port = new SerialPort({
  path: '/dev/cu.usbserial-DN01EYVM',
  baudRate: 9600,
})

port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
  
  // Open errors will be emitted as an error event
  port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

  port.on('data', function (data) {
    console.log(data)
  })