const express = require('express');
const nunjucks = require('nunjucks');
const Control = require('./control');

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

const control = new Control(state, pins, process.env.DISABLE_BOARD ? true : false);

app.get('/', function(req, res) {
  res.render('index.njk', {boardReady: state.ready});
});

app.post('/angle', function(req, res) {
  
});

app.listen(3000, () => {
  console.log('Listening on port 3000.')
});

