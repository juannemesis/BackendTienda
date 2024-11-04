const Tienda = require("../models/Tienda");

//funcion agregar tiendas

exports.agregarTiendas = async(req,res) => {
    try {
        let tienda; //se crea el objeto que va a contener la información del producto que se va aguardar
        tienda = new Tienda(req.body);
        await tienda.save(); //la funcion espera a que el servidor termine
        res.json(tienda); //se envía la respuesta en formato json

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar la tienda");
    }
}


//funcion para buscar las tiendas que estan en la base de datos

exports.buscarTiendas = async(req, res) => {
    try {
        const tiendas = await Tienda.find();
        res.json(tiendas);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al visualizar las tiendas");
    }
}

//funcion buscar una tienda

exports.mostrarTienda = async(req,res) => {
    try {
        let tiendas = await Tienda.findById(req.params.id);
        if (!tiendas) {
            res.status(404).send({msg: "Tienda no encontrada con ese ID"});
            return;
        }
        res.json(tiendas);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar la tienda");
    }
}

//actualizar una tienda

exports.actualizarTienda = async(req, res) => {
    try {
        const {nombre, direccion, horario, telefono, parqueadero} = req.body
        let tienda = await Tienda.findById(req.params.id);

        if(!tienda){
            res.status(404).send({msg: "Tienda no encontrada con ese ID"});
            return;
        }
        tienda.nombre = nombre;
        tienda.direccion = direccion;
        tienda.horario = horario;
        tienda.telefono = telefono;
        tienda.parqueadero = parqueadero;

        tienda = await Tienda.findOneAndUpdate({_id: req.params.id}, tienda,{new:true});
        res.json(tienda);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar la tienda");
    }
}

//eliminar tiendas

exports.eliminarTiendas = async(req,res) => {
    try {
        const tiendas = await Tienda.findById(req.params.id);
        if(!tiendas){
            res.status(404).send({msg: "Tienda no encontrada con ese ID"});
            return;
        }else{
            await Tienda.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Tienda eliminada"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar la tienda");
    }
}