const express = require('express');
const Sequelize = require('sequelize');
const router_usuario = require('express').Router(); 
// postgres
const db = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres
// format: postgres://<user>:<password>@<postgresserver>:<port>/<dbname>
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Usuario = db.define('usuarios', {
    // attributes
    firstName:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true    
    }
}, {
    // options    
    // default: null
    //charset: 'latin1',
    //schema: 'testschema'
});

// Note: using `force: true` will drop the table if it already exists

// User.sync({ force: true }); // Now the `users` table in the database corresponds to the model definition

//var id = Usuario.create({ firstName: "Jane", lastName: "Doe" });
//console.log("Jane's auto-generated ID:", id.id);
//id = Usuario.create({ firstName: "John", lastName: "Doe" });
//console.log("John's auto-generated ID:", id.id);
//id = Usuario.create({ firstName: "Mario", lastName: "Doe" });
//console.log("Mario's auto-generated ID:", id.id);

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