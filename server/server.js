import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Intialize Express App
const app = express()

// connect database
await connectDB()


// middleware
app.use(cors());
app.use(express.json());
  
app.get('/', (req,res)=> res.send("Server is running"))
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


