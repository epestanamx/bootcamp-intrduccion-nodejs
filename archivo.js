'use strict';
const fs = require('fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if(err) {
    return console.log('El archivo no pudo ser cargado.');
  }

  console.log(data);
});
