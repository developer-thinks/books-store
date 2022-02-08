const router = require('express').Router()
const StoresSchema = require('../models/Stores')

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


module.exports = router