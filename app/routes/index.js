'use strict'

const express = require('express');
const auth = require('../middelwares/autenticacion')
const router = express.Router();

router.get('', (req, res) => {
    res.json('Api de Nico.');
});
router.get('/private', auth, (req, res) =>{
    res.status(200).send({message : 'Tienes acceso'})
});

module.exports = router;