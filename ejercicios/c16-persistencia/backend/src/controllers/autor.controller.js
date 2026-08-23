const autorService = require('../services/autor.service');

async function getAll(req, res) {
  try {
    const autores = await autorService.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function getById(req, res) {
  try {
    const id = Number(req.params.id);
    const autor = await autorService.findById(id);
    if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
    res.json(autor);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function create(req, res) {
  try {
    const nuevoAutor = await autorService.create(req.body);
    res.status(201).json(nuevoAutor);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function update(req, res) {
  try {
    const id = Number(req.params.id);
    const autorActualizado = await autorService.update(id, req.body);
    if (!autorActualizado) return res.status(404).json({ error: "Autor no encontrado" });
    res.json(autorActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function remove(req, res) {
  try {
    const id = Number(req.params.id);
    const ok = await autorService.remove(id);
    if (!ok) return res.status(404).json({ error: "Autor no encontrado" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = { getAll, getById, create, update, remove };