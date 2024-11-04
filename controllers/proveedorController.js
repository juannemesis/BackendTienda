const Proveedor = require("../models/Proveedor");

//funcion agregar proveedores

exports.agregarProveedores = async(req,res) => {
    try {
        let proveedor; //se crea el objeto que va a contener la información del producto que se va aguardar
        proveedor = new Proveedor(req.body);
        await proveedor.save(); //la funcion espera a que el servidor termine
        res.json(proveedor); //se envía la respuesta en formato json

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar el proveedor");
    }
}


//funcion para buscar los proveedores que estan en la base de datos

exports.buscarProveedores = async(req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al visualizar las tiendas");
    }
}

//funcion buscar un proveedor

exports.mostrarProveedor = async(req,res) => {
    try {
        let proveedores = await Proveedor.findById(req.params.id);
        if (!proveedores) {
            res.status(404).send({msg: "Proveedor no encontrada con ese ID"});
            return;
        }
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el proveedor");
    }
}

//actualizar un proveedor

exports.actualizarProveedor = async(req, res) => {
    try {
        const {nombre, tipoident, numeroident, direccion, departamento} = req.body
        let proveedor = await Proveedor.findById(req.params.id);

        if(!proveedor){
            res.status(404).send({msg: "Proveedor no encontrado con ese ID"});
            return;
        }
        proveedor.nombre = nombre;
        proveedor.tipoident = tipoident;
        proveedor.numeroident = numeroident;
        proveedor.direccion = direccion;
        proveedor.departamento = departamento;

        proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id}, proveedor,{new:true});
        res.json(proveedor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el proveedor");
    }
}

//eliminar proveedores

exports.eliminarProveedores = async(req,res) => {
    try {
        const proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg: "Proveedor no encontrado con ese ID"});
            return;
        }else{
            await Proveedor.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Proveedor eliminado"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el proveedor");
    }
}