FROM node:22-alpine

WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Copiar la carpeta prisma para que el cliente se pueda generar
COPY prisma ./prisma/

RUN npm install

# Copiar el resto del código
COPY . .

# Generar el cliente de Prisma explícitamente
RUN npx prisma generate

EXPOSE 3000

# Usar start en lugar de dev para producción
CMD ["npm", "start"]