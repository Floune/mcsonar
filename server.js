const http = require('http');
const io = require('socket.io').listen(8000);

const host = 'localhost';
const port = 8000;

io.on('connection', (socket) => {
	console.log('dza')
	socket.on('prout', (data) => {
		console.log('michel')
	})
});

// const requestListener = (req, res) => {
// 	res.writeHeader(200);
// 	res.end('Pouets');
// }

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });