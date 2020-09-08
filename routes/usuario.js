const express = require('express');
const Sequelize = require('sequelize');
const router_usuario = require('express').Router(); 

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

router_usuario.post('/usuario', async (req, res) => {
    try {
        const newUser = new Usuario(req.body)
        await newUser.save()
        res.json(
            {
                userr: newUser
            }) // Returns the new user that is created in the database    
    } catch (error) {
        console.error(error)
    }
})

router_usuario.get('/usuario/:userId', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await Usuario.findAll({
            where: {
                id: userId
            }
        }
        )
        res.json({ user })
    } catch (error) {
        console.error(error)
    }
})

router_usuario.get('/usuarios', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await Usuario.findAll({})
        res.json({ user })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router_usuario;