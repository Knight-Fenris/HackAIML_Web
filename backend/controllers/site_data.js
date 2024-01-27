const dataSchema = require('../models/SiteModel');

exports.addData = async (req,res) =>{
    const {user,url,patterns} = req.body;

    const da = dataSchema({
        user,
        url,
        patterns
    })

    try {
        if(!user||!url||!patterns){
            return res.status(400).json({message:'All fields are required!'})
        }
        if(patterns.length != 10){
            return res.status(400).json({message:'10 Patterns are required!'})
        }
        await da.save()
        res.status(200).json({message:'Data added'})
    } catch (error) {
        res.status(500).json({message:'Server error'})
    }

}

exports.getData = async(req,res)=>{
    try {
        const das = await dataSchema.find().sort({createdAt:1})
        res.status(200).json(das)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.getUserData = async(req,res)=>{
    const {id} = req.params;
    // console.log(id);
    try {
        const das = await dataSchema.find({"user": { $eq: id }}).sort({createdAt:1})
        res.status(200).json(das)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteData = async(req,res)=>{
    const {id} = req.params;
    console.log(req.params)
    dataSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Data Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
}

exports.postSearchUser = async(req,res)=>{
    try{
        const {user} = req.body;

        const das = await dataSchema.find({"user" : { $regex: user, $options: 'i'}})
        // console.log(das)
        res.status(200).json(das)
    } 
    catch(err){
        res.status(500).json({message:err.message})
    }
    
}

exports.postSearchUrl = async(req,res)=>{
    try{
        const {url} = req.body;

        const das = await dataSchema.find({"url" : { $regex: url, $options: 'i'}})
        // console.log(das)
        res.status(200).json(das)
    } 
    catch(err){
        res.status(500).json({message:err.message})
    }
    
}