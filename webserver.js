var http = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');
var path = require('path');
const io = require('socket.io', 'net')(http);

// const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// const GpioPwm = require('pigpio').Gpio;

// var powerPin = new Gpio(26, 'out'); //use GPIO pin 26 as output
// var dimPin = new GpioPwm(12, { mode: Gpio.OUTPUT });

// var GPIO26Value = 1; // Turn off the LED by default
// var GPIO12Value = 0;

const WebPort = 80;

http.listen(WebPort, function () {
  console.log('Online');
});

function handler(req, res) {
  var q = url.parse(req.url, true);
  var filename = '.' + q.pathname;
  console.log('filename=' + filename);
  var extname = path.extname(filename);
  if (filename == './') {
    console.log('retrieving default index.html file');
    filename = './index.html';
  }

  var contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.ico':
      contentType = 'image/png';
      break;
  }

  fs.readFile(__dirname + '/dist/pwa/' + filename, function (err, content) {
    if (err) {
      console.log('File not found. Filename=' + filename);
      fs.readFile(__dirname + '/public/404.html', function (err, content) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(content, 'utf8');
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      return res.end(content, 'utf8');
    }
  });
}

io.sockets.on('connection', () => {
  console.log('A new client has connectioned. Send LED status');
});

io.sockets.on('disconnect', () => {
  console.log('A user disconnected');
});

io.sockets.on('test', () => {
  console.log('A user Tested');
});
