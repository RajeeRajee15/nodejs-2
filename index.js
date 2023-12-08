
/*This line is using the dotenv module to load environment variables from a 
.env file into process.env.
The .env file is used to store sensitive information, such as database URLs,
 API keys, etc., which can then be accessed from the process.env object in the application code.
*/
require('dotenv').config();



/* This line imports the express module, which is a popular web application framework for Node.js.*/
const express = require('express'); 

/* This line imports the mongoose module, which is a MongoDB object modeling tool for Node.js.*/
const mongoose = require('mongoose');

/*This line imports the routes module, which defines the API routes for the application. */
const routes = require('./routes/routes');

/* This line initializes an Express application.*/ 
const app = express();

/*This line uses middleware to parse incoming JSON requests. */
app.use(express.json());

/*This line sets up the API routes.
 All routes defined in the routes module will start with /api.*/ 
app.use('/api', routes)

/*This line retrieves the MongoDB connection URL from the environment variables. */
const mongoString = process.env.DATABASE_URL; 

/*This line connects to the MongoDB database using the URL */
mongoose.connect(mongoString);

/*This line holds the reference to the database connection. */
const database = mongoose.connection;

 
/*This line listens for any errors that occur during the connection. */
database.on('error', (error) => {
    console.log(error)
})
/*This line listens for a single successful connection. */
database.once('connected', () => {
    console.log('Database Connected');
})

/* This line starts the server on port 6002. Once the server starts successfully, 
it logs a message confirming the server start with the specified port.*/
app.listen(6002, () => {
    console.log(`Server Started at ${6002}`)
})





