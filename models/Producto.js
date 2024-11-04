const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true //campo requerido
    },
    descripcion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: false
    },
    valor:{
        type: Number,
        required: true
    },
    link:{
        type: String,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model("Producto", productoSchema);