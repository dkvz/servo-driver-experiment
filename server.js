const express = require('express');
const nunjucks = require('nunjucks');
const five = require('johnny-five');

const pins = {
  servo: 12,
  motorPower: 24
};

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');

// Configure the assets folder:
app.use(express.static('assets'));

const state = {
  ready: false,
  powerPin: undefined,
  servo: undefined
};

// Disable the repl for this.
const board = new five.Board({repl: false});
board.on('ready', function() {
  state.servo = new five.Servo(pin.servo);
  state.powerPin = new five.Pin(pin.motorPower);
  state.servo.min();
  // Set initial state here:
  state.ready = true;
});

app.get('/', function(req, res) {
  res.render('index.njk', {boardReady: state.ready});
});

app.post('/angle', function(req, res) {
  
});

app.listen(3000, () => {
  console.log('Listening on port 3000.')
});

