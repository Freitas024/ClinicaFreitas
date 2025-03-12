const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("Clinica Freitas servidor rodando!");
});



//conexão com o banco de dados
mongoose.connect("mongodb://localhost:27017/ClinicaFreitas").then(() => {
    console.log("MongoDB conectado!!!");

    app.listen( port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
    
}).catch((error) => {
    console.log(`Erro ao conectar com o MongoDB ${error}`);
});