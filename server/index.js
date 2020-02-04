const testApi = require('./api/test')

const express = require('express')

const app = express()

app.use(require('cors')())

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));





//Router

app.use('/api/test',testApi)



app.listen(3000, () => console.log('http://localhost:3000'))