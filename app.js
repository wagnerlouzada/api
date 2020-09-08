const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// read config file
var fs = require('fs'),
configPath = './config.json';
var config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.storageConfig =  config;

var mode = config["mode"];
console.log("Config mode: " + mode);

var provider = config[mode]["database"]["provider"];
var conString = "";
switch (provider) {
    case 'postgres':
        connString = config[mode]["database"]["provider"] + "://" + 
                     config[mode]["database"]["user"] + ":" +
                     config[mode]["database"]["password"] + "@" +
                     config[mode]["database"]["host"] + ":" +
                     config[mode]["database"]["port"] + "/" +
                     config[mode]["database"]["db"];
        break;
    case 'mangoes':
    case 'papayas':
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Database Connection String: "+ connString);

//db connection
db = new Sequelize(connString);
 
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// app start
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes from config file
var routes =  config["routes"];
console.log(routes);
routes.forEach(route => app.use('/', require('./routes/' + route)));

// listening calls
var serverPort = config[mode]["server"]["port"];
const port = process.env.PORT || serverPort;
console.log("Server Port: " + serverPort);
app.listen(port, () => {
    console.log(`WOW ! Server api joynuz is running at port: ${serverPort}`);
})
