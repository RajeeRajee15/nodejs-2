
/*Here, we're importing the Express module. 
Express is a web application framework for Node.js that allows you to create web applications and APIs.
*/
const express = require('express');


/*We're creating a new router using the Router() method of the Express module.
 Routers in Express are responsible for handling requests and routing them to the appropriate handler functions. */
const router = express.Router()

/*This line is exporting the router object so that it can be imported and used in other parts of the application. */
module.exports = router;


/*Here, we're importing the model that we want to interact with. The model represents the data structure that we're working with. */
const Model = require('../model/model');



/*The second argument is an anonymous asynchronous function (async arrow function) that is called whenever a POST request is made to the /post endpoint. */

/*Inside the POST route handler, a new instance of the Model class is created. The Model class represents a data model in your application, which can be imported from another file using require. 
The Model instance is initialized with the name and age properties from the request body. In a real-world application, these properties would likely correspond to fields in a form submitted by the client.
*/
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    /*Inside the POST route handler, the save method is called on the Model instance. The save method is asynchronous, so it is called with the await keyword. */
    try {
        const dataToSave = await data.save();
        /* If there is an error during the save operation (such as a validation error), the error is caught by the catch block and sent back to the client as a JSON response with a status code of 400.*/
        res.status(200).json(dataToSave)
    }
    /*If there is an error during the save operation (such as a validation error), the error is caught by the catch block and sent back to the client as a JSON response with a status code of 400. */
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

