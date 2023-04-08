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
const cookieParser = require('cookie-parser');
const session = require('express-session')
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');

const app = express();

app.use(session({
    secret: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officiis a quod, eum dignissimos nisi sunt ut mollitia id culpa alias veniam perferendis! Vero cumque nisi, amet suscipit unde Fridita consequatur officiis dolorum possimus Te libero aliquid id expedita cum maxime deleniti, pariatur Amo officia commodi. Provident cumque eius ratione asperiores Mi similique dolores sit nulla pariatur minima magni harum doloribus aliquam voluptatum Princesa animi in ut mollitia totam quasi, eaque consequatur praesentium placeat veritatis a voluptate! Iste debitis nam iure rerum suscipit accusamus dolorem optio, voluptatem, exercitationem laborum quibusdam odit culpa maxime nesciunt fuga accusantium? Harum quisquam quod consectetur totam ratione necessitatibus voluptates dolorem', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//preparar al servidor para recibir ajax
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'public/uploads');
    },
    filename: (req, file, callback) =>{
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

app.use(multer({storage: fileStorage}).single('imagen'));

app.use(csrfProtection);
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

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

app.use((req, res, next) => {
    res.status(404);
    res.render('404.ejs')
});

console.log('Is running...');
app.listen(3000);