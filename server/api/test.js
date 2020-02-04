const express = require('express');
const db = require('../db')
const router = express.Router();
const mysql = require('mysql')

//connect mysql
const connection = mysql.createConnection(db.mysql)
connection.connect();
var  sql = 'SELECT * FROM websites';
var str = " ";
connection.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    return;
  }

  str = JSON.stringify(result);
  console.log(str)
});

router.get('/',function(req,res){
  res.send(str)
})



module.exports = router;