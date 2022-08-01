const mongoose = require('mongoose'); //mongoose imported
const UserSchema = new mongoose.Schema({
    "name":{
        type:String,
        trim:true,
        required:true
    },
    "email":{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        trim:true,
        required:true
    },
    "role":{
        type:String,
        trim:true,
        default:"user" //admin and user roles
    },
    "isAdmin":{
        type:Boolean,
        default:false
    },
    "registered_on":{
        type:Date,
        default:Date.now()
    }
},
{strict:true}
); 
const UserModel= mongoose.model("User", UserSchema)//UserModel is the collection name in mongoDB
module.exports = UserModel; //exporting the model