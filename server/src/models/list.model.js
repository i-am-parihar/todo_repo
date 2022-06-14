const mongoose = require("mongoose") ;

// Schema of To-do list
const listSchema = new mongoose.Schema(
    {
        task:{type:String , required:true} 
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = mongoose.model("list" , listSchema) ;