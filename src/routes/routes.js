const router = require('express-promise-router')();
const controller = require('../routes/controller');

router.route('/iniciar-sesion').post(controller.iniciarSesionWeb);
router.route('/registro').post(controller.registroWeb);

//panel administrador
router.route('/adminLogin').post(controller.adminLogin);
router.route('/adminRegister').post(controller.adminRegister);

module.exports = router;


