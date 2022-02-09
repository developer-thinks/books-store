const mongoose = require('mongoose')

const BooksSchema = new  mongoose.Schema({
    bookName : {
        type : String,
        required : true,
    },
    shopName : {
        type : String,
        required : true
    },
    bookId : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("BooksSchema", BooksSchema);