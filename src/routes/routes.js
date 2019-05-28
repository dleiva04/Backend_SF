const router = require('express-promise-router')();
const controller = require('../routes/controller');

router.route('/iniciar-sesion').post(controller.iniciarSesionWeb);
router.route('/registro').post(controller.registroWeb);

//panel administrador
router.route('/adminLogin').post(controller.adminLogin);

//agregr usuarios admin
router.route('/adminRegister').post(controller.adminRegister);
//cupones administrator
router.route('/cuponUnico').post(controller.guardarCuponUnico);
router.route('/cuponMultiple').post(controller.guardarCuponTodos);

router.route('/verPerfil').post(controller.verPerfil);

router.route('/agregarCategoria').post(controller.agregarCategoria);

router.route('/agregarProductos').post(controller.agregarProducto);
router.route('/borrarProducto').post(controller.borrarProducto);
router.route('/editarProducto').post(controller.editarProducto);
router.route('/verProducto').post(controller.verProducto);

router.route('/todosProductos').get(controller.obtenerTodosProductos);
router.route('/sortProductos').post(controller.sortProductos);

router.route('/agregarProductoCarrito').post(controller.agregarProductoCarrito);
router.route('/verCarrito').post(controller.verCarrito);

module.exports = router;


