const bcrypt = require('bcryptjs');
module.exports = {
     /*plantilla: async (req, res, ans) => {
     }*/
     iniciarSesionWeb: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Login('${req.body.Email_User}')`, (err, user) => {
                    if (err) {
                         console.log(err);
                    }
                    console.log(user[0][0].Password_User);
                    bcrypt.compare(req.body.Password_User, user[0][0].Password_User).then((response) => {
                         if (response === true) {
                              res.json(user[0][0]);
                         } else {
                              res.json({ 'mensaje': 'Usuario no registrado' });
                         }
                    });
               });
          });
     },
     registroWeb: async (req, res, ans) => {
          bcrypt.genSalt(10, function (err, salt) {
               bcrypt.hash(req.body.Password_User, salt, function (err, hash) {
                    req.getConnection((err, conn) => {
                         conn.query(`call Register('${req.body.Name_User}','${hash}','${req.body.Email_User}','${req.body.Phone_User}')`, (err, user) => {
                              if (err) {
                                   res.json(err);
                              }
                              res.json(user);
                         });
                    });
               })
          });
     },
     adminRegister: async (req, res, ans) => {
          bcrypt.genSalt(10, function (err, salt) {
               bcrypt.hash(req.body.Password_Admin, salt, function (err, hash) {
                    req.getConnection((err, conn) => {
                         conn.query(`call Register_Admin('${req.body.User_Admin}','${hash}','${req.body.Role_Admin}')`, (err, user) => {
                              if (err) {
                                   res.json({ 'error': 'Fallo en el registro' });
                                   console.log(err);
                              }
                              res.json({ 'mensaje': 'Registrado con exito' });
                         });
                    });
               })
          });
     },
     adminLogin: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Login_Admin('${req.body.User_Admin}')`, (err, user) => {
                    if (err) {
                         console.log(err);
                    }
                    bcrypt.compare(req.body.Password_Admin, user[0][0].Password_Admin).then((response) => {
                         if (response === true) {
                              res.json(user[0][0]);//definir que deseo  guardar
                         } else {
                              res.json({ 'mensaje': 'Usuario no registrado' });
                         }
                    });
               });
          });
     },
     guardarCuponUnico: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Coupon_OneUse('${req.body.Coupon_Code}')`, (err, user) => {
                    if (err) {
                         console.log(err);
                    }
                    console.log(req.body.Coupon_Code);
                    res.json({ 'mensaje': 'Cupón guardado con éxito' });
                         
               });
          });
     },
     guardarCuponTodos: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Coupon_MultipleUse('${req.body.Coupon_Code}')`, (err, user) => {
                    if (err) {
                         console.log(err);
                    }
                    console.log(req.body.Coupon_Code);
                    res.json({ 'mensaje': 'Cupón guardado con éxito' });
                         
               });
          });
     }

};