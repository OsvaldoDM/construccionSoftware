control = [];

control.getHome = (req,res)=>{
    res.render('dashboard/home')
};

control.getProfile = (req,res)=>{
    res.render('dashboard/profile')
};

module.exports = control;