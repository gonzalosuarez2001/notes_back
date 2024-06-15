const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const cronJob = require("./config/cron");
const authRoutes = require("./src/Routes/authRoutes");
const userRoutes = require("./src/Routes/userRoutes");
const notesRoutes = require("./src/Routes/notesRoutes");
const settingsRoutes = require("./src/Routes/settingsRoutes");
const relateModels = require("./config/relateModels");
const tokenSign = process.env.JWT;
const URLFront = process.env.URL_FRONT;

const app = express();

//Config
relateModels();
cronJob.start();
const corsOptions = {
  origin: URLFront,
  optionsSuccessStatus: 200,
  credentials: true,
};

//Middlewares
app.use(express.json());
app.use(cors(corsOptions));

function verificarToken(req, res, next) {
  if (req.header("Authorization")) {
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, tokenSign, (error, decoded) => {
      if (error) {
        return res.status(401).json({ mensaje: "Token no válido" });
      } else {
        req.userId = decoded.userId;
        req.username = decoded.username;
        next();
      }
    });
  }
}

//Rutas
app.use("/api/auth", authRoutes);
app.use("/api/user", verificarToken, userRoutes);
app.use("/api/notes", verificarToken, notesRoutes);
app.use("/api/settings", verificarToken, settingsRoutes);

app.use("/",(req, res)=> {
  res.send("Bienvenido a API Notes")
})

//Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
