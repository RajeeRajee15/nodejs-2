
// This line uses dotenv to load environment variables from a
//  .env file into process.env. It allows sensitive information like database URLs, 
//  API keys, etc., to be stored outside the codebase.
require('dotenv').config();//



// It initializes an Express application that will handle HTTP requests.
const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes/routes');
//It initializes an Express application that will handle HTTP requests.
const app = express();

//express.json() is middleware that parses incoming JSON requests.
app.use(express.json());

//sets up the API routes. All routes defined in the routes module will start with /api.
app.use('/api', routes)


const mongoString = process.env.DATABASE_URL; //Retrieves the MongoDB connection URL from the environment variables.

//connects to the MongoDB database using the URL
mongoose.connect(mongoString);
//holds the reference to the database connection.
const database = mongoose.connection;

 //listens for any errors that occur during the connection.
database.on('error', (error) => {
    console.log(error)
})
//listens for a single successful connection.
database.once('connected', () => {
    console.log('Database Connected');
})

//app.listen() starts the server on port 6002.
//Once the server starts successfully, it logs a message confirming the server start with the specified port
app.listen(6002, () => {
    console.log(`Server Started at ${6002}`)
})





