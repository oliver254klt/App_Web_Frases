const express = require('express');
const router = express.Router();
const { obtenerFraseAleatoria } = require('../controllers/frasesController'); // ¡RUTA CORREGIDA!

// Ruta para estudiantes
router.get('/estudiante', async (req, res) => {
  try {
    const frase = await obtenerFraseAleatoria('estudiante');
    res.json({ tipo: 'estudiante', frase });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para profesores
router.get('/profesor', async (req, res) => {
  try {
    const frase = await obtenerFraseAleatoria('profesor');
    res.json({ tipo: 'profesor', frase });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;