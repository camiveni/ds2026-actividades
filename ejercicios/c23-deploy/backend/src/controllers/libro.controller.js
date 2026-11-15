const libroService = require('../services/libro.service');

async function getAll(req, res) {
  const { disponible } = req.query;
  const libros = await libroService.findAll(disponible);
  res.json(libros);
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const libro = await libroService.findById(id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
}

async function create(req, res) {
  const nuevoLibro = await libroService.create(req.body);
  res.status(201).json(nuevoLibro);
}

async function update(req, res) {
  const id = Number(req.params.id);
  const libroActualizado = await libroService.update(id, req.body);
  res.json(libroActualizado);
}

async function remove(req, res) {
  const id = Number(req.params.id);
  await libroService.remove(id);
  res.status(204).send();
}

module.exports = { getAll, getById, create, update, remove };