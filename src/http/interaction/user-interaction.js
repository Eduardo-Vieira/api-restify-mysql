
const userRepository = require('../repository/user-repository');
const User = require('../models/user');
const ResponseAuth = require('../models/response-auth');

module.exports = {
    findAll: async ()=>{
        return await userRepository.getAll()
    },
    getUserAuth: async (username, password)=> {
        
        const users = await userRepository.getAll();
        
        // find user in static list
        let findUser = users.find(el => (el.username == username && el.password == password));
        let data = null;
        if(findUser){
            //Class Model ResponseAuth
            data = new ResponseAuth(findUser.uid, findUser.name, findUser.type)
        }
        return data
    },
    createUser: async (data)=>{
        let {name, type, username, password, email} = data
        // Check if email already exists
        const isEmail = await userRepository.findByEmail(email);

        if(isEmail){
            throw new Error('User already exists.');
        }
        //Class Model Create User - DTO
        let user = new User(name, type, username, password, email)
        return await userRepository.add(user)
    },
    updateUser: async (data)=>{
        let {name, type, username, password, email, uid} = data
        
        //Class Model Update User - DTO
        let user = new User(name, type, username, password, email, uid)
        return await userRepository.update(user)
    }
}