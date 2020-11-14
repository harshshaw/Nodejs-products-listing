const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'xae12@xae12', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
