// Class model
const User = require('../models/user');


var users = [
    new User('Usuario Exemplo class','Administrador','admin','123','admin@email.com'),
    new User('Usuario Exemplo class 2','Usuário','eduardo','123','eduardo@email.com',2),
]

module.exports = {
    findByEmail: async (email) => {
        return users.find(el => el.email == email)
    },
    update: async (user) => {
        let index = users.findIndex(el => el.uid == user.uid)
        users[index] = user
        return users[index]
    },
    add: async (user) => {
        users.push(user)
        return user
    },
    getAll: async ()=> {
        return users
    }
}