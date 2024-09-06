const express = require('express');
const app = express();
const eventosRoutes = require('./routes/eventsRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Para procesar JSON
app.use('/api/eventos', eventosRoutes); // Ruta para los eventos

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
