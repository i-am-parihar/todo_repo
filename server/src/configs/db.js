const mongoose = require("mongoose") ;

module.exports = () => {
    return mongoose.connect("mongodb+srv://todolist:todolist@cluster0.sbuzk.mongodb.net/paritoshproject")
}