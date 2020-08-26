// Class model
const User = require('../models/user');
const ResponseAuth = require('../models/response-auth');

module.exports = {
    getUserAuth:(username, password) => {
        return new Promise((resolve, reject) => {
            // Model static user
            let user = [
                new User('1','Usuario Exemplo class','Administrador','admin','123'),
                new User('2','Usuario Exemplo class 2','Usuário','eduardo','123'),
            ];
            // find user in list
            let findUser = user.filter(el => (el.username == username && el.password == password)? el : false)[0];
            let data = null;
            if(findUser){
                //Class Model ResponseAuth
                data = new ResponseAuth(findUser.uid, findUser.name, findUser.type) 
                console.log(data.toString())
            } 
            resolve(data);
        })
    }
}