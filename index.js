
// This line uses dotenv to load environment variables from a
//  .env file into process.env. It allows sensitive information like database URLs, 
//  API keys, etc., to be stored outside the codebase.
require('dotenv').config();//



// Here, the code imports required Node.js modules. 
// Express is used for creating the server, Mongoose for MongoDB database interaction, 
// and routes to manage API routes.

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use('/api', routes)

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(6002, () => {
    console.log(`Server Started at ${6002}`)
})





