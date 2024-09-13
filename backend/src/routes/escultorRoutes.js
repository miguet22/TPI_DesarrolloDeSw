const express = require('express');
const EscultorController = require('../controllers/EscultorController');

const router = express.Router();

// Obtener todos los eventos
router.get('/', EscultorController.getAllEscultores);

// Crear un nuevo evento
router.post('/', EscultorController.createEscultor);

// Obtener un evento por ID
router.get('/:id', EscultorController.getEscultorById);

// Actualizar un evento
router.put('/:id', EscultorController.updateEscultor);

// Eliminar un evento
router.delete('/:id', EscultorController.deleteEscultor);

module.exports = router;
