const express = require("express");
const session = require("express-session");
const cors = require("cors");
const notesRoutes = require("./src/Routes/notesRoutes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

//Middlewares
app.use(
  session({
    secret: "123",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(cors(corsOptions));

//Rutas
app.use("/api/notes", notesRoutes);

//Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
