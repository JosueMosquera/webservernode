const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
//handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials',(err)=>{console.log(err)})

//TODO servir contenido estatico
app.use(express.static('public'));
app.get('/',(req,res)=>{
   res.render('home',{
       nombre:'Josue Mosquera',
       titulo:'Curso de Node'
   });
})
app.get('/generic',(req,res)=>{
    res.render('generic')
})
app.get('/elements',(req,res)=>{
    res.render('elements');
})
app.get('*',(req,res)=>{
    res.render('404');
})
app.listen(port);

