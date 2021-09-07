const {Schema, model} = require('mongoose');

const encuestaSchema = new Schema({
    provincia: String,
    casosConSintomas: Number,
    casosConfirmados: Number,
    casosSinCOVID: Number
});

module.exports = model('Encuesta', encuestaSchema);