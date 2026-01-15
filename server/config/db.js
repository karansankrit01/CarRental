import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/Carmium-CarRental`)
        console.log("Database Connected")
        
        mongoose.connection.on('disconnected', ()=>
            console.log("Database Disconnected")
        )
        mongoose.connection.on('error', (error)=>
            console.log("Database Error:", error.message)
        )
    } 
    catch(error){
        console.log("Database Connection Failed:", error.message);
    }
}
export default connectDB;