// for product model 

import mongoose from "mongoose"; // importing mongoose

// schema for product model
// What is schema? It is a blueprint of the data we want to store in the database and it is used to validate the data before it is stored in the database.

const productSchema = new mongoose.Schema({
    // structure of the data we want to store in the database
    name: {
        type: String, // describes the type of data we want to store
        required: true // validation: if not provided, throws an error
    },

    // this is for price of the product 
    price: {
        type: Number,
        required: true
    },

    image: {
        type: String, // why string for image - because we are storing it as a URL
        required: true
    },
}, {
    timestamps: true // adds createdAt and updatedAt fields automatically
});

// product model is created from the schema
const Product = mongoose.model("Product", productSchema);

// exporting the product model so that we can use it in other files and use it to interact with the database
export default Product;
