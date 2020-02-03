const express = require('express')
const app = express()
app.use(require('cors')())

var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'Harold',              
  password : '12345678',       
  port: '3306',                   
  database: 'mysite_db' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
app.get('/',function(req,res){
  res.send('Hello Harold')
})
app.use(express.static('public'))

app.get('/products',function(req,res){
  res.send([
    {id:1,title:'xxx'},
    {id:2,title:'aaa'},
    {id:3,title:'bbb'},
  ])
})
app.listen(3000, () => console.log('http://localhost:3000'))
