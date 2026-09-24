import express from "express";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import proveedorRoutes from "./routes/proveedorRoutes.js";
const app = express();

app.use(express.json());
app.use("/categorias", categoriaRoutes);
app.use("/productos", productoRoutes);
app.use("/proveedores", proveedorRoutes);

app.get("/health", (req, res) => {
  res.send("Health check passed!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});