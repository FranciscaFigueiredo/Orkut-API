FROM node:15

# diretório criado no container
WORKDIR /usr/src/

# copia todos os arquivos para o container
COPY . .

EXPOSE 5000

RUN npm i 
#só executa quando rodarmos a imagem
RUN npx prisma generate
CMD [ "npm", "run", "start:dev-migrate" ]