const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function() {
  const pin22 = new five.Pin({
    pin: 22,
    type: "digital"
  });
  pin22.high();

  const servo = new five.Servo(12);

  this.repl.inject({
    pin22,
    servo
  });
});