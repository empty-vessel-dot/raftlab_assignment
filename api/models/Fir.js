import mongoose from "mongoose";


const FirSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,

    },
    file:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    incident:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    Accussed:{
        type:String,
        default:"",
    },
    AccusedDescription:{
        type:String,
        default:""
    },
    stage:{
        type:String,
        reguired:true,
    },
    Address:{
        type:String,
        required:true,
    },
 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
    },
    status:{
        type:Boolean,
        default:false,
    }
   
},{timestamps:true})

export default mongoose.model("Fir",FirSchema)