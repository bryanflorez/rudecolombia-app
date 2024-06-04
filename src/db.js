 import mongoose from "mongoose";
 
 export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost/rudecolombiadb");
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}