'use strict';
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola mundo!');
}).listen(8080, '127.0.0.1', () => {
  console.log('Servidor iniciado en el puerto 8080');
});
