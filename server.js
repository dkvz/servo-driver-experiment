const express = require('express');
const nunjucks = require('nunjucks');
const five = require('johnny-five');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.set('view engine', 'html');

// Configure the assets folder:
app.use(express.static('assets'));

const state = {
  ready: false
};

// Disable the repl for this.
const board = new five.Board({repl: false});
board.on('ready', function() {
  // Set initial state here:
  state.ready = true;
});

app.get('/', function(req, res) {
  res.render('index.njk', {boardReady: state.ready});
});

app.listen(3000, () => {
  console.log('Listening on port 3000.')
})

