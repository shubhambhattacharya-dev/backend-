import mongoose from "mongoose";

export const connectDB =async() =>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);//mongo connected
        console.log(`mongoDB Connected: ${conn.connection.host}`);//

        
    } catch (error) {
        console.error( `Error: ${error.message}`);
        process.exit(1);//process code 1 code means exist with failer, 0  mean sucess

        
    }
}
//mongoo - collection rathen than table like sql,mysql that store data in table form but mongoo collected and store data in collection form

//inside each collection have different documents (categories)- suppose products is a collection , project have different documents like smartwatch,cool gajets many more ..

//collection for user for each users have documents whenever a user signup you store his info in document