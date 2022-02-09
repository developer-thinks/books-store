const router = require('express').Router()
const mongoose = require('mongoose')
const StoresSchema = require('../models/Stores')
const BooksSchema = require('../models/Books')


router.post('/login', async(req,res)=>{
    StoresSchema.findOne({storeName : req.body.storeName})
    .then(savedstore=>{
        if(!savedstore){
            return res.json({error : "shop not found"})
        }
        const storeCode = savedstore.secureCode
        if(storeCode == req.body.secureCode)
            return res.json({message : "logged in"})            
    })
})

module.exports  = router