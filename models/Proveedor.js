const mongoose = require("mongoose");

const proveedorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    tipoident:{
        type: String,
        required: true
    },
    numeroident:{
        type: String,
        required: false
    },
    telefono:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    departamento:{
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model("Proveedor", proveedorSchema);