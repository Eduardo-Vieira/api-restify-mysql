const middlewareUpload = require('../middleware/upload');

const homeController = require('./controllers/home-controller');
const authController = require('./controllers/auth-controller');
const fileController = require('./controllers/file-controller');
const produtosController = require('./controllers/produtos-controller');

const routes = (server) => {
    /**
     * Router sem jwt
     */
    // Home
    server.get('/', homeController.index)
    // Auth
    server.post('/auth', authController.auth)

    // Exemplo de upload
    server.post('/file/upload', middlewareUpload({ path: `./src/files` }), fileController.upload);
    server.get('/file/:date/:name', fileController.file)

    //Produtos
    server.get('/produtos/all', produtosController.all)
}

module.exports = routes