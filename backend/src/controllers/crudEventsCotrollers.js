const EventModel = require('../models/EventModel');

const postEvent = async (req, res) => {
    const { nombre, fecha, lugar, descripcion, tematica } = req.body;

    try {
        const eventId = await EventModel.createEvent({ nombre, fecha, lugar, descripcion, tematica });
        res.status(201).json({ id: eventId, nombre, fecha, lugar, descripcion, tematica });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el evento' });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await EventModel.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
};

const getEventById = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await EventModel.getEventById(id);
        if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el evento' });
    }
};

const putEvent = async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha, lugar, descripcion, tematica } = req.body;

    try {
        const updated = await EventModel.updateEvent(id, { nombre, fecha, lugar, descripcion, tematica });
        if (!updated) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.status(200).json({ id, nombre, fecha, lugar, descripcion, tematica });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el evento' });
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await EventModel.deleteEvent(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.status(200).json({ message: 'Evento eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el evento' });
    }
};

module.exports = {
    postEvent,
    getAllEvents,
    getEventById,
    putEvent,
    deleteEvent
};
