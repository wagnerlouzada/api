// postgres
const { Sequelize } = require('sequelize');
const db = new Sequelize('postgres://postgres:joynuz@localhost:5432/Joynuz') // Example for postgres
// format: postgres://<user>:<password>@<postgresserver>:<port>/<dbname>
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
//sequelize.createSchema('testschema').then(() => {
    // new schema is created
//});
module.exports = db;
