const { prisma } = require('../config/prisma');

async function findAll(disponible) {
  const where = disponible !== undefined ? { disponible: disponible === 'true' } : {};
  return prisma.libro.findMany({
    where,
    include: {
      autor: true,
      categorias: true
    }
  });
}

async function findById(id) {
  return prisma.libro.findUnique({
    where: { id },
    include: {
      autor: true,
      categorias: true
    }
  });
}

async function create(datos) {
  const { categorias, ...resto } = datos;
  return prisma.libro.create({
    data: {
      ...resto,
      categorias: categorias ? { connect: categorias.map(id => ({ id })) } : undefined
    },
    include: { autor: true }
  });
}

async function update(id, datos) {
  const { categorias, ...resto } = datos;
  return prisma.libro.update({
    where: { id },
    data: {
      ...resto,
      categorias: categorias ? { set: categorias.map(id => ({ id })) } : undefined
    },
    include: { autor: true }
  });
}

async function remove(id) {
  await prisma.libro.delete({
    where: { id }
  });
  return true;
}

module.exports = { findAll, findById, create, update, remove };