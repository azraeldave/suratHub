const express = require('express');
const router = express.Router();

//import model/schema
const userModel = require('../models/user.js')

router.get('/', (req,res) => {
    userModel.find({}, (err, data) =>{
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;