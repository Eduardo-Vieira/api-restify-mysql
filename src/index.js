
const server = require('./server')

/**
 * Start Server restify
 */
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});