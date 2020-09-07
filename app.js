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
app.use('/', require('./routes/joytype'));
app.use('/', require('./routes/usuario'));

app.listen(port, () => {
    console.log(`WOW ! Server api joynuz is running at port: ${port}`);
})
