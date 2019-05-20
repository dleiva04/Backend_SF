const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const conn = require('express-myconnection');

app.use(morgan('dev'));
dotenv.config();
app.use(express.urlencoded({extended:false}));
app.set('port', process.env.PORT || 3000);
app.use(express.json());

// codigo para evitar CORS
app.use(cors());

app.use(conn(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DB
}, 'single'));



app.use('/api/sf',require('./routes/routes'));

app.listen(app.get('port'),()=>{
     console.log(`Server on port ${app.get('port')}`);
});
 