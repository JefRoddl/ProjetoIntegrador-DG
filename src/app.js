const express = require('express');
const path = require("path");
const app = express();
const router =  require('./router.js')
const bodyParser = require('body-parser')
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
  }));


//Define a pasta public como sendo a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Usa roteador para controladores
app.use(router);

// exportando aplicação
module.exports = app;


