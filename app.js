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

const { response } = require('express');
const express = require('express');
const app = express();

//Middlerware
app.use((req, res, next)=>{
    next();
});

app.use((req, res, next)=>{
    res.send('Hola mundo');
});
app.listen(3000);