FROM node:22-alpine

#directorio de trabajo dentro del contenedor
WORKDIR /app

# copiar solo archivos de dependencias
COPY package*.json ./

# copiar la carpeta prisma antes de instalar para que el cliente se genere bien
COPY prisma ./prisma/

RUN npm install

# copiar el resto del código del proyecto
COPY . .

# gnerar cliente de Prisma para Alpine
RUN npx prisma generate

# exponer puerto del servidor
EXPOSE 3000

# comando para iniciar la aplicación en producción
CMD ["npm", "start"]