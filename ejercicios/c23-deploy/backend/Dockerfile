FROM node:22-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Copiar la carpeta prisma antes de instalar
COPY prisma ./prisma/

RUN npm install

# Copiar el resto del código
COPY . .

# Generar el cliente de Prisma obligatoriamente
RUN npx prisma generate

EXPOSE 3000

# Usar start en lugar de dev
CMD ["npm", "start"]