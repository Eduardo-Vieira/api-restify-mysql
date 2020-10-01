/**
 * Controller Auth
 * O objeto Auth server para refenciar os metodos no routes sem que fique muito poluido.
 */

//Repository User
const userInteraction = require('../interaction/user-interaction')

const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    auth: (req, res, next) => {
        let {username, password} = req.body;
        userInteraction.getUserAuth(username, password).then(data => {
            if(data != null){
                let token = jwt.sign({ uid:data.uid }, config.jwt.secret, {
                    expiresIn: config.jwt.expiresIn // token expires in 15 minutes
                });

                let { iat, exp } = jwt.decode(token); 

                res.send({ data, iat, exp, token });
            }else{
                res.send(200,{mensage:'User not fond...'});
            }

        }).catch(err => {
            res.send({erro:err});
        })
        next();        
    }
}