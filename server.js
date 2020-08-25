const io = require('socket.io').listen(8000);

io.on('connection', (socket) => {
	socket.on('prout', (data) => {
		socket.broadcast.emit("megaprout")
	})
});