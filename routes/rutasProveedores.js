const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController");

//estas son las rutas de nuestro CRUD (añadir, boorar, editar)

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.mostrarProveedor);
router.put('/:id', proveedorController.actualizarProveedor);
router.delete('/:id', proveedorController.eliminarProveedores);

module.exports = router;
