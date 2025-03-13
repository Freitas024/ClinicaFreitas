const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.post('/', async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch(error){
        res.status(400).json({message: error.message});
    }
});


router.get('/', async (req, res) => {
    try {
        const Doctors = await Doctor.find();
        res.json(Doctors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = router;