controller = [];

controller.getPrincipal = (req, res)=>{
    res.render('home',{
        src: false   
    });
};
controller.getCatalogo = (req, res)=>{
    res.render('catalogo');
};
controller.getVotar = (req, res)=>{
    res.render('votar');
};
controller.postPrincipal = (req, res)=>{
    console.log(req.body);
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

    res.render('home',{
        src: src || false   
    });
}
module.exports = controller;