import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/products.model.js";

dotenv.config();
const app = express();

app.use(express.json()); // allow us to accept JSON data in the req.body

// this is called middleware - that means just a function that's runs before you send response back to the client

// route 
app.post("/api/products", async (req, res) => {
    // why post method - because we are sending data to server and server is going to create a new product

    const product= req.body; // user will send this data in the body of the post request and we will get it here
    if (!Product.name || !Product.price || !Product.image) {
        // if any of the fields are empty then we will send a 400 bad request back to the user
        return res.status(400).json({ success: false, message: "Please provide all the fields" });
        // 400 is the status code for bad request 
    }

    const newProduct= new Product(Product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
        // 201 is the status code for created
    } catch (error) {
        console.error("Error in create product", error.message);
        res.status(500).json({ success: false, message: "server Error" });
        // 500 is the status code for internal server error
    }
});

// postman desktop application 

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});
