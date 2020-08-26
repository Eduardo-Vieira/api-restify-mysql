
const produto = require('../models/produtos');

module.exports = {
    getAll: async () => {
        return await produto.findAll();
    }
}