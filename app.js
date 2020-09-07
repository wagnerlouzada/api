const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

// start app for api services
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes 
app.use('/', require('./routes/joyner'));

//
// postgres tes start block
//
const { Sequelize } = require('sequelize');
// format: postgres://<user>:<password>@<postgresserver>:<port>/<dbname>
const sequelize = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

//sequelize.createSchema('testschema').then(() => {
    // new schema is created
//});

const User = sequelize.define('usuarios', {
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

var id = User.create({ firstName: "Jane", lastName: "Doe" });
console.log("Jane's auto-generated ID:", id.id);
id = User.create({ firstName: "John", lastName: "Doe" });
console.log("John's auto-generated ID:", id.id);
id = User.create({ firstName: "Mario", lastName: "Doe" });
console.log("Mario's auto-generated ID:", id.id);

app.post('/userr', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.json(
            {
                userr: newUser
            }) // Returns the new user that is created in the database    
    } catch (error) {
        console.error(error)
    }
})

app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findAll({
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

app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findAll({
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

app.get('/users', async (req, res) => {
    const userId = req.params.userId
    try {
        const user = await User.findAll({
        }
        )
        res.json({ user })
    } catch (error) {
        console.error(error)
    }
})

//
// postgres test end block
//

app.listen(port, () => {
    console.log(`WOW ! Server api joynuz is running at port: ${port}`);
})
