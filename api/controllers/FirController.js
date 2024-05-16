import Fir from "../models/Fir.js";


export const createFir=async (req,res,next)=>{
    try {
        const {Name,Age,incident,location,Accussed,AccusedDescription,Phone,user,file,Address,stage} = req.body;
        
        const userfir =  await Fir.create({
            Name,
            Address,
            Age,
            incident,
            location,
            stage,
            Accussed,
            AccusedDescription,
            Phone,
            user:user,
            file
        })

        const saved = await userfir.save();

        return res.status(200).json({message:"Fir created Successfully",fir:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getuserFir=async (req,res,next)=>{
    try {
        const user = req.params.user; // Assuming the user ID is provided as a URL parameter
    
        const fir= await Fir.find({ user: user });
        
        return res.status(200).json({fir});
    } catch (err) {
        next(err)
        
    }
}
export const getFir=async (req,res,next)=>{
    try {
        
    
        const fir= await Fir.find();
        
        return res.status(200).json({fir});
    } catch (err) {
        next(err)
        
    }
}




export const deleteFir=async (req,res,next)=>{
    try {
        await Fir.findByIdAndDelete(req.params.id)
        res.status(200).json("doc has been deleted") 
     } catch (err) {
        next(err);
    }
}
export const updateFir=async(req,res,next)=>{
    try {
        const updateFir=await Fir.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateFir) 
     }catch (err) {
        next(err);
    }
};
export const updateFir2=async(req,res,next)=>{
    try {
        const updateFir=await Fir.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateFir) 
     }catch (err) {
        next(err);
    }
};
export const updateFir3=async(req,res,next)=>{
    try {
        const updateFir=await Fir.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateFir) 
     }catch (err) {
        next(err);
    }
};