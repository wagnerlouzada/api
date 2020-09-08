const Sequelize = require('sequelize');

const modelJoyner = {
    // attributes
    name:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    mobo:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    email:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    fullname:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    avatar:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    lgpd:
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    data:
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    config:
    {
        type: Sequelize.JSON,
        allowNull: false
    },
    coins:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coinsvolatile:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    birthdate:
    {
        type: Sequelize.DATE,
        allowNull: false
    },
    company:
    {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    affiliate:
    {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    member:
    {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    language:
    {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    popularity:
    {
        type: Sequelize.BIGINT,
        allowNull: false
    }

};

module.exports = modelJoyner;