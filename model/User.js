const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    personal_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', UserSchema);
