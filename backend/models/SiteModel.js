const mongoose = require('mongoose');


const SiteSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    url:{
        type: String,
    },
    patterns:[{
        type: String,
    }],
    
},{timestamps:true})

module.exports = mongoose.model('Site',SiteSchema)