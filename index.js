require('dotenv').config();
const socket = require('socket.io-client').connect(process.env.SERVER_URL);
const { Board, Button, Led, Piezo } = require("johnny-five");
const board = new Board();
const songs = require("./songs")

board.on("ready", () => {
  
  let button = new Button(process.env.BUTTON_PIN);
  const led = new Led(process.env.LED_1);
  const led2 = new Led(process.env.LED_2);


  board.repl.inject({
    button: button,
    led: led,
    led2: led2
  });

  button.on("down", () => {
    socket.emit('prout')
  })

  socket.on("megaprout", () => {
    led.blink()
    led2.blink()

    lolilol();

    board.wait(5000, () => {
      led.stop()
      led2.stop()
      led.off()
      led2.off()
    })
  })

});

const lolilol = () => {
  var piezo = new Piezo(process.env.BUZZER_PIN);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: songs[0],
    tempo: 90
  });
}

const shuffle = () => {
  return getRandomInt(songs.length)
}