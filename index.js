require('dotenv').config();
const socket = require('socket.io-client').connect(process.env.SERVER_URL);
const five = require("johnny-five")

let board = new five.Board();
board.on("ready", () => {
  
  let button = new five.Button(process.env.BUTTON_PIN);

  board.repl.inject({
    button: button
  });

  button.on("down", () => {
    socket.emit('prout')
  })

  socket.on("megaprout", () => {
    lolilol();
  })

});

const lolilol = () => {
  var piezo = new five.Piezo(process.env.BUZZER_PIN);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["E4", 1 / 4],
      ["E4", 1 / 4],
      ["E4", 1 / 4],
      ["E4", 1 / 4],
      [null, 1 / 4],
      ["C4", 1],
      ["D4", 1],
      ["E4", 1 / 2],
      [null, 1 / 8],
      ["D4", 1 / 4],
      ["E4", 1 / 4],
      [null, 1 / 4],

    ],
    tempo: 90
  });
}