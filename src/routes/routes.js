const { Router } = require('express');
const bcrypt = require('bcryptjs');
const router = Router();
 
//rutas

//GET
router.get('/pruebas', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(`select * from users`, (err,users) => {
               if (err) {
                    console.log(err);
               }
               
               res.json(users);
          });
     });
});
router.get('/test', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(`call Get_User(1)`, (err,users) => {
               if (err) {
                    console.log(err);
               }
               res.json(users);
          });
     });
});

router.get('/', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/tienda', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/tienda/:categoria', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/tienda/:categoria/:talla', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/tienda/articulo/id', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/carrito', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.get('/perfil/id', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});

//POST
router.post('/iniciar-sesion', (req, res) => {     
     req.getConnection((err, conn) => {
          conn.query(`call login('${req.body.Email_User}')`, (err,user) => {
               if (err) {
                    console.log(err);
               }
               console.log(user[0][0].Password_User);
               bcrypt.compare(req.body.Password_User, user[0][0].Password_User).then((response) => {
                    if(response === true){
                         res.json(user[0][0]);
                    }else{
                         res.json({'mensaje':'Usuario no registrado'});
                    }
               });
          });
     });
});

router.post('/registro', (req, res) => {
     //realiza la encriptacion de la contraseña
     bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(req.body.Password_User, salt, function(err, hash) {
               req.getConnection((err, conn) => {
                    conn.query(`call Register('${req.body.Name_User}','${hash}','${req.body.Email_User}','${req.body.Phone_User}')`, (err,user) => {
                         if (err) {
                              res.json(err);
                         }
                         res.json(user);//ocupamos hacer una sesion
                    });
               });
          })
      });    
});

router.post('/perfil/:id', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});

module.exports = router;


