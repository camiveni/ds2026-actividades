const autorService = require('../services/autor.service');

async function getAll(req, res) {
  const autores = await autorService.findAll();
  res.json(autores);
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const autor = await autorService.findById(id);
  if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
  res.json(autor);
}

async function create(req, res) {
  const nuevoAutor = await autorService.create(req.body);
  res.status(201).json(nuevoAutor);
}

async function update(req, res) {
  const id = Number(req.params.id);
  const autorActualizado = await autorService.update(id, req.body);
  res.json(autorActualizado);
}

async function remove(req, res) {
  const id = Number(req.params.id);
  await autorService.remove(id);
  res.status(204).send();
}

module.exports = { getAll, getById, create, update, remove };