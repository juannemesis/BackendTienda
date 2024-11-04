const mongoose = require("mongoose");

const tiendaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    horario:{
        type: String,
        required: false
    },
    telefono:{
        type: String,
        required: true
    },
    parqueadero:{
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model("Tienda", tiendaSchema);