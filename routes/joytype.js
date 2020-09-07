const express = require('express');
const Sequelize = require('sequelize');
const router_joytype = require('express').Router();

const db = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const JoyType = db.define('joytypes', {
    // attributes
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

}, {
    // options    
    // default: null
    //charset: 'latin1',
    schema: 'Parameters'
});

router_joytype.put('/joytype/:joytypeId', async (req, res) => {
    var joytypeId = req.params.joytypeId;
    await JoyType.update(req.body, { where: { id: joytypeId } }).then((result) => {
    } 
    )
    try {
        const joyner = await JoyType.findAll({
            where: {
                id: joytypeId
            }
        }
        )
        res.json({ joyner: joyner })
    } catch (error) {
        console.error(error)
    }
})

router_joytype.post('/joytype', async (req, res) => {
    try {
        const newJoyner = new JoyType(req.body)
        await newJoyner.save()
        res.json(
            {
                joyType: newJoyner
            }) // Returns the new user that is created in the database    
    } catch (error) {
        console.error(error)
    }
})

router_joytype.get('/joytype/:joytypeId', async (req, res) => {
    const joytypeId = req.params.joytypeId
    try {
        const joyner = await JoyType.findAll({
            where: {
                id: joytypeId
            }
        }
        )
        res.json({ joyner: joyner })
    } catch (error) {
        console.error(error)
    }
})

router_joytype.get('/joytypes', async (req, res) => {
    try {
        const joytype = await JoyType.findAll({})
        res.json({ joytype: joytype })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router_joytype;