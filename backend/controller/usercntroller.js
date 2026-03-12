import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs" 
export const signup=async(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exists"})
        } 
    const hashpassword = await bcryptjs.hash(String(password), 10);
            const createuser= new User({
                fullName,
                email,
                password:hashpassword
            })
           await createuser.save()
            res.status(201).json({message:"user are created successfully",user:{
                 _id:createuser.id,
            fullName:createuser.fullName,
            email:createuser.email
            }})
        
    }
    catch(err){
        console.log("error:"+err.message)
         res.status(500).json({message:"Internal server errors"})

    }
}
export const login = async(req,res)=>{
    try{
        const {email,password} =req.body;
        const user=await User.findOne({email})
        const passmatch=await bcryptjs.compare(String(password),user.password)
        if(!user || !passmatch){
         return res.status(400).json({message:"invalid username or password "})

        }
        else{
           res.status(201).json({message:"user login successfully",user:{
            _id:user.id,
            fullName:user.fullName,
            password:user.password,
            email:user.email
           }})

        }
    }
    catch(err){
        console.log("error:"+err.message)

    }
}