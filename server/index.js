const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors())
require('dotenv').config()

const store = require('./routes/stores')
app.use('/api/', store)

mongoose.connect(process.env.MONGO_URL,console.log("db connected!"))

app.listen(5000, console.log("server started"))