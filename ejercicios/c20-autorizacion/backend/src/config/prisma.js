require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('../generated/prisma/client.ts');

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/libreria?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  omit: {
    usuario: { passwordHash: true }
  }
});

module.exports = { prisma };