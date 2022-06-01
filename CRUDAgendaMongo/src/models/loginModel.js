const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs =  require('bcryptjs');


const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;

  }

  async register(){
    this.valida();

    if(this.errors.length > 0 ) return;

    await this.userExists();

    if(this.errors.length > 0 ) return;

    const salt = bcryptjs.genSaltSync();
    this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

    try{
      
      this.user = await LoginModel.create(this.body);
    }catch(e){
      console.log(e);
    }
  }

  async userExists(){
    const user = await LoginModel.findOne({email: this.body.email});
    if(user) this.errors.push('Usuário já existe');
    
  }

  valida(){
    this.cleanUp();

    // checando se o email eh valido, uso de npm i validator
    if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

    // senha deve ter entre 3 e 50
    if(this.body.senha.length < 3 || this.body.senha.length > 50) this.errors.push('Senha precisa ter entre 3 e 50 caracteres');


  }

  cleanUp(){
    for(let key in this.body){
      if(typeof this.body[key]!== 'string'){
        this.body[key]='';
      }
    }
    this.body = {
      email: this.body.email,
      senha: this.body.senha
    };
  }
}

module.exports = Login;
