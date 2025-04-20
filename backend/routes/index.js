const express = require('express');
const cors = require('cors');
const app = express();
const frasesRoutes = require('./frases');
const PORT = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5500'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/frase', frasesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});