const express = require('express');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas de eventos
app.use('/api/events', eventRoutes);

// Manejo de errores genéricos
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
