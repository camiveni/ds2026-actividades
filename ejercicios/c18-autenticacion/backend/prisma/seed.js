const bcrypt = require('bcrypt');
const { prisma } = require('../src/config/prisma');

const usuarios = [
  { email: "admin@libreria.test", nombre: "Admin", rol: "ADMIN", password: "Admin1234" },
  { email: "cliente@libreria.test", nombre: "Cliente", rol: "CLIENTE", password: "Cliente1234" }
];

const autores = [
  { nombre: "Nik", nacionalidad: "Argentina" },
  { nombre: "Antoine de Saint Exupéry", nacionalidad: "Francia" },
  { nombre: "Michael Jackson", nacionalidad: "Estados Unidos" },
  { nombre: "Britney Spears", nacionalidad: "Estados Unidos" },
  { nombre: "Maybell Eequay", nacionalidad: "Reino Unido" }
];

const categorias = [
  { nombre: "Infantil" },
  { nombre: "Biografía" },
  { nombre: "Autoayuda" },
  { nombre: "Novela" }
];

const libros = [
  { 
    titulo: "GATURRO MUNDIAL 26", 
    autor: "Nik", 
    imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/a95e9bcb-08f2-459c-a7c3-4bf4ee182271/mediamodifierc0ce9a85c3f.webp", 
    precio: 12000, 
    disponible: true,
    cats: ["Infantil"]
  },
  { 
    titulo: "EL PRINCIPITO", 
    autor: "Antoine de Saint Exupéry", 
    imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f7d5a0c6-58d6-41f5-807b-f7db4448290f/mediamodifier4a852b98b23.webp", 
    precio: 15000, 
    disponible: true,
    cats: ["Novela", "Infantil"]
  },
  { 
    titulo: "MOONWALK", 
    autor: "Michael Jackson", 
    imagen: "https://http2.mlstatic.com/D_NQ_NP_709922-MLA100001205053_112025-O.webp", 
    precio: 18000, 
    disponible: false,
    cats: ["Biografía"]
  },
  { 
    titulo: "LA MUJER QUE SOY", 
    autor: "Britney Spears", 
    imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/da4a2352-43bb-47cd-91ed-c7f70d77d7ac/9789506446994_9545757a-b92c-4550-a819-d4d2a2d538be.jpg", 
    precio: 20000, 
    disponible: true,
    cats: ["Biografía"]
  },
  { 
    titulo: "GUÍA DE LA RANITA PARA QUERERTE MÁS CADA DÍA", 
    autor: "Maybell Eequay", 
    imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/e46a2b10-8abf-4ac5-9acf-5f42efa99a32/811nwG0QBoL._UF1000,1000_QL80_.jpg", 
    precio: 14000, 
    disponible: true,
    cats: ["Autoayuda"]
  },
  { 
    titulo: "GUÍA DE LA RANITA PARA LA VIDA", 
    autor: "Maybell Eequay", 
    imagen: "https://cdn.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f716b273-f096-4489-9ce0-e210214f4d6b/5.jpg", 
    precio: 14000, 
    disponible: true,
    cats: ["Autoayuda"]
  }
];

async function main() {
  // crear usuarios con password hasheada
  for (const { password, ...datos } of usuarios) {
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash }
    });
  }

  // autores y categorías
  await prisma.autor.createMany({ data: autores, skipDuplicates: true });
  await prisma.categoria.createMany({ data: categorias, skipDuplicates: true });

  // libros
  for (const { autor, cats, ...datos } of libros) {
    const existe = await prisma.libro.findFirst({ where: { titulo: datos.titulo } });
    if (!existe) {
      await prisma.libro.create({
        data: {
          ...datos,
          autor: { connect: { nombre: autor } },
          categorias: { connect: cats.map(nombre => ({ nombre })) }
        }
      });
    }
  }

  console.log("seed C18 completado exitosamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });