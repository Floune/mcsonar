const socket = require('socket.io-client').connect('http://localhost:8000');


var five = require("johnny-five"),
board = new five.Board();

board.on("ready", function() {
  
  button = new five.Button(4);

  board.repl.inject({
    button: button
  });

  button.on("down", () => {
    socket.emit('prout')
    //lolilol()
  })

  socket.on("megaprout", () => {
    lolilol();
  })

});

function lolilol() {
  var piezo = new five.Piezo(12);

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