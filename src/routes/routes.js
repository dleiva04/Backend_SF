const { Router } = require('express');
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
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
     });
});
router.post('/registro', (req, res) => {
     req.getConnection((err, conn) => {
          conn.query(/*codigo mysql*/``, (err,/*variable que guarde la consulta*/ ) => {
               if (err) {
                    console.log(err);
               }
               res.json();
          });
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


