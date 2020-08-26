/**
 * Controller Produtos
 * O objeto Produtos server para refenciar os metodos no routes sem que fique muito poluido.
 */

 //Repository Produto
const produtoRepository = require('../repository/produto-repository')

module.exports = {
    all: async (req, res, next)=>{
        res.send( await produtoRepository.getAll());
        next();        
    }
}