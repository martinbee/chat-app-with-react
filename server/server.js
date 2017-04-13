var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(8080, () => console.log('listening on *:8080'));

// To see go to http://node-vim.martbee88.c9users.io:8080/
