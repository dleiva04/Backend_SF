const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const conn = require('express-myconnection');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(conn(mysql, {
    host: '204.48.29.79',
    user: 'webdev',
    password: '1234',
    port: 3306,
    database: 'pruebas'
}, 'single'));

// codigo para evitar CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});


app.use('/api/sf',require('./routes/routes'));   //explicar

app.listen(app.get('port'),()=>{
     console.log(`Server on port ${app.get('port')}`);
});
 