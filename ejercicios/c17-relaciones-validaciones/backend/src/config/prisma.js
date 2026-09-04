const { PrismaClient } = require('../generated/prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@db:5432/libreria_db'
});

const prisma = new PrismaClient({ adapter });

module.exports = { prisma };