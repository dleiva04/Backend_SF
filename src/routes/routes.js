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



module.exports = router;


