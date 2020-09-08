const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// postgres connection
db = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres
 
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// app start
const app = express();
const port = process.env.PORT || 4041;

// start app for api services
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes 
app.use('/', require('./routes/joyner'));
app.use('/', require('./routes/joytype'));
app.use('/', require('./routes/usuario'));

// listening calls
app.listen(port, () => {
    console.log(`WOW ! Server api joynuz is running at port: ${port}`);
})
