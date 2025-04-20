const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./backend/database/frases.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS frases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tipo TEXT NOT NULL,
      texto TEXT NOT NULL
    )
  `);

  const frases = [
    { tipo: 'estudiante', texto: 'El esfuerzo de hoy es el éxito de mañana.' },
    { tipo: 'estudiante', texto: 'Nunca dejes de aprender, porque la vida nunca deja de enseñar.' },
    { tipo: 'estudiante', texto: 'Cada error te acerca más al acierto.' },
    { tipo: 'profesor', texto: 'Educar es dejar una huella en la vida de una persona.' },
    { tipo: 'profesor', texto: 'Tu vocación como maestro transforma generaciones.' },
    { tipo: 'profesor', texto: 'Un buen profesor inspira esperanza y fomenta el aprendizaje.' }
  ];

  const stmt = db.prepare("INSERT INTO frases (tipo, texto) VALUES (?, ?)");

  frases.forEach(f => {
    stmt.run(f.tipo, f.texto);
  });

  stmt.finalize();
  console.log('Base de datos inicializada con frases 🎉');
});

db.close();
