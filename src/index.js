const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const conn = require('express-myconnection');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT || 3000);
app.use(express.json());

// codigo para evitar CORS
app.use(cors());

app.use(conn(mysql, {
    host: '204.48.29.79',
    user: 'webdev',
    password: '1234',
    port: 3306,
    database: 'SF_Test'
}, 'single'));



app.use('/api/sf',require('./routes/routes'));

app.listen(app.get('port'),()=>{
     console.log(`Server on port ${app.get('port')}`);
});
 