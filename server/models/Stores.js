const mongoose = require('mongoose')

const StoresSchema = new  mongoose.Schema({
    storeName : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("StoresSchema", StoresSchema);