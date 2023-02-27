# Consumo de una API mediante el uso de la dependencia JSON Server

El siguiente proyecto tiene como finalidad realizar las operacion de creación, actualización, eliminación y listado de los datos de usuarios (CRUD).

## Guia para el uso

Para hacer uso de este proyecto de forma local se necesita:

1. Tener instalado `node js`.
2. Ejecutar el comando `npm install` para instalar las depencias necesarias para el proyecto.
3. Configurar el puerto sobre el cual se ejecutará json-server en el archivo package.json en el script `server`
4. Ejecutar el comando `npm run server` para levantar el servidor json-server
5. Configurar la variable de entorno `VITE_BASE_URL` la cual debe coincidir con el dominio y el puerto donde se ejecuta json server
6. Ejecutar el comando `npm run dev` para levantar el servidor de vite

## Tecnologías implementadas

Para el desarrollo del projecto se usaron las tecnologías:

- vite.js
- node.js
- tailwind.css
- html5
- javascript