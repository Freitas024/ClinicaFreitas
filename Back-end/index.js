const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const PatientRoutes = require('./routes/PacienteRouter');
const DoctorRoutes = require('./routes/DoctorRouter');

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("servidor funcionando! ");
});

app.use('/api/patient', PatientRoutes);
app.use('/api/doctor', DoctorRoutes);


//conexão com o banco de dados
mongoose.connect("mongodb://localhost:27017/ClinicaFreitas").then(() => {
    console.log("MongoDB conectado!!!");

    app.listen( port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
    
}).catch((error) => {
    console.log(`Erro ao conectar com o MongoDB ${error}`);
});