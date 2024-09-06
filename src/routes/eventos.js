const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener todos los eventos
router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM eventos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
}); // _req --> el guión bajo al principio sirve, en ese caso el req aveces no se utiliza, para que el interprete lo entienda

// Crear un nuevo evento
router.post('/', async (req, res) => {
  const { nombre, fecha, lugar, descripcion, tematica } = req.body;

  try {
    const [result] = await pool.query('INSERT INTO eventos (nombre, fecha, lugar, descripcion, tematica) VALUES (?, ?, ?, ?, ?)', [nombre, fecha, lugar, descripcion, tematica]);
    res.json({ id: result.insertId, nombre, fecha, lugar, descripcion, tematica });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento' });
  }
});

// Obtener un evento por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM eventos WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
});

// Actualizar un evento
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, lugar, descripcion, tematica } = req.body;

  try {
    const [result] = await pool.query('UPDATE eventos SET nombre = ?, fecha = ?, lugar = ?, descripcion = ?, tematica = ? WHERE id = ?', [nombre, fecha, lugar, descripcion, tematica, id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    res.json({ id, nombre, fecha, lugar, descripcion, tematica });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
});

// Eliminar un evento
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM eventos WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    res.json({ message: 'Evento eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
});

module.exports = router;
