const express = require("express") ;
const List = require("../models/list.model") ;
const router = express.Router() ;

// Get data from server
router.get("" , async(req,res) => {
    try{
         const listData = await List.find().lean().exec() ;
         return res.send(listData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

// Get data by id
router.get("/:id" , async(req,res) => {
    try{
        const listData = await List.findById(req.params.id).lean().exec() ;
        return res.send(listData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})


// Post data to server
router.post("" , async(req,res) => {
    try{
        const listData = await List.create(req.body) ;
        return res.send(listData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

// Delete perticular id data
router.delete("/:id" , async(req,res) => {
    try{
        const listData = await List.findByIdAndDelete(req.params.id).lean().exec() ;
        return res.send(listData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
})

module.exports = router ;