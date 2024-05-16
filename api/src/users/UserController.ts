import { error } from "console";
import { NextFunction,Request,Response } from "express";
import UserSchema from "./UserSchema";

const register = async (req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password}= req.body;
    if(!name || !email || !password){
        return res.status(400).json({error:'All fields are required'})
    }
    const user = await UserSchema.findOne({email});
    if(user){
        return res.status(400).json({error:'User already exist'})
    }

    try {
        
    } catch (error) {
        
    }
};

const login = async (req:Request,res:Response,next:NextFunction)=>{
    res.json({message:'login'});
};

const me = async (req:Request,res:Response,next:NextFunction)=>{
    res.json({message:'me'});
};

export {register,login,me}