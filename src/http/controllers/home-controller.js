/**
 * Controller Home
 * O objeto home server para refenciar os metodos no routes sem que fique muito poluido.
 */

//Model Tipos
const tiposModel = require('../models/tipos')

const home = {
    index: (req, res, next)=>{
        tiposModel.pesquisar().then(result => {
            res.send(result);
        }).catch(err => {
            res.send({erro:err});
        })
        next();        
    },
    contatos: (req, res, next) =>{
        res.send('Home  create');
        next();
    }
}

module.exports = home