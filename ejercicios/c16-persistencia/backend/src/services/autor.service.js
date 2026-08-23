const { prisma } = require('../config/prisma');

async function findAll() {
  return prisma.autor.findMany();
}

async function findById(id) {
  return prisma.autor.findUnique({
    where: { id }
  });
}

async function create(datos) {
  return prisma.autor.create({
    data: datos
  });
}

async function update(id, datos) {
  const existe = await prisma.autor.findUnique({ where: { id } });
  if (!existe) return null;

  return prisma.autor.update({
    where: { id },
    data: datos
  });
}

async function remove(id) {
  const existe = await prisma.autor.findUnique({ where: { id } });
  if (!existe) return false;

  await prisma.autor.delete({
    where: { id }
  });
  return true;
}

module.exports = { findAll, findById, create, update, remove };