const libroService = require('../services/libro.service');

async function getAll(req, res) {
  try {
    const { disponible } = req.query;
    const libros = await libroService.findAll(disponible);
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getById(req, res) {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.findById(id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function create(req, res) {
  try {
    const nuevoLibro = await libroService.create(req.body);
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function update(req, res) {
  try {
    const id = Number(req.params.id);
    const libroActualizado = await libroService.update(id, req.body);
    if (!libroActualizado) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libroActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function remove(req, res) {
  try {
    const id = Number(req.params.id);
    const ok = await libroService.remove(id);
    if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = { getAll, getById, create, update, remove };