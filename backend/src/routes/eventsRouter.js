const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Obtener todos los eventos
router.get('/', eventController.getAllEvents);

// Crear un nuevo evento
router.post('/', eventController.postEvent);

// Obtener un evento por ID
router.get('/:id', eventController.getEventById);

// Actualizar un evento por ID
router.put('/:id', eventController.putEvent);

// Eliminar un evento por ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
