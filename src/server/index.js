const restify = require('restify')
const routes = require('../http/routes')
const cors = require('../middleware/cors')
const jwt = require('../middleware/jwt')

const server = restify.createServer();

server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

server.pre(cors.preflight)
server.use(cors.actual)

server.use(jwt)

routes(server)

module.exports = server