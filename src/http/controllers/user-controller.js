
/**
 * Controller User
 * O objeto User server para refenciar os metodos no routes sem que fique muito poluido.
 */
const userInteraction = require('../interaction/user-interaction')

module.exports = {
    getAll:(req, res, next) => {
        userInteraction.findAll().then(users=>{
            res.send(200, users);
        }).catch(err => {
            res.send(400,{
                message:err.message || 'Unexpected error.'
            });
        })
        next();
    },
    addUser: (req, res, next) => {
        let {name, type, username, password, email} = req.body;
        userInteraction.createUser({name, type, username, password, email}).then( user => {
            res.send(201, user);
        }).catch(err => {
            res.send(400,{
                message:err.message || 'Unexpected error.'
            });
        })
        next();
    },
    updateUser:(req, res, next) => {
        let {name, type, username, password, email, uid} = req.body;
        userInteraction.updateUser({name, type, username, password, email, uid}).then( user => {
            res.send(201, user);
        }).catch(err => {
            res.send(400,{
                message:err.message || 'Unexpected error.'
            });
        })
        next();
    }
}