const Login = require('../models/LoginModel');



exports.index = (req, res)=>{
    res.render('login');

};

exports.register = async function(req, res){

    try{
        const loginIns =  new Login(req.body);
        await loginIns.register();
    
        if(loginIns.errors.length >0){
            req.flash('errors', loginIns.errors);
            req.session.save(function(){
                return res.redirect('back');
            });

            
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
            req.session.save(function(){
                return res.redirect('back');
            });
        return res.send(loginIns.errors);

    }catch(e){
        console.log(e);
        return res.render('404');
        
    }

   
};