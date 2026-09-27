import express from "express";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import proveedorRoutes from "./routes/proveedorRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import tipo_ncfRoutes from "./routes/tipo_ncfRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";
import secuencia_ncfRoutes from "./routes/secuencia_ncfRoutes.js";

const app = express();

app.use(express.json());
app.use("/categorias", categoriaRoutes);
app.use("/secuencia_ncf", secuencia_ncfRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/productos", productoRoutes);
app.use("/proveedores", proveedorRoutes);
app.use("/clientes", clienteRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/tipo_ncf", tipo_ncfRoutes);
app.use("/ventas", ventaRoutes);

app.get("/health", (req, res) => {
  res.send("Health check passed!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});