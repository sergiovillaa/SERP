const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || "*";

app.use(express.json());
app.use(cors({ origin: corsOrigin }));

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
