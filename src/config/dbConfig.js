const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apinodejs',
    port: 3306
})

db.connect((err)=>{
   if(err){
    throw err;
   }
   console.log("conexión exitosa");
})

module.exports = db;