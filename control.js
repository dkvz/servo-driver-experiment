const five = require('johnny-five');

class Control {

  constructor(state, pins, disable = false) {
    this.state = state;
    if (!disable) {
      // Disable the repl for this.
      this.board = new five.Board({repl: false});
      this.board.on('ready', function() {
        this.servo = new five.Servo(pins.servo);
        this.powerPin = new five.Pin(pins.motorPower);
        this.servo.min();
        // Set initial state here:
        this.state.ready = true;
      });
    } else this._disableBoard();
  }

  enabled() {
    return this.board !== null ? true : false;
  }

  _disableBoard() {
    this.board = null;
    // Still mark as ready:
    this.state.ready = true;
    this.state.disabled = true;
  }

}

module.exports = Control;