const { Router } = require('express');
const router = Router();
 
//rutas
router.get('/', (req, res) => {
     //llenar objeto de javascript
     req.getConnection((err, conn) => {
          conn.query('select * from usuarios', (err, users) => {
               if (err) {
                    console.log(err);
               }
               res.json(users);
          });
     });
});

module.exports = router;


