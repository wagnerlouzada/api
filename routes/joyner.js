const express = require('express');
const Sequelize = require('sequelize');
const router_joyner = require('express').Router(); 

const modelJoyner = require('.././models/joyner');

console.log(modelJoyner);

const Joyner = db.define('joyners', modelJoyner, { schema: 'Data' });

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