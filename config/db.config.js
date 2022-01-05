'use strict';

const mysql = require('mysql2');

//conexão com o banco de dados mySql

const dbConn = mysql.createConnection({
    host: 'mysql24-farm10.kinghost.net',

    user:'aplicacoestest',

    password:'abcde456123',

    database: 'aplicacoestest'

    /* host: 'localhost',

    user:'root',

    password:'',

    database: 'node_mysql_crud_db' */
});

dbConn.connect(function(err){
    if(err) throw err;

    console.log("Banco de dados conectado!!")
});

module.exports = dbConn;