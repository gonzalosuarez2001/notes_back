// Importa el módulo Express
const express = require('express');

const cors = require('cors'); // Importa el paquete CORS

// Crea una instancia de la aplicación Express
const app = express();

const corsOptions = {
  origin: 'https://visionary-yeot-ac9a8c.netlify.app/', // Reemplaza con la URL de tu frontend en Netlify
  optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11) interceptan las respuestas CORS con un código 204
};

app.use(cors(corsOptions));

// Define un endpoint que devuelve "Hola, mundo!"
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
