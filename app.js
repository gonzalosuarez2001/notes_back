// Importa el módulo Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define un endpoint que devuelve "Hola, mundo!"
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
