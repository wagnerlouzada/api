const express = require('express');
const Sequelize = require('sequelize');
const router_joytype = require('express').Router();

const modelJoyTye = require('.././models/joytype');

console.log(modelJoyTye);

const JoyType = db.define('joytypes', modelJoyTye, { schema: 'Parameters' });

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