const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerModel = new Schema({
nombre: { type: String, required: true},
clave: { type: String, required: true},
maestro: { type: String, required: true },
semestre: { type: Number, required: true}
},{collection:'materias'});

module.exports = mongoose.model('clientes', customerModel);