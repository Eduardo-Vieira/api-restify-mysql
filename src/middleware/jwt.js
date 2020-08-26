const config = require('../config');
const rjwt = require('restify-jwt-community');

const cjwt = rjwt(config.jwt).unless({
    path: ['/auth','/','/produtos/all']
})

module.exports = cjwt