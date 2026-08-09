const libroService = require('../services/libro.service');

function getAll(req, res) {
  const { disponible } = req.query;
  const libros = libroService.findAll(disponible);
  res.json(libros);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const libro = libroService.findById(id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
}

function create(req, res) {
  const nuevoLibro = libroService.create(req.body);
  res.status(201).json(nuevoLibro);
}

function update(req, res) {
  const id = Number(req.params.id);
  const libroActualizado = libroService.update(id, req.body);
  if (!libroActualizado) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libroActualizado);
}

function remove(req, res) {
  const id = Number(req.params.id);
  const ok = libroService.remove(id);
  if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
  res.status(204).send();
}

module.exports = { getAll, getById, create, update, remove };