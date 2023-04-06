const fs =  require('fs');
const personaje = require('../models/personaje.model');

controller = [];


controller.getLogin = (req, res)=>{
    res.render('login')
};

controller.getPrincipal = (req, res)=>{
    res.render('home',{
        src: req.cookies.src || false,
        user: req.session.user
    });
};

controller.getCatalogo = (req, res)=>{
    personaje.fetchAll()
    .then(([rows, fieldData]) =>{        
        res.render('catalogo', {waifus: rows,
            user: req.session.user});
    })
    .catch(err => console.log(err));
};

controller.getVotar = (req, res)=>{
    res.render('votar',{user: req.session.user});
};

controller.getAgregar = (req, res) =>{
    res.render('agregar',{user: req.session.user})
};

controller.getBuscar = (req, res) =>{
    rows = personaje.find(req.params.valor);
    if(rows!=null){
        res.status(200).json({waifus: rows});        
    }else{
        console.log(error);
        res.status(200).json({mensaje: "Internal server error"});
    }
};

controller.getPreguntas = (req,res) =>{
    res.render('preguntas',{user: req.session.user})
};

controller.getEdit = (req, res) =>{
    res.cookie('id',req.params.id);
    personaje.fetchOne(req.params.id)
    .then(([rows,fieldData])=>{
        info = rows;
        res.render('editar',{user: req.session.user,
            data: info[0]});
    })
    .catch(err=>console.log(err));
    
}

controller.getDelete = (req, res) =>{
    personaje.delete(req.params.id)
    .then(([rows,fieldData])=>{        
        res.redirect('/anime/catalogo')
    })
    .catch(err=>console.log(err));
}

controller.postLogin = (req,res)=>{
    req.session.user = req.body.user;
    if(req.session.user!=undefined)
        res.redirect('/anime/');
};

controller.postPrincipal = (req, res)=>{
    let src = "";

    switch(req.body.person){
        case "asuna":
            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hSmPfrvKy9gDlKZtLVPNxFrNRSqK-yl5YA&usqp=CAU";
            break;
        case "mai":
            src = "https://i.pinimg.com/originals/96/77/85/96778559c753ce2248471031e06a19d0.jpg";
            break;
        case "violett":
            src = "http://cm1.narvii.com/8547/679798b894bc15f612124ccc100a2d7e1e4edf0c_00.jpg";
            break;
        case "zero":
            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg-4uImfNlAJo-b6I2irdGbVNwhwZib-cbg&usqp=CAU";
            break;
    }

    fs.writeFileSync('txt/personFav.txt',`Tu personaje favorita es:${req.body.person}\nLink a la imagen: ${src}`);
    res.cookie('src',src);
    res.redirect('/anime');
}

controller.postAgregar = (req, res) =>{
    const waifu = new personaje({
        img: req.body.img,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });
    waifu.save();    

    res.redirect('/anime/catalogo');
}

controller.postEdit = (req, res) =>{
    const waifu = new personaje({
        img: req.body.img,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });
    waifu.edit(req.cookies.id)
    .then(([rows,fieldData])=>{
        res.redirect('/anime/catalogo')
    })
    .catch(err=>console.log(err));
}

module.exports = controller;