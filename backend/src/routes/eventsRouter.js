const { Router } = require('express');
const events = require('../controllers/crudEventsCotrollers') // Traigo todas las funciones del archivo mencionado.
const router = Router() 


// Obtener todos los eventos
router.get('/', events.getEvents); 

// Crear un nuevo evento
router.post('/', events.postEvents);

// Obtener un evento por ID
router.get('/:id', events.getEventsById);

// Actualizar un evento
router.put('/:id', events.putEvents);

// Eliminar un evento
router.delete('/:id', events.deleteEvents);

module.exports = router;
