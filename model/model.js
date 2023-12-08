
/*The code begins by importing the Mongoose library, which is a popular Node.js 
library used for interacting with MongoDB. It's a crucial tool for modeling application
 data and simplifying interactions with the MongoDB database. */
const mongoose = require('mongoose');


/*A schema is a blueprint that defines the structure of documents within a collection in MongoDB.
 In this case, a dataSchema is defined using Mongoose's Schema constructor. */
const dataSchema = new mongoose.Schema({
    name: {             
        required: true, //specifies that this field is mandatory.
        type: String    // specifies that the value of this field should be a string.
    },
    age: {
        required: true, //specifies that this field is also mandatory.
        type: Number //specifies that the value of this field should be a number.
    }
})

/*The mongoose.model method is used to convert the schema into a model that can be used in the application. 
It takes two arguments */

/*The first argument 'Data' is the singular name of the collection in MongoDB that this model represents.

The second argument dataSchema is the schema that defines the structure of the documents in this collection. */
module.exports = mongoose.model('Data', dataSchema)

/* Overall, this code sets up a Mongoose schema called dataSchema with two fields (name and age), 
both of which are required fields with specific data types.
 The schema is then converted into a model named 'Data', representing a collection in the MongoDB database*/