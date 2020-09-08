const Sequelize = require('sequelize');

const Usuario = db.define('usuarios', {
    // attributes
    firstName:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {

});

module.exports = usuario;