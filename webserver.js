var http = require('http').createServer(handler);
var fs = require('fs');
var url = require('url');
var path = require('path');
const io = require('socket.io', 'net')(http);
const schedule = require('node-schedule');
const WebPort = 80;

const Gpio = require('onoff').Gpio;
const GpioPwm = require('pigpio').Gpio;
var powerPin = new Gpio(26, 'out');
var dimPin = new GpioPwm(12, { mode: Gpio.OUTPUT });

var onOffValue = 0;
var dimValue = 0;

var timeOn = '12:01';
var timeOff = '12:02';

http.listen(WebPort, function () {
  console.log('Online');
  console.log(onOffValue);
  powerPin.writeSync(onOffValue);
  dimPin.pwmWrite(dimValue);
});

function handler(req, res) {
  var q = url.parse(req.url, true);
  var filename = '.' + q.pathname;
  var extname = path.extname(filename);
  if (
    filename == './' ||
    filename == './Home' ||
    filename == './LightSchedule' ||
    filename == './Environment' ||
    filename == './Documentation'
  ) {
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
  // filename = './index.html';
  fs.readFile(__dirname + '/dist/pwa/' + filename, function (err, content) {
    if (err) {
      //console.log('File not found. Filename=' + filename);
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

io.sockets.on('connection', (socket) => {
  console.log('A new client has connectioned. Send LED status');
  io.emit('Boot-onOff', onOffValue);
  io.emit('Boot-dim', dimValue);
  io.emit('Boot-timeOn', timeOn);
  io.emit('Boot-timeOff', timeOff);

  socket.on('onOff', (data) => {
    data == true ? (onOffValue = 1) : (onOffValue = 0);
    console.log('GPIO26 : ' + onOffValue);
    powerPin.writeSync(onOffValue);
    io.emit('onOff', onOffValue);
  });

  socket.on('dim', (data) => {
    dimValue = data;
    dimPin.pwmWrite(dimValue);
    io.emit('dim', dimValue);
  });

  socket.on('timeOn', (data) => {
    timeOn = data;
    console.log('time on : ' + timeOn);
    io.emit('timeOn', timeOn);

    jobOn = schedule.scheduleJob(
      '0 ' + timeOn.slice(3, 5) + ' ' + timeOn.slice(0, 2) + ' * * *',
      () => {
        console.log('TimeSchedule on');
        onOffValue = 1;
        powerPin.writeSync(onOffValue);
        io.emit('onOff', onOffValue);
      }
    );
  });

  socket.on('timeOff', (data) => {
    timeOff = data;
    console.log('time off : ' + timeOff);
    io.emit('timeOff', timeOff);

    jobOff = schedule.scheduleJob(
      '0 ' + timeOff.slice(3, 5) + ' ' + timeOff.slice(0, 2) + ' * * *',
      () => {
        console.log('TimeSchedule off');
        onOffValue = 0;
        powerPin.writeSync(onOffValue);
        io.emit('onOff', onOffValue);
      }
    );
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
