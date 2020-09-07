const express = require('express');
const Sequelize = require('sequelize');
const router_joyner = require('express').Router(); 

const db = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres
 
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Joyner = db.define('joyners', {
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

}, {
    // options    
    // default: null
    //charset: 'latin1',
    schema: 'Data'
});



router_joyner.put('/joytype/:joynerId', async (req, res) => {
    var joynerId = req.params.joynerId;
    await JoyType.update(req.body, { where: { id: joynerId } }).then((result) => {
    } 
    )
    try {
        const joyner = await JoyType.findAll({
            where: {
                id: joynerId
            }
        }
        )
        res.json({ joyner: joyner })
    } catch (error) {
        console.error(error)
    }
})

router_joyner.post('/joyner', async (req, res) => {
    try {
        const newJoyner = new Joyner(req.body)
        await newJoyner.save()
        res.json(
            {
                joyner: newJoyner
            }) // Returns the new user that is created in the database    
    } catch (error) {
        console.error(error)
    }
})

router_joyner.get('/joyner/:joynerId', async (req, res) => {
    const joynerId = req.params.joynerId
    try {
        const joyner = await Joyner.findAll({
            where: {
                id: joynerId
            }
        }
        )
        res.json({ joyner: joyner })
    } catch (error) {
        console.error(error)
    }
})

router_joyner.get('/joyners', async (req, res) => {
    try {
        const joyner = await Joyner.findAll({})
        res.json({ joyner: joyner })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router_joyner;