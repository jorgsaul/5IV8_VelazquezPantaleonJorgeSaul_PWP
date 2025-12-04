import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import resultados from "./routes/resultadosRoutes.js";
import Resultado from "./models/Resultado.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "..", "frontend"  )));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index");
})  

app.get("/resultados", async (req, res) => {
  try{
    const resultadoDatos = await Resultado.obtenerTodos();
    res.render("resultados", { resultados: resultadoDatos || [] });
  } catch (error) {
    console.error("Error mostrando vista:", error);
    res.status(500).send("Error cargando resultados");
  }
})

app.use("/api/resultados", resultados);


app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));