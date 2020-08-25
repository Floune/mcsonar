require('dotenv').config()
const io = require('socket.io').listen(process.env.SERVER_URL);

io.on('connection', (socket) => {
	socket.on('prout', (data) => {
		socket.broadcast.emit("megaprout")
	})
});