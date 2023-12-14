const express = require('express');
const cors = require('cors');
const notesRoutes = require('./routes/notesRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend en Netlify
  optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11) interceptan las respuestas CORS con un código 204
};

app.use(cors(corsOptions));

// Define un endpoint que devuelve "Hola, mundo!"
app.get('/', (req, res) => {
  res.send({mensaje: "hola mundo"});
});

app.use("/notes", notesRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});