const express = require('express');
require('dotenv').config;
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const escultorRoutes = require('./routes/escultorRoutes');
const esculturaRoutes = require('./routes/esculturaRoutes');
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas de eventos
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/escultura', esculturaRoutes);
app.use('/api/escultor', escultorRoutes);

// Manejo de errores genéricos
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
