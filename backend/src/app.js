const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de eventos
app.use('/api/events', eventRoutes);

// Servidor en ejecución
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});


