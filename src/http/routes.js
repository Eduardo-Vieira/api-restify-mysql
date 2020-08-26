const middlewareUpload = require('../middleware/upload');

const homeController = require('./controllers/home-controller');
const authController = require('./controllers/auth-controller');
const fileController = require('./controllers/file-controller');

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
}

module.exports = routes