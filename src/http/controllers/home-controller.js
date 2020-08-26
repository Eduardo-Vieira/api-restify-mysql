/**
 * Controller Home
 * O objeto home server para refenciar os metodos no routes sem que fique muito poluido.
 */

const home = {
    index: (req, res, next)=>{
        res.send({api:'api-restify-mysql',version:'1.0.0'});
        next();        
    }
}

module.exports = home