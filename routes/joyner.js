const express = require('express');
const router = require('express').Router(); 

const users = [{name: 'WL', email:'wagner.louzada@gmail.com'}];

router.get('/', (_, res) => {
    res.send('WOW!!! Joynuz app first api app');
});

router.get('/joyners', (_, res) => {
    res.json({ok: true, users});
})

router.get('/joyner/:name', (req, res) => {
    const {name} = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ok:true, user});
})

router.post('/addjoyner', (req, res) => {
    const { name, email} = req.body;
    if (name && email) {
        users.push({name, email});
        res.json({ok: true, users});
    }
})

module.exports = router;