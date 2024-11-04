const Producto = require("../models/Producto");

//funcion agregar productos

exports.agregarProductos = async(req,res) => {
    try {
        let producto; //se crea el objeto que va a contener la información del producto que se va aguardar
        producto = new Producto(req.body);
        await producto.save(); //la funcion espera a que el servidor termine
        res.json(producto); //se envía la respuesta en formato json

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar el producto");
    }
}


//funcion para buscar los productos que estan en la base de datos

exports.buscarProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al visualizar los productos");
    }
}

//funcion buscar un producto

exports.mostrarProducto = async(req,res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
            return;
        }
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al buscar el producto");
    }
}

//actualizar un producto

exports.actualizarProducto = async(req, res) => {
    try {
        const {nombre, descripcion, imagen, valor, link} = req.body
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
            return;
        }
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.imagen = imagen;
        producto.valor = valor;
        producto.link = link;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto,{new:true});
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar un producto");
    }
}

//eliminar productos

exports.eliminarProductos = async(req,res) => {
    try {
        const productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
            return;
        }else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Producto eliminado"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar un producto");
    }
}