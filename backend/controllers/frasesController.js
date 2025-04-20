const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conexión a la base de datos
const dbPath = path.resolve(__dirname, '../database/frases.db');
const db = new sqlite3.Database(dbPath);

// Función para obtener una frase aleatoria
const obtenerFraseAleatoria = (tipo) => {
  return new Promise((resolve, reject) => {
    db.all('SELECT texto FROM frases WHERE tipo = ?', [tipo], (err, filas) => {
      if (err) {
        reject(err);
      } else if (filas.length === 0) {
        reject(new Error('No se encontraron frases.'));
      } else {
        const randomIndex = Math.floor(Math.random() * filas.length);
        resolve(filas[randomIndex].texto);
      }
    });
  });
};

module.exports = { obtenerFraseAleatoria };
