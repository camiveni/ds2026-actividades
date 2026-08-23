const { prisma } = require('../config/prisma');

async function findAll(disponible) {
  if (disponible === undefined) {
    return prisma.libro.findMany();
  }
  const esDisponible = disponible === 'true';
  return prisma.libro.findMany({
    where: { disponible: esDisponible }
  });
}

async function findById(id) {
  return prisma.libro.findUnique({
    where: { id }
  });
}

async function create(datos) {
  return prisma.libro.create({
    data: datos
  });
}

async function update(id, datos) {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return null;

  return prisma.libro.update({
    where: { id },
    data: datos
  });
}

async function remove(id) {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;

  await prisma.libro.delete({
    where: { id }
  });
  return true;
}

module.exports = { findAll, findById, create, update, remove };