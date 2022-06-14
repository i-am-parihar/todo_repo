const express = require("express") ;
const connect = require("./configs/db") ;
const todolist = require("./controllers/list.controller") ;
const app = express() ;

app.use(express.json()) ;
app.use("/todolist" , todolist) ;


// connect to mongoose server
app.listen(2345 , async() => {
    try{
        await connect()
        console.log("Listening on port 2345") ;
    }
    catch(er){
        console.log(er) ;
    }
})