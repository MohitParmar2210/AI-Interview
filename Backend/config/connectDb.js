import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected")
    }catch(error){
        console.log(`Database Errors ${error}`)
    }
}

export default connectDb
