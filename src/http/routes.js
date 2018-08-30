const homeController = require('./controllers/home-controller')

const routes = (server) => {
    //router Home Usando a Model Tipos do mysql
    server.get('/', homeController.index)

}

module.exports = routes