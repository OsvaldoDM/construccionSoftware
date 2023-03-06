const scripts = require("./public/js/scriptsLab8")
scripts.promedio([1,2,3,4,5,6,7,8,9,10]);
scripts.escribirArch("Frida <3");
scripts.abecedario();

//Servidor lab 8
const filesystem = require('fs');
const http = require('http');

scripts.correrServer();