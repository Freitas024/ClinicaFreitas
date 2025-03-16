const express = require('express');
const router = express.Router();
const patient = require('../models/Paciente');


router.post('/', async (req, res) => { 
    const {name, password} = req.body;

    try {
        
        let user = await patient.findOne({ name });

        if(!user) {
            return res.status(400).json({message: "Usuario não encontrado!"});
        }

        if(password !== user.password) {
            return res.status(400).json({message: "Senha incorreta!"});
        }

        res.status(200).json({ name: user.name});

    }catch (error) {
        res.status(500).json({ message: "Erro no servidor" });
    }
});

module.exports = router;