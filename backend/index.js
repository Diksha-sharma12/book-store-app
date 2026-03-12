import  express from 'express';
const app=express();
import dotenv from "dotenv"
import mongoose from 'mongoose';
import bookroute from './route/bookroute.js'
import Userroute from './route/userroute.js'
import cors from 'cors'
app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 4000; 
const mongodb=process.env.MongoDBURL;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("helloo");
})
// connect to mongodb
try{
    mongoose.connect(mongodb,{})
    console.log("successfully connect")
}
catch(error)
{
    console.log("Error:",error)
}
app.use('/book',bookroute)
app.use('/user',Userroute)

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})