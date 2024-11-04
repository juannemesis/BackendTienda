const express = require("express");
const router = express.Router();
const tiendaController = require("../controllers/tiendaController");

//estas son las rtutas de nuestro CRUD (añadir, boorar, editar)

router.post('/', tiendaController.agregarTiendas);
router.get('/', tiendaController.buscarTiendas);
router.get('/:id', tiendaController.mostrarTienda);
router.put('/:id', tiendaController.actualizarTienda);
router.delete('/:id', tiendaController.eliminarTiendas);

module.exports = router;
