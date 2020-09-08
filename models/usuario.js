const Sequelize = require('sequelize');

const modelUsuario =  {
    firstName:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
};

module.exports = modelUsuario;