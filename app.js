const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authRoutes = require("./src/Routes/authRoutes");
const notesRoutes = require("./src/Routes/notesRoutes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};

//Middlewares
function verificarToken(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  jwt.verify(token, "123", (error, decoded) => {
    if (error) {
      return res.status(401).json({ mensaje: "Token no válido" });
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
}
app.use(express.json());
app.use(cors(corsOptions));

//Rutas
app.use("/api/auth", authRoutes);
app.use("/api/notes", verificarToken);
app.use("/api/notes", notesRoutes);

//Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
