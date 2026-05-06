require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const tarefasRotas = require("./src/routes/tarefas.routes");

app.use("/tarefas", tarefasRotas);

const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Servidor Online na porta ${porta}`);
});