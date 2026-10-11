import express from "express";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import productoRoutes from "./routes/productoRoutes.js";
import proveedorRoutes from "./routes/proveedorRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import tipo_ncfRoutes from "./routes/tipo_ncfRoutes.js";
import ventaRoutes from "./routes/ventaRoutes.js";
import secuencia_ncfRoutes from "./routes/secuencia_ncfRoutes.js";
import ventas_creditoRoutes from "./routes/ventas_creditoRoutes.js";
import abonoRoutes from "./routes/abonoRoutes.js";
import base_pintura_Routes from "./routes/base_pintura_Routes.js";
import colorante_Routes from "./routes/colorante_Routes.js";
import formula_Routes from "./routes/formula_Routes.js"
import formula_color_colorante_Routes from "./routes/formula_color_colorante_Routes.js";
import producto_proveedor_Routes from "./routes/producto_proveedor_Routes.js";
import detalle_venta_Routes from "./routes/detalle_venta_Routes.js";

const app = express();

app.use(express.json());
app.use("/categorias", categoriaRoutes);
app.use("/secuencia_ncf", secuencia_ncfRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/productos", productoRoutes);
app.use("/proveedores", proveedorRoutes);
app.use("/clientes", clienteRoutes);
app.use("/tipo_ncf", tipo_ncfRoutes);
app.use("/ventas", ventaRoutes);
app.use("/ventas_credito", ventas_creditoRoutes);
app.use("/abono", abonoRoutes);
app.use("/base_pintura", base_pintura_Routes);
app.use("/colorante", colorante_Routes);
app.use("/formula", formula_Routes);
app.use("/formula_color_colorante", formula_color_colorante_Routes);
app.use("/producto_proveedor", producto_proveedor_Routes);
app.use("/detalle_venta", detalle_venta_Routes);

app.get("/health", (req, res) => {
  res.send("Health check passed!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});