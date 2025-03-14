const express = require('express');
const router = express.Router();
const Patient = require('../models/Paciente');

router.post('/', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch(error){
        res.status(400).json({message: error.message});
    }
});


router.get('/', async (req, res) => {
    try {
        const Patients = await Patient.find();
        res.json(Patients);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;