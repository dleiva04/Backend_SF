const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
     //=======================================================================
     //sf web
     //=======================================================================
     iniciarSesionWeb: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Login('${req.body.Email_User}')`, (err, user) => {
                    if (err) {
                         res.json({ err });
                    }
                    bcrypt.compare(req.body.Password_User, user[0][0].Password_User).then((response) => {
                         if (response === true) {
                              const token = jwt.sign({ user: user[0][0] }, `${process.env.TOKEN}`, { expiresIn: '1d' });
                              res.json({ token });
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
                                   res.json({ err });
                              }
                              req.getConnection((err, conn) => {
                                   conn.query(`SELECT LAST_INSERT_ID() as Id_User,Name_User,Email_User,Password_User from users where Id_User = LAST_INSERT_ID();`, (err, ans) => {
                                        if (err) {
                                             res.json(err);
                                        }
                                        const token = jwt.sign({ user: ans[0] }, `${process.env.TOKEN}`, { expiresIn: '1d' });
                                        res.json({ token });
                                   });
                              });
                         });
                    });
               })
          });
     },
     guardarCuponUnico: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call Coupon_OneUse('${req.body.Coupon_Code}')`, (err, user) => {
                    if (err) {
                         res.json(err);
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
                         res.json(err);
                    }
                    console.log(req.body.Coupon_Code);
                    res.json({ 'mensaje': 'Cupón guardado con éxito' });

               });
          });
     },
     obtenerPerfil: async (req,res,ans) => {
          
     },
     obtenerTodosProductos: async (req,res,ans) => {

     },
     obtenerTodosProductos_Sort: async (req,res,ans) => {

     },
     verProducto: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call ViewProduct(${req.body.Id_Prod})`, (err, product) => {
                    if (err) {
                         res.json(err);
                    }
                    res.json(product[0][0]);
               });
          });
     },
     //=======================================================================

     //=======================================================================
     //panel admin
     //=======================================================================
     adminRegister: async (req, res, ans) => {
          bcrypt.genSalt(10, function (err, salt) {
               bcrypt.hash(req.body.Password_Admin, salt, function (err, hash) {
                    req.getConnection((err, conn) => {
                         conn.query(`call Register_Admin('${req.body.User_Admin}','${hash}','${req.body.Role_Admin}')`, (err, user) => {
                              if (err) {
                                   res.json({ err });
                              }
                              req.getConnection((err, conn) => {
                                   conn.query(`SELECT LAST_INSERT_ID() as Id_Admin,User_Admin,Password_Admin,Role_Admin from admin where Id_Admin = LAST_INSERT_ID();`, (err, ans) => {
                                        if (err) {
                                             res.json(err);
                                        }
                                        const token = jwt.sign({ admin: ans[0] }, `${process.env.TOKEN}`, { expiresIn: '1d' });
                                        res.json({ token });
                                   });
                              });
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
                              const token = jwt.sign({ admin: user[0][0] }, `${process.env.TOKEN}`, { expiresIn: '1d' });
                              res.json({ token });
                         } else {
                              res.json({ 'mensaje': 'Usuario no registrado' });
                         }
                    });
               });
          });
     },
     agregarProducto: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call AddProduct_Admin(${req.body.Id_Cat},'${req.body.Name_Product}','${req.body.Id_Store}','${req.body.Description_Product}',${req.body.Price_Product},${req.body.size_S},${req.body.size_M},${req.body.size_L},${req.body.size_XL})`, (err, product) => {
                    if (err) {
                         res.json(err);
                    }
                    res.json({ mensaje: "Producto añadido con exito" });
               });
          });
     },
     editarProducto: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call EditProduct_Admin(${req.body.Id_Prod},${req.body.Id_Cat},'${req.body.Name_Prod}','${req.body.Id_Stor}','${req.body.Description_Prod}',${req.body.Price_Prod},${req.body.size_S},${req.body.size_M},${req.body.size_L},${req.body.size_XL})`, (err, product) => {
                    if (err) {
                         res.json(err);
                    }
                    res.json({ mensaje: "Producto editado con exito" });
               });
          });
     },
     borrarProducto: async (req, res, ans) => {
          req.getConnection((err, conn) => {
               conn.query(`call DeleteProduct_Admin(${req.body.Id_Product})`, (err, product) => {
                    if (err) {
                         res.json(err);
                    }
                    res.json({ mensaje: "Producto eliminado con exito" });
               });
          });
     },
     //=======================================================================
};