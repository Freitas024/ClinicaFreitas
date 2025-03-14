const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: String, required: true},
    Password: {type: String, required: true},
});

module.exports = mongoose.model('Paciente', PacienteSchema);