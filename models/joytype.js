const Sequelize = require('sequelize');

const modelJoyType =  {

    description:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    language:
    {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    original:
    {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    price:
    {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    template:
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    translation:
    {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};

module.exports = modelJoyType;