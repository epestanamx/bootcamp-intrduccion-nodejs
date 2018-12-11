'use strict';
const https = require('https');

function obtienePeliculas (callback) {
  https.get('https://swapi.co/api/films/', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      data = JSON.parse(data);
      console.log(data.count);
      if(callback) {
        callback(data);
      }
    });
  }).on('error', (error) => {
    console.log(error);
  });
}

function cuentaPeliculas(data) {
  if(!data) {
    return console.log('No hay peliculas');
  }

  console.log('Cantidad de peliculas:', data.count);
}

obtienePeliculas(cuentaPeliculas);
