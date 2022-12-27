const connect = require('connect');
const server = require('http');
const serveStatic = require('serve-static');
const io = require('socket.io', 'net')(server); //require socket.io module and pass the http object (server)
const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const GpioPwm = require('pigpio').Gpio;

var powerPin = new Gpio(26, 'out'); //use GPIO pin 26 as output
var dimPin = new GpioPwm(12, { mode: Gpio.OUTPUT });

var GPIO26Value = 1; // Turn off the LED by default
var GPIO12Value = 0;

const port = 80;

const app = connect();

// var server = app.listen(port);

server.createServer(app).listen(port);

app.createServer

app.use(serveStatic(__dirname + '/dist/pwa')).listen(() => {
  console.log('Server running on 80...');
  console.log(io);

});

io.sockets.on('connection', () => {
  console.log('A new client has connectioned. Send LED status');
});

io.sockets.on('disconnect', () => {
  console.log('A user disconnected');
});
