const { prisma } = require('../config/prisma');

async function findAll() {
  return prisma.autor.findMany({
    include: { libros: true }
  });
}

async function findById(id) {
  return prisma.autor.findUnique({
    where: { id },
    include: { libros: true }
  });
}

async function create(datos) {
  return prisma.autor.create({
    data: datos
  });
}

async function update(id, datos) {
  return prisma.autor.update({
    where: { id },
    data: datos
  });
}

async function remove(id) {
  await prisma.autor.delete({
    where: { id }
  });
  return true;
}

module.exports = { findAll, findById, create, update, remove };