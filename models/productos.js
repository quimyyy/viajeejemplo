const mongoose = require('mongoose');
const productos = new mongoose.Schema({
    code:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    },
    img:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.models.producto|| mongoose.model('productos',productos);
