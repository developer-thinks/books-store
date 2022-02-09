const router = require('express').Router()
const mongoose = require('mongoose')
const StoresSchema = require('../models/Stores')
const BooksSchema = require('../models/Books')
// const StoresSchema = mongoose.model("StoresSchema")

router.post('/register', async(req,res)=>{
    const newStore = new StoresSchema({
        storeName : req.body.storeName,
        secureCode : req.body.secureCode,
        city : req.body.city
    })
    const store = await newStore.save()
    if(store){
        res.status(200).json(store)
    }
})

router.post('/newbook', async(req,res)=>{
    const newBook = new BooksSchema({
        bookName : req.body.bookName,
        shopName : req.body.shopName,
        bookId : req.body.bookId
    })
    const book = await newBook.save()
    if(book)
        res.status(200).json(book)
})


router.get('/allbooks', async(req,res)=>{
    BooksSchema.find()
    .then(books=>{
        res.json({books})
    })
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