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

router.route('/agregarProductos').post(controller.agregarProducto);
router.route('/borrarProducto').post(controller.borrarProducto);
router.route('/editarProducto').post(controller.editarProducto);
router.route('/verProducto').post(controller.verProducto);



module.exports = router;


