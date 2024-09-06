const pool = require('../config/db');

const postEvents = async (req, res) => {
    const { nombre, fecha, lugar, descripcion, tematica } = req.body;
  
    try {
      const [result] = await pool.query('INSERT INTO eventos (nombre, fecha, lugar, descripcion, tematica) VALUES (?, ?, ?, ?, ?)', [nombre, fecha, lugar, descripcion, tematica]);
      res.json({ id: result.insertId, nombre, fecha, lugar, descripcion, tematica });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el evento' });
    }
  }

// Obtener todos los eventos
const getEvents = async (_req, res) => {
        try {
          const [rows] = await pool.query('SELECT * FROM eventos');
          res.json(rows);
          
        } catch (error) {
          res.status(500).json({ error: 'Error al obtener los eventos' });
        }
        
      }

//_req --> el guión bajo al principio sirve, en ese caso el req aveces no se utiliza, para que el interprete lo entienda
//Obtener eventos por id

const getEventsById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const [rows] = await pool.query('SELECT * FROM eventos WHERE id = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Evento no encontrado' });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el evento' });
    }}

//Borrar eventos
const deleteEvents = async (req, res) => {
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
  }

//Modificar eventos
const putEvents = async (req, res) => {
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
  }

module.exports = {
    postEvents,
    getEvents,
    getEventsById,
    deleteEvents,
    putEvents,
}