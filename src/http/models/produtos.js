const { DataTypes } = require('sequelize');
const sequelize = require('../../service/sequelize');

sequelize.define('Produto',{
    // Model attributes are defined here
    produtoName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    produtoDescricao: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    tableName: 'produto'
});

module.exports = sequelize.models.Produto