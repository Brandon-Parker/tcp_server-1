const fs = require('fs');
const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  const text = fs.createWriteStream(__dirname + '/logs/log_' + Date.now() + '.txt');
  socket.pipe(text);
  socket.write("HTTP/1.1 200 OK");
  socket.on('timeout', () => {
    socket.end();
  });
  socket.setTimeout(100);
  socket.pipe(socket);
});

server.listen(3000, () => {
  process.stdout.write('Server created on route 3000\n')
});

exports.server = server;
