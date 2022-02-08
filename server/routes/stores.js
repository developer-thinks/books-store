const router = require('express').Router()
const mongoose = require('mongoose')
const StoresSchema = require('../models/Stores')
// const StoresSchema = mongoose.model("StoresSchema")

router.post('/register', async(req,res)=>{
    const newStore = new StoresSchema({
        storeName : req.body.storeName,
        city : req.body.city,
        email : req.body.email
    })
    const store = await newStore.save()
    if(store){
        res.status(200).json(store)
    }
})

router.get('/getallshops', async(req,res)=>{
    StoresSchema.find()
    .then(shops=>{
        // console.log(shops);
        res.json({shops})
    })
    
    // res.json(allstores)
})

module.exports = router