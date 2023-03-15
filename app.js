// const scripts = require("./public/js/scriptsLab8")
// const scripts2 = require("./public/js/lab10")
// scripts.promedio([1,2,3,4,5,6,7,8,9,10]);
// scripts.escribirArch("Frida <3");
// scripts.abecedario();

// //Servidor lab 8
// const filesystem = require('fs');
// const http = require('http');

// scripts.correrServer();

// //servidor lab 10
// scripts2.render();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');


//Middlerware
// app.use((req, res, next)=>{
//     console.log('Middlerware')
//     next(); //Le permite a la petición avanzar hacia el siguiente middleware
// });

const rutasAnime = require('./routes/anime.routes');
app.use('/anime', rutasAnime);

const rutasDashboard = require('./routes/dashboard.routes');
app.use('/dashboard',rutasDashboard);


// app.use((req, res, next) => {
//     res.status(404);
    
//     //Envía la respuesta al cliente
//     res.send('Lo sentimos, esta ruta no existe');
// });


console.log('Is running...');
app.listen(3000);