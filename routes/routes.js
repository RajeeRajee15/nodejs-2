
//Express framework and initializes a router using 
const express = require('express');

//express.Router(). The created router is then exported to be used in other parts of the application.
const router = express.Router()

module.exports = router;

const Model = require('../model/model');

//post method

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

